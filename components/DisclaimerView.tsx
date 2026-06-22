import {getT, Lang} from '@/lib/i18n';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface DisclaimerViewProps {
    lang: Lang;
}

export default function DisclaimerView({lang}: DisclaimerViewProps) {
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
                    <h1 className="text-4xl font-extrabold tracking-tighter text-text-main mb-4">{t('disclaimer_title')}</h1>
                    <p className="text-sm text-text-muted mb-12">{t('disclaimer_updated')}</p>

                    <p className={pClass}>{t('disclaimer_intro')}</p>

                    <h2 className={h2Class}>{t('disclaimer_not_financial_title')}</h2>
                    <p className={pClass}>{t('disclaimer_not_financial_text')}</p>

                    <h2 className={h2Class}>{t('disclaimer_no_entity_title')}</h2>
                    <p className={pClass}>{t('disclaimer_no_entity_text')}</p>

                    <h2 className={h2Class}>{t('disclaimer_risk_title')}</h2>
                    <ul className="list-disc pl-6 mb-8">
                        <li className={liClass}>{t('disclaimer_risk_1')}</li>
                        <li className={liClass}>{t('disclaimer_risk_2')}</li>
                        <li className={liClass}>{t('disclaimer_risk_3')}</li>
                        <li className={liClass}>{t('disclaimer_risk_4')}</li>
                    </ul>

                    <h2 className={h2Class}>{t('disclaimer_no_warranty_title')}</h2>
                    <p className={pClass}>{t('disclaimer_no_warranty_text')}</p>

                    <h2 className={h2Class}>{t('disclaimer_liability_title')}</h2>
                    <p className={pClass}>{t('disclaimer_liability_text')}</p>

                    <h2 className={h2Class}>{t('disclaimer_third_party_title')}</h2>
                    <p className={pClass}>{t('disclaimer_third_party_text')}</p>

                    <h2 className={h2Class}>{t('disclaimer_changes_title')}</h2>
                    <p className={pClass}>{t('disclaimer_changes_text')}</p>
                </div>
            </main>

            <Footer lang={lang}/>
        </div>
    );
}
