"use client";

import { useMemo, useState } from "react";
import { Shield } from "lucide-react";

import type { GalleryCategory } from "../../../../../data/gallery";
import CtaBanner from "../../../shared/ctaBanner";
import AlbumGallery from "./album-gallery";
import AlbumHero from "./album-hero";
import AlbumLightbox from "./album-lightbox";
import AlbumOverview, { OutreachSponsorsMarquee } from "./album-overview";
import AlbumStats from "./album-stats";
import AlbumYears from "./album-years";

interface AlbumPageProps {
  album: GalleryCategory;
  categorySlug: string;
}

export default function AlbumPage({ album, categorySlug }: AlbumPageProps) {
  const initialYear =
    album.years.find((item) => item.status === "available")?.year ??
    album.years[0]?.year ??
    "";

  const [activeYear, setActiveYear] = useState(initialYear);
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const selectedYear = useMemo(
    () => album.years.find((item) => item.year === activeYear) ?? album.years[0],
    [activeYear, album.years],
  );

  const images = selectedYear?.images ?? [];
  const lightboxOpen = activeImage !== null && images.length > 0;

  const handleYearChange = (year: string) => {
    setActiveYear(year);
    setActiveImage(null);

    window.requestAnimationFrame(() => {
      document
        .getElementById("gallery")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const showPrevious = () => {
    setActiveImage((current) =>
      current === null || current === 0 ? current : current - 1,
    );
  };

  const showNext = () => {
    setActiveImage((current) =>
      current === null || current === images.length - 1 ? current : current + 1,
    );
  };

  return (
    <main className="bg-background text-foreground">
      <AlbumHero album={album} />
      <AlbumOverview album={album} categorySlug={categorySlug} />
      {categorySlug === "outreach" ? <OutreachSponsorsMarquee /> : null}
      <AlbumStats album={album} />
      <AlbumYears
        album={album}
        activeYear={activeYear}
        onYearChange={handleYearChange}
      />
      <AlbumGallery
        albumTitle={album.shortTitle}
        pattern={album.galleryPattern}
        year={activeYear}
        images={images}
        onOpen={setActiveImage}
      />
      <CtaBanner icon={<Shield size={22} />} {...album.cta} />

      <AlbumLightbox
        open={lightboxOpen}
        image={activeImage === null ? "" : images[activeImage]}
        title={`${album.shortTitle} ${activeYear}`}
        current={activeImage ?? 0}
        total={images.length}
        isAtStart={(activeImage ?? 0) === 0}
        isAtEnd={(activeImage ?? 0) === images.length - 1}
        onClose={() => setActiveImage(null)}
        onNext={showNext}
        onPrevious={showPrevious}
      />
    </main>
  );
}
