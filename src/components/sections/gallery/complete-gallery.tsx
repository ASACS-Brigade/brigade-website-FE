"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowLeft, ImageIcon } from "lucide-react";
import Link from "next/link";
import { galleryCategories } from "../../../../data/gallery";
import Container from "../../layout/container";
import AlbumLightbox from "./category-album/album-lightbox";

type CompleteGalleryItem = {
  id: string;
  image: string;
  title: string;
  categorySlug: string;
  categoryTitle: string;
  year?: string;
};

const categoryEntries = Object.entries(galleryCategories);

const completeGalleryItems = categoryEntries.flatMap(
  ([categorySlug, category]) => {
    const seenImages = new Set<string>();
    const items: CompleteGalleryItem[] = [];

    const addImage = (image: string, title: string, year?: string) => {
      if (seenImages.has(image)) return;

      seenImages.add(image);
      items.push({
        id: `${categorySlug}-${items.length}`,
        image,
        title,
        categorySlug,
        categoryTitle: category.shortTitle,
        year,
      });
    };

    addImage(category.heroImage, `${category.shortTitle} cover`);

    category.years.forEach((year) => {
      year.images.forEach((image, imageIndex) => {
        addImage(image, `${year.title} ${imageIndex + 1}`, year.year);
      });
    });

    category.images.forEach((image, imageIndex) => {
      addImage(image, `${category.shortTitle} photo ${imageIndex + 1}`);
    });

    return items;
  }
);

export default function CompleteGallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeItemId, setActiveItemId] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return completeGalleryItems;
    return completeGalleryItems.filter(
      (item) => item.categorySlug === activeCategory
    );
  }, [activeCategory]);

  const activeIndex = activeItemId
    ? filteredItems.findIndex((item) => item.id === activeItemId)
    : -1;
  const activeItem = activeIndex >= 0 ? filteredItems[activeIndex] : null;

  const showPrevious = () => {
    if (activeIndex <= 0) return;
    setActiveItemId(filteredItems[activeIndex - 1].id);
  };

  const showNext = () => {
    if (activeIndex < 0 || activeIndex >= filteredItems.length - 1) return;
    setActiveItemId(filteredItems[activeIndex + 1].id);
  };

  return (
    <section className="bg-background py-12 sm:py-16 lg:py-12">
      <Container>
         <Link
              href="/gallery"
              className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-primary"
            >
              <ArrowLeft size={16} />
              Back to gallery
            </Link>
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {/* <Link
              href="/gallery"
              className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-primary"
            >
              <ArrowLeft size={16} />
              Back to gallery
            </Link> */}

            <span className="text-secondary uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold">
              Complete Gallery
            </span>
            <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              All Brigade Moments
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
              Browse every available photo across parade, outreach, band,
              enrolment, awards and camp albums in one place.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
            <ImageIcon size={17} className="text-secondary" />
            {filteredItems.length} Photos
          </div>
        </div>

        <div className="mb-8 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeCategory === "all"
                ? "border-secondary bg-secondary text-white shadow-md"
                : "border-gray-200 bg-white text-gray-700 hover:border-secondary hover:text-secondary"
            }`}
          >
            All
          </button>

          {categoryEntries.map(([slug, category]) => (
            <button
              key={slug}
              type="button"
              onClick={() => setActiveCategory(slug)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                activeCategory === slug
                  ? "border-secondary bg-secondary text-white shadow-md"
                  : "border-gray-200 bg-white text-gray-700 hover:border-secondary hover:text-secondary"
              }`}
            >
              {category.shortTitle}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveItemId(item.id)}
              className="group overflow-hidden rounded-lg border border-gray-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              <span className="relative block aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={index < 4}
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-gray-900 shadow-sm">
                  {item.categoryTitle}
                </span>
              </span>

              <span className="block p-4">
                <span className="block text-sm font-bold text-gray-900">
                  {item.title}
                </span>
                {item.year ? (
                  <span className="mt-1 block text-xs font-semibold text-gray-500">
                    {item.year}
                  </span>
                ) : null}
              </span>
            </button>
          ))}
        </div>
      </Container>

      <AlbumLightbox
        open={Boolean(activeItem)}
        image={activeItem?.image ?? ""}
        title={activeItem?.title ?? ""}
        current={activeIndex}
        total={filteredItems.length}
        isAtStart={activeIndex <= 0}
        isAtEnd={activeIndex >= filteredItems.length - 1}
        onClose={() => setActiveItemId(null)}
        onNext={showNext}
        onPrevious={showPrevious}
      />
    </section>
  );
}
