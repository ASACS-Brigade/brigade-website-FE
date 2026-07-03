"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../../../layout/container";

export default function ParadeHero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-primary">

      {/* Background */}

      <Image
        src="/gallery/parade-cover.jpg"
        alt="Parade Hero"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,rgba(14,42,71,.97) 0%,rgba(14,42,71,.88) 42%,rgba(14,42,71,.45) 72%,rgba(14,42,71,.15) 100%)",
        }}
      />

      {/* Decorative */}

      <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-secondary/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-[120px]" />

      <Container
        className="
        relative
        z-10
        flex
        min-h-[90vh]
        items-center
        py-24
        "
      >
        <div className="max-w-3xl">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              href="/gallery"
              className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2
              text-white
              backdrop-blur-xl
              transition
              hover:border-secondary
              "
            >
              <ArrowLeft size={18} />
              Back To Gallery
            </Link>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
            className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-secondary/20
            px-4
            py-2
            text-secondary
            "
          >
            <CalendarDays size={18}/>
            Brigade Archives
          </motion.span>

          <motion.h1
            initial={{
              opacity:0,
              y:40
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              delay:.2
            }}
            className="
            mt-6
            text-5xl
            font-black
            leading-tight
            text-white
            md:text-7xl
            "
          >
            Parade &
            <br />

            <span className="text-secondary">
              Drill Archive
            </span>

          </motion.h1>

          <motion.p
            initial={{
              opacity:0,
              y:30
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              delay:.35
            }}
            className="
            mt-7
            max-w-2xl
            text-lg
            leading-8
            text-white/80
            "
          >
            Every parade tells a story of discipline,
            excellence, commitment and faith.
            Explore decades of inspections,
            competitions and unforgettable Brigade moments.
          </motion.p>

          <motion.div
            initial={{
              opacity:0,
              y:30
            }}
            animate={{
              opacity:1,
              y:0
            }}
            transition={{
              delay:.5
            }}
            className="
            mt-10
            flex
            flex-wrap
            gap-4
            "
          >

            <Link
              href="#years"
              className="
              rounded-xl
              bg-secondary
              px-7
              py-4
              font-semibold
              text-white
              transition
              hover:scale-105
              "
            >
              Browse Years
            </Link>

            <Link
              href="#gallery"
              className="
              rounded-xl
              border
              border-white/30
              px-7
              py-4
              font-semibold
              text-white
              backdrop-blur
              transition
              hover:bg-white
              hover:text-primary
              "
            >
              Explore Gallery
            </Link>

          </motion.div>

        </div>
      </Container>

      {/* Bottom Fade */}

      <div
        className="
        absolute
        bottom-0
        left-0
        h-48
        w-full
        "
        style={{
          background:
            "linear-gradient(to bottom,transparent,#F8FAFC)"
        }}
      />
    </section>
  );
}