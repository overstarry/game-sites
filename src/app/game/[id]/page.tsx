'use client';

import Link from "next/link";
import Image from "next/image";
import { games } from "@/data/games";
import { notFound } from "next/navigation";
import { useState, useEffect, use, useMemo } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { categoryColors } from "@/utils/categoryColors";

function StarRating({ rating }: { rating: number }) {
  // Round the rating to the nearest integer to ensure consistent rendering
  const roundedRating = Math.round(rating);

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= roundedRating
            ? "text-yellow-400"
            : "text-gray-300"
            }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
}

function LoadingSpinner() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-center h-full bg-gray-100">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-gray-200 rounded-full animate-spin border-t-purple-600"></div>
        <div className="mt-4 text-gray-600">{t('game.loading')}</div>
      </div>
    </div>
  );
}

interface GameParams {
  id: string;
}

export const runtime = 'edge';

export default function GamePage({ params }: { params: Promise<GameParams> }) {
  const { t, translateCategory, language } = useLanguage();
  const [gameState, setGameState] = useState<'initial' | 'loading' | 'playing'>('initial');
  const [showNewGameButton, setShowNewGameButton] = useState(false);
  const [iframeRef, setIframeRef] = useState<HTMLIFrameElement | null>(null);
  const [playTime, setPlayTime] = useState<number>(2);

  const { id } = use(params);
  const game = games.find((g) => g.id === id);

  useEffect(() => {
    // Generate random play time only on the client side
    setPlayTime(Math.floor(Math.random() * 3 + 2));
  }, []);

  if (!game) {
    notFound();
  }

  // Use useMemo to ensure consistent related games calculation
  const relatedGames = useMemo(() => {
    const filtered = games
      .filter(g =>
        g.id !== game.id &&
        g.categories.some(cat => game.categories.includes(cat))
      );

    // Use a stable sorting method instead of random
    return filtered
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);
  }, [game.id, game.categories]);

  const startGame = () => {
    setGameState('loading');
    setTimeout(() => {
      setGameState('playing');
    }, 1500);
  };

  const restartGame = () => {
    setGameState('loading');
    setShowNewGameButton(false);
    setTimeout(() => {
      setGameState('playing');
      setShowNewGameButton(true);
    }, 1000);
  };

  const handleFullscreen = () => {
    if (iframeRef) {
      if (iframeRef.requestFullscreen) {
        iframeRef.requestFullscreen();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-purple-600 hover:text-purple-700 mr-4"
              >
                {t('game.backToHome')}
              </Link>
              <h1 className="text-2xl font-bold text-gray-800">
                {game.titleTranslation?.[language] || game.title}
              </h1>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {playTime} {t('game.playTime')}
              </div>
              <StarRating rating={game.rating} />
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {game.plays.toLocaleString()} {t('game.plays')}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            {gameState === 'initial' ? (
              <div className="w-full h-[calc(100vh-16rem)] bg-gradient-to-br from-purple-500 to-blue-600 text-white flex flex-col items-center justify-center">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-bold mb-4">
                    {game.titleTranslation?.[language] || game.title}
                  </h2>
                  <p className="text-purple-100 max-w-md mx-auto">
                    {game.descriptionTranslation?.[language] || game.description}
                  </p>
                </div>
                <button
                  onClick={startGame}
                  className="bg-white text-purple-600 hover:bg-purple-50 text-xl font-bold py-4 px-12 rounded-full shadow-lg transform transition hover:scale-105"
                >
                  {t('game.startButton')}
                </button>
              </div>
            ) : gameState === 'loading' ? (
              <div className="w-full h-[calc(100vh-16rem)]">
                <LoadingSpinner />
              </div>
            ) : (
              <div className="relative">
                <iframe
                  ref={setIframeRef}
                  src={game.path}
                  className="w-full h-[calc(100vh-16rem)] border-0"
                  title={game.titleTranslation?.[language] || game.title}
                  allowFullScreen
                  onLoad={() => setShowNewGameButton(true)}
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={handleFullscreen}
                    className="bg-gray-800 bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded transition-colors"
                    title={t('game.fullscreen')}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0 0l-5-5m-7 11h4m-4 0v4m0 4h-4m0 0l5-5" />
                    </svg>
                  </button>
                  {showNewGameButton && (
                    <button
                      onClick={restartGame}
                      className="bg-gray-800 bg-opacity-50 hover:bg-opacity-70 text-white px-3 py-2 rounded transition-colors"
                    >
                      {t('game.restart')}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Game info */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{t('game.info')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {game.descriptionTranslation?.[language] || game.description}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">{t('game.categories')}</h3>
              <div className="flex flex-wrap gap-2">
                {game.categories.map(category => (
                  <Link
                    key={category}
                    href={`/category/${category}`}
                    className={`px-3 py-1 ${categoryColors[category]?.bg || 'bg-purple-100'} ${categoryColors[category]?.text || 'text-purple-700'} rounded-full text-sm hover:opacity-80 transition-colors`}
                  >
                    {translateCategory(category)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{t('game.relatedGames')}</h2>
            <div className="space-y-4">
              {relatedGames.map(relatedGame => (
                <Link
                  key={relatedGame.id}
                  href={`/game/${relatedGame.id}`}
                  className="flex items-center p-2 -mx-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-16 h-12 bg-gray-200 rounded overflow-hidden flex-shrink-0 mr-3">
                    {relatedGame.thumbnail ? (
                      <Image
                        src={relatedGame.thumbnail}
                        alt={relatedGame.titleTranslation?.[language] || relatedGame.title}
                        width={64}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
                        <span>{(relatedGame.titleTranslation?.[language] || relatedGame.title)[0]}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {relatedGame.titleTranslation?.[language] || relatedGame.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-500">
                      <svg className="w-3 h-3 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {relatedGame.rating}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Game stats */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">{t('game.stats')}</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="text-sm text-gray-500 mb-1">{t('game.avgPlayTime')}</div>
              <div className="text-2xl font-bold text-gray-800">
                {playTime} {t('game.playTime')}
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-sm text-gray-500 mb-1">{t('game.difficulty')}</div>
              <div className="text-2xl font-bold text-gray-800">
                {Math.floor(Math.random() * 5) + 1}/5
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-sm text-gray-500 mb-1">{t('game.releaseDate')}</div>
              <div className="text-2xl font-bold text-gray-800">
                {new Date(Date.now() - Math.random() * 3 * 365 * 24 * 60 * 60 * 1000).toLocaleDateString(
                  language === 'en' ? 'en-US' : 'zh-CN',
                  { year: 'numeric', month: 'short' }
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
