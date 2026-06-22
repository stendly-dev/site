import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import {CommercialPage} from '@/lib/commercial';

export default function CommercialPageView({page}: {page: CommercialPage}) {
    return (
        <div className="theme-business antialiased min-h-screen flex flex-col">
            <Navigation lang="en-us" view="blog"/>
            <main className="grow w-full">
                <article className="max-w-4xl mx-auto px-6 py-16 md:py-24">
                    <p className="text-sm uppercase tracking-widest text-text-muted font-bold mb-5">{page.eyebrow}</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-text-main tracking-tight mb-8">{page.title}</h1>
                    <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-14">{page.summary}</p>

                    <div className="space-y-14">
                        {page.sections.map((section) => (
                            <section key={section.title}>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-text-main mb-5">{section.title}</h2>
                                {section.paragraphs?.map((paragraph) => (
                                    <p key={paragraph} className="text-text-muted leading-relaxed mb-4">{paragraph}</p>
                                ))}
                                {section.bullets && (
                                    <ul className="space-y-3 text-text-muted leading-relaxed list-disc pl-6">
                                        {section.bullets.map((item) => <li key={item}>{item}</li>)}
                                    </ul>
                                )}
                            </section>
                        ))}
                    </div>

                    {page.sources && (
                        <section className="mt-16 pt-10 border-t border-border-subtle">
                            <h2 className="text-xl font-extrabold text-text-main mb-5">Primary resources</h2>
                            <ul className="space-y-3">
                                {page.sources.map((source) => (
                                    <li key={source.href}>
                                        <a className="text-text-main underline hover:text-text-muted"
                                           href={source.href} target="_blank" rel="noopener noreferrer">
                                            {source.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </article>
            </main>
            <Footer lang="en-us"/>
        </div>
    );
}
