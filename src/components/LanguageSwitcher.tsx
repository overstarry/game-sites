'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded ${
          language === 'en' 
            ? 'bg-purple-600 text-white' 
            : 'text-gray-600 hover:text-purple-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('zh')}
        className={`px-2 py-1 rounded ${
          language === 'zh' 
            ? 'bg-purple-600 text-white' 
            : 'text-gray-600 hover:text-purple-600'
        }`}
      >
        中文
      </button>
    </div>
  );
}
