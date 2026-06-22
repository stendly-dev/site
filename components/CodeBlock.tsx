'use client';

import {useState} from 'react';
import {captureSiteEvent} from '@/lib/analytics';

const codeSnippets: Record<string, string> = {
    node: `<span class="text-text-main">import</span> { StendlyClient } <span class="text-text-main">from</span> <span class="text-text-muted">'@stendly/sdk'</span>;

<span class="text-text-main">const</span> client = <span class="text-text-main">new</span> StendlyClient({
  apiKey: <span class="text-text-muted">'st_live_...'</span>,
});

<span class="text-text-main">const</span> intent = <span class="text-text-main">await</span> client.intents.create(
  <span class="text-success">2500</span>,
  <span class="text-text-muted">'order_123'</span>,
);`,
    python: `<span class="text-text-main">from</span> stendly <span class="text-text-main">import</span> Client

client = Client(api_key=<span class="text-text-muted">"st_live_..."</span>)

intent = client.intents.create(
    amount_cents=<span class="text-success">2500</span>,
    order_id=<span class="text-text-muted">"order_123"</span>,
)`,
    dotnet: `<span class="text-text-main">using</span> Stendly;

<span class="text-text-main">var</span> client = <span class="text-text-main">new</span> StendlyClient(<span class="text-text-main">new</span> HttpClient(), <span class="text-text-muted">"st_live_..."</span>);

<span class="text-text-main">var</span> intent = <span class="text-text-main">await</span> client.Intents.CreateIntentAsync(
    <span class="text-success">2500</span>,
    <span class="text-text-muted">"order_123"</span>
);`,
    curl: `<span class="text-text-main">curl</span> -X POST https://api.stendly.com/api/merchants/intents \\
  -H <span class="text-success">"Authorization: Bearer st_live_..."</span> \\
  -H <span class="text-success">"Content-Type: application/json"</span> \\
  -d <span class="text-text-muted">'{"amountCents": 2500, "orderId": "order_123"}'</span>`,
};

const rawSnippets: Record<string, string> = {
    node: `import { StendlyClient } from '@stendly/sdk';\nconst client = new StendlyClient({ apiKey: 'st_live_...' });\nconst intent = await client.intents.create(2500, 'order_123');`,
    python: `from stendly import Client\nclient = Client(api_key="st_live_...")\nintent = client.intents.create(amount_cents=2500, order_id="order_123")`,
    dotnet: `using Stendly;\nvar client = new StendlyClient(new HttpClient(), "st_live_...");\nvar intent = await client.Intents.CreateIntentAsync(2500, "order_123");`,
    curl: `curl -X POST https://api.stendly.com/api/merchants/intents -H "Authorization: Bearer st_live_..." -H "Content-Type: application/json" -d '{"amountCents": 2500, "orderId": "order_123"}'`,
};

const langLabels: Record<string, string> = {
    node: 'Node.js',
    python: 'Python',
    dotnet: '.NET',
    curl: 'cURL',
};

export default function CodeBlock() {
    const [currentLang, setCurrentLang] = useState('node');

    const handleSwitch = (lang: string) => {
        setCurrentLang(lang);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(rawSnippets[currentLang]);
        captureSiteEvent('copy_code_click', {language: currentLang, section: 'homepage_example'});
        const icon = document.getElementById('copy-icon');
        const text = document.getElementById('copy-text');
        if (icon) icon.innerText = 'check';
        if (text) text.innerText = 'Copied';
        setTimeout(() => {
            if (icon) icon.innerText = 'content_copy';
            if (text) text.innerText = 'Copy';
        }, 2000);
    };

    return (
        <div className="flex flex-col gap-6 flex-1 w-full reveal reveal-right">
            <div
                className="bg-bg-elevated border border-border-subtle rounded-2xl overflow-hidden font-mono text-sm shadow-2xl">
                <div
                    className="flex items-center justify-between px-4 py-3 bg-bg-secondary border-b border-border-subtle">
                    <div className="flex gap-4">
                        {Object.entries(langLabels).map(([lang, label]) => (
                            <button
                                key={lang}
                                className={`font-medium ${currentLang === lang ? 'text-text-main font-bold' : 'text-text-muted hover:text-text-main'}`}
                                onClick={() => handleSwitch(lang)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                    <button className="text-text-muted hover:text-text-main flex items-center gap-1 transition-colors"
                            onClick={handleCopy}>
                        <span className="material-symbols-outlined text-[16px]" id="copy-icon">content_copy</span>
                        <span className="hidden sm:inline" id="copy-text">Copy</span>
                    </button>
                </div>
                <div className="p-4 md:p-6 overflow-x-auto min-h-55 flex items-start">
                    <pre className="text-text-muted leading-relaxed w-full text-xs md:text-sm"
                         dangerouslySetInnerHTML={{__html: codeSnippets[currentLang]}}/>
                </div>
            </div>

            <ResponseBlock/>
        </div>
    );
}

function ResponseBlock() {
    const responseText = `{\n  "id": "intent_123",\n  "status": "pending"\n}`;
    const [displayed, setDisplayed] = useState('');
    const [triggered, setTriggered] = useState(false);

    const handleRef = (el: HTMLDivElement | null) => {
        if (!el || triggered) return;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTriggered(true);
                let i = 0;
                const interval = setInterval(() => {
                    if (i < responseText.length) {
                        setDisplayed(responseText.slice(0, i + 1));
                        i++;
                    } else {
                        clearInterval(interval);
                    }
                }, 30);
                observer.disconnect();
            }
        }, {threshold: 0.5});
        observer.observe(el);
    };

    const highlight = (text: string) => {
        return text
            .replace(/"id"/g, '<span class="text-text-main">"id"</span>')
            .replace(/"status"/g, '<span class="text-text-main">"status"</span>')
            .replace(/"intent_123"/g, '<span class="text-success">"intent_123"</span>')
            .replace(/"pending"/g, '<span class="text-success">"pending"</span>');
    };

    return (
        <div
            className="bg-bg-elevated border border-border-subtle rounded-2xl overflow-hidden font-mono text-sm shadow-2xl"
            ref={handleRef}>
            <div className="flex justify-between items-center px-4 py-3 bg-bg-secondary border-b border-border-subtle">
                <span className="text-success font-bold">200 OK</span>
                <span className="text-text-muted">Response</span>
            </div>
            <div className="p-4 md:p-6 overflow-x-auto min-h-35 flex items-start">
                <pre className="text-text-muted leading-relaxed w-full text-xs md:text-sm"
                     dangerouslySetInnerHTML={{__html: highlight(displayed)}}/>
            </div>
        </div>
    );
}
