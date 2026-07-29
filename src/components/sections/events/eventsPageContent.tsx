"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import Container from "../../layout/container";
import CtaBanner from "../../shared/ctaBanner";
import { type BrigadeEvent } from "../../../constants/events";
import EventCalendar from "./eventCalendar";
import FeaturedEvent from "./featuredEvent";
import PastEvents from "./pastEvents";
import UpcomingEvents from "./upcomingEvents";

export default function EventsPageContent({
  events = [],
  featured,
  upcoming = [],
  past = [],
}: {
  events?: BrigadeEvent[];
  featured?: BrigadeEvent;
  upcoming?: BrigadeEvent[];
  past?: BrigadeEvent[];
}) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <>
      <section className="py-14 sm:py-16 lg:py-20">
        <Container>
          {events.length === 0 ? (
            <div className="mb-8 rounded-2xl border border-dashed border-border bg-card p-8 text-center">
              <h2 className="text-2xl font-bold text-heading">
                Events Coming Soon
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted">
                Published events from the dashboard will appear here once they
                are available.
              </p>
            </div>
          ) : null}

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,380px)] lg:items-start">
            {featured ? <FeaturedEvent event={featured} /> : null}

            <aside id="event-calendar" className="scroll-mt-24 lg:sticky lg:top-24">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-heading sm:text-2xl">
                  Event Calendar
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Tap a highlighted date to focus the event list.
                </p>
              </div>

              <EventCalendar
                events={events}
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />
            </aside>
          </div>
        </Container>
      </section>

      <UpcomingEvents
        events={upcoming}
        selectedDate={selectedDate}
        onClearSelected={() => setSelectedDate(null)}
      />
      <PastEvents events={past} />

      <CtaBanner
        icon={<Calendar size={22} className="text-white" />}
        heading="See Event Schedule"
        subheading="Don't miss out on things happening in the Brigade."
        buttonLabel="View All Events"
        buttonHref="/events#upcoming-events"
      />
    </>
  );
}
