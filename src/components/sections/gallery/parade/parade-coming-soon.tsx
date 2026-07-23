"use client";

import { motion } from "framer-motion";
import {
  CalendarClock,
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
          bg-white/8
          "
        >
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
