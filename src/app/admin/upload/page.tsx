"use client";

import { createManga } from "@/app/actions";

export default function AdminUploadPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-indigo-400">Upload New Manga</h1>
        
        {/* The Form calls our Server Action directly */}
        <form action={createManga} className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input name="title" type="text" required className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-indigo-500 outline-none" placeholder="e.g. Solo Leveling" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Author</label>
            <input name="author" type="text" required className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-indigo-500 outline-none" placeholder="e.g. Chu-Gong" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea name="description" required rows={3} className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-indigo-500 outline-none" placeholder="Synopsis..." />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Cover Image</label>
            <input name="cover" type="file" accept="image/*" required className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-500"/>
          </div>

          <button type="submit" className="w-full py-3 mt-4 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-bold transition-colors">
            Upload Manga
          </button>
        </form>

      </div>
    </div>
  );
}