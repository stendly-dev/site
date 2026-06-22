'use client';

import {useEffect} from 'react';

interface LanguageRedirectProps {
    route: 'personal' | 'b2b' | 'blog';
}

function getBrowserLang() {
    return navigator.language.toLowerCase().startsWith('ru') ? 'ru-ru' : 'en-us';
}

export default function LanguageRedirect({route}: LanguageRedirectProps) {
    useEffect(() => {
        const lang = getBrowserLang();
        window.location.replace(`/${lang}/${route}/`);
    }, [route]);

    return (
        <main className="theme-business min-h-screen flex items-center justify-center">
            <a className="text-text-main font-bold" href={`/en-us/${route}/`}>
                STENDLY
            </a>
        </main>
    );
}

export function RootLanguageRedirect() {
    useEffect(() => {
        if (getBrowserLang() === 'ru-ru') {
            window.location.replace('/ru-ru/personal/');
        }
    }, []);

    return null;
}
