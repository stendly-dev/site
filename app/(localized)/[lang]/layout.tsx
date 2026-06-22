import {Lang} from '@/lib/i18n';
import '../../globals.css';
import {Suspense} from 'react';
import AnalyticsTracker from '@/components/AnalyticsTracker';
import {optionalVerificationToken} from '@/lib/verification';

export function generateStaticParams() {
    return [{lang: 'en-us'}, {lang: 'ru-ru'}];
}

export async function generateMetadata({params}: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Lang;
    const isRu = lang === 'ru-ru';
    const googleVerification = optionalVerificationToken(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION);
    const yandexVerification = optionalVerificationToken(process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION);
    const bingVerification = optionalVerificationToken(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION);

    return {
        metadataBase: new URL('https://stendly.com'),
        openGraph: {
            locale: isRu ? 'ru_RU' : 'en_US',
            siteName: 'Stendly',
        },
        verification: {
            ...(googleVerification ? {google: googleVerification} : {}),
            ...(yandexVerification ? {yandex: yandexVerification} : {}),
            ...(bingVerification ? {other: {'msvalidate.01': bingVerification}} : {}),
        },
    };
}

export default async function LocalizedLayout({
                                                  params,
                                                  children,
                                              }: {
    params: Promise<{ lang: string }>;
    children: React.ReactNode;
}) {
    const lang = (await params).lang as Lang;
    const htmlLang = lang === 'ru-ru' ? 'ru-RU' : 'en-US';

    return (
        <html lang={htmlLang}>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link
                href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Manrope:wght@400;500;600;700;800&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />
        </head>
        <body><Suspense fallback={null}><AnalyticsTracker/></Suspense>{children}</body>
        </html>
    );
}
