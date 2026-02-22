"use client";

import { useState, useEffect } from "react";

type HistoryItem = {
  mangaId: string;
  mangaTitle: string;
  chapterId: string;
  chapterNumber: number;
  readAt: number; // Timestamp
};

export function useReadingHistory() {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // Load history on mount
  useEffect(() => {
    const stored = localStorage.getItem("manga_history");
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  const addToHistory = (item: Omit<HistoryItem, "readAt">) => {
    const newItem = { ...item, readAt: Date.now() };
    
    // Remove duplicates (if any) and add new item to the top
    const updatedHistory = [
      newItem,
      ...history.filter((h) => h.mangaId !== item.mangaId), 
    ].slice(0, 20); // Keep only last 20 items

    setHistory(updatedHistory);
    localStorage.setItem("manga_history", JSON.stringify(updatedHistory));
  };

  return { history, addToHistory };
}