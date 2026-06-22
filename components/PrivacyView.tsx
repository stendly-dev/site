import {getT, Lang} from '@/lib/i18n';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface PrivacyViewProps {
    lang: Lang;
}

export default function PrivacyView({lang}: PrivacyViewProps) {
    const t = (key: string) => getT(lang, key);

    const sectionClass = "max-w-3xl mx-auto px-6 py-12";
    const h2Class = "text-2xl font-extrabold tracking-tight text-text-main mb-4";
    const pClass = "text-text-muted leading-relaxed mb-4";
    const liClass = "text-text-muted leading-relaxed mb-3";

    return (
        <div className="theme-personal antialiased min-h-screen flex flex-col">
            <Navigation lang={lang} view="personal"/>

            <main className="grow w-full">
                <div className={sectionClass}>
                    <h1 className="text-4xl font-extrabold tracking-tighter text-text-main mb-4">{t('privacy_title')}</h1>
                    <p className="text-sm text-text-muted mb-12">{t('privacy_updated')}</p>

                    <p className={pClass} dangerouslySetInnerHTML={{__html: t('privacy_intro')}}/>

                    <h2 className={h2Class}>{t('privacy_data_title')}</h2>
                    <ul className="list-disc pl-6 mb-8">
                        <li className={liClass} dangerouslySetInnerHTML={{__html: t('privacy_data_1')}}/>
                        <li className={liClass} dangerouslySetInnerHTML={{__html: t('privacy_data_2')}}/>
                        <li className={liClass} dangerouslySetInnerHTML={{__html: t('privacy_data_3')}}/>
                        <li className={liClass} dangerouslySetInnerHTML={{__html: t('privacy_data_4')}}/>
                    </ul>

                    <h2 className={h2Class}>{t('privacy_not_collect_title')}</h2>
                    <ul className="list-disc pl-6 mb-8">
                        <li className={liClass}>{t('privacy_not_collect_1')}</li>
                        <li className={liClass}>{t('privacy_not_collect_2')}</li>
                        <li className={liClass}>{t('privacy_not_collect_3')}</li>
                        <li className={liClass}>{t('privacy_not_collect_4')}</li>
                    </ul>

                    <h2 className={h2Class}>{t('privacy_security_title')}</h2>
                    <p className={pClass}>{t('privacy_security_text')}</p>

                    <h2 className={h2Class}>{t('privacy_rights_title')}</h2>
                    <p className={pClass}>{t('privacy_rights_text')}</p>

                    <h2 className={h2Class}>{t('privacy_contact_title')}</h2>
                    <p className={pClass}>
                        <a className="text-text-main underline hover:text-text-muted transition-colors"
                           href="mailto:support@stendly.com">support@stendly.com</a>
                    </p>
                </div>
            </main>

            <Footer lang={lang}/>
        </div>
    );
}
