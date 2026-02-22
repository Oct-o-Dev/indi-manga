"use client";

import { useEffect, useRef } from "react";
import { incrementMangaView } from "@/app/actions/view-actions";

export default function ViewTracker({ mangaId }: { mangaId: string }) {
  const hasViewed = useRef(false);

  useEffect(() => {
    // Ensure we only count 1 view per session/page refresh
    if (!hasViewed.current) {
      incrementMangaView(mangaId);
      hasViewed.current = true;
    }
  }, [mangaId]);

  return null; // This component renders nothing
}