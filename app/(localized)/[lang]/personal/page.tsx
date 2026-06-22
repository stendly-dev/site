import {getJsonLd, Lang} from '@/lib/i18n';
import PersonalView from '@/components/PersonalView';

export function generateStaticParams() {
    return [{lang: 'en-us'}, {lang: 'ru-ru'}];
}

export async function generateMetadata({params}: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Lang;
    const isRu = lang === 'ru-ru';

    return {
        metadataBase: new URL('https://stendly.com'),
        title: isRu
            ? 'Stendly | Криптокошелёк для мгновенных USDC платежей'
            : 'Stendly | Crypto Wallet for Instant USDC Payments',
        description: isRu
            ? 'Отправляйте и получайте USDC платежи мгновенно. Некастодиальный кошелёк на Solana с нулевыми комиссиями сети. Без сид-фраз, только PIN-код.'
            : 'Send and receive USDC payments instantly. Non-custodial wallet on Solana with zero network fees. No seed phrases, just a PIN code.',
        keywords: isRu
            ? [
                'криптокошелёк',
                'usdc кошелёк',
                'solana кошелёк',
                'крипто платежи',
                'некастодиальный кошелёк',
                'p2p платежи',
                'цифровой кошелёк',
            ]
            : [
                'crypto wallet',
                'usdc wallet',
                'solana wallet',
                'crypto payments',
                'non-custodial wallet',
                'p2p payments',
                'digital wallet',
            ],
        alternates: {
            canonical: `https://stendly.com/${lang}/personal/`,
            languages: {
                'en': 'https://stendly.com/',
                'en-US': 'https://stendly.com/',
                'ru': `https://stendly.com/${lang}/personal/`,
                'ru-RU': `https://stendly.com/${lang}/personal/`,
                'x-default': 'https://stendly.com/',
            },
        },
        openGraph: {
            title: isRu
                ? 'Stendly | Криптокошелёк для мгновенных USDC платежей'
                : 'Stendly | Crypto Wallet for Instant USDC Payments',
            description: isRu
                ? 'Отправляйте и получайте USDC мгновенно. Некастодиальный кошелёк на Solana.'
                : 'Send and receive USDC instantly. Non-custodial wallet on Solana.',
            url: `/${lang}/personal/`,
        },
    };
}

export default async function PersonalPage({params}: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Lang;
    const jsonLd = getJsonLd(lang, 'personal');

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: jsonLd}}
            />
            <PersonalView lang={lang}/>
        </>
    );
}
