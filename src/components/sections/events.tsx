import Link from "next/link";
import Container from "../layout/container";
import EventCard from "../cards/event-card";
import FadeIn from "../layout/fade-in";
import { FaArrowRight } from "react-icons/fa6";

const events = [
  {
    image: "/events/pic1.png",
    day: "15",
    month: "JUN",
    title: "Monthly Fellowship & Devotion",
    location: "Brigade Hall, Surulere",
    time: "10:00 AM",
  },
  {
    image: "/events/pic2.png",
    day: "28",
    month: "JUN",
    title: "Community Outreach",
    location: "Surulere Community",
    time: "9:00 AM",
  },
  {
    image: "/events/pic3.png",
    day: "06",
    month: "JUL",
    title: "Leadership Training Camp",
    location: "Camp Ground, Lagos",
    time: "9:00 AM",
  },
];

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
              text-[#0E2A47]
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
            text-[#0E2A47]
            hover:text-[#D4A437]
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
            text-[#0E2A47]
            hover:text-[#D4A437]
            "
          >
            <FaArrowRight />
          </Link>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {events.map((event) => (
            <FadeIn key={event.title}>
              <EventCard {...event} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
