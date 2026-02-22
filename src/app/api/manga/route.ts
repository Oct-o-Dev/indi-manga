import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const mangas = await prisma.manga.findMany({
      take: 20,
      orderBy: { views: 'desc' }, // Default to "Popular"
      include: {
        chapters: {
          take: 1,
          orderBy: { number: 'desc' },
          select: { number: true } // Only need the number
        }
      }
    });
    
    return NextResponse.json(mangas);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch manga" }, { status: 500 });
  }
}