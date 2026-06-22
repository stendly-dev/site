import * as Sentry from '@sentry/nextjs';
import posthog from 'posthog-js/dist/module.full.no-external';

const release = process.env.NEXT_PUBLIC_RELEASE || process.env.NEXT_PUBLIC_GIT_SHA;
const environment = process.env.NEXT_PUBLIC_APP_ENV || process.env.NODE_ENV;

Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    enabled: Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN),
    environment, release, sendDefaultPii: false,
    tracesSampleRate: Number(process.env.NEXT_PUBLIC_SENTRY_TRACES_SAMPLE_RATE || '0.1'),
    integrations: [Sentry.replayIntegration({maskAllText: true, maskAllInputs: true, blockAllMedia: true})],
    replaysSessionSampleRate: Number(process.env.NEXT_PUBLIC_SENTRY_REPLAY_SAMPLE_RATE || '0.02'),
    replaysOnErrorSampleRate: Number(process.env.NEXT_PUBLIC_SENTRY_REPLAY_ERROR_SAMPLE_RATE || '1'),
    beforeSend(event) {
        if (event.request) {
            delete event.request.cookies;
            delete event.request.data;
            delete event.request.headers;
        }
        event.tags = {...event.tags, app: 'site'};
        return event;
    },
});

if (process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || '/x7r',
        ui_host: 'https://us.posthog.com',
        defaults: '2026-05-30',
        disable_external_dependency_loading: true,
        capture_pageview: 'history_change',
        capture_pageleave: true,
        autocapture: false,
        rageclick: false,
        capture_dead_clicks: false,
        capture_heatmaps: true,
        capture_performance: {network_timing: true, web_vitals: true},
        capture_exceptions: true,
        person_profiles: 'identified_only',
        session_recording: {
            sampleRate: 1,
            maskAllInputs: true,
            maskTextSelector: '*',
            blockSelector: '[data-analytics-sensitive], [data-analytics-block]',
            recordBody: false,
            recordHeaders: false,
            strictMinimumDuration: true,
        },
        enable_recording_console_log: false,
        mask_all_text: true,
        mask_all_element_attributes: true,
        mask_personal_data_properties: true,
        custom_personal_data_properties: ['email', 'identifier', 'invoice', 'address', 'token', 'code'],
        property_denylist: ['email', 'identifier', 'otp', 'pin', 'private_key', 'api_key', 'authorization', 'address', 'signature'],
        save_campaign_params: true,
        save_referrer: true,
        loaded(instance) {
            instance.register({app: 'site', environment, release, event_schema_version: 2});
            instance.startSessionRecording(true);
        },
        logs: {
            captureConsoleLogs: false,
            serviceName: 'stendly-site',
            environment,
            serviceVersion: release,
            maxBufferSize: 50,
            maxLogsPerInterval: 200,
        },
        before_send(event) {
            if (!event) return null;
            for (const key of Object.keys(event.properties)) {
                if (/(email|otp|pin|private|secret|api[_-]?key|authorization|address|signature)$/i.test(key)) {
                    delete event.properties[key];
                }
            }
            for (const key of ['$current_url', '$pathname', '$referrer']) {
                const value = event.properties[key];
                if (typeof value === 'string') {
                    try {
                        const url = new URL(value, window.location.origin);
                        event.properties[key] = `${url.origin}${url.pathname}`;
                    } catch {
                        delete event.properties[key];
                    }
                }
            }
            return event;
        },
    });
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
