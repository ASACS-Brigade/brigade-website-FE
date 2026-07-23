"use client";

import { useState } from "react";
import { ArrowRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BrigadeEvent } from "../../../constants/events";
import Container from "../../layout/container";
import CalendarModal from "./calendarModal";

export default function EventsHero({ events }: { events: BrigadeEvent[] }) {
  const [calendarOpen, setCalendarOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-145 overflow-hidden md:min-h-160">
        <Image
          src="/events/pic2.png"
          alt="Boys and Girls Brigade event gathering"
          fill
          priority
          className="pointer-events-none object-cover"
        />

        <div
          className="hero-fade-overlay pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(14, 42, 71, 0.96) 0%, rgba(14, 42, 71, 0.9) 44%, rgba(14, 42, 71, 0.18) 76%, rgba(14, 42, 71, 0) 100%)",
          }}
        />

        {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" /> */}

        <Container className="relative z-10 flex min-h-140 items-center py-16 sm:min-h-125 sm:py-20 lg:min-h-140 lg:py-24">
          <div className="event-hero-copy">
            <div className="max-w-3xl text-white">

              {/* <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary backdrop-blur">
                <CalendarDays size={15} />
                Brigade Calendar
              </div> */}

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
                Gatherings that build{" "}
                <span className="text-secondary">faith</span>,{" "}
                <span className="text-secondary">friendship</span> & service
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg md:mt-6 md:text-[18px] md:leading-8">
                Stay close to upcoming devotions, trainings, outreaches and
                chapter activities across Surulere.
              </p>

              <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row md:mt-10">
                <Link
                  href="#upcoming-events"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#b98c22] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-primary sm:w-auto md:text-base"
                >
                  View Upcoming
                  <ArrowRight size={18} />
                </Link>

                <button
                  type="button"
                  onClick={() => setCalendarOpen(true)}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white/80 px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-secondary hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary sm:w-auto md:text-base"
                >
                  Open Calendar
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CalendarModal
        events={events}
        open={calendarOpen}
        onClose={() => setCalendarOpen(false)}
      />
    </>
  );
}
