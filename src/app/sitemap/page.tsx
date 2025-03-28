'use client';

import Link from 'next/link';
import { games } from '@/data/games';
import { useLanguage } from '@/i18n/LanguageContext';

// 分类名到英文slug的映射
const categoryToSlug = {
    "热门": "popular",
    "经典": "classic",
    "益智": "puzzle",
    "街机": "arcade",
    "休闲": "casual",
    "动作": "action",
    "射击": "shooting",
    "解谜": "mystery",
    "策略": "strategy",
    "冒险": "adventure"
};

// 获取分类的英文slug
const getCategorySlug = (category: string) => categoryToSlug[category as keyof typeof categoryToSlug] || category;

// 获取所有游戏分类
const allCategories = Array.from(
    new Set(games.flatMap(game => game.categories))
).sort();

export default function SitemapPage() {
    const { t, translateCategory, language } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('sitemap.title')}</h1>
                    <p className="text-lg text-gray-600">{t('sitemap.description')}</p>
                </header>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* 主要页面 */}
                    <section className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('sitemap.pages')}</h2>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-purple-600 hover:text-purple-800 hover:underline">
                                    {t('site.title')} - {t('home.hero.title')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-purple-600 hover:text-purple-800 hover:underline">
                                    {t('about.title')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-purple-600 hover:text-purple-800 hover:underline">
                                    {t('footer.privacy')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-purple-600 hover:text-purple-800 hover:underline">
                                    {t('footer.terms')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/sitemap" className="text-purple-600 hover:text-purple-800 hover:underline">
                                    {t('sitemap.title')}
                                </Link>
                            </li>
                        </ul>
                    </section>

                    {/* 游戏分类 */}
                    <section className="bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('sitemap.categories')}</h2>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                            {allCategories.map(category => (
                                <li key={category}>
                                    <Link
                                        href={`/category/${getCategorySlug(category)}`}
                                        className="text-purple-600 hover:text-purple-800 hover:underline"
                                    >
                                        {translateCategory(category)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* 所有游戏 */}
                <section className="mt-12 bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('sitemap.games')}</h2>
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3">
                        {games.map(game => (
                            <li key={game.id}>
                                <Link
                                    href={`/game/${game.id}`}
                                    className="text-purple-600 hover:text-purple-800 hover:underline"
                                >
                                    {game.titleTranslation?.[language] || game.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}