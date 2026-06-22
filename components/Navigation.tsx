import {getT, Lang} from '@/lib/i18n';

interface NavigationProps {
    lang: Lang;
    view: 'personal' | 'business' | 'blog';
}

export default function Navigation({lang, view}: NavigationProps) {
    const t = (key: string) => getT(lang, key);
    const otherLang = lang === 'ru-ru' ? 'en-us' : 'ru-ru';

    return (
        <nav
            className="bg-nav-bg backdrop-blur-xl w-full top-0 z-50 border-b border-border-subtle sticky h-17.5 flex items-center transition-colors duration-300">
            <div className="flex justify-between items-center w-full px-4 md:px-6 max-w-7xl mx-auto gap-2">
                <a className="text-base md:text-lg font-black tracking-tighter text-text-main uppercase"
                   href={lang === 'en-us' ? '/' : `/${lang}/personal`}>
                    STENDLY
                </a>

                {view === 'blog' ? (
                    <a
                        className="text-xs font-black uppercase text-text-main"
                        href={`/${lang}/blog/`}
                    >
                        Blog
                    </a>
                ) : (
                    <div className="flex toggle-bg rounded-full p-1">
                        <a
                            className={`toggle-btn px-3 md:px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold ${view === 'personal' ? 'active' : ''}`}
                            href={lang === 'en-us' ? '/' : `/${lang}/personal`}
                        >
                            {t('nav_personal')}
                        </a>
                        <a
                            className={`toggle-btn px-3 md:px-5 py-1.5 rounded-full text-[10px] md:text-xs font-bold ${view === 'business' ? 'active' : ''}`}
                            href={`/${lang}/b2b`}
                        >
                            {t('nav_business')}
                        </a>
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <a
                        className="text-text-muted hover:text-text-main transition-colors text-xs font-bold uppercase"
                        href={view === 'blog'
                            ? `/${otherLang}/blog/`
                            : `/${otherLang}/${view === 'business' ? 'b2b' : 'personal'}`}
                    >
                        {lang === 'ru-ru' ? 'RU' : 'EN'}
                    </a>
                    <a
                        className="bg-btn-primary-bg text-btn-primary-text hover:bg-btn-primary-hover transition-colors duration-200 font-bold px-4 py-2 rounded-full text-[10px] md:text-xs whitespace-nowrap"
                        href={view === 'personal' ? 'https://app.stendly.com' : 'https://app.stendly.com/b2b'}
                    >
                        {view === 'personal' ? t('nav_login') : t('nav_dashboard')}
                    </a>
                </div>
            </div>
        </nav>
    );
}
