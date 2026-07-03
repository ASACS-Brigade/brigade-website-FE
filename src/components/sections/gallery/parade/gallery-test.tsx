// app/gallery-test/page.tsx

import ParadeGallery from "../../../../components/sections/gallery/parade/parade-gallery"; // adjust path

export default function GalleryTestPage() {
  // Sample image URLs (using public images from Unsplash)
  const testImages = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800",
     "/images/hero.jpeg",
   "/images/hero.jpeg",

  ];

  return (
    <main>
      <ParadeGallery year="2024" images={testImages} />
    </main>
  );
}