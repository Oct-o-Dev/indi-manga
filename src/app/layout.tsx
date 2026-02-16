import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

// We use the Inter font for a clean, modern look
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MangaHub | Read Free Manga and Manhwa",
  description: "Your go-to platform for the latest manga, manhwa, and manhua.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        {/* The Navbar stays at the top of every page */}
        <Navbar />
        
        {/* The rest of your page content renders here */}
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}