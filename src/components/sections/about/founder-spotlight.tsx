"use client";

import Image from "next/image";
import Container from "../../layout/container";
import FadeIn from "../../layout/fade-in";

export default function FounderSpotlight() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <FadeIn>
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/about/william-A-Smith.jpg"
                alt="William Alexander Smith"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn>
            <div>

              <span className="text-secondary uppercase tracking-[0.2em] text-sm">
                Founder Spotlight
              </span>

              <h2 className="mt-4 text-4xl font-bold text-heading">
                William Alexander Smith
              </h2>

              <p className="mt-6 text-muted leading-8">
                In 1883, Sir William Alexander Smith founded
                the Boys' Brigade in Glasgow, Scotland with a
                vision to combine Christian faith and discipline
                in developing young men.
              </p>

              <p className="mt-5 text-muted leading-8">
                His model inspired youth organizations around
                the world and continues to influence millions
                of young people today.
              </p>

              <blockquote
                className="
                mt-8
                border-l-4
                border-secondary
                pl-6
                italic
                text-heading
                text-lg
                "
              >
                "Sure and Stedfast"
              </blockquote>

            </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}
