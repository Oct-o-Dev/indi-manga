import MangaCard from "@/components/cards/MangaCard";

// 1. Dummy Data (This simulates what your Database will eventually send)
const POPULAR_MANGA = [
  { id: "1", title: "Solo Leveling", coverUrl: "https://placehold.co/400x600/1a1a1a/white?text=Solo+Leveling", latestChapter: "Ch. 200", rating: 4.9 },
  { id: "2", title: "One Piece", coverUrl: "https://placehold.co/400x600/darkred/white?text=One+Piece", latestChapter: "Ch. 1100", rating: 4.8 },
  { id: "3", title: "Jujutsu Kaisen", coverUrl: "https://placehold.co/400x600/darkblue/white?text=Jujutsu+Kaisen", latestChapter: "Ch. 245", rating: 4.7 },
  { id: "4", title: "Chainsaw Man", coverUrl: "https://placehold.co/400x600/orange/white?text=Chainsaw+Man", latestChapter: "Ch. 150", rating: 4.6 },
  { id: "5", title: "Omniscient Reader", coverUrl: "https://placehold.co/400x600/black/white?text=Omniscient", latestChapter: "Ch. 180", rating: 4.9 },
  { id: "6", title: "Tower of God", coverUrl: "https://placehold.co/400x600/gold/black?text=Tower+of+God", latestChapter: "Ch. 550", rating: 4.5 },
];

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      
      {/* Hero Section / Featured Banner */}
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
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            View all &rarr;
          </a>
        </div>

        {/* THE GRID: This handles the layout responsiveness */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {POPULAR_MANGA.map((manga) => (
            <MangaCard 
              key={manga.id}
              id={manga.id}
              title={manga.title}
              coverUrl={manga.coverUrl}
              latestChapter={manga.latestChapter}
              rating={manga.rating}
            />
          ))}
        </div>
      </section>

    </main>
  );
}