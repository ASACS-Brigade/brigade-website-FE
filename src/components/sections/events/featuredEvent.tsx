"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, ImageOff, MapPin } from "lucide-react";
import FadeIn from "../../layout/fade-in";
import {
  BrigadeEvent,
  eventDay,
  eventFullDate,
  eventMonth,
} from "../../../constants/events";

export default function FeaturedEvent({ event }: { event: BrigadeEvent }) {
  return (
    <section>
      <FadeIn>
        <h2 className="mb-6 text-xl font-bold text-heading sm:text-2xl">
          Featured Event
        </h2>
      </FadeIn>

      <FadeIn>
        <article className="group grid overflow-hidden rounded-lg border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl md:grid-cols-2">
          <div className="relative min-h-[260px] bg-primary/10 md:min-h-[360px]">
            {event.image ? (
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-primary/10 text-muted">
                <ImageOff size={36} />
                <span className="text-xs font-black uppercase tracking-[0.14em]">
                  No cover
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-70" />
            <div className="absolute left-4 top-4 flex h-16 w-16 flex-col items-center justify-center rounded-lg bg-primary-light text-white shadow-lg ring-1 ring-white/20">
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                {eventMonth(event)}
              </span>
              <span className="text-2xl font-bold leading-tight">
                {eventDay(event)}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-card p-6 sm:p-8">
            <span className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              Next Highlight
            </span>

            <h3 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
              {event.title}
            </h3>

            <div className="my-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted">
                <Calendar size={16} className="text-secondary" />
                <span>{eventFullDate(event)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <Clock size={16} className="text-secondary" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <MapPin size={16} className="text-secondary" />
                <span>{event.location}</span>
              </div>
            </div>

            <p className="mb-6 text-sm leading-7 text-muted sm:text-base">
              {event.description}
            </p>

            <Link
              href={event.href}
              className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#b98c22] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background"
            >
              Register a Spot
              <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </FadeIn>
    </section>
  );
}
