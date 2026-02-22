import { prisma } from "@/lib/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import ClientReader from "./ClientReader";

export default async function ChapterPage({ params }: { params: Promise<{ id: string, chapterId: string }> }) {
  const { id, chapterId } = await params;

  // 1. Fetch current chapter
  const chapter = await prisma.chapter.findUnique({
    where: { id: chapterId },
    include: { manga: true }
  });

  if (!chapter) return notFound();

  // 2. Fetch Prev/Next IDs for navigation
  const allChapters = await prisma.chapter.findMany({
    where: { mangaId: id },
    orderBy: { number: 'asc' },
    select: { id: true, number: true }
  });

  const currentIndex = allChapters.findIndex(c => c.id === chapterId);
  const prevChapter = allChapters[currentIndex - 1];
  const nextChapter = allChapters[currentIndex + 1];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between bg-gray-900/90 px-4 backdrop-blur-md border-b border-gray-800">
        <Link href={`/manga/${id}`} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
          <ChevronLeft className="h-5 w-5" />
          <span className="hidden sm:inline font-medium">{chapter.manga.title}</span>
        </Link>
        
        <h1 className="font-bold text-sm md:text-base">Ch. {chapter.number}</h1>
        
        <Link href="/" className="p-2 text-gray-400 hover:text-white transition-colors">
          <Home className="h-5 w-5" />
        </Link>
      </div>

      {/* The Reader Component */}
      <ClientReader pages={chapter.pages} />

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-20 flex items-center justify-center gap-4 bg-gray-900/90 px-4 backdrop-blur-md border-t border-gray-800">
        <Link 
           href={prevChapter ? `/manga/${id}/chapter/${prevChapter.id}` : "#"}
           className={`flex items-center gap-2 rounded-full border border-gray-700 bg-gray-800 px-6 py-2 transition-all hover:bg-gray-700 ${!prevChapter && 'opacity-50 pointer-events-none'}`}
        >
          <ChevronLeft className="h-4 w-4" /> Prev
        </Link>

        <Link 
           href={nextChapter ? `/manga/${id}/chapter/${nextChapter.id}` : "#"}
           className={`flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-2 font-bold text-white transition-all hover:bg-indigo-500 ${!nextChapter && 'opacity-50 pointer-events-none'}`}
        >
          Next <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}