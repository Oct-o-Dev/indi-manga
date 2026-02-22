"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function incrementMangaView(mangaId: string) {
  try {
    // Atomic Increment: This handles concurrency automatically
    await prisma.manga.update({
      where: { id: mangaId },
      data: {
        views: {
          increment: 1 // <--- THIS is the magic concurrency fix
        }
      }
    });
    
    // Optional: Revalidate the page so the new view count shows up immediately
    // revalidatePath(`/manga/${mangaId}`); 
  } catch (error) {
    console.error("Failed to increment view count", error);
  }
}