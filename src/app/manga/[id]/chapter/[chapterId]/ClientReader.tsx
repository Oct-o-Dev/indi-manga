"use client";
import { useState } from "react";

export default function ClientReader({ pages }: { pages: string[] }) {
  const [showControls, setShowControls] = useState(true);

  // Note: We don't hide the controls in the code here (logic is in parent CSS or we just leave them visible)
  // For now, this is a simple list of images.
  
  return (
    <div 
      className="mx-auto max-w-3xl flex flex-col items-center pb-24 pt-20 cursor-pointer min-h-screen"
      onClick={() => setShowControls(!showControls)}
    >
      {pages.map((src, index) => (
        <img 
          key={index} 
          src={src} 
          alt={`Page ${index + 1}`} 
          className="w-full h-auto shadow-xl mb-1" 
          loading="lazy" 
        />
      ))}
    </div>
  );
}