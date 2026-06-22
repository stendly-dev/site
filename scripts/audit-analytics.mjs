import {readFile} from 'node:fs/promises';
import {resolve} from 'node:path';

const root = resolve(import.meta.dirname, '..');

async function read(path) {
    return readFile(resolve(root, path), 'utf8');
}

const files = {
    siteInstrumentation: await read('instrumentation-client.ts'),
    siteAnalytics: await read('lib/analytics.ts'),
    webInstrumentation: await read('../web/instrumentation-client.ts'),
    webAnalytics: await read('../web/lib/analytics.ts'),
    docsAnalytics: await read('../docs/src/analytics.ts'),
    backendAnalytics: await read('../../backend/src/Stendly.Shared/Analytics/PostHogProductAnalytics.cs'),
    merchantService: await read('../../backend/src/Modules/Stendly.Module.Merchants/Services/MerchantService.cs'),
    compose: await read('../../docker-compose.yml'),
    nginx: await read('../../docker/nginx/nginx.conf'),
};

const failures = [];

function requireMatch(name, text, pattern, message) {
    if (!pattern.test(text)) failures.push(`${name}: ${message}`);
}

for (const [name, text] of Object.entries({
    site: files.siteInstrumentation,
    web: files.webInstrumentation,
    docs: files.docsAnalytics,
})) {
    requireMatch(name, text, /defaults:\s*'2026-05-30'/, 'latest SDK defaults are not enabled');
    requireMatch(name, text, /posthog-js\/dist\/module\.full\.no-external/, 'PostHog extensions are not bundled locally');
    requireMatch(name, text, /disable_external_dependency_loading:\s*true/, 'dynamic PostHog script loading is enabled');
    requireMatch(name, text, /capture_pageview:\s*'history_change'/, 'standard web analytics pageviews are disabled');
    requireMatch(name, text, /capture_pageleave:\s*true/, 'pageleave analytics are disabled');
    requireMatch(name, text, /autocapture:\s*false/, 'interaction autocapture is enabled');
    requireMatch(name, text, /rageclick:\s*false/, 'rage-click events are enabled');
    requireMatch(name, text, /capture_heatmaps:\s*true/, 'heatmaps are disabled');
    requireMatch(name, text, /capture_dead_clicks:\s*false/, 'dead-click events are enabled');
    requireMatch(name, text, /capture_performance:\s*\{[^}]*web_vitals:\s*true/s, 'web vitals are disabled');
    requireMatch(name, text, /capture_exceptions:\s*true/, 'PostHog error tracking is disabled');
    requireMatch(name, text, /sampleRate:\s*1/, 'full session replay sampling is not enabled');
    requireMatch(name, text, /maskAllInputs:\s*true/, 'session replay input masking is disabled');
    requireMatch(name, text, /maskTextSelector:\s*'\*'/, 'session replay text masking is disabled');
    requireMatch(name, text, /recordBody:\s*false/, 'session replay may capture network bodies');
    requireMatch(name, text, /recordHeaders:\s*false/, 'session replay may capture network headers');
    requireMatch(name, text, /startSessionRecording\(true\)/, 'session replay is not force-started');
    requireMatch(name, text, /mask_personal_data_properties:\s*true/, 'URL personal-data masking is disabled');
    requireMatch(name, text, /captureConsoleLogs:\s*false/, 'raw console forwarding must stay disabled');
}

requireMatch('web analytics', files.webAnalytics, /event_schema_version:\s*2/, 'event schema version is missing');
requireMatch('web analytics', files.webAnalytics, /amount_cents:\s*amountCents/, 'exact transaction amounts are missing');
requireMatch('web analytics', files.webAnalytics, /posthog\.logger\.error/, 'structured PostHog logs are missing');
requireMatch('web analytics', files.webAnalytics, /posthog\.captureException\(error/, 'caught exceptions are not sent to PostHog Error Tracking');
requireMatch('site analytics', files.siteAnalytics, /event_schema_version:\s*2/, 'event schema version is missing');
requireMatch('site analytics', files.siteAnalytics, /posthog\.captureException\(error/, 'caught exceptions are not sent to PostHog Error Tracking');
requireMatch('backend analytics', files.backendAnalytics, /\["event_schema_version"\]\s*=\s*2/, 'event schema version is missing');
requireMatch('backend analytics', files.backendAnalytics, /\["\$groups"\]/, 'merchant group analytics are missing');
requireMatch('merchant revenue', files.merchantService, /\["revenue"\]\s*=\s*intent\.PaidAmountCents/, 'revenue property is missing');
requireMatch('merchant revenue', files.merchantService, /\["currency"\]\s*=\s*"USD"/, 'ISO currency is missing');
requireMatch('merchant revenue', files.merchantService, /\["payment_intent_id"\]\s*=\s*AnalyticsIdentifiers\.Hash/, 'safe payment correlation ID is missing');
requireMatch('merchant revenue', files.merchantService, /\["\$insert_id"\]/, 'event deduplication ID is missing');
requireMatch('compose', files.compose, /https:\/\/app\.stendly\.com\/x7r/, 'mainnet web does not use the first-party proxy');
requireMatch('compose', files.compose, /https:\/\/app-devnet\.stendly\.com\/x7r/, 'devnet web does not use the first-party proxy');
requireMatch('compose', files.compose, /DOCS_POSTHOG_HOST:\s*https:\/\/stendly\.com\/x7r/, 'docs do not use the first-party proxy');
requireMatch('nginx', files.nginx, /server_name app\.stendly\.com;[\s\S]*?location \^~ \/x7r\//, 'mainnet proxy route is missing');
requireMatch('nginx', files.nginx, /server_name app-devnet\.stendly\.com;[\s\S]*?location \^~ \/x7r\//, 'devnet proxy route is missing');

for (const [name, path] of [
    ['web tracker', '../web/components/AnalyticsTracker.tsx'],
    ['site tracker', 'components/AnalyticsTracker.tsx'],
]) {
    const text = await read(path);
    if (/capture(?:Product|Site)Event\(\s*['"]page_view['"]/.test(text)) {
        failures.push(`${name}: custom page_view event is still captured`);
    }
}

for (const [name, text] of Object.entries(files)) {
    if (/Bearer\s+[A-Za-z0-9._-]{20,}/.test(text) || /phc_[A-Za-z0-9]{20,}/.test(text)) {
        failures.push(`${name}: embedded credential detected`);
    }
}

if (failures.length) {
    console.error(`Analytics audit failed (${failures.length}):`);
    for (const failure of failures) console.error(`- ${failure}`);
    process.exit(1);
}

console.log('Analytics audit passed: web analytics, replay, heatmaps, logs, privacy, groups, and revenue metadata verified.');
