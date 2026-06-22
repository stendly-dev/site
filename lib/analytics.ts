'use client';

import posthog from 'posthog-js/dist/module.full.no-external';
import * as Sentry from '@sentry/nextjs';

export type SiteEvent =
    | 'article_view' | 'blog_article_view' | 'cta_click' | 'open_web_app_click' | 'web_app_click'
    | 'open_dashboard_click' | 'open_docs_click' | 'open_openapi_click'
    | 'dashboard_click' | 'docs_click' | 'openapi_click' | 'sdk_link_click'
    | 'merchant_docs_click' | 'merchant_signup_started'
    | 'external_article_referrer' | 'pricing_or_fees_view'
    | 'compare_page_view' | 'design_partner_click' | 'copy_code_click'
    | 'frontend_error' | 'analytics_script_blocked';

type AnalyticsProperties = Record<string, string | number | boolean | null | undefined>;
const forbiddenProperty = /(email|otp|pin|private|secret|api[_-]?key|authorization|address|signature)$/i;

function safeProperties(properties: AnalyticsProperties = {}): AnalyticsProperties {
    return Object.fromEntries(Object.entries(properties).flatMap(([key, value]) => {
        if (forbiddenProperty.test(key) || value == null) return [];
        if (['number', 'boolean'].includes(typeof value)) return [[key, value]];
        if (typeof value !== 'string' || !value.trim() || value.length > 256) return [];
        if (/(url|path|referrer)$/i.test(key)) {
            const sanitized = safeUrl(value);
            return sanitized ? [[key, sanitized]] : [];
        }
        return [[key, value]];
    }));
}

function safeUrl(value: string): string | null {
    if (!value) return null;
    try {
        const url = new URL(value, window.location.origin);
        return `${url.origin}${url.pathname}`;
    } catch {
        return null;
    }
}

function safeCampaignValue(value: string | null): string | null {
    const normalized = value?.trim().toLowerCase();
    return normalized && /^[a-z0-9][a-z0-9._-]{0,63}$/.test(normalized) ? normalized : null;
}

export function getAcquisitionProperties(): AnalyticsProperties {
    if (typeof window === 'undefined') return {};
    const params = new URLSearchParams(window.location.search);
    const referrer = safeUrl(document.referrer);
    const referrerDomain = (() => {
        try {
            return document.referrer ? new URL(document.referrer).hostname.slice(0, 128) : null;
        } catch {
            return null;
        }
    })();
    const source = safeCampaignValue(params.get('utm_source'));
    const knownSources = new Set(['dtf', 'habr', 'vc', 'telegram', 'google', 'yandex', 'bing', 'reddit', 'hackernews']);
    const sourcePlatform = source && knownSources.has(source) ? source :
        (referrer?.includes('google.') ? 'google' : referrer?.includes('yandex.') ? 'yandex' :
            referrer?.includes('bing.') ? 'bing' : referrer?.includes('reddit.') ? 'reddit' :
                referrer?.includes('news.ycombinator.') ? 'hackernews' : 'direct');
    return {
        page_path: window.location.pathname, page_title: document.title.slice(0, 256), referrer,
        referrer_domain: referrerDomain,
        utm_source: source, utm_medium: safeCampaignValue(params.get('utm_medium')),
        utm_campaign: safeCampaignValue(params.get('utm_campaign')),
        utm_content: safeCampaignValue(params.get('utm_content')),
        utm_term: safeCampaignValue(params.get('utm_term')),
        has_google_click_id: params.has('gclid'),
        has_meta_click_id: params.has('fbclid'),
        has_yandex_click_id: params.has('yclid') || params.has('ymclid'),
        source_platform: sourcePlatform,
    };
}

export function captureSiteEvent(event: SiteEvent, properties: AnalyticsProperties = {}): void {
    if (typeof window === 'undefined') return;
    try {
        posthog.capture(event, safeProperties({
            event_schema_version: 2,
            app: 'site',
            environment: process.env.NEXT_PUBLIC_APP_ENV || process.env.NODE_ENV,
            release: process.env.NEXT_PUBLIC_RELEASE || process.env.NEXT_PUBLIC_GIT_SHA,
            ...getAcquisitionProperties(),
            ...properties,
        }));
    } catch (error) {
        Sentry.captureException(error, {tags: {app: 'site', operation: 'analytics.capture'}});
    }
}

export function captureSiteError(error: unknown, context: AnalyticsProperties = {}): void {
    const safeContext = safeProperties(context);
    Sentry.captureException(error, {tags: {app: 'site'}, extra: safeContext});
    posthog.captureException(error, {app: 'site', ...safeContext});
    posthog.logger.error('site operation failed', {app: 'site', ...safeContext});
    captureSiteEvent('frontend_error', safeContext);
}
