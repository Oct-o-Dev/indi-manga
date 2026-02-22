import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, Clock, BookOpen, List } from 'lucide-react';
import { prisma } from '@/lib/db';

export default async function MangaDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // 1. Fetch Manga + All Chapters (Sorted by newest)
  const manga = await prisma.manga.findUnique({
    where: { id },
    include: {
      chapters: {
        orderBy: { number: 'desc' }
      }
    }
  });

  if (!manga) return notFound();

  // Get the first chapter ID for the "Start Reading" button
  // Since we sorted desc, the "first" chapter is actually at the end of the array
  const firstChapter = manga.chapters[manga.chapters.length - 1];

  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Top Section: Cover & Info */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Left Column: Cover Image */}
          <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
            <div className="aspect-[2/3] w-full overflow-hidden rounded-xl shadow-lg relative">
              <img 
                src={manga.coverUrl} 
                alt={manga.title} 
                className="h-full w-full object-cover"
              />
            </div>
            
            {firstChapter && (
               <Link 
                 href={`/manga/${manga.id}/chapter/${firstChapter.id}`}
                 className="mt-4 block w-full rounded-md bg-indigo-600 py-3 text-center font-semibold text-white transition-colors hover:bg-indigo-700"
               >
                 Start Reading Ch. {firstChapter.number}
               </Link>
            )}
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
              <p className="leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {manga.description}
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
                href={`/manga/${manga.id}/chapter/${chapter.id}`}
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
                  {new Date(chapter.createdAt).toLocaleDateString()}
                </span>
              </Link>
            ))}
            
            {manga.chapters.length === 0 && (
                <p className="text-gray-500 italic">No chapters uploaded yet.</p>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}