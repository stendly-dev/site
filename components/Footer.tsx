import {getT, Lang} from '@/lib/i18n';

interface FooterProps {
    lang: Lang;
}

export default function Footer({lang}: FooterProps) {
    const t = (key: string) => getT(lang, key);

    return (
        <footer data-nosnippet
                className="w-full border-t border-border-subtle bg-bg-main mt-auto relative z-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-8 text-left">
                <div className="flex flex-col gap-4">
                    <h4 className="text-text-main font-bold text-sm">{t('ft_products')}</h4>
                    <a className="text-text-muted hover:text-text-main text-sm font-medium transition-colors"
                       href={lang === 'en-us' ? '/' : `/${lang}/personal`}>
                        {t('ft_personal')}
                    </a>
                    <a className="text-text-muted hover:text-text-main text-sm font-medium transition-colors"
                       href={`/${lang}/b2b`}>
                        {t('ft_business')}
                    </a>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-text-main font-bold text-sm">{t('ft_developers')}</h4>
                    <a className="text-text-muted hover:text-text-main text-sm font-medium transition-colors"
                       href="/en-us/docs/">
                        {t('ft_docs')}
                    </a>
                    <a className="text-text-muted hover:text-text-main text-sm font-medium transition-colors"
                       href="https://github.com/stendly-dev" target="_blank" rel="noopener noreferrer">
                        GitHub Organization
                    </a>
                    <a className="text-text-muted hover:text-text-main text-sm font-medium transition-colors"
                       href="https://pypi.org/project/stendly/" target="_blank" rel="noopener noreferrer">
                        Python SDK (PyPI)
                    </a>
                    <a className="text-text-muted hover:text-text-main text-sm font-medium transition-colors"
                       href="https://www.npmjs.com/package/@stendly/sdk" target="_blank" rel="noopener noreferrer">
                        Node.js SDK (npm)
                    </a>
                    <a className="text-text-muted hover:text-text-main text-sm font-medium transition-colors"
                       href="https://www.nuget.org/packages/Stendly" target="_blank" rel="noopener noreferrer">
                        .NET SDK (NuGet)
                    </a>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-text-main font-bold text-sm">{t('ft_legal')}</h4>
                    <a className="text-text-muted hover:text-text-main text-sm font-medium transition-colors"
                       href={`/${lang}/privacy`}>
                        {t('ft_privacy')}
                    </a>
                    <a className="text-text-muted hover:text-text-main text-sm font-medium transition-colors"
                       href={`/${lang}/disclaimer`}>
                        {t('ft_disclaimer')}
                    </a>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-text-main font-bold text-sm">{t('ft_support')}</h4>
                    <a className="text-text-muted hover:text-text-main text-sm font-medium transition-colors"
                       href="mailto:support@stendly.com">
                        {t('ft_contact')}
                    </a>
                    <a className="text-text-muted hover:text-text-main text-sm font-medium transition-colors"
                       href="https://status.stendly.com" target="_blank" rel="noopener noreferrer">
                        System Status
                    </a>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 pb-10 flex flex-col gap-6">
                <div className="h-px w-full bg-border-subtle"></div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-lg font-black text-text-main tracking-tighter">STENDLY</div>
                    <div className="text-text-muted text-sm font-bold">{t('ft_copy')}</div>
                </div>
                <p className="text-xs text-text-muted opacity-50 max-w-4xl leading-relaxed font-medium">
                    {t('ft_disc_text')}
                </p>
            </div>
        </footer>
    );
}
