import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const manga = await prisma.manga.findUnique({
      where: { id },
      include: {
        chapters: {
          orderBy: { number: 'desc' }, // Newest chapters first
          select: {
            id: true,
            number: true,
            title: true,
            createdAt: true,
          }
        }
      }
    });

    if (!manga) {
      return NextResponse.json({ error: "Manga not found" }, { status: 404 });
    }

    return NextResponse.json(manga);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}