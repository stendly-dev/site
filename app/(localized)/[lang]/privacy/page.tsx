import {Lang} from '@/lib/i18n';
import PrivacyView from '@/components/PrivacyView';

export function generateStaticParams() {
    return [{lang: 'en-us'}, {lang: 'ru-ru'}];
}

export async function generateMetadata({params}: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Lang;
    const isRu = lang === 'ru-ru';

    return {
        title: isRu
            ? 'Stendly | Политика конфиденциальности'
            : 'Stendly | Privacy Policy',
        description: isRu
            ? 'Политика конфиденциальности Stendly. Как мы защищаем ваши данные на некастодиальной платформе.'
            : 'Stendly Privacy Policy. How we protect your data on our non-custodial platform.',
        robots: {index: false, follow: true},
    };
}

export default async function PrivacyPage({params}: { params: Promise<{ lang: string }> }) {
    const lang = (await params).lang as Lang;
    return <PrivacyView lang={lang}/>;
}
