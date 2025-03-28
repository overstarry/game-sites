'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { useState } from 'react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-gray-50 border border-gray-200 hover:bg-purple-50 hover:border-purple-200 transition-all duration-200"
      >
        <span className={language === 'en' ? 'text-purple-700' : 'text-indigo-600'}>
          {language === 'en' ? 'EN' : '中文'}
        </span>
        <svg
          className={`w-4 h-4 ml-1.5 ${language === 'en' ? 'text-purple-400' : 'text-indigo-400'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-28 rounded-md shadow-lg bg-gray-50 border border-gray-200">
          <div className="py-1">
            <button
              onClick={() => {
                setLanguage('en');
                setIsOpen(false);
              }}
              className={`block w-full text-left px-3 py-1.5 text-sm ${language === 'en' ? 'bg-purple-50 text-purple-700 font-medium border-l-2 border-purple-500' : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'}`}
            >
              English
            </button>
            <button
              onClick={() => {
                setLanguage('zh');
                setIsOpen(false);
              }}
              className={`block w-full text-left px-3 py-1.5 text-sm ${language === 'zh' ? 'bg-indigo-50 text-indigo-600 font-medium border-l-2 border-indigo-500' : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'}`}
            >
              中文
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
