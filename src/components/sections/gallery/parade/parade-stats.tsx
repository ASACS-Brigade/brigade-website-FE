"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Trophy,
  Flag,
} from "lucide-react";

import Container from "../../../layout/container";

const stats = [
  {
    icon: Shield,
    value: 18,
    suffix: "+",
    title: "Parade Seasons",
    description:
      "Years of excellence captured in our archives.",
    color: "bg-primary",
  },
  {
    icon: Users,
    value: 450,
    suffix: "+",
    title: "Members",
    description:
      "Cadets and officers have marched proudly.",
    color: "bg-primary-light",
  },
  {
    icon: Trophy,
    value: 26,
    suffix: "",
    title: "Awards",
    description:
      "Competitions, inspections and recognitions.",
    color: "bg-secondary",
  },
  {
    icon: Flag,
    value: 1200,
    suffix: "+",
    title: "Parade Moments",
    description:
      "Photographs preserving Brigade history.",
    color: "bg-primary",
  },
];

export default function ParadeStats() {
  return (
    <section className="relative -mt-20 z-30 pb-20">
      <Container>

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
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-4
          "
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * .12,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -12,
                  rotateX: 6,
                }}
                className="
                group
                relative
                overflow-hidden
                rounded-[34px]
                bg-white
                border
                border-slate-200
                shadow-xl
                dark:border-border
                dark:bg-card
                "
              >

                {/* Glow */}

                <div
                  className="
                  absolute
                  -right-16
                  -top-16
                  h-48
                  w-48
                  rounded-full
                  bg-secondary/10
                  blur-3xl
                  transition
                  duration-700
                  group-hover:scale-150
                  "
                />

                {/* Top */}

                <div className="relative p-8">

                  <div
                    className={`
                    ${stat.color}

                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    text-white
                    shadow-lg
                    `}
                  >
                    <Icon size={30} />
                  </div>

                  <h3
                    className="
                    mt-8
                    text-5xl
                    font-black
                    text-primary
                    transition
                    group-hover:text-secondary
                    "
                  >
                    {stat.value.toLocaleString()}
                    {stat.suffix}
                  </h3>

                  <h4
                    className="
                    mt-3
                    text-xl
                    font-bold
                    text-slate-900
                    transition
                    group-hover:text-primary
                    "
                  >
                    {stat.title}
                  </h4>

                  <p
                    className="
                    mt-3
                    leading-7
                    text-muted
                    transition
                    duration-300
                    group-hover:text-foreground
                    "
                  >
                    {stat.description}
                  </p>

                </div>

                {/* Bottom Accent */}

                <div
                  className="
                  h-1
                  w-0
                  bg-secondary
                  transition-all
                  duration-500
                  group-hover:w-full
                  "
                />

              </motion.div>
            );
          })}
        </motion.div>

      </Container>
    </section>
  );
}
