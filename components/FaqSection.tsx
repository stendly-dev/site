interface FaqItem {
    question: string;
    answer: string;
}

interface FaqSectionProps {
    title: string;
    items: FaqItem[];
}

export default function FaqSection({title, items}: FaqSectionProps) {
    return (
        <section className="py-16 md:py-24 border-t border-border-subtle">
            <h2 className="text-[2.25rem] md:text-[3rem] font-extrabold text-text-main mb-8">
                {title}
            </h2>
            <div className="border-t border-border-subtle">
                {items.map((item) => (
                    <details key={item.question} className="group border-b border-border-subtle">
                        <summary className="cursor-pointer list-none py-6 flex items-center justify-between gap-6 text-left">
                            <span className="text-base md:text-lg font-bold text-text-main">{item.question}</span>
                            <span className="material-symbols-outlined text-text-muted transition-transform group-open:rotate-45">
                                add
                            </span>
                        </summary>
                        <p className="text-text-muted leading-relaxed font-medium max-w-3xl pb-6 pr-10">
                            {item.answer}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    );
}
