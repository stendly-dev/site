import {getJsonLd, Lang} from '@/lib/i18n';
import BusinessView from '@/components/BusinessView';

export function generateStaticParams() {
    return [{lang: 'en-us'}, {lang: 'ru-ru'}];
}

export async function generateMetadata({params}: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Lang;
    const isRu = lang === 'ru-ru';

    return {
        metadataBase: new URL('https://stendly.com'),
        title: isRu
            ? 'Stendly | Платёжный шлюз для бизнеса — 0% комиссии'
            : 'Stendly | Business Payment Gateway — 0% Merchant Fees',
        description: isRu
            ? 'Принимайте USDC платежи с нулевой комиссией для мерчантов. Мгновенные расчёты на Solana. Без чарджбеков. Интеграция за 5 минут через API. SDK для Python, Node.js, .NET.'
            : 'Accept USDC payments with zero merchant fees. Instant settlement on Solana. No chargebacks. Integrate in 5 minutes via API. SDKs for Python, Node.js, and .NET.',
        keywords: isRu
            ? [
                'платёжный шлюз',
                'крипто платежи для бизнеса',
                'usdc платёжный шлюз',
                'приём криптовалют',
                'solana платёжный шлюз',
                '0% комиссия',
                'крипто эквайринг',
                'api платежи',
                'sdk python',
                'sdk nodejs',
                'sdk dotnet',
            ]
            : [
                'payment gateway',
                'crypto payments for business',
                'usdc payment gateway',
                'accept cryptocurrency',
                'solana payment gateway',
                'zero merchant fees',
                'api payments',
                'payment sdk python',
                'payment sdk nodejs',
                'payment sdk dotnet',
                'stripe alternative',
            ],
        alternates: {
            canonical: `https://stendly.com/${lang}/b2b/`,
            languages: {
                'en': 'https://stendly.com/en-us/b2b/',
                'en-US': 'https://stendly.com/en-us/b2b/',
                'ru': 'https://stendly.com/ru-ru/b2b/',
                'ru-RU': 'https://stendly.com/ru-ru/b2b/',
                'x-default': 'https://stendly.com/en-us/b2b/',
            },
        },
        openGraph: {
            title: isRu
                ? 'Stendly | Платёжный шлюз для бизнеса — 0% комиссии'
                : 'Stendly | Business Payment Gateway — 0% Merchant Fees',
            description: isRu
                ? 'Принимайте USDC с нулевой комиссией. Мгновенные расчёты на Solana. SDK для Python, Node.js, .NET.'
                : 'Accept USDC with zero merchant fees. Instant settlement on Solana. SDKs for Python, Node.js, .NET.',
            url: `/${lang}/b2b/`,
        },
    };
}

export default async function B2BPage({params}: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Lang;
    const jsonLd = getJsonLd(lang, 'b2b');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: jsonLd}}
            />
            <BusinessView lang={lang}/>
        </>
    );
}
