"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageOff } from "lucide-react";
import FadeIn from "../../layout/fade-in";
import Container from "../../layout/container";
import {
  BrigadeEvent,
  eventDay,
  eventMonth,
} from "../../../constants/events";

export default function PastEvents({ events }: { events: BrigadeEvent[] }) {
  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <FadeIn>
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-heading sm:text-2xl">
                Past Events
              </h2>
              <p className="mt-1 text-sm text-muted">
                Recent moments from the Brigade calendar.
              </p>
            </div>

            <Link
              href="/gallery"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-heading transition hover:border-secondary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background"
            >
              Gallery
              <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {events.map((event) => (
              <Link
                key={event.id}
                href={event.href}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-primary/10 shadow-sm ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-secondary/70"
              >
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-primary/10 text-white/75">
                    <ImageOff size={34} />
                    <span className="text-xs font-black uppercase tracking-[0.14em]">
                      No cover
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/88 via-primary/20 to-transparent opacity-80 transition group-hover:opacity-95" />

                <div className="absolute left-4 top-4 flex h-14 w-12 flex-col items-center justify-center rounded-lg bg-white/95 text-heading shadow-sm">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-secondary">
                    {eventMonth(event)}
                  </span>
                  <span className="text-lg font-bold leading-tight">
                    {eventDay(event)}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="text-base font-bold leading-tight">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">
                    {event.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
