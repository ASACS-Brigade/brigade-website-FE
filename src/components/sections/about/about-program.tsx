"use client";

import Image from "next/image";

import FadeIn from "../../layout/fade-in";
import Container from "../../layout/container";

const programs = [
  {
    image: "/images/programs/program-1.jpg",
    title: "Weekly Meetings",
    description:
      "Spiritual growth, learning and fellowship.",
  },
  {
    image: "/images/programs/program-2.jpg",
    title: "Community Outreach",
    description:
      "Reaching out and making a positive impact.",
  },
  {
    image: "/images/programs/program-3.jpg",
    title: "Camps & Retreats",
    description:
      "Building skills, friendships and memories.",
  },
  {
    image: "/images/programs/program-4.jpg",
    title: "Mentorship Program",
    description:
      "Guiding and supporting the next generation.",
  },
];

export default function AboutPrograms() {
  return (
    <section className="pb-16">

      <Container>

        <h2 className="text-3xl font-bold text-primary">
          Our Programs
        </h2>

        <div
          className="
          mt-8
          grid
          gap-5
          sm:grid-cols-2
          lg:grid-cols-4
          "
        >
          {programs.map((program) => (
            <FadeIn key={program.title}>

              <div
                className="
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                "
              >
                <div className="relative h-40">

                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-4">

                  <h3
                    className="
                    font-bold
                    text-primary
                    "
                  >
                    {program.title}
                  </h3>

                  <p
                    className="
                    mt-2
                    text-sm
                    text-muted
                    "
                  >
                    {program.description}
                  </p>

                </div>

              </div>

            </FadeIn>
          ))}
        </div>

        <div className="mt-8 text-center">

          <button
            className="
            rounded-md
            bg-primary
            px-8
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-primary-light
            "
          >
            Join A Program
          </button>

        </div>

      </Container>

    </section>
  );
}