'use client';

import { games } from "@/data/games";
import { notFound } from "next/navigation";
import CategoryContent from "../../../components/CategoryContent";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { use } from "react";

interface CategoryParams {
  name: string;
}

export const runtime = 'edge';

export default function CategoryPage({ params }: { params: Promise<CategoryParams> }) {
  // In Next.js 15, params is a Promise that needs to be resolved with use() in client components
  const { name } = use(params);
  const decodedName = decodeURIComponent(name);
  const categoryGames = games.filter(game =>
    game.categories.includes(decodedName)
  );

  if (categoryGames.length === 0) {
    return notFound();
  }

  return (
    <LanguageProvider>
      <CategoryContent 
        categoryName={decodedName} 
        games={categoryGames} 
      />
    </LanguageProvider>
  );
}
