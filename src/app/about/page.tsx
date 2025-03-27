'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen pb-24">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('about.title')}</h1>
            <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('about.mission.title')}</h2>
                    <p className="text-gray-600">{t('about.mission.content')}</p>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('about.games.title')}</h2>
                    <p className="text-gray-600">{t('about.games.content')}</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('about.contact.title')}</h2>
                    <p className="text-gray-600">{t('about.contact.content')}</p>
                </div>
            </div>
        </div>
    );
}