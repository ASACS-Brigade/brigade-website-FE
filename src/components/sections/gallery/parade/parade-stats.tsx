"use client";

import CountUp from "react-countup";

import Container from "../../../layout/container";

const stats = [
  {
    value: 18,
    suffix: "+",
    title: "Parade Seasons",
    description:
      "Years of excellence captured in our archives.",
  },
  {
    value: 450,
    suffix: "+",
    title: "Members",
    description:
      "Cadets and officers have marched proudly.",
  },
  {
    value: 26,
    suffix: "",
    title: "Awards",
    description:
      "Competitions, inspections and recognitions.",
  },
  {
    value: 1200,
    suffix: "+",
    title: "Parade Moments",
    description:
      "Photographs preserving Brigade history.",
  },
];

export default function ParadeStats() {
  return (
    <section className="relative bg-background py-16 md:py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
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
