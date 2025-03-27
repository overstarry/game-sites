'use client';

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';

export function Footer() {
    const { t } = useLanguage();

    const navItems = [
        { href: '/about', text: t('footer.about') },
        { href: '/privacy', text: t('footer.privacy') },
        { href: '/terms', text: t('footer.terms') },
        { href: 'mailto:jm1179356055@gmail.com', text: t('footer.contact') },
    ];

    return (
        <footer className="bg-white border-t border-gray-200 py-4 px-4 z-50 w-full">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-base text-gray-600">
                    © {(() => {
                        const currentYear = new Date().getFullYear();
                        return currentYear === 2025 ? '2025' : `2025-${currentYear}`;
                    })()} jasminides, Inc
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="text-base text-gray-600 hover:text-gray-800 transition-colors"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
}