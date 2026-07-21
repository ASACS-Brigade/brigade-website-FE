"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, Clock3, Flag, Images } from "lucide-react";

import Container from "../../../layout/container";

interface ParadeYearsProps {
  activeYear: string;
  onYearChange: (year: string) => void;
}

const paradeYears = [
  {
    year: "2026",
    status: "coming",
    title: "Parade Season",
    description: "Preparations have begun for another remarkable parade season.",
    cover: "/gallery/gallery1.png",
    photos: 0,
  },
  {
    year: "2025",
    status: "available",
    title: "Inspection & Parade Night",
    description: "Inspection parade, ceremonial march, awards and presentation.",
    cover: "/gallery/gallery1.png",
    photos: 48,
  },
  {
    year: "2024",
    status: "available",
    title: "Founder's Day Parade",
    description: "Celebrating our heritage through precision and discipline.",
    cover: "/images/hero.jpeg",
    photos: 37,
  },
  {
    year: "2023",
    status: "available",
    title: "Church Anniversary Parade",
    description: "A memorable display of service and excellence.",
    cover: "/events/pic1.png",
    photos: 31,
  },
];

export default function ParadeYears({
  activeYear,
  onYearChange,
}: ParadeYearsProps) {
  const selected =
    paradeYears.find((item) => item.year === activeYear) ?? paradeYears[0];

  return (
    <section id="years" className="bg-background py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-secondary">
            <CalendarDays size={18} />
            Parade Archive
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-primary sm:text-4xl md:text-5xl">
            Parade Years In Formation
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg">
            Select a parade season from the formation line and view its archive
            details below.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {paradeYears.map((item, index) => {
            const active = activeYear === item.year;
            const available = item.status === "available";

            return (
              <motion.button
                key={item.year}
                type="button"
                onClick={() => onYearChange(item.year)}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className={`rounded-2xl border p-5 text-left transition ${
                  active
                    ? "border-secondary bg-primary text-white shadow-lg"
                    : "border-border bg-card text-foreground hover:border-secondary"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <Flag className={active ? "text-secondary" : "text-muted"} />
                  <span className="text-4xl font-black">{item.year}</span>
                </div>

                <p className={`mt-4 font-semibold ${active ? "text-white" : "text-primary"}`}>
                  {item.title}
                </p>

                <span
                  className={`mt-4 inline-flex items-center gap-2 text-sm ${
                    active ? "text-white/80" : "text-muted"
                  }`}
                >
                  {available ? (
                    <>
                      <Images size={17} className="text-secondary" />
                      {item.photos} Photos
                    </>
                  ) : (
                    <>
                      <Clock3 size={17} className="text-secondary" />
                      Coming Soon
                    </>
                  )}
                </span>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          key={selected.year}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-8 overflow-hidden rounded-2xl border border-border bg-card"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[280px] lg:min-h-[420px]">
              <Image
                src={selected.cover}
                alt={selected.title}
                fill
                draggable={false}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/30" />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-10">
              <span className="w-fit rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-white">
                {selected.status === "available" ? "Available" : "Coming Soon"}
              </span>

              <h3 className="mt-5 text-5xl font-black text-primary md:text-6xl">
                {selected.year}
              </h3>

              <h4 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                {selected.title}
              </h4>

              <p className="mt-4 max-w-xl text-base leading-7 text-muted md:text-lg md:leading-8">
                {selected.description}
              </p>

              {selected.status === "available" ? (
                <a
                  href="#gallery"
                  className="mt-8 inline-flex w-fit items-center rounded-lg bg-secondary px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
                >
                  Explore {selected.year}
                </a>
              ) : (
                <span className="mt-8 inline-flex w-fit cursor-not-allowed rounded-lg border border-border px-6 py-3 font-semibold text-muted">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
