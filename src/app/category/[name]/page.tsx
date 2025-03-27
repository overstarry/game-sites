'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { games } from '@/data/games';
import { useLanguage } from '@/i18n/LanguageContext';

// 添加英文到中文的分类映射
const categoryMappings: Record<string, string> = {
  'puzzle': '解谜',
  'brain': '益智',
  'popular': '热门',
  'arcade': '街机',
  'classic': '经典',
  'strategy': '策略',
  'shooting': '射击',
  'casual': '休闲',
  'idle': '放置',
  'innovative': '创新',
  'racing': '竞速',
  'sports': '体育',
  'adventure': '冒险',
  'word': '文字',
  'sandbox': '沙盒',
  'music': '音乐',
  'action': '动作',
  'runner': '跑酷',
  'science': '科学',
  '3d': '3D',
  'retro': '复古',
  'survival': '生存',
  'scifi': '科幻',
  'art': '艺术',
  'industrial': '工业',
  'fighting': '格斗',
  'minimal': '极简',
  'horror': '恐怖',
  'management': '管理',
  'simulation': '模拟',
  'maze': '迷宫',
  'hacker': '黑客'
};

export default function CategoryPage() {
  const params = useParams();
  const categoryNameFromUrl = params?.name ? decodeURIComponent(params.name as string) : '';
  const { t, translateCategory, language } = useLanguage();

  // 尝试将英文分类名映射到中文
  const chineseCategoryName = categoryMappings[categoryNameFromUrl.toLowerCase()] || categoryNameFromUrl;

  // 使用中文分类名过滤游戏
  const categoryGames = games.filter(game => {
    return game.categories.some((cat: string | { en: string }) => {
      const catName = typeof cat === 'string' ? cat : cat.en;

      // 尝试完全匹配中文名称
      const chineseMatch = catName === chineseCategoryName;

      // 后备方案：尝试其他匹配方式
      const exactMatch = catName === categoryNameFromUrl;
      const lowercaseMatch = catName.toLowerCase() === categoryNameFromUrl.toLowerCase();
      const includesMatch = catName.toLowerCase().includes(categoryNameFromUrl.toLowerCase()) ||
        categoryNameFromUrl.toLowerCase().includes(catName.toLowerCase());

      return chineseMatch || exactMatch || lowercaseMatch || includesMatch;
    });
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-center">
            {translateCategory(categoryNameFromUrl)}
          </h1>
          <p className="text-center text-purple-100 mt-2">
            {categoryGames.length} {t('category.games')}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {categoryGames.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categoryGames.map(game => (
              <div key={game.id} className="flex flex-col">
                <Link
                  href={`/game/${game.id}`}
                  className="group flex-grow"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 mb-3">
                    {game.thumbnail ? (
                      <Image
                        src={game.thumbnail}
                        alt={game.titleTranslation?.[language] || game.title}
                        width={320}
                        height={180}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
                        <span className="text-2xl">
                          {(game.titleTranslation?.[language] || game.title)[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
                    {game.titleTranslation?.[language] || game.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {game.descriptionTranslation?.[language] || game.description?.slice(0, 60)}...
                  </p>
                </Link>

                <div className="mt-2 flex flex-wrap gap-2">
                  {game.categories.map((category: string | { en: string }) => {
                    // 获取类别的英文名称用于URL
                    const categoryUrlName = typeof category === 'object' ? category.en : category;
                    return (
                      <Link
                        key={`${game.id}-${categoryUrlName}`}
                        href={`/category/${categoryUrlName}`}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
                      >
                        {translateCategory(typeof category === 'object' ? category.en : category)}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl text-gray-600 mb-2">{t('category.noGamesFound')}</h3>
            <p className="text-gray-500">{t('category.tryAnotherCategory')}</p>
            <Link href="/" className="mt-6 inline-block px-5 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              {t('common.backToHome')}
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
