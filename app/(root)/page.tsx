import PersonalView from '@/components/PersonalView';
import {RootLanguageRedirect} from '@/components/LanguageRedirect';
import {getJsonLd} from '@/lib/i18n';

export const metadata = {
    metadataBase: new URL('https://stendly.com'),
    title: 'Stendly — Crypto Wallet & Payment Gateway on Solana',
    description: 'Non-custodial crypto wallet and USDC payment gateway on Solana. Send payments instantly with 0% merchant fees. SDKs for Python, Node.js, .NET.',
    keywords: [
        'crypto wallet',
        'usdc wallet',
        'solana wallet',
        'payment gateway',
        'crypto payments',
        'non-custodial',
        'usdc payments',
        'solana payments',
        'merchant gateway',
        'payment api',
        'sdk python',
        'sdk nodejs',
    ],
    alternates: {
        canonical: 'https://stendly.com/',
        languages: {
            'en': 'https://stendly.com/',
            'en-US': 'https://stendly.com/',
            'ru': 'https://stendly.com/ru-ru/personal/',
            'ru-RU': 'https://stendly.com/ru-ru/personal/',
            'x-default': 'https://stendly.com/',
        },
    },
    openGraph: {
        title: 'Stendly — Crypto Wallet & Payment Gateway',
        description: 'Non-custodial USDC wallet and merchant payment gateway on Solana. 0% merchant fees, instant settlement.',
        url: '/',
        siteName: 'Stendly',
        locale: 'en_US',
        type: 'website',
    },
};

export default function RootPage() {
    const jsonLd = getJsonLd('en-us', 'home');
    return (
        <>
            <RootLanguageRedirect/>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: jsonLd}}
            />
            <PersonalView lang="en-us"/>
        </>
    );
}
