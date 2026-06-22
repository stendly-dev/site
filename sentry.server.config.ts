import * as Sentry from '@sentry/nextjs';

Sentry.init({
    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,
    enabled: Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN),
    environment: process.env.APP_ENV || process.env.NODE_ENV,
    release: process.env.SENTRY_RELEASE || process.env.GIT_SHA,
    sendDefaultPii: false,
    tracesSampleRate: Number(process.env.SENTRY_TRACES_SAMPLE_RATE || '0.1'),
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

