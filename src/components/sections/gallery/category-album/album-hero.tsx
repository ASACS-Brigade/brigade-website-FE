"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import type { GalleryCategory } from "../../../../../data/gallery";
import Container from "../../../layout/container";
import { albumIcons } from "./album-icons";

interface AlbumHeroProps {
  album: GalleryCategory;
}

export default function AlbumHero({ album }: AlbumHeroProps) {
  const Icon = albumIcons[album.icon];

  return (
    <section className="relative min-h-[560px] overflow-hidden bg-primary md:min-h-[640px]">
      <Image
        src={album.heroImage}
        alt={album.title}
        fill
        priority
        draggable={false}
        className="pointer-events-none object-cover"
      />

      <div className="absolute inset-0 bg-primary/80" />

      <Container className="relative z-10 flex min-h-[560px] items-center py-20 md:min-h-[640px] md:py-24">
        <div className="max-w-3xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-secondary hover:bg-white hover:text-primary"
            >
              <ArrowLeft size={17} />
              Back To Gallery
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-secondary"
          >
            <Icon size={18} />
            {album.shortTitle} Archive
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.55 }}
            className="mt-5 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {album.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
            className="mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-lg md:leading-8"
          >
            {album.description}
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
