"use client";

import { useState } from "react";

import ParadeHero from "./parade-hero";
import ParadeStats from "./parade-stats";
import ParadeComingSoon from "./parade-coming-soon";
import ParadeYears from "./parade-years";
import ParadeGallery from "./parade-gallery";

import CtaBanner from "../../../shared/ctaBanner";
import type { GalleryCategory } from "../../../../../data/gallery";
import AlbumOverview from "../category-album/album-overview";
// import GalleryTestPage from "./gallery-test";

/**
 * Images grouped by parade year
 * Replace these with your real images.
 */

const paradeImages: Record<string, string[]> = {
  "2026": [],
  "2025": [
    "/gallery/gallery1.png",
    "/images/hero.jpeg",
    "/events/pic1.png",
    "/events/pic2.png",
    "/events/pic3.png",
    "/about/biblestud.jpeg",
  ],
  "2024": [
    "/images/hero.jpeg",
    "/gallery/gallery1.png",
    "/events/pic2.png",
    "/about/william-A-Smith.jpg",
  ],
  "2023": [
    "/events/pic1.png",
    "/events/pic3.png",
    "/images/hero.jpeg",
    "/gallery/gallery1.png",
  ],
} satisfies Record<string, string[]>;

function getParadeImages(album?: GalleryCategory) {
  if (!album?.years.length) {
    return paradeImages;
  }

  const images = Object.fromEntries(
    album.years.map((year) => [year.year, year.images]),
  );

  return {
    ...paradeImages,
    ...images,
  };
}

export default function ParadePage({ album }: { album?: GalleryCategory }) {
  const imageGroups = getParadeImages(album);
  const initialYear =
    album?.years[0]?.year ?? Object.keys(imageGroups)[0] ?? "2026";

  /**
   * Active selected year
   */

  const [selectedYear, setSelectedYear] = useState(initialYear);

  return (
    <>
      <ParadeHero />

      {album ? <AlbumOverview album={album} categorySlug="parade" /> : null}

      <ParadeStats />

      <ParadeComingSoon />

      <ParadeYears
        activeYear={selectedYear}
        onYearChange={setSelectedYear}
        years={album?.years}
      />

      <ParadeGallery
        year={selectedYear}
        images={
          imageGroups[selectedYear] ?? []
        }
      />
      <CtaBanner
        heading="Become Part of Our Next Parade Story"
        subheading="Every parade tells a story of discipline, leadership and Christian service. Join the Boys' & Girls' Brigade and become part of the next chapter of our history."
        buttonLabel="Join The Brigade"
        buttonHref="/register"
      />

    </>
  );
}
