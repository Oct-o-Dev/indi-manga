"use client";

// 1. Import 'use' from react
import { useState, useEffect, use } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Home, List } from "lucide-react";

const MOCK_CHAPTER_IMAGES = [
  "https://placehold.co/800x1200/1a1a1a/white?text=Page+1",
  "https://placehold.co/800x1200/2a2a2a/white?text=Page+2",
];

// 2. Pass params as props typed as a Promise
export default function ChapterReaderPage({ params }: { params: Promise<{ id: string, chapterId: string }> }) {
  
  // 3. Unwrap params using React.use()
  const { id, chapterId } = use(params);
  
  const [showControls, setShowControls] = useState(true);

  const toggleControls = () => setShowControls(!showControls);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showControls) {
      timer = setTimeout(() => setShowControls(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [showControls]);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* --- TOP NAVIGATION --- */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showControls ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex h-16 items-center justify-between bg-gray-900/90 px-4 backdrop-blur-md">
          <Link 
            // 4. Use the unwrapped 'id' directly
            href={`/manga/${id}`} 
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            <List className="h-4 w-4" />
            <span className="hidden sm:block">Back to Series</span>
          </Link>

          <h1 className="text-sm font-bold text-white">Chapter {chapterId}</h1>

          <Link href="/" className="p-2 text-gray-300 hover:text-white">
            <Home className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* --- MAIN IMAGE READER AREA --- */}
      <div 
        className="mx-auto max-w-3xl flex flex-col items-center min-h-screen pb-24 pt-16 cursor-pointer"
        onClick={toggleControls}
      >
        {MOCK_CHAPTER_IMAGES.map((src, index) => (
          <img key={index} src={src} alt={`Page ${index + 1}`} className="w-full h-auto shadow-xl" loading="lazy" />
        ))}
      </div>
      {/* --- BOTTOM NAVIGATION BAR (Floating) --- */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${showControls ? "translate-y-0" : "translate-y-full"}`}>
        <div className="flex h-20 items-center justify-center gap-6 bg-gray-900/90 px-4 backdrop-blur-md">
          
          {/* Previous Chapter Button (Disabled for mock data) */}
          <button className="flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-6 py-2 text-sm font-medium hover:bg-gray-700 disabled:opacity-50" disabled>
            <ChevronLeft className="h-4 w-4" />
            Prev
          </button>

          {/* Next Chapter Button (Disabled for mock data until we hook up the DB) */}
          <button className="flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-2 text-sm font-bold text-white hover:bg-indigo-500 disabled:opacity-50" disabled>
            Next
            <ChevronRight className="h-4 w-4" />
          </button>

        </div>
      </div>
    </div>
  );
}