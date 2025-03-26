'use client';

import Link from "next/link";
import Image from "next/image";
import { games } from "@/data/games";
import { useLanguage } from "@/i18n/LanguageContext";

// Get all game categories
const allCategories = Array.from(
  new Set(games.flatMap(game => game.categories))
).sort();

// Get games for each category
const categoryGames = {
  "热门": games.filter(game => game.categories.includes("热门")),
  "经典": games.filter(game => game.categories.includes("经典")),
  "益智": games.filter(game => game.categories.includes("益智")),
  "街机": games.filter(game => game.categories.includes("街机")),
  "休闲": games.filter(game => game.categories.includes("休闲")),
  "动作": games.filter(game => game.categories.includes("动作")),
  "射击": games.filter(game => game.categories.includes("射击")),
  "解谜": games.filter(game => game.categories.includes("解谜")),
  "策略": games.filter(game => game.categories.includes("策略")),
  "冒险": games.filter(game => game.categories.includes("冒险")),
};

// Get top rated games
const topRatedGames = [...games]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 4);

// Get most played games
const mostPlayedGames = [...games]
  .sort((a, b) => b.plays - a.plays)
  .slice(0, 4);

export default function Home() {
  const { t, translateCategory, language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl text-center text-purple-100 mb-8">
            {t('home.hero.subtitle')}
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-8 mb-8 text-center">
            <div>
              <div className="text-3xl font-bold">{games.length}</div>
              <div className="text-purple-200">{t('home.stats.totalGames')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{allCategories.length}</div>
              <div className="text-purple-200">{t('home.stats.categories')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{Math.round(games.reduce((acc, game) => acc + game.plays, 0) / 1000)}k+</div>
              <div className="text-purple-200">{t('home.stats.totalPlays')}</div>
            </div>
          </div>
          
          {/* Categories Navigation */}
          <div className="flex flex-wrap justify-center gap-4">
            {allCategories.map(category => (
              <Link
                key={category}
                href={`/category/${category}`}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                {translateCategory(category)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Featured Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {t('home.section.topRated')}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {topRatedGames.map(game => (
                <Link
                  key={`top-rated-${game.id}`}
                  href={`/game/${game.id}`}
                  className="group"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 mb-2">
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
                        <span className="text-2xl">{(game.titleTranslation?.[language] || game.title)[0]}</span>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-2 py-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm truncate">{game.titleTranslation?.[language] || game.title}</span>
                        <span className="text-yellow-400 text-sm">★ {game.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {t('home.section.mostPlayed')}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {mostPlayedGames.map(game => (
                <Link
                  key={`most-played-${game.id}`}
                  href={`/game/${game.id}`}
                  className="group"
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 mb-2">
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
                        <span className="text-2xl">{(game.titleTranslation?.[language] || game.title)[0]}</span>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-2 py-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm truncate">{game.titleTranslation?.[language] || game.title}</span>
                        <span className="text-sm">{(game.plays / 1000).toFixed(1)}k {language === 'en' ? 'plays' : '次'}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Categories */}
        {Object.entries(categoryGames).map(([category, categoryGames]) => (
          categoryGames.length > 0 && (
            <section key={translateCategory(category)} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                {translateCategory(category)}
                <Link 
                  href={`/category/${category}`}
                  className="ml-4 text-sm text-purple-600 hover:text-purple-700"
                >
                  {t('home.viewAll')} ({categoryGames.length}) →
                </Link>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {categoryGames.slice(0, 5).map(game => (
                  <Link
                    key={`${translateCategory(category)}-${game.id}`}
                    href={`/game/${game.id}`}
                    className="group"
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
                          <span className="text-2xl">{(game.titleTranslation?.[language] || game.title)[0]}</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-200" />
                    </div>
                    <h3 className="font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
                      {game.titleTranslation?.[language] || game.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {game.rating}
                      </span>
                      <span className="mx-2">•</span>
                      <span>{(game.plays / 1000).toFixed(1)}k {language === 'en' ? 'plays' : '次'}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        ))}
      </main>
    </div>
  );
}
