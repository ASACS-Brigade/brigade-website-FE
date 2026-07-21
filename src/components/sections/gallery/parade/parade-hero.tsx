"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

import Container from "../../../layout/container";

export default function ParadeHero() {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-primary md:min-h-[620px]">

      {/* Background */}

      <Image
        src="/gallery/gallery1.png"
        alt="Parade Hero"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-primary/78" />

      {/* Decorative */}

      <Container
        className="
        relative
        z-10
        flex
        min-h-[560px]
        items-center
        py-20
        md:min-h-[620px]
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
            text-4xl
            font-black
            leading-tight
            text-white
            sm:text-5xl
            md:text-6xl
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
            text-base
            leading-8
            text-white/80
            md:text-lg
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

            {/* <Link
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
            </Link> */}

          </motion.div>

        </div>
      </Container>

    </section>
  );
}
