'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Game } from '@/data/games';
import { useLanguage } from '@/i18n/LanguageContext';

interface SearchBarProps {
  games: Game[];
}

export function SearchBar({ games }: SearchBarProps) {
  const { t, language } = useLanguage();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<Game[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length >= 1) {
      const searchResults = games.filter(game => 
        (game.titleTranslation?.[language] || game.title).toLowerCase().includes(query.toLowerCase()) ||
        (game.descriptionTranslation?.[language] || game.description).toLowerCase().includes(query.toLowerCase()) ||
        game.categories.some(cat => cat.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 5);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, games, language]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && results.length > 0) {
      router.push(`/game/${results[0].id}`);
      setIsOpen(false);
      setQuery('');
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('search.placeholder')}
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
        />
        <svg
          className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg">
          {results.map(game => (
            <Link
              key={game.id}
              href={`/game/${game.id}`}
              onClick={() => {
                setIsOpen(false);
                setQuery('');
              }}
              className="block px-4 py-2 hover:bg-gray-100 transition-colors"
            >
              <div className="font-medium text-gray-800">{game.titleTranslation?.[language] || game.title}</div>
              <div className="text-sm text-gray-500 truncate">{game.descriptionTranslation?.[language] || game.description}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
