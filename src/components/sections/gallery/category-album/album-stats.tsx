"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

import type { GalleryCategory } from "../../../../../data/gallery";
import Container from "../../../layout/container";
import { albumIcons } from "./album-icons";

interface AlbumStatsProps {
  album: GalleryCategory;
}

export default function AlbumStats({ album }: AlbumStatsProps) {
  return (
    <section className="bg-background py-16 md:py-20">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {album.stats.map((stat, index) => {
            const Icon = albumIcons[stat.icon];

            return (
              <motion.article
                key={stat.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-secondary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-secondary">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-4xl font-black text-primary md:text-5xl">
                  <CountUp end={stat.value} duration={2.2} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </h3>

                <h4 className="mt-3 text-lg font-bold text-foreground">
                  {stat.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {stat.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
