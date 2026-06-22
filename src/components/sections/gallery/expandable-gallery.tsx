"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Cross,
  Shield,
  HeartHandshake,
  Music4,
} from "lucide-react";

const slides = [
  {
    title: "Enrolment Service",
    subtitle: "Annual dedication and worship",
    image: "/gallery/enrolment.jpg",
    icon: Cross,
  },
  {
    title: "Parade Night",
    subtitle: "Discipline and leadership training",
    image: "/gallery/parade.jpg",
    icon: Shield,
  },
  {
    title: "Medical Outreach",
    subtitle: "Serving the community with love",
    image: "/gallery/outreach.jpg",
    icon: HeartHandshake,
  },
  {
    title: "Band & Orchestra",
    subtitle: "Music ministry and rehearsals",
    image: "/gallery/orchestra.jpg",
    icon: Music4,
  },
];

export default function ExpandableGallery() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) =>
        prev === slides.length - 1
          ? 0
          : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
      flex
      flex-col
      lg:flex-row
      gap-3
      w-full
      h-[650px]
      lg:h-[500px]
      "
    >
      {slides.map((slide, index) => {
        const Icon = slide.icon;

        return (
          <div
            key={slide.title}
            onClick={() => setActive(index)}
            className={`
              relative
              overflow-hidden
              rounded-[28px]
              cursor-pointer
              transition-all
              duration-700
              ease-in-out
              ${
                active === index
                  ? "lg:flex-[4] flex-[3]"
                  : "lg:flex-1 flex-1"
              }
            `}
          >
            {/* Image */}

            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="
              object-cover
              "
            />

            {/* Overlay */}

            <div
              className={`
                absolute
                inset-0
                transition-all
                duration-500
                ${
                  active === index
                    ? "bg-black/25"
                    : "bg-black/55"
                }
              `}
            />

            {/* Content */}

            <div
              className={`
                absolute
                bottom-5
                left-5
                right-5
                flex
                items-end
                gap-4
                transition-all
                duration-500
                ${
                  active === index
                    ? "opacity-100"
                    : "opacity-0 lg:opacity-30"
                }
              `}
            >
              <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-white/20
                backdrop-blur-md
                text-white
                "
              >
                <Icon size={22} />
              </div>

              <div>
                <h3
                  className="
                  text-xl
                  md:text-2xl
                  font-bold
                  text-white
                  "
                >
                  {slide.title}
                </h3>

                <p
                  className="
                  text-white/90
                  text-sm
                  mt-1
                  "
                >
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}