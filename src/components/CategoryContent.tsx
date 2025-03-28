'use client';

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";
import { Game } from "@/data/games";
import { categoryColors } from "@/utils/categoryColors";

type CategoryContentProps = {
  categoryName: string;
  games: Game[];
};

export default function CategoryContent({ categoryName, games }: CategoryContentProps) {
  const { t, translateCategory, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Link
              href="/"
              className="text-white/80 hover:text-white mr-4"
            >
              {t('game.backToHome')}
            </Link>
            <h1 className="text-3xl font-bold">{translateCategory(categoryName)}</h1>
          </div>
          <p className="text-purple-100">
            {language === 'en' ? `Total ${games.length} games` : `共 ${games.length} 个游戏`}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map(game => (
            <Link
              key={game.id}
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
              <p className="text-sm text-gray-500 line-clamp-2">
                {game.descriptionTranslation?.[language] || game.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {game.categories.map(cat => (
                  cat === categoryName ? (
                    <span
                      key={cat}
                      className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700"
                    >
                      {translateCategory(cat)}
                    </span>
                  ) : (
                    <Link
                      key={cat}
                      href={`/category/${cat}`}
                      className={`text-xs px-2 py-1 rounded-full ${categoryColors[cat]?.bg || 'bg-gray-100'} ${categoryColors[cat]?.text || 'text-gray-600'} hover:bg-gray-200`}
                    >
                      {translateCategory(cat)}
                    </Link>
                  )
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
