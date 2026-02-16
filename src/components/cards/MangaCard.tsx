import Link from 'next/link';
import { Star } from 'lucide-react';

interface MangaCardProps {
  id: string;
  title: string;
  coverUrl: string;
  latestChapter: string;
  rating: number;
}

export default function MangaCard({ id, title, coverUrl, latestChapter, rating }: MangaCardProps) {
  return (
    <Link href={`/manga/${id}`} className="group relative block overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:bg-gray-900">
      
      {/* Image Container */}
      <div className="aspect-[2/3] w-full overflow-hidden bg-gray-200 relative">
        <img 
          src={coverUrl} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      {/* Content Info */}
      <div className="p-3">
        <h3 className="line-clamp-1 text-sm font-bold text-gray-900 dark:text-gray-100" title={title}>
          {title}
        </h3>
        
        <div className="mt-2 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span className="font-medium text-indigo-600 dark:text-indigo-400">
            {latestChapter}
          </span>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}