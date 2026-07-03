"use client";

import { useState } from "react";

import ParadeHero from "./parade-hero";
import ParadeStats from "./parade-stats";
import ParadeComingSoon from "./parade-coming-soon";
import ParadeYears from "./parade-years";
import ParadeGallery from "./parade-gallery";
import ParadeCTA from "./parade-cta";
import CtaBanner from "../../../shared/ctaBanner";
// import GalleryTestPage from "./gallery-test";

/**
 * Images grouped by parade year
 * Replace these with your real images.
 */

const paradeImages = {
  "2026": [],
  "2025": [
    "/gallery/parade/2025/1.jpg",
    "/gallery/parade/2025/2.jpg",
    "/gallery/parade/2025/3.jpg",
    "/gallery/parade/2025/4.jpg",
    "/gallery/parade/2025/5.jpg",
    "/gallery/parade/2025/6.jpg",
  ],
  "2024": [
    "/gallery/parade/2024/1.jpg",
    "/gallery/parade/2024/2.jpg",
    "/gallery/parade/2024/3.jpg",
    "/gallery/parade/2024/4.jpg",
  ],
  "2023": [
     "/images/hero.jpeg",
   "/images/hero.jpeg",
      "/images/hero.jpeg",
   "/gallery/gallery1.png",
  ],
} satisfies Record<string, string[]>;

export default function ParadePage() {
  /**
   * Active selected year
   */

  const [selectedYear, setSelectedYear] =
    useState<keyof typeof paradeImages>("2026");

  return (
    <>
      <ParadeHero />

      <ParadeStats />

      <ParadeComingSoon />

      <ParadeYears
        activeYear={selectedYear}
        onYearChange={(year) => setSelectedYear(year as keyof typeof paradeImages)}
      />

      <ParadeGallery
        year={selectedYear}
        images={
          paradeImages[selectedYear] ?? []
        }
      />
      <CtaBanner 
        heading="Become Part of Our Next Parade Story"
        subheading="Every parade tells a story of discipline, leadership and Christian service. Join the Boys' & Girls' Brigade and become part of the next chapter of our history."
        buttonLabel="Join The Brigade"
        buttonHref="/register"
      />
      {/* <ParadeCTA /> */}
      {/* <GalleryTestPage /> */}
    </>
  );
}