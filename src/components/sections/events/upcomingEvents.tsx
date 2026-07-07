"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, MapPin, X } from "lucide-react";
import FadeIn from "../../layout/fade-in";
import Container from "../../layout/container";
import {
  BrigadeEvent,
  eventDay,
  eventFullDate,
  eventMonth,
  eventsForDate,
} from "../../../constants/events";

type UpcomingEventsProps = {
  events: BrigadeEvent[];
  selectedDate: string | null;
  onClearSelected: () => void;
};

export default function UpcomingEvents({
  events,
  selectedDate,
  onClearSelected,
}: UpcomingEventsProps) {
  const selectedEvents = eventsForDate(events, selectedDate);
  const visibleEvents = selectedEvents.length > 0 ? selectedEvents : events;
  const isFiltered = selectedEvents.length > 0;

  return (
    <section id="upcoming-events" className="pb-16 sm:pb-20">
      <Container>
        <FadeIn>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-primary sm:text-2xl">
                {isFiltered ? "Events On Selected Date" : "Upcoming Events"}
              </h2>
              <p className="mt-1 text-sm text-muted">
                {isFiltered
                  ? eventFullDate(selectedEvents[0])
                  : "Choose a date from the calendar or browse what is coming next."}
              </p>
            </div>

            {isFiltered && (
              <button
                type="button"
                onClick={onClearSelected}
                className="inline-flex min-h-10 items-center justify-center gap-2 self-start rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-primary transition hover:border-secondary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background sm:self-auto"
              >
                <X size={15} />
                Show All
              </button>
            )}
          </div>
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {visibleEvents.map((event, i) => (
            <FadeIn key={event.id}>
              <article
                className="group flex h-full flex-col rounded-lg border border-border bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-secondary/70 hover:shadow-lg"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex h-16 w-14 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-primary-light text-white transition group-hover:bg-primary">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-secondary">
                      {eventMonth(event)}
                    </span>
                    <span className="text-xl font-bold leading-tight">
                      {eventDay(event)}
                    </span>
                  </div>

                  <CalendarDays
                    size={18}
                    className="mt-1 text-secondary opacity-70 transition group-hover:opacity-100"
                  />
                </div>

                <h3 className="text-base font-bold leading-tight text-foreground">
                  {event.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
                  {event.description}
                </p>

                <div className="mt-5 flex flex-col gap-2 text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <Clock3 size={13} className="text-secondary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-secondary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Link
                  href={event.href}
                  className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-[#b98c22] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background"
                >
                  Register
                  <ArrowRight size={15} />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
