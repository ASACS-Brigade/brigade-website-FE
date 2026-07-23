"use client";

import CountUp from "react-countup";

import type { GalleryCategory } from "../../../../../data/gallery";
import Container from "../../../layout/container";

interface AlbumStatsProps {
  album: GalleryCategory;
}

export default function AlbumStats({ album }: AlbumStatsProps) {
  return (
    <section className="bg-background py-16 md:py-20">
      <Container>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {album.stats.map((stat) => (
              <article
                key={stat.title}
                className="hover-card rounded-2xl border border-secondary/30 bg-background p-8 text-center shadow-sm"
              >
                <h3 className="text-5xl font-bold text-secondary">
                  <CountUp end={stat.value} duration={2.2} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </h3>

                <h4 className="mt-4 text-sm font-medium text-foreground lg:text-lg">
                  {stat.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {stat.description}
                </p>
              </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
