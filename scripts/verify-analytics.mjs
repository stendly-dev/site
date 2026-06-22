const projectToken = process.env.POSTHOG_PROJECT_TOKEN?.trim();
const proxyHosts = (process.env.SITE_POSTHOG_HOSTS ||
    process.env.SITE_POSTHOG_HOST ||
    'https://stendly.com/x7r,https://app.stendly.com/x7r,https://app-devnet.stendly.com/x7r')
    .split(',')
    .map(host => host.trim().replace(/\/+$/, ''))
    .filter(Boolean);
const release = process.env.GIT_SHA?.trim() || 'unknown';

if (!projectToken || !projectToken.startsWith('phc_')) {
    console.error('POSTHOG_PROJECT_TOKEN is missing or invalid.');
    process.exit(1);
}

async function requireOk(response, label) {
    if (response.ok) return response;
    const body = (await response.text()).slice(0, 500);
    throw new Error(`${label} failed with HTTP ${response.status}: ${body}`);
}

async function withRetry(operation, label) {
    let lastError;
    for (let attempt = 1; attempt <= 6; attempt += 1) {
        try {
            return await operation();
        } catch (error) {
            lastError = error;
            if (attempt < 6) await new Promise((resolve) => setTimeout(resolve, attempt * 2_000));
        }
    }
    throw new Error(`${label} failed after 6 attempts`, {cause: lastError});
}

for (const proxyHost of proxyHosts) {
    const configUrl = `${proxyHost}/array/${encodeURIComponent(projectToken)}/config.js`;
    await withRetry(async () => requireOk(await fetch(configUrl, {
        headers: {'User-Agent': 'Stendly-Analytics-Deployment-Verification/2.0'},
        signal: AbortSignal.timeout(15_000),
    }), `PostHog remote config through ${proxyHost}`), `PostHog remote config through ${proxyHost}`);

    const verificationId = `stendly-deploy-${new URL(proxyHost).host}-${release}-${Date.now()}`;
    const captureUrl = `${proxyHost}/i/v0/e/`;
    const captureResponse = await withRetry(async () => requireOk(await fetch(captureUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Stendly-Analytics-Deployment-Verification/2.0',
        },
        body: JSON.stringify({
            api_key: projectToken,
            event: 'analytics_proxy_verified',
            distinct_id: verificationId,
            properties: {
                $process_person_profile: false,
                app: 'deployment_verifier',
                environment: 'production',
                release,
                event_schema_version: 2,
                verification_id: verificationId,
                proxy_host: new URL(proxyHost).host,
            },
            timestamp: new Date().toISOString(),
        }),
        signal: AbortSignal.timeout(15_000),
    }), `PostHog event capture through ${proxyHost}`), `PostHog event capture through ${proxyHost}`);

    const responseText = await captureResponse.text();
    if (!/"status"\s*:\s*"Ok"/i.test(responseText)) {
        throw new Error(`PostHog event capture returned an unexpected response: ${responseText.slice(0, 500)}`);
    }

    console.log(`PostHog proxy verification passed for ${proxyHost}: ${verificationId}`);
}
