import {Lang} from '@/lib/i18n';
import DisclaimerView from '@/components/DisclaimerView';

export function generateStaticParams() {
    return [{lang: 'en-us'}, {lang: 'ru-ru'}];
}

export async function generateMetadata({params}: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Lang;
    const isRu = lang === 'ru-ru';

    return {
        title: isRu
            ? 'Stendly | Отказ от ответственности'
            : 'Stendly | Disclaimer',
        description: isRu
            ? 'Отказ от ответственности Stendly. Правовая информация об использовании некастодиальной криптоплатёжной платформы.'
            : 'Stendly Disclaimer. Legal information about using our non-custodial crypto payment platform.',
        robots: {index: false, follow: true},
    };
}

export default async function DisclaimerPage({params}: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Lang;
    return <DisclaimerView lang={lang}/>;
}
