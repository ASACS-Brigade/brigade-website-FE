"use client";

import { motion } from "framer-motion";
import {
  CalendarClock,
  BellRing,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import Container from "../../../layout/container";

export default function ParadeComingSoon() {
  return (
    <section className="relative overflow-hidden py-20">

      {/* Background */}

      <div
        className="
        absolute
        inset-0
        bg-primary
        "
      />

      {/* Glow */}

      <div
        className="
        absolute
        -top-20
        left-1/2
        h-[420px]
        w-[420px]
        -translate-x-1/2
        rounded-full
        bg-secondary/20
        blur-[130px]
        "
      />

      <Container className="relative z-20">

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
          className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          "
        >

          {/* Floating Decorations */}

          <Sparkles
            className="
            absolute
            top-8
            right-8
            text-secondary
            "
            size={28}
          />

          <div
            className="
            absolute
            -right-16
            -bottom-16
            h-52
            w-52
            rounded-full
            bg-secondary/20
            blur-[80px]
            "
          />

          <div
            className="
            grid
            gap-12
            lg:grid-cols-[1.2fr_.8fr]
            p-6
            md:p-12
            lg:p-16
            "
          >

            {/* Left */}

            <div>

              <span
                className="
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
                <CalendarClock size={18} />

                2026 Season

              </span>

              <h2
                className="
                mt-8
                text-4xl
                font-black
                text-white
                md:text-5xl
                "
              >
                Coming Soon
              </h2>

              <p
                className="
                mt-6
                max-w-xl
                text-lg
                leading-8
                text-white/70
                "
              >
                Preparations have already begun for another
                unforgettable Parade Season.

                Expect inspection drills,
                ceremonial marches,
                precision displays,
                awards,
                and memories that will
                become part of Brigade history.
              </p>

              <div
                className="
                mt-10
                flex
                flex-wrap
                gap-4
                "
              >

                <button
                  className="
                  inline-flex
                  items-center
                  gap-2
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
                  <BellRing size={18} />

                  Notify Me

                </button>

                <button
                  className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-white/20
                  px-7
                  py-4
                  text-white
                  transition
                  hover:bg-white
                  hover:text-primary
                  "
                >
                  Learn More

                  <ChevronRight size={18} />

                </button>

              </div>

            </div>

            {/* Right */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="
              flex
              items-center
              justify-center
              "
            >

              <div
                className="
                relative

                flex
                aspect-square
                h-[280px]
                w-[280px]

                items-center
                justify-center

                rounded-full

                border-8
                border-secondary/40

                bg-primary-light

                shadow-[0_0_90px_rgba(212,164,55,.35)]
                "
              >

                {/* Outer Ring */}

                <div
                  className="
                  absolute

                  inset-[-25px]

                  rounded-full

                  border

                  border-dashed

                  border-secondary/40

                  animate-spin

                  [animation-duration:25s]
                  "
                />

                {/* Inner */}

                <div className="text-center">

                  <p
                    className="
                    text-secondary
                    text-sm
                    tracking-[.4em]
                    "
                  >
                    NEXT

                  </p>

                  <h3
                    className="
                    mt-2
                    text-7xl
                    font-black
                    text-white
                    "
                  >
                    2026
                  </h3>

                  <p
                    className="
                    mt-2
                    text-white/70
                    "
                  >
                    Parade Season
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}
