"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Download,
  Shield,
} from "lucide-react";

import Container from "../../../layout/container";

export default function ParadeCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}

      <div className="absolute inset-0 bg-primary" />

      {/* Glow */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-[520px]
        w-[520px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-secondary/20
        blur-[150px]
        "
      />

      {/* Decorations */}

      <div
        className="
        absolute
        -left-24
        top-10
        h-72
        w-72
        rounded-full
        border
        border-secondary/20
        "
      />

      <div
        className="
        absolute
        -right-28
        bottom-0
        h-80
        w-80
        rounded-full
        border
        border-secondary/20
        "
      />

      <Container className="relative z-10">

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
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
          overflow-hidden
          rounded-[42px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          "
        >

          <div
            className="
            grid
            gap-16
            p-8
            md:p-12
            lg:grid-cols-[1.3fr_.7fr]
            lg:p-20
            "
          >
            {/* LEFT */}

            <div>

              <span
                className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-secondary/15
                px-5
                py-2
                text-secondary
                "
              >
                <Shield size={18} />

                Brigade Heritage
              </span>

              <h2
                className="
                mt-8
                text-4xl
                font-black
                leading-tight
                text-white
                md:text-6xl
                "
              >
                Become Part of
                <br />
                Our Next Parade Story
              </h2>

              <p
                className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-white/70
                "
              >
                Every parade tells a story of discipline,
                leadership and Christian service.

                Join the Boys' & Girls' Brigade
                and become part of the next chapter
                of our history.
              </p>

              <div
                className="
                mt-10
                flex
                flex-wrap
                gap-4
                "
              >
                <Link
                  href="/contact"
                  className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-secondary
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:-translate-y-1
                  hover:shadow-2xl
                  "
                >
                  Join The Brigade

                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/gallery"
                  className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/20
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-white
                  hover:text-primary
                  "
                >
                  Explore Gallery
                </Link>

              </div>

            </div>

            {/* RIGHT */}

            <div
              className="
              flex
              flex-col
              justify-center
              gap-5
              "
            >

              {[
                {
                  icon: CalendarDays,
                  title: "Annual Parade",
                  text: "Every year we celebrate excellence through ceremonial inspection and parade displays.",
                },
                {
                  icon: Camera,
                  title: "Capture Memories",
                  text: "Relive every moment through our growing digital archive of Brigade history.",
                },
                {
                  icon: Download,
                  title: "Historical Archive",
                  text: "Our gallery continues to preserve the legacy of every generation.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{
                    x: 8,
                    scale: 1.02,
                  }}
                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-md
                  transition-all
                  "
                >
                  <div className="flex gap-5">

                    <div
                      className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-secondary
                      text-white
                      "
                    >
                      <item.icon size={26} />
                    </div>

                    <div>

                      <h3
                        className="
                        text-lg
                        font-bold
                        text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                        mt-2
                        text-sm
                        leading-7
                        text-white/70
                        "
                      >
                        {item.text}
                      </p>

                    </div>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}