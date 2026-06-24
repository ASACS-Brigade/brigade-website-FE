"use client";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "../../layout/fade-in";
import Container from "../../layout/container";

const pastEvents = [
  { src: "/events/pic1.png", alt: "Past event 1" },
  { src: "/events/pic1.png", alt: "Past event 2" },
  { src: "/events/pic1.png", alt: "Past event 3" },
  { src: "/events/pic1.png", alt: "Past event 4" },
  { src: "/events/pic1.png", alt: "Past event 5" },
  { src: "/events/pic1.png", alt: "Past event 6" },
];

export default function PastEvents() {
  return (
    <section className="pb-12">
      <Container>
        <FadeIn>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-primary">Past Events</h2>
            <Link
              href="/events/past"
              className="text-sm font-medium transition"
              style={{ color: "#D4A017" }}
            >
              View All Below →
            </Link>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {pastEvents.map((ev, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-lg overflow-hidden bg-primary/10
                  hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <Image
                  src={ev.src}
                  alt={ev.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}