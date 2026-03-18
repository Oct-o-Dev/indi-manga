"use server";

import { prisma } from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import { redirect } from "next/navigation";

// This function handles the form submission
export async function createManga(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const author = formData.get("author") as string;
  const coverImage = formData.get("cover") as File;

  if (!coverImage || !title) {
    throw new Error("Missing fields");
  }

  // 1. Upload Image to Cloudinary
  // We need to convert the File to a Buffer for Cloudinary
  const arrayBuffer = await coverImage.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  // Upload using a Promise wrapper
  const uploadResult: any = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: "indi-manga-covers" }, // Folder name in Cloudinary
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(buffer);
  });

  // 2. Save to Database (Supabase)
  await prisma.manga.create({
    data: {
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"), // "Solo Leveling" -> "solo-leveling"
      description,
      author,
      coverUrl: uploadResult.secure_url, // URL from Cloudinary
      status: "Ongoing",
      releaseYear: new Date().getFullYear(),
    },
  });

  // 3. Redirect back home
  redirect("/");
}