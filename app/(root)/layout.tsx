import '../globals.css';
import {Suspense} from 'react';
import type {Metadata} from 'next';
import AnalyticsTracker from '@/components/AnalyticsTracker';
import {optionalVerificationToken} from '@/lib/verification';

const googleVerification = optionalVerificationToken(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION);
const yandexVerification = optionalVerificationToken(process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION);
const bingVerification = optionalVerificationToken(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION);

export const metadata: Metadata = {
    verification: {
        ...(googleVerification ? {google: googleVerification} : {}),
        ...(yandexVerification ? {yandex: yandexVerification} : {}),
        ...(bingVerification ? {other: {'msvalidate.01': bingVerification}} : {}),
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en-US">
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
        <body>
        <Suspense fallback={null}><AnalyticsTracker/></Suspense>
        {children}
        </body>
        </html>
    );
}
