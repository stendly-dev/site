import {getT, Lang} from '@/lib/i18n';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CodeBlock from '@/components/CodeBlock';
import FaqSection from '@/components/FaqSection';

interface BusinessViewProps {
    lang: Lang;
}

export default function BusinessView({lang}: BusinessViewProps) {
    const t = (key: string) => getT(lang, key);
    const faqItems = [1, 2, 3, 4].map((index) => ({
        question: t(`b_faq_${index}_q`),
        answer: t(`b_faq_${index}_a`),
    }));

    return (
        <div className="theme-business antialiased min-h-screen flex flex-col">
            <Navigation lang={lang} view="business"/>

            <main className="view-section grow w-full flex-col relative text-left">
                <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

                    {/* B2B Hero */}
                    <section
                        className="flex flex-col justify-center items-start text-left min-h-[calc(100vh-70px)] py-12 md:py-20">
                        <h1 className="text-[2.25rem] md:text-[6rem] leading-tight md:leading-[1.02] font-extrabold text-text-main w-full wrap-break-word reveal reveal-up">
                            {t('b_hero_title')}
                        </h1>
                        <p className="text-base md:text-xl text-text-muted max-w-[80%] md:max-w-[60%] mt-6 md:mt-8 leading-relaxed font-medium reveal reveal-up delay-100">
                            {t('b_hero_sub')}
                        </p>
                        <div
                            className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-12 reveal reveal-up delay-200 w-full sm:w-auto">
                            <a className="bg-btn-primary-bg text-btn-primary-text px-8 py-4 rounded-full font-bold text-sm hover:bg-btn-primary-hover transition-colors text-center"
                               href="https://app.stendly.com/b2b">
                                {t('b_hero_btn1')}
                            </a>
                            <a className="bg-transparent border border-border-subtle text-text-main px-8 py-4 rounded-full font-bold text-sm hover:bg-btn-secondary-hover transition-colors text-center"
                               href="/en-us/docs/">
                                {t('b_hero_btn2')}
                            </a>
                        </div>
                    </section>

                    {/* B2B Stats */}
                    <section
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 py-16 md:py-24 border-t border-border-subtle">
                        <div className="flex flex-col gap-3 reveal reveal-up">
                            <div
                                className="text-[3rem] md:text-[4rem] font-bold text-text-main leading-none mb-1 font-mono flex items-start">
                                0%
                                <sup className="text-sm align-super text-text-muted ml-1">3</sup>
                                <span
                                    className="bg-btn-primary-bg text-btn-primary-text text-[10px] px-2 py-0.5 rounded-full ml-3 mt-2 font-sans tracking-normal uppercase">
                                    {t('b_beta_label')}
                                </span>
                            </div>
                            <div className="text-sm font-bold text-text-main mb-1 uppercase tracking-widest">
                                {t('b_stat1_title')}
                            </div>
                            <p className="text-sm text-text-muted leading-relaxed pr-4 font-medium">{t('b_stat1_sub')}</p>
                        </div>

                        <div className="flex flex-col gap-3 reveal reveal-up delay-100">
                            <div
                                className="text-[3rem] md:text-[4rem] font-bold text-text-main leading-none mb-1 font-mono">
                                $33T<sup className="text-sm align-super text-text-muted ml-1">1</sup>
                            </div>
                            <div className="text-sm font-bold text-text-main mb-1 uppercase tracking-widest">
                                {t('b_stat2_title')}
                            </div>
                            <p className="text-sm text-text-muted leading-relaxed pr-4 font-medium">{t('b_stat2_sub')}</p>
                        </div>

                        <div className="flex flex-col gap-3 reveal reveal-up delay-200">
                            <div
                                className="text-[3rem] md:text-[4rem] font-bold text-success leading-none mb-1 font-mono">
                                $0.02<sup className="text-sm align-super text-text-muted ml-1">2</sup>
                            </div>
                            <div className="text-sm font-bold text-text-main mb-1 uppercase tracking-widest">
                                {t('b_stat3_title')}
                            </div>
                            <p className="text-sm text-text-muted leading-relaxed pr-4 font-medium">{t('b_stat3_sub')}</p>
                        </div>
                    </section>

                    {/* B2B Comparison Table */}
                    <section className="py-16 md:py-24 border-t border-border-subtle">
                        <h2 className="text-[2.5rem] md:text-[3rem] font-extrabold text-text-main mb-8 md:mb-12 reveal reveal-up">
                            {t('b_tbl_title')}
                        </h2>
                        <div className="overflow-x-auto reveal reveal-up delay-100 pb-4">
                            <table className="w-full text-left border-collapse min-w-225">
                                <thead>
                                <tr className="border-b border-border-subtle">
                                    <th className="py-6 px-6 text-text-muted font-bold uppercase tracking-widest text-sm w-1/4">
                                        {t('b_tbl_h1')}
                                    </th>
                                    <th className="py-6 px-6 text-text-main font-extrabold text-2xl w-1/4">Stendly</th>
                                    <th className="py-6 px-6 text-text-muted font-bold text-lg w-1/4">
                                        {t('b_tbl_h2')}<br/>
                                        <span
                                            className="text-xs font-medium text-text-muted opacity-70">{t('b_tbl_h2_sub')}</span>
                                    </th>
                                    <th className="py-6 px-6 text-text-muted font-bold text-lg w-1/4">
                                        {t('b_tbl_h3')}<br/>
                                        <span
                                            className="text-xs font-medium text-text-muted opacity-70">{t('b_tbl_h3_sub')}</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="border-b border-border-subtle hover:bg-bg-secondary transition-colors">
                                    <td className="py-6 px-6 text-text-main font-bold">{t('b_tbl_r1_1')}</td>
                                    <td className="py-6 px-6 text-success font-bold font-mono text-xl">
                                        0%<sup className="text-xs align-super text-text-muted ml-1">3</sup>
                                    </td>
                                    <td className="py-6 px-6 text-text-muted font-mono text-lg">0.5% - 2.0%</td>
                                    <td className="py-6 px-6 text-text-muted font-mono text-lg">1.5%</td>
                                </tr>
                                <tr className="border-b border-border-subtle hover:bg-bg-secondary transition-colors">
                                    <td className="py-6 px-6 text-text-main font-bold">{t('b_tbl_r2_1')}</td>
                                    <td className="py-6 px-6 text-text-main font-bold font-mono text-xl">
                                        $0.02<sup className="text-xs align-super text-text-muted ml-1">2</sup>
                                    </td>
                                    <td className="py-6 px-6 text-text-muted font-mono text-lg">{t('b_tbl_r2_2')}</td>
                                    <td className="py-6 px-6 text-text-muted font-mono text-lg">{t('b_tbl_r2_3')}</td>
                                </tr>
                                <tr className="border-b border-border-subtle hover:bg-bg-secondary transition-colors">
                                    <td className="py-6 px-6 text-text-main font-bold">{t('b_tbl_r3_1')}</td>
                                    <td className="py-6 px-6 text-text-main font-bold font-mono text-xl">{t('b_tbl_r3_2')}</td>
                                    <td className="py-6 px-6 text-text-muted font-mono text-lg">{t('b_tbl_r3_3')}</td>
                                    <td className="py-6 px-6 text-text-muted font-mono text-lg">{t('b_tbl_r3_4')}</td>
                                </tr>
                                <tr className="border-b border-border-subtle hover:bg-bg-secondary transition-colors">
                                    <td className="py-6 px-6 text-text-main font-bold">{t('b_tbl_r4_1')}</td>
                                    <td className="py-6 px-6 text-text-main font-bold text-lg">{t('b_tbl_r4_2')}</td>
                                    <td className="py-6 px-6 text-text-muted font-medium text-lg">{t('b_tbl_r4_2')}</td>
                                    <td className="py-6 px-6 text-text-muted font-medium text-lg">{t('b_tbl_r4_2')}</td>
                                </tr>
                                <tr className="border-b border-border-subtle hover:bg-bg-secondary transition-colors">
                                    <td className="py-6 px-6 text-text-main font-bold">{t('b_tbl_r5_1')}</td>
                                    <td className="py-6 px-6 text-success font-bold text-lg">{t('b_tbl_r5_2')}</td>
                                    <td className="py-6 px-6 text-text-muted font-medium text-lg">{t('b_tbl_r5_3')}</td>
                                    <td className="py-6 px-6 text-text-muted font-medium text-lg">{t('b_tbl_r5_4')}</td>
                                </tr>
                                <tr className="border-b border-border-subtle hover:bg-bg-secondary transition-colors">
                                    <td className="py-6 px-6 text-text-main font-bold">{t('b_tbl_r6_1')}</td>
                                    <td className="py-6 px-6 text-text-main font-bold text-lg">{t('b_tbl_r6_2')}</td>
                                    <td className="py-6 px-6 text-text-muted font-medium text-lg">{t('b_tbl_r6_3')}</td>
                                    <td className="py-6 px-6 text-text-muted font-medium text-lg">{t('b_tbl_r6_4')}</td>
                                </tr>
                                <tr className="border-b border-border-subtle hover:bg-bg-secondary transition-colors">
                                    <td className="py-6 px-6 text-text-main font-bold">{t('b_tbl_r7_1')}</td>
                                    <td className="py-6 px-6 text-text-main font-bold text-lg">{t('b_tbl_r7_2')}</td>
                                    <td className="py-6 px-6 text-text-muted font-medium text-lg">{t('b_tbl_r7_3')}</td>
                                    <td className="py-6 px-6 text-text-muted font-medium text-lg">{t('b_tbl_r7_3')}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* B2B Features (Bento Grid) */}
                    <section className="py-16 md:py-24 border-t border-border-subtle">
                        <h2 className="text-[2rem] md:text-[3rem] font-extrabold text-text-main mb-8 md:mb-12 wrap-break-word reveal reveal-up">
                            {t('b_bento_title')}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[280px]">
                            {/* Card 1: Settlement */}
                            <div
                                className="bg-bg-secondary border border-border-subtle md:col-span-2 md:row-span-2 rounded-4xl p-8 md:p-10 flex flex-col justify-between relative overflow-hidden reveal reveal-up transition-transform hover:-translate-y-1">
                                <div>
                                    <span className="material-symbols-outlined text-success text-4xl mb-4">bolt</span>
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-text-main tracking-tight mb-4">
                                        {t('b_bento_1_title')}
                                    </h3>
                                    <p className="text-text-muted text-base md:text-lg font-medium max-w-md leading-relaxed mb-6 md:mb-0">
                                        {t('b_bento_1_sub')}
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Zero Gas */}
                            <div
                                className="bg-bg-secondary border border-border-subtle md:col-span-1 md:row-span-1 rounded-4xl p-8 flex flex-col justify-between reveal reveal-up delay-100 transition-transform hover:-translate-y-1">
                                <div>
                                    <span
                                        className="material-symbols-outlined text-text-main text-3xl mb-3">local_gas_station</span>
                                    <h3 className="text-xl font-extrabold text-text-main tracking-tight mb-2">
                                        {t('b_bento_2_title')}
                                    </h3>
                                    <p className="text-text-muted text-sm font-medium leading-relaxed">
                                        {t('b_bento_2_sub')}
                                    </p>
                                </div>
                            </div>

                            {/* Card 3: Security */}
                            <div
                                className="bg-bg-secondary border border-border-subtle md:col-span-1 md:row-span-1 rounded-4xl p-8 flex flex-col justify-between reveal reveal-up delay-200 transition-transform hover:-translate-y-1">
                                <div>
                                    <span
                                        className="material-symbols-outlined text-text-main text-3xl mb-3">shield_lock</span>
                                    <h3 className="text-xl font-extrabold text-text-main tracking-tight mb-2">
                                        {t('b_bento_3_title')}
                                    </h3>
                                    <p className="text-text-muted text-sm font-medium leading-relaxed">
                                        {t('b_bento_3_sub')}
                                    </p>
                                </div>
                            </div>

                            {/* Card 4: One API */}
                            <div
                                className="bg-bg-secondary border border-border-subtle md:col-span-3 md:row-span-1 rounded-4xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between reveal reveal-up transition-transform hover:-translate-y-1">
                                <div className="max-w-xl">
                                    <span
                                        className="material-symbols-outlined text-text-main text-3xl mb-3">api</span>
                                    <h3 className="text-2xl font-extrabold text-text-main tracking-tight mb-3">
                                        {t('b_bento_4_title')}
                                    </h3>
                                    <p className="text-text-muted text-base font-medium leading-relaxed">
                                        {t('b_bento_4_sub')}
                                    </p>
                                </div>
                                <div className="mt-6 md:mt-0 w-full md:w-auto">
                                    <a className="bg-btn-primary-bg text-btn-primary-text px-6 py-3 rounded-full font-bold text-sm hover:bg-btn-primary-hover transition-colors block text-center"
                                       href="/en-us/docs/">
                                        {t('b_bento_4_btn')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* B2B Developer Experience */}
                    <section
                        className="flex flex-col lg:flex-row gap-12 md:gap-16 items-start py-16 md:py-24 border-t border-border-subtle">
                        <div className="flex flex-col gap-6 text-left flex-1 lg:sticky lg:top-32 reveal reveal-left">
                            <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.02] font-extrabold text-text-main">
                                {t('b_dev_title')}
                            </h2>
                            <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium">
                                {t('b_dev_sub')}
                            </p>
                            <div className="mt-4 md:mt-6">
                                <a className="text-text-main font-bold text-base hover:text-text-muted transition-colors flex items-center gap-2"
                                   href="/en-us/docs/">
                                    {t('b_dev_link')}
                                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                </a>
                            </div>
                        </div>

                        <CodeBlock/>
                    </section>

                    {/* B2B Final CTA */}
                    <section
                        className="flex flex-col items-center text-center gap-6 md:gap-8 py-24 md:py-32 border-t border-border-subtle">
                        <h2 className="text-[2.25rem] md:text-[4rem] leading-tight md:leading-[1.02] font-extrabold text-text-main wrap-break-word reveal reveal-up">
                            {t('b_cta_title')}
                        </h2>
                        <p className="text-base md:text-xl text-text-muted max-w-2xl leading-relaxed font-medium reveal reveal-up delay-100">
                            {t('b_cta_sub')}
                        </p>
                        <div className="mt-4 md:mt-6 reveal reveal-up delay-200">
                            <a className="bg-btn-primary-bg text-btn-primary-text px-10 py-4 rounded-full font-bold text-base hover:bg-btn-primary-hover transition-colors inline-block"
                               href="https://app.stendly.com/b2b">
                                {t('b_cta_btn')}
                            </a>
                        </div>
                    </section>

                    <FaqSection title={t('faq_title')} items={faqItems}/>

                    {/* B2B Footnotes */}
                    <section className="py-8 border-t border-border-subtle">
                        <div className="flex flex-col gap-2">
                            <p className="text-xs text-text-muted font-medium"
                               dangerouslySetInnerHTML={{__html: t('b_fn_1')}}/>
                            <p className="text-xs text-text-muted font-medium"
                               dangerouslySetInnerHTML={{__html: t('b_fn_2')}}/>
                            <p className="text-xs text-text-muted font-medium"
                               dangerouslySetInnerHTML={{__html: t('b_fn_3')}}/>
                        </div>
                    </section>
                </div>
            </main>

            <Footer lang={lang}/>
            <ScrollRevealScript/>
        </div>
    );
}

function ScrollRevealScript() {
    return (
        <script dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function() {
                const reveals = document.querySelectorAll('.reveal');
                const observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                        }
                    });
                }, {threshold: 0.15, rootMargin: "0px 0px -50px 0px"});
                reveals.forEach(function(reveal) {
                    reveal.classList.remove('is-visible');
                    observer.observe(reveal);
                });
            });
        `
        }}/>
    );
}
