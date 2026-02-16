import Link from 'next/link';
import { Search, Upload, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white shadow-sm dark:bg-gray-950 dark:border-gray-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo & Brand */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-indigo-600 dark:text-indigo-400">
            MangaHub.
          </Link>
          <div className="hidden md:flex gap-4 text-sm font-medium text-gray-600 dark:text-gray-300">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <Link href="/catalog" className="hover:text-indigo-600 transition-colors">Catalog</Link>
            <Link href="/latest" className="hover:text-indigo-600 transition-colors">Latest Updates</Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden flex-1 max-w-md mx-8 lg:flex items-center relative">
          <Search className="absolute left-3 h-4 w-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search manga, authors, or genres..." 
            className="w-full rounded-full border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          <Link href="/dashboard/upload" className="hidden sm:flex items-center gap-2 rounded-md bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400">
            <Upload className="h-4 w-4" />
            Upload
          </Link>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
            <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

      </div>
    </nav>
  );
}