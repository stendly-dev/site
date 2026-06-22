const [baseUrl, source, campaign, content = 'main_link'] = process.argv.slice(2);
const allowedSources = new Set(['dtf', 'habr', 'vc', 'telegram', 'reddit', 'hackernews']);
const allowedContents = new Set(['main_link', 'web_app_link', 'docs_link', 'b2b_link']);

if (!baseUrl || !source || !campaign) {
    throw new Error('Usage: npm run utm:link -- <url> <dtf|habr|vc|telegram|reddit|hackernews> <campaign> [content]');
}
if (!allowedSources.has(source)) throw new Error(`Unsupported source: ${source}`);
if (!/^[a-z0-9_-]{3,80}$/.test(campaign)) throw new Error('Campaign must be a stable lowercase slug.');
if (!allowedContents.has(content)) throw new Error(`Unsupported content: ${content}`);

const url = new URL(baseUrl);
url.searchParams.set('utm_source', source);
url.searchParams.set('utm_medium', 'article');
url.searchParams.set('utm_campaign', campaign);
url.searchParams.set('utm_content', content);
console.log(url.toString());

