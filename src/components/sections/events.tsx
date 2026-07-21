import Link from "next/link";
import Container from "../layout/container";
import EventCard from "../cards/event-card";
import FadeIn from "../layout/fade-in";
import { FaArrowRight } from "react-icons/fa6";
import {
  eventDay,
  eventMonth,
  upcomingEvents,
} from "../../constants/events";

export default function EventsPreview() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <h2
              className="
              text-2xl
              font-bold
              text-primary
              "
            >
              Upcoming Events
            </h2>

            <p
              className="
              mt-1
              text-sm
              text-slate-500
              "
            >
              See what's coming up and be part of it.
            </p>
          </div>

          <Link
            href="/events"
            className="
            hidden lg:block
            text-sm
            font-medium
            text-primary
            hoverLink
            "
          >
            View All
          </Link>

          <Link
            href="/events"
            className="
            block lg:hidden
            text-xs
            font-medium
            text-primary
            hoverLink
            "
          >
            <FaArrowRight />
          </Link>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {upcomingEvents.slice(0, 3).map((event) => (
            <FadeIn key={event.title}>
              <EventCard
                image={event.image}
                day={eventDay(event)}
                month={eventMonth(event)}
                title={event.title}
                location={event.location}
                time={event.time}
              />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
