import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const chapter = await prisma.chapter.findUnique({
      where: { id },
      select: {
        id: true,
        number: true,
        title: true,
        pages: true, // The array of image URLs
        mangaId: true,
      }
    });

    if (!chapter) {
      return NextResponse.json({ error: "Chapter not found" }, { status: 404 });
    }

    return NextResponse.json(chapter);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}