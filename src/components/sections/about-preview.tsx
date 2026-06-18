"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ShieldCheck,
  Users,
  HeartHandshake,
} from "lucide-react";

import FadeIn from "../layout/fade-in";
import Container from "../layout/container";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Faith",
    description:
      "Rooted in Christian values and Biblical principles.",
  },
  {
    icon: Users,
    title: "Leadership",
    description:
      "Developing confident and disciplined young leaders.",
  },
  {
    icon: HeartHandshake,
    title: "Service",
    description:
      "Impacting communities through outreach and service.",
  },
];

export default function AboutPreview() {
  return (
    <section
      className="
      relative
      py-20
      overflow-hidden
      "
    >
      {/* Background Accent */}

      <div
        className="
        absolute
        inset-0
        bg-primary/5
        "
      />

      <Container className="relative z-10">

        <div
          className="
          grid
          items-center
          gap-14
          lg:grid-cols-2
          "
        >
          {/* Left Content */}

          <FadeIn>

            <div>

              <span
                className="
                inline-flex
                rounded-full
                bg-secondary/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-secondary
                "
              >
                Who We Are
              </span>

              <h2
                className="
                mt-5
                text-4xl
                font-bold
                text-primary
                md:text-5xl
                "
              >
                A Family, A Mission,
                A Future
              </h2>

              <p
                className="
                mt-6
                max-w-xl
                text-muted
                leading-8
                "
              >
                The Boys & Girls Brigade,
                Surulere Company exists to raise
                boys and girls who are grounded
                in faith, equipped for leadership,
                and committed to serving God,
                their communities and the world.
              </p>

              {/* Highlights */}

              <div
                className="
                mt-10
                grid
                gap-5
                "
              >
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="
                      flex
                      items-start
                      gap-4
                      "
                    >
                      <div
                        className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-secondary/10
                        "
                      >
                        <Icon
                          size={24}
                          className="text-secondary"
                        />
                      </div>

                      <div>

                        <h3
                          className="
                          font-semibold
                          text-foreground
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                          mt-1
                          text-sm
                          text-muted
                          "
                        >
                          {item.description}
                        </p>

                      </div>

                    </div>
                  );
                })}
              </div>

              {/* CTA */}

              <div
                className="
                mt-10
                flex
                flex-col
                gap-4
                sm:flex-row
                "
              >
                <Link
                  href="/about"
                  className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-lg
                  bg-primary
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-primary-light
                  "
                >
                  Learn About Us
                </Link>

                <Link
                  href="/contact"
                  className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-secondary
                  px-6
                  py-3
                  font-semibold
                  text-secondary
                  transition
                  hover:bg-secondary
                  hover:text-white
                  "
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </FadeIn>

          {/* Right Image */}

          <FadeIn>

            <div
              className="
              relative
              mx-auto
              h-[450px]
              w-full
              max-w-[550px]
              "
            >

              {/* Decorative Background */}

              <div
                className="
                absolute
                -right-6
                -bottom-6
                h-full
                w-full
                rounded-[32px]
                bg-secondary
                "
              />

              <div
                className="
                relative
                h-full
                overflow-hidden
                rounded-[32px]
                shadow-2xl
                "
              >
                <Image
                  src="/events/pic2.png"
                  alt="Boys and Girls Brigade"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Badge */}

              <div
                className="
                absolute
                left-6
                top-6
                rounded-2xl
                bg-white
                p-4
                shadow-xl
                dark:bg-slate-900
                "
              >
                <p
                  className="
                  text-2xl
                  font-bold
                  text-secondary
                  "
                >
                  100+
                </p>

                <p
                  className="
                  text-xs
                  text-muted
                  "
                >
                  Active Members
                </p>

              </div>

            </div>

          </FadeIn>

        </div>

      </Container>
    </section>
  );
}