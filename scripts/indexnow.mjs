// import fs from 'node:fs';
// import path from 'node:path';

// const mode = process.argv[2] || 'prepare';
// const key = process.env.INDEXNOW_KEY?.trim();
// const siteHost = (process.env.INDEXNOW_HOST || 'stendly.com').trim();
// const endpoint = process.env.INDEXNOW_ENDPOINT || 'https://api.indexnow.org/indexnow';

// if (!key) {
//     const message = 'INDEXNOW_KEY is not configured; IndexNow preparation/submission skipped.';
//     if (process.env.INDEXNOW_REQUIRED === 'true') throw new Error(message);
//     console.warn(message);
//     process.exit(0);
// }

// if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) throw new Error('INDEXNOW_KEY must be 8-128 URL-safe characters.');

// const publicDir = path.resolve('public');
// const keyFile = path.join(publicDir, `${key}.txt`);

// if (mode === 'prepare') {
//     fs.mkdirSync(publicDir, {recursive: true});
//     fs.writeFileSync(keyFile, key, 'utf8');
//     console.log(`Prepared IndexNow key file: /${key}.txt`);
//     process.exit(0);
// }

// if (mode !== 'submit') throw new Error(`Unknown IndexNow mode: ${mode}`);

// const sitemap = process.env.INDEXNOW_SITEMAP_PATH
//     ? fs.readFileSync(path.resolve(process.env.INDEXNOW_SITEMAP_PATH), 'utf8')
//     : await fetch(`https://${siteHost}/sitemap.xml`).then(async response => {
//         if (!response.ok) throw new Error(`Cannot fetch deployed sitemap: ${response.status}`);
//         return response.text();
//     });
// const urls = [...sitemap.matchAll(/<loc>(https:\/\/stendly\.com\/(?:en-us|ru-ru)\/blog\/[^<]+)<\/loc>/g)]
//     .map(match => match[1])
//     .slice(0, 10_000);
// if (urls.length === 0) throw new Error('No blog URLs found in sitemap.');

// const response = await fetch(endpoint, {
//     method: 'POST',
//     headers: {'Content-Type': 'application/json; charset=utf-8'},
//     body: JSON.stringify({
//         host: siteHost,
//         key,
//         keyLocation: `https://${siteHost}/${key}.txt`,
//         urlList: urls,
//     }),
// });

// if (!response.ok) throw new Error(`IndexNow returned ${response.status}: ${await response.text()}`);
// console.log(`Submitted ${urls.length} blog URLs to IndexNow.`);
