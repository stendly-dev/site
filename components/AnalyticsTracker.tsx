'use client';

import {usePathname, useSearchParams} from 'next/navigation';
import {useEffect} from 'react';
import {captureSiteEvent} from '@/lib/analytics';

export default function AnalyticsTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const locale = pathname.startsWith('/ru-ru/') ? 'ru-ru' : 'en-us';
        if (pathname.includes('/compare/')) captureSiteEvent('compare_page_view', {page_path: pathname, locale});
        if (pathname.includes('/pricing') || pathname.includes('/fees')) {
            captureSiteEvent('pricing_or_fees_view', {page_path: pathname, locale});
        }
    }, [pathname, searchParams]);

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            const anchor = (event.target as Element | null)?.closest('a');
            if (!anchor) return;
            const href = anchor.href;
            if (href.includes('app.stendly.com/b2b')) {
                captureSiteEvent('open_dashboard_click', {target_path: href});
                captureSiteEvent('dashboard_click', {target_path: href});
                captureSiteEvent('merchant_signup_started', {target_path: href});
            } else if (href.includes('app.stendly.com')) {
                captureSiteEvent('open_web_app_click', {target_path: href});
                captureSiteEvent('web_app_click', {target_path: href});
            } else if (href.includes('/docs/')) {
                captureSiteEvent('open_docs_click', {target_path: href});
                captureSiteEvent('docs_click', {target_path: href});
                if (window.location.pathname.includes('/b2b')) captureSiteEvent('merchant_docs_click', {target_path: href});
            } else if (/\/openapi\.(json|ya?ml)/.test(href)) {
                captureSiteEvent('open_openapi_click', {target_path: href});
                captureSiteEvent('openapi_click', {target_path: href});
            }
            else if (/pypi\.org|npmjs\.com|nuget\.org/.test(href)) captureSiteEvent('sdk_link_click', {target_path: href});
            else if (anchor.closest('[data-analytics-cta]')) captureSiteEvent('cta_click', {target_path: href});
        };
        document.addEventListener('click', handler);
        return () => document.removeEventListener('click', handler);
    }, []);

    return null;
}
