import {getT, Lang} from '@/lib/i18n';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FaqSection from '@/components/FaqSection';

interface PersonalViewProps {
    lang: Lang;
}

export default function PersonalView({lang}: PersonalViewProps) {
    const t = (key: string) => getT(lang, key);
    const faqItems = [1, 2, 3, 4].map((index) => ({
        question: t(`p_faq_${index}_q`),
        answer: t(`p_faq_${index}_a`),
    }));

    return (
        <div className="theme-personal antialiased min-h-screen flex flex-col">
            <Navigation lang={lang} view="personal"/>

            <main className="view-section active grow w-full flex-col relative text-left">
                {/* Feature 1: Hero */}
                <section
                    className="relative w-full min-h-[calc(100vh-70px)] flex flex-col lg:flex-row items-center justify-center px-6 max-w-7xl mx-auto gap-16 py-16 md:py-20">
                    <div className="flex-1 flex flex-col items-start text-left reveal reveal-up">
                        <h1 className="text-[3rem] md:text-[5.5rem] font-extrabold leading-[1.02] text-text-main max-w-2xl md:min-w-50"
                            dangerouslySetInnerHTML={{__html: t('p_hero_title')}}/>
                        <p className="text-base md:text-xl text-text-muted max-w-xl mt-6 leading-relaxed font-medium">
                            {t('p_hero_sub')}
                        </p>
                        <div className="mt-10 flex justify-center w-full">
                            <a className="bg-btn-primary-bg text-btn-primary-text px-8 py-4 rounded-full font-bold text-sm hover:bg-btn-primary-hover transition-colors"
                               href="https://app.stendly.com">
                                {t('p_hero_btn')}
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center lg:justify-end reveal reveal-left delay-200 w-full">
                        <div
                            className="w-full max-w-[320px] bg-bg-elevated border border-border-subtle rounded-[2.5rem] shadow-(--mockup-shadow) overflow-hidden flex flex-col relative z-10 h-130">
                            <div className="pt-8 pb-4 px-6 flex flex-col items-center border-b border-border-subtle">
                                <span
                                    className="text-text-muted text-xs font-bold tracking-widest uppercase mb-2">{t('m1_total')}</span>
                                <span
                                    className="text-text-main text-[2rem] font-extrabold ">$260.79</span>

                                <div className="flex gap-3 mt-6 w-full">
                                    <button
                                        className="flex-1 bg-btn-secondary-bg text-btn-secondary-text py-3 rounded-xl flex flex-col items-center gap-1 hover:bg-btn-secondary-hover transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">qr_code_scanner</span>
                                        <span className="text-[10px] font-bold">{t('m1_scan')}</span>
                                    </button>
                                    <button
                                        className="flex-1 bg-btn-secondary-bg text-btn-secondary-text py-3 rounded-xl flex flex-col items-center gap-1 hover:bg-btn-secondary-hover transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
                                        <span className="text-[10px] font-bold">{t('m1_send')}</span>
                                    </button>
                                    <button
                                        className="flex-1 bg-btn-secondary-bg text-btn-secondary-text py-3 rounded-xl flex flex-col items-center gap-1 hover:bg-btn-secondary-hover transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
                                        <span className="text-[10px] font-bold">{t('m1_receive')}</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 bg-bg-secondary p-6 flex flex-col gap-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-text-muted text-xs font-bold">{t('m1_recent')}</span>
                                    <span className="text-text-main text-xs font-bold">{t('m1_all')}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center">
                                        <span
                                            className="material-symbols-outlined text-[16px] text-success">call_received</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-text-main font-bold text-sm">@iamfobey</div>
                                        <div className="text-text-muted text-[10px] font-medium">35m ago</div>
                                    </div>
                                    <div className="text-success font-bold text-sm">+$50.00</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center">
                                        <span
                                            className="material-symbols-outlined text-[16px] text-danger">call_made</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-text-main font-bold text-sm">VPN Subscription</div>
                                        <div
                                            className="text-text-muted text-[10px] font-medium">{t('m1_yesterday')}</div>
                                    </div>
                                    <div className="text-text-main font-bold text-sm">-$5.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature 2: Send & Receive */}
                <section
                    className="relative w-full py-20 md:py-32 flex flex-col lg:flex-row-reverse items-center justify-center px-6 max-w-7xl mx-auto gap-16 border-t border-border-subtle">
                    <div className="flex-1 flex flex-col items-start text-left reveal reveal-up">
                        <h2 className="text-[3rem] md:text-[4.5rem] font-extrabold  leading-[1.02] text-text-main max-w-2xl">
                            {t('p_f2_title')}
                        </h2>
                        <p className="text-base md:text-lg text-text-muted max-w-xl mt-6 leading-relaxed font-medium">
                            {t('p_f2_sub')}
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center lg:justify-start reveal reveal-right delay-200 w-full">
                        <div
                            className="w-full max-w-[320px] bg-bg-elevated border border-border-subtle rounded-[2.5rem] shadow-(--mockup-shadow) overflow-hidden flex flex-col relative z-10 h-130">
                            <div className="pt-8 pb-4 px-6 flex items-center justify-between">
                                <span className="material-symbols-outlined text-text-main">arrow_back</span>
                                <span className="text-text-main font-bold">{t('m2_send')}</span>
                                <span className="w-6"></span>
                            </div>
                            <div className="px-6 flex-1 flex flex-col">
                                <div
                                    className="w-full bg-bg-secondary border border-border-subtle rounded-xl p-4 flex items-center gap-3 mt-4">
                                    <div
                                        className="w-8 h-8 rounded-full bg-btn-primary-bg text-btn-primary-text flex items-center justify-center text-xs font-bold">
                                        G
                                    </div>
                                    <span className="text-text-main text-sm font-bold">Nikita Gordeev</span>
                                </div>

                                <div className="flex flex-col items-center mt-12 mb-8">
                                    <span
                                        className="text-text-main text-5xl font-extrabold ">$50.00</span>
                                    <span className="text-text-muted text-xs font-medium mt-2">{t('m2_balance')}</span>
                                </div>

                                <div className="flex justify-center gap-2 mb-8">
                                    <button
                                        className="bg-bg-elevated border border-border-subtle text-text-main px-4 py-2 rounded-full text-xs font-bold hover:bg-bg-secondary transition-colors">
                                        $5
                                    </button>
                                    <button
                                        className="bg-bg-elevated border border-border-subtle text-text-main px-4 py-2 rounded-full text-xs font-bold hover:bg-bg-secondary transition-colors">
                                        $10
                                    </button>
                                    <button
                                        className="bg-btn-primary-bg text-btn-primary-text px-4 py-2 rounded-full text-xs font-bold transition-colors">
                                        $50
                                    </button>
                                </div>
                            </div>
                            <div className="p-6 mt-auto">
                                <button
                                    className="w-full bg-btn-primary-bg text-btn-primary-text py-4 rounded-xl font-bold text-sm hover:bg-btn-primary-hover transition-colors">
                                    {t('m2_continue')}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature 3: Zero Gas */}
                <section
                    className="relative w-full py-20 md:py-32 flex flex-col lg:flex-row items-center justify-center px-6 max-w-7xl mx-auto gap-16 border-t border-border-subtle">
                    <div className="flex-1 flex flex-col items-start text-left reveal reveal-up">
                        <h2 className="text-[3rem] md:text-[4.5rem] font-extrabold  leading-[1.02] text-text-main max-w-2xl">
                            {t('p_f3_title')}
                        </h2>
                        <p className="text-base md:text-lg text-text-muted max-w-xl mt-6 leading-relaxed font-medium">
                            {t('p_f3_sub')}
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center lg:justify-end reveal reveal-left delay-200 w-full">
                        <div
                            className="w-full max-w-[320px] bg-bg-elevated border border-border-subtle rounded-[2.5rem] shadow-(--mockup-shadow) overflow-hidden flex flex-col relative z-10 h-130">
                            <div className="pt-8 pb-4 px-6 flex items-center justify-between">
                                <span className="material-symbols-outlined text-text-main">arrow_back</span>
                                <span className="text-text-main font-bold">{t('m3_confirm')}</span>
                                <span className="w-6"></span>
                            </div>
                            <div className="px-6 pb-6 flex-1 flex flex-col">
                                <div
                                    className="w-full bg-bg-secondary border border-border-subtle rounded-xl p-4 flex items-center justify-between mt-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-8 h-8 rounded-full bg-btn-primary-bg text-btn-primary-text flex items-center justify-center text-xs font-bold">
                                            A
                                        </div>
                                        <span className="text-text-main font-bold text-sm">Axor Digital</span>
                                    </div>
                                    <span
                                        className="material-symbols-outlined text-success text-[18px]">check_circle</span>
                                </div>

                                <div className="flex flex-col items-center mt-10 mb-10">
                                    <span
                                        className="text-text-main text-5xl font-extrabold ">$5.02</span>
                                </div>

                                <div
                                    className="w-full bg-bg-secondary border border-border-subtle rounded-xl p-5 flex flex-col gap-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-text-muted text-xs font-medium flex items-center gap-1">
                                            {t('m3_network_fee')}
                                        </span>
                                        <span className="text-text-main font-bold text-xs">$0.02</span>
                                    </div>
                                    <div className="h-px w-full bg-border-subtle"></div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-text-main font-bold text-sm">{t('m3_total')}</span>
                                        <span className="text-text-main font-bold text-sm">$5.02</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 mt-auto">
                                <button
                                    className="w-full bg-btn-primary-bg text-btn-primary-text py-4 rounded-xl font-bold text-sm hover:bg-btn-primary-hover transition-colors">
                                    {t('m3_pay')}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature 4: Security */}
                <section
                    className="relative w-full py-20 md:py-32 flex flex-col lg:flex-row-reverse items-center justify-center px-6 max-w-7xl mx-auto gap-16 border-t border-border-subtle">
                    <div className="flex-1 flex flex-col items-start text-left reveal reveal-up">
                        <h2 className="text-[3rem] md:text-[4.5rem] font-extrabold  leading-[1.02] text-text-main max-w-2xl"
                            dangerouslySetInnerHTML={{__html: t('p_f4_title')}}/>
                        <p className="text-base md:text-lg text-text-muted max-w-xl mt-6 leading-relaxed font-medium">
                            {t('p_f4_sub')}
                        </p>
                    </div>

                    <div className="flex-1 flex justify-center lg:justify-start reveal reveal-right delay-200 w-full">
                        <div
                            className="w-full max-w-[320px] bg-bg-elevated border border-border-subtle rounded-[2.5rem] shadow-(--mockup-shadow) overflow-hidden flex flex-col relative z-10 h-130">
                            <div className="pt-14 pb-8 px-6 flex flex-col items-center">
                                <span className="material-symbols-outlined text-text-main text-[40px] mb-6">lock</span>
                                <div className="text-text-main font-bold text-xl mb-6">{t('m4_enter_pin')}</div>
                                <div className="flex gap-4 mb-12">
                                    <div className="w-3 h-3 rounded-full bg-text-main"></div>
                                    <div className="w-3 h-3 rounded-full bg-text-main"></div>
                                    <div className="w-3 h-3 rounded-full bg-text-main"></div>
                                    <div className="w-3 h-3 rounded-full border-2 border-border-subtle"></div>
                                    <div className="w-3 h-3 rounded-full border-2 border-border-subtle"></div>
                                    <div className="w-3 h-3 rounded-full border-2 border-border-subtle"></div>
                                </div>
                                <div className="grid grid-cols-3 gap-x-4 gap-y-4 w-full max-w-60">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
                                        <button key={n}
                                                className="text-2xl font-medium text-text-main h-14 flex items-center justify-center rounded-full hover:bg-bg-secondary transition-colors">
                                            {n}
                                        </button>
                                    ))}
                                    <div></div>
                                    <button
                                        className="text-2xl font-medium text-text-main h-14 flex items-center justify-center rounded-full hover:bg-bg-secondary transition-colors">
                                        0
                                    </button>
                                    <button
                                        className="text-2xl font-medium text-text-main h-14 flex items-center justify-center rounded-full hover:bg-bg-secondary transition-colors">
                                        <span className="material-symbols-outlined">backspace</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature 5: Universal Wallet Compatibility */}
                <section
                    className="relative w-full py-20 md:py-32 px-6 max-w-7xl mx-auto border-t border-border-subtle">
                    <div className="text-center mb-16 reveal reveal-up">
                        <h2 className="text-[2.5rem] md:text-[3rem] font-extrabold  text-text-main">
                            {t('p_f5_title')}
                        </h2>
                        <p className="text-base md:text-lg text-text-muted mt-4 font-medium">
                            {t('p_f5_sub')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div
                            className="bg-bg-secondary border border-border-subtle rounded-4xl p-8 flex flex-col items-center text-center reveal reveal-up">
                            <div
                                className="w-16 h-16 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center mb-6">
                                <span
                                    className="material-symbols-outlined text-text-main text-2xl">qr_code_scanner</span>
                            </div>
                            <h3 className="text-xl font-extrabold text-text-main mb-3">{t('p_f5_s1_title')}</h3>
                            <p className="text-text-muted text-sm font-medium leading-relaxed">{t('p_f5_s1_sub')}</p>
                        </div>
                        <div
                            className="bg-bg-secondary border border-border-subtle rounded-4xl p-8 flex flex-col items-center text-center reveal reveal-up delay-100">
                            <div
                                className="w-16 h-16 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center mb-6">
                                <span
                                    className="material-symbols-outlined text-text-main text-2xl">currency_exchange</span>
                            </div>
                            <h3 className="text-xl font-extrabold text-text-main mb-3">{t('p_f5_s2_title')}</h3>
                            <p className="text-text-muted text-sm font-medium leading-relaxed">{t('p_f5_s2_sub')}</p>
                        </div>
                        <div
                            className="bg-bg-secondary border border-border-subtle rounded-4xl p-8 flex flex-col items-center text-center reveal reveal-up delay-200">
                            <div
                                className="w-16 h-16 rounded-full bg-bg-elevated border border-border-subtle flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-text-main text-2xl">bolt</span>
                            </div>
                            <h3 className="text-xl font-extrabold text-text-main mb-3">{t('p_f5_s3_title')}</h3>
                            <p className="text-text-muted text-sm font-medium leading-relaxed">{t('p_f5_s3_sub')}</p>
                        </div>
                    </div>
                </section>

                {/* B2C Final CTA */}
                <section
                    className="w-full py-24 md:py-32 flex flex-col items-center justify-center bg-bg-secondary border-t border-border-subtle">
                    <div className="text-center px-6 reveal reveal-up">
                        <h2 className="text-[2.5rem] md:text-[4rem] font-extrabold  text-text-main mb-10 leading-[1.05]"
                            dangerouslySetInnerHTML={{__html: t('p_cta_title')}}/>
                        <a className="bg-btn-primary-bg text-btn-primary-text px-10 py-4 rounded-full font-bold text-base hover:bg-btn-primary-hover transition-colors block mx-auto text-center w-fit"
                           href="https://app.stendly.com">
                            {t('p_cta_btn')}
                        </a>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-6 w-full">
                    <FaqSection title={t('faq_title')} items={faqItems}/>
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
