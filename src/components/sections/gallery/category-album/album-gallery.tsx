"use client";

import Image from "next/image";
import { CalendarDays, Expand, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

import type { GalleryCategory } from "../../../../../data/gallery";
import Container from "../../../layout/container";

interface AlbumGalleryProps {
  albumTitle: string;
  pattern: GalleryCategory["galleryPattern"];
  year: string;
  images: string[];
  onOpen: (index: number) => void;
}

const masonryHeights = ["h-[470px]", "h-[310px]", "h-[390px]", "h-[280px]", "h-[430px]", "h-[340px]"];

const mosaicClasses = [
  "md:col-span-2 md:row-span-2 min-h-[360px]",
  "min-h-[240px]",
  "min-h-[240px]",
  "min-h-[300px]",
  "md:col-span-2 min-h-[300px]",
  "min-h-[300px]",
];

export default function AlbumGallery({
  albumTitle,
  pattern,
  year,
  images,
  onOpen,
}: AlbumGalleryProps) {
  const renderImageButton = (
    image: string,
    index: number,
    className: string,
    labelMode: "hover" | "below" | "side" = "hover",
  ) => (
    <button
      type="button"
      onClick={() => onOpen(index)}
      onContextMenu={(event) => event.preventDefault()}
      className={`${className} group relative block w-full overflow-hidden bg-card text-left`}
    >
      <Image
        src={image}
        alt={`${albumTitle} ${year} photo ${index + 1}`}
        fill
        sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
        draggable={false}
        className="select-none object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/30" />

      <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-primary opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100">
        <Expand size={18} />
      </div>

      {labelMode === "below" ? null : (
        <div
          className={`absolute ${
            labelMode === "side"
              ? "bottom-5 left-5 max-w-[70%]"
              : "bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
          }`}
        >
          <span className="text-sm font-semibold text-secondary">{year}</span>
          <h3 className="mt-1 text-xl font-bold text-white">{albumTitle}</h3>
        </div>
      )}
    </button>
  );

  const renderGalleryPattern = () => {
    if (pattern === "feature") {
      return (
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            className="min-h-[420px]"
          >
            {renderImageButton(images[0], 0, "h-full min-h-[420px] rounded-2xl", "side")}
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {images.slice(1).map((image, offset) => {
              const index = offset + 1;
              return (
                <motion.div
                  key={`${year}-${image}-${index}`}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06 }}
                >
                  {renderImageButton(image, index, "h-[220px] rounded-2xl")}
                </motion.div>
              );
            })}
          </div>
        </div>
      );
    }

    if (pattern === "rows") {
      return (
        <div className="mt-10 space-y-5">
          {images.map((image, index) => (
            <motion.div
              key={`${year}-${image}-${index}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -36 : 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              className={`grid gap-5 rounded-2xl border border-border bg-card p-4 md:grid-cols-[1fr_260px] ${
                index % 2 === 1 ? "md:grid-cols-[260px_1fr]" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                {renderImageButton(image, index, "h-[260px] rounded-xl md:h-[300px]", "hover")}
              </div>
              <div className="flex flex-col justify-center p-2 md:p-4">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  {year}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-primary">
                  {albumTitle} Moment {index + 1}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  A selected memory from this year, arranged in a wider story
                  layout for easier scanning.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      );
    }

    if (pattern === "mosaic") {
      return (
        <div className="mt-10 grid auto-rows-[180px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={`${year}-${image}-${index}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ delay: index * 0.05 }}
              className={mosaicClasses[index % mosaicClasses.length]}
            >
              {renderImageButton(image, index, "h-full rounded-2xl")}
            </motion.div>
          ))}
        </div>
      );
    }

    if (pattern === "tiles") {
      return (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {images.map((image, index) => (
            <motion.article
              key={`${year}-${image}-${index}`}
              initial={{ opacity: 0, y: 32, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-border bg-card p-3"
            >
              {renderImageButton(image, index, "h-[280px] rounded-xl", "below")}
              <div className="p-3">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                  {year}
                </span>
                <h3 className="mt-2 text-lg font-bold text-primary">
                  {albumTitle} {index + 1}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      );
    }

    return (
      <div className="mt-10 columns-1 gap-5 sm:columns-2 xl:columns-3">
        {images.map((image, index) => (
          <motion.div
            key={`${year}-${image}-${index}`}
            initial={{ opacity: 0, y: 42, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ delay: index * 0.05 }}
            className="mb-5 break-inside-avoid"
          >
            {renderImageButton(
              image,
              index,
              `${masonryHeights[index % masonryHeights.length]} rounded-2xl`,
            )}
          </motion.div>
        ))}
      </div>
    );
  };

  if (images.length === 0) {
    return (
      <section id="gallery" className="bg-background py-16 md:py-20">
        <Container>
          <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center md:p-14">
            <CalendarDays size={54} className="mx-auto text-secondary" />

            <h2 className="mt-6 text-3xl font-bold text-primary md:text-5xl">
              {year} Gallery
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg">
              Photos for this year are not available yet. They will be added
              here after the activity has taken place.
            </p>

            <span className="mt-8 inline-flex rounded-lg bg-secondary px-5 py-3 font-semibold text-white">
              Coming Soon
            </span>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="gallery" className="bg-background py-16 md:py-20">
      <Container>
        <motion.div
          key={year}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-secondary">
            <ImageIcon size={18} />
            {albumTitle} Gallery
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
            {year} {albumTitle}
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-muted md:text-lg">
            Browse selected memories from this year. Click any photo to view it
            in the gallery lightbox.
          </p>
        </motion.div>

        {renderGalleryPattern()}
      </Container>
    </section>
  );
}
