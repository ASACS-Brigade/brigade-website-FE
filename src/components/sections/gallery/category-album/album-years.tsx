"use client";

import Image from "next/image";
import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Images,
  Medal,
  Music2,
  TentTree,
} from "lucide-react";
import { motion } from "framer-motion";

import type { GalleryCategory, GalleryYear } from "../../../../../data/gallery";
import Container from "../../../layout/container";

interface AlbumYearsProps {
  album: GalleryCategory;
  activeYear: string;
  onYearChange: (year: string) => void;
}

function YearCount({ item, active = false }: { item: GalleryYear; active?: boolean }) {
  const available = item.status === "available";

  return (
    <span
      className={`mt-3 inline-flex items-center gap-2 text-sm ${
        active ? "text-white/80" : "text-muted"
      }`}
    >
      {available ? (
        <>
          <Images size={17} className="text-secondary" />
          {item.images.length} Photos
        </>
      ) : (
        <>
          <Clock3 size={17} className="text-secondary" />
          Coming Soon
        </>
      )}
    </span>
  );
}

function SelectedImage({ selected }: { selected: GalleryYear }) {
  return (
    <>
      <Image
        src={selected.cover}
        alt={selected.title}
        fill
        draggable={false}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/74" />
    </>
  );
}

export default function AlbumYears({
  album,
  activeYear,
  onYearChange,
}: AlbumYearsProps) {
  const selected =
    album.years.find((item) => item.year === activeYear) ?? album.years[0];

  const renderEnrolmentTimeline = () => (
    <div className="mt-12">
      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-border md:block" />

        <div className="space-y-5">
          {album.years.map((item, index) => {
            const active = activeYear === item.year;

            return (
              <motion.button
                key={item.year}
                type="button"
                onClick={() => onYearChange(item.year)}
                initial={{ opacity: 0, x: index % 2 === 0 ? -36 : 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
                className={`relative grid w-full gap-5 rounded-2xl border p-5 text-left transition md:ml-14 md:w-[calc(100%-3.5rem)] md:grid-cols-[1fr_220px] ${
                  active
                    ? "border-secondary bg-card shadow-lg"
                    : "border-border bg-card hover:border-secondary"
                }`}
              >
                <span
                  className={`absolute -left-[46px] top-6 hidden h-10 w-10 items-center justify-center rounded-full border bg-background md:flex ${
                    active ? "border-secondary text-secondary" : "border-border text-muted"
                  }`}
                >
                  <CheckCircle2 size={19} />
                </span>

                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                    Ceremony Year
                  </span>
                  <h3 className="mt-2 text-4xl font-black text-primary">{item.year}</h3>
                  <p className="mt-2 text-base font-semibold text-foreground">{item.title}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                  <YearCount item={item} />
                </div>

                <div className="relative min-h-[170px] overflow-hidden rounded-xl bg-primary">
                  <SelectedImage selected={item} />
                  <div className="relative z-10 flex h-full min-h-[170px] items-end p-4">
                    <span className="rounded-lg bg-secondary px-3 py-2 text-sm font-semibold text-white">
                      {active ? "Viewing" : "Select"}
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderOutreachFeature = () => (
    <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
      <motion.div
        key={selected.year}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="relative min-h-[460px] overflow-hidden rounded-2xl bg-primary"
      >
        <SelectedImage selected={selected} />
        <div className="relative z-10 flex min-h-[460px] flex-col justify-end p-6 text-white md:p-10">
          <span className="mb-4 w-fit rounded-lg bg-secondary px-4 py-2 text-sm font-semibold">
            {selected.status === "available" ? "Available" : "Coming Soon"}
          </span>
          <h3 className="text-5xl font-black md:text-6xl">{selected.year}</h3>
          <h4 className="mt-3 text-2xl font-bold text-secondary md:text-3xl">
            {selected.title}
          </h4>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/85">
            {selected.description}
          </p>
        </div>
      </motion.div>

      <div className="grid gap-3">
        {album.years.map((item, index) => {
          const active = activeYear === item.year;

          return (
            <motion.button
              key={item.year}
              type="button"
              onClick={() => onYearChange(item.year)}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className={`rounded-2xl border p-5 text-left transition ${
                active
                  ? "border-secondary bg-primary text-white"
                  : "border-border bg-card text-foreground hover:border-secondary"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-black">{item.year}</h3>
                  <p className={`mt-1 text-sm ${active ? "text-white/80" : "text-muted"}`}>
                    {item.title}
                  </p>
                </div>
                <ChevronRight className={active ? "rotate-90 text-secondary" : ""} />
              </div>
              <YearCount item={item} active={active} />
            </motion.button>
          );
        })}
      </div>
    </div>
  );

  const renderBandRows = () => (
    <div className="mt-10 space-y-4">
      {album.years.map((item, index) => {
        const active = activeYear === item.year;

        return (
          <motion.button
            key={item.year}
            type="button"
            onClick={() => onYearChange(item.year)}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05 }}
            className={`grid w-full gap-4 rounded-2xl border p-4 text-left transition md:grid-cols-[160px_1fr_150px] md:items-center ${
              active
                ? "border-secondary bg-primary text-white"
                : "border-border bg-card text-foreground hover:border-secondary"
            }`}
          >
            <div className="relative h-32 overflow-hidden rounded-xl md:h-24">
              <Image src={item.cover} alt={item.title} fill className="object-cover" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                <Music2 size={17} />
                Band Season
              </span>
              <h3 className="mt-2 text-3xl font-black">{item.year}</h3>
              <p className={`mt-1 text-sm ${active ? "text-white/80" : "text-muted"}`}>
                {item.title}
              </p>
            </div>
            <YearCount item={item} active={active} />
          </motion.button>
        );
      })}
    </div>
  );

  const renderCampMosaic = () => (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {album.years.map((item, index) => {
        const active = activeYear === item.year;

        return (
          <motion.button
            key={item.year}
            type="button"
            onClick={() => onYearChange(item.year)}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            className={`relative min-h-[300px] overflow-hidden rounded-2xl border text-left transition ${
              active ? "border-secondary" : "border-border hover:border-secondary"
            } ${index === 1 ? "xl:row-span-2 xl:min-h-[420px]" : ""}`}
          >
            <Image src={item.cover} alt={item.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-primary/72" />
            <div className="relative z-10 flex min-h-[300px] flex-col justify-end p-5 text-white">
              <TentTree size={26} className="mb-4 text-secondary" />
              <h3 className="text-4xl font-black">{item.year}</h3>
              <p className="mt-2 font-semibold text-secondary">{item.title}</p>
              <YearCount item={item} active />
            </div>
          </motion.button>
        );
      })}
    </div>
  );

  const renderAwardsTiles = () => (
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {album.years.map((item, index) => {
        const active = activeYear === item.year;

        return (
          <motion.button
            key={item.year}
            type="button"
            onClick={() => onYearChange(item.year)}
            initial={{ opacity: 0, y: 38, rotate: index === 0 ? -1 : index === 2 ? 1 : 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.08 }}
            className={`rounded-2xl border bg-card p-5 text-center transition ${
              active ? "border-secondary shadow-lg" : "border-border hover:border-secondary"
            } ${index === 1 ? "md:-mt-6" : "md:mt-8"}`}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-secondary">
              <Medal size={26} />
            </div>
            <h3 className="mt-5 text-4xl font-black text-primary">{item.year}</h3>
            <p className="mt-2 font-semibold text-foreground">{item.title}</p>
            <YearCount item={item} />
          </motion.button>
        );
      })}
    </div>
  );

  const renderPattern = () => {
    if (album.galleryPattern === "masonry") return renderEnrolmentTimeline();
    if (album.galleryPattern === "feature") return renderOutreachFeature();
    if (album.galleryPattern === "rows") return renderBandRows();
    if (album.galleryPattern === "mosaic") return renderCampMosaic();
    return renderAwardsTiles();
  };

  return (
    <section id="years" className="bg-background py-16 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-secondary">
            <CalendarDays size={18} />
            Browse By Year
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
            Explore {album.shortTitle} Moments By Year
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg">
            Select a year to view available memories. Upcoming years stay ready
            until photos are added.
          </p>
        </motion.div>

        {renderPattern()}
      </Container>
    </section>
  );
}
