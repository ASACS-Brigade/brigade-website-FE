"use client";

import Image from "next/image"
import Link from "next/link";
import Container from "../layout/container";

export default function HomeHero() {
  return (
      
    <section className="relative min-h-[580px] overflow-hidden md:min-h-[640px]">
      <Image
        src="/images/hero.jpeg"
        alt="Hero"
        fill
        priority
        className="pointer-events-none object-cover"
      />

      <div
        className="
        pointer-events-none
        absolute
        inset-0
        "
        style={{
          background:
            "linear-gradient(90deg, rgba(14, 42, 71, 0.95) 0%, rgba(14, 42, 71, 0.88) 45%, rgba(14, 42, 71, 0) 75%)",
        }}
      />

      <Container
        className="
        relative
        z-10
        flex
        min-h-[560px]
        items-center
        py-16
        sm:min-h-[500px]
        sm:py-20
        lg:min-h-[560px]
        lg:py-24
      "
      >
        <div className="max-w-3xl text-white">
          <h1 className="max-w-3xl text-4xl font-bold leading sm:text-5xl md:text-6xl lg:text-7xl">
            Building{" "}
            <span className="text-[#D4A437]">Faith</span>,{" "}
            <span className="text-[#D4A437]">Leadership</span> &{" "}
            <span className="text-[#D4A437]">Service</span> in the Next
            Generation
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg md:mt-6 md:text-[18px] md:leading-8">
            Empowering boys and girls in
            Surulere through Christian values,
            leadership development and
            community impact.
          </p>

          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row md:mt-10">
            <Link
              href="/contact"
              className="
              inline-flex
              min-h-12
              w-full
              items-center
              justify-center
              rounded-lg
              bg-[#D4A437]
              px-6
              py-3
              text-center
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-black/20
              transition
              hover:bg-[#b98c22]
              focus:outline-none
              focus:ring-2
              focus:ring-[#D4A437]
              focus:ring-offset-2
              focus:ring-offset-[#0E2A47]
              sm:w-auto
              md:text-base
              "
            >
              Become A Member
            </Link>

            <Link
              href="/events"
              className="
              inline-flex
              min-h-12
              w-full
              items-center
              justify-center
              rounded-lg
              border
              border-white/80
              px-6
              py-3
              text-center
              text-sm
              font-semibold
              text-white
              transition
              hover:border-[#D4A437]
              hover:bg-white
              hover:text-[#0E2A47]
              focus:outline-none
              focus:ring-2
              focus:ring-white
              focus:ring-offset-2
              focus:ring-offset-[#0E2A47]
              sm:w-auto
              md:text-base
              "
            >
              Explore Events
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

