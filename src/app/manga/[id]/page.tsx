import Link from 'next/link';
import { Star, Clock, BookOpen, List } from 'lucide-react';

const MOCK_MANGA_DETAIL = {
  // ... (keep your existing MOCK_MANGA_DETAIL data exactly as it is)
  id: "1",
  title: "Solo Leveling",
  author: "Chugong",
  status: "Completed",
  rating: 4.9,
  views: "2.4M",
  coverUrl: "https://placehold.co/400x600/1a1a1a/white?text=Solo+Leveling",
  genres: ["Action", "Fantasy", "Adventure"],
  synopsis: "Ten years ago, 'the Gate' appeared...",
  chapters: [
    { id: "c200", number: "200", title: "The Final Battle", date: "2 days ago" },
    { id: "c1", number: "1", title: "The Weakest Hunter", date: "3 years ago" },
  ]
};

// 1. ADD 'async' and type params as a Promise
export default async function MangaDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // 2. AWAIT the params to unwrap them safely
  const resolvedParams = await params;
  const mangaId = resolvedParams.id;
  
  const manga = MOCK_MANGA_DETAIL;

  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Top Section: Cover & Info */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left Column: Cover Image */}
          <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
            <div className="aspect-[2/3] w-full overflow-hidden rounded-xl shadow-lg">
              <img 
                src={manga.coverUrl} 
                alt={manga.title} 
                className="h-full w-full object-cover"
              />
            </div>
            <button className="mt-4 w-full rounded-md bg-indigo-600 py-3 font-semibold text-white transition-colors hover:bg-indigo-700">
              Start Reading Ch. 1
            </button>
          </div>

          {/* Right Column: Manga Details */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
              {manga.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              By {manga.author}
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-4 mb-6 text-sm font-medium">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="h-4 w-4 fill-current" /> {manga.rating} Rating
              </div>
              <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <BookOpen className="h-4 w-4" /> {manga.status}
              </div>
              <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <Clock className="h-4 w-4" /> {manga.views} Views
              </div>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-6">
              {manga.genres.map(genre => (
                <span key={genre} className="rounded-full bg-gray-200 dark:bg-gray-800 px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {genre}
                </span>
              ))}
            </div>

            {/* Synopsis */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Synopsis</h3>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                {manga.synopsis}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Chapter List */}
        <div className="mt-12">
          <div className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-800 pb-4 mb-4">
            <List className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Chapters</h2>
          </div>

          <div className="flex flex-col gap-2">
            {manga.chapters.map((chapter) => (
              <Link 
                key={chapter.id}
                // 3. USE the unwrapped mangaId variable here!
                href={`/manga/${mangaId}/chapter/${chapter.id}`}
                className="flex items-center justify-between rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white">Chapter {chapter.number}</span>
                  {chapter.title && (
                    <span className="ml-2 hidden text-sm text-gray-500 sm:inline-block">
                      - {chapter.title}
                    </span>
                  )}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {chapter.date}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}