"use client";

import { useEffect, useState } from "react";

import Container from "../../layout/container";
import FadeIn from "../../layout/fade-in";

function Counter({
  target,
  suffix = "+",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;

    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutStats() {
  return (
    <section
      id="members"
      className="
      relative
      pt-5 pb-10
      "
    >
      <Container>

        <FadeIn>

          <div className="text-center">

            <span
              className="
              rounded-full
              bg-secondary/10
              px-4
              py-2
              md:text-xs
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-secondary
              "
            >
              Brigade Impact
            </span>

            <h2
              className="
              mt-5
              md:text-4xl
              text-xl
              font-bold
              text-primary
              "
            >
              Growing Together
            </h2>

            <p
              className="
              mx-auto
              mt-4
              max-w-2xl
              text-muted
              leading-6
              md:leading-8
              text-sm
              md:text-base
              "
            >
              Building a generation rooted in
              faith, leadership, discipline and
              service.
            </p>

          </div>

        </FadeIn>

        <div
          className="
          mt-14
          grid
          gap-6
          md:grid-cols-3
          "
        >

          {/* Members */}

          <FadeIn>

            <div
              className="
              hover-card
              rounded-2xl
              border
              border-secondary/30
              bg-background
              p-8
              text-center
              shadow-sm
              "
            >
              <h3
                className="
                text-5xl
                font-bold
                text-secondary
                "
              >
                <Counter target={100} />
              </h3>

              <p
                className="
                mt-4
                lg:text-lg
                text-sm
                font-medium
                text-foreground
                "
              >
                Active Members
              </p>

            </div>

          </FadeIn>

          {/* Patrons */}

          <FadeIn>

            <div
              className="
              hover-card
              rounded-2xl
              border
              border-secondary/30
              bg-background
              p-8
              text-center
              shadow-sm
              "
            >
              <h3
                className="
                text-5xl
                font-bold
                text-secondary
                "
              >
                <Counter target={20} />
              </h3>

              <p
                className="
                mt-4
                lg:text-lg
                text-sm
                font-medium
                text-foreground
                "
              >
                Patrons & Patronsesses
              </p>

            </div>

          </FadeIn>

          {/* Officers */}

          <FadeIn>

            <div
              className="
              hover-card
              rounded-2xl
              border
              border-secondary/30
              bg-background
              p-8
              text-center
              shadow-sm
              "
            >
              <h3
                className="
                text-5xl
                font-bold
                text-secondary
                "
              >
                <Counter target={15} />
              </h3>

              <p
                className="
                mt-4
                lg:text-lg
                text-sm
                font-medium
                text-foreground
                "
              >
                Active Boys' & Girls' Officers
              </p>

            </div>

          </FadeIn>

        </div>

      </Container>
    </section>
  );
}