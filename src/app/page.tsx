import { prisma } from "@/lib/db";
import MangaCard from "@/components/cards/MangaCard";

// Revalidate data every 60 seconds (Keeps the site fast but fresh)
export const revalidate = 60;

export default async function Home() {
  // 1. Fetch Real Data from DB
  const popularManga = await prisma.manga.findMany({
    take: 12,
    orderBy: { views: 'desc' }, // Show most popular first
    include: {
      chapters: {
        take: 1,
        orderBy: { number: 'desc' },
        select: { number: true }
      }
    }
  });

  return (
    <main className="min-h-screen pb-20">
      
      {/* Hero Section */}
      <section className="bg-indigo-600 py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold tracking-tight">Welcome to MangaHub</h1>
          <p className="mt-4 max-w-xl text-lg text-indigo-100">
            Read the latest manga, manhwa, and manhua releases. High quality, free, and updated daily.
          </p>
        </div>
      </section>

      {/* Popular Updates Section */}
      <section className="container mx-auto mt-10 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Popular Updates
          </h2>
        </div>

        {/* THE GRID */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {popularManga.map((manga) => {
            // Calculate "Latest Chapter" string safely
            const latestCh = manga.chapters[0] 
              ? `Ch. ${manga.chapters[0].number}` 
              : "New";

            return (
              <MangaCard 
                key={manga.id}
                id={manga.id}
                title={manga.title}
                coverUrl={manga.coverUrl}
                latestChapter={latestCh}
                rating={manga.rating}
              />
            );
          })}

          {popularManga.length === 0 && (
            <div className="col-span-full text-center py-20 text-gray-500">
              No manga found. The database might be empty.
            </div>
          )}
        </div>
      </section>

    </main>
  );
}