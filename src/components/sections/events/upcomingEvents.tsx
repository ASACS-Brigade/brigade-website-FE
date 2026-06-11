"use client";
import Link from "next/link";
import { MapPin } from "lucide-react";
import FadeIn from "../../layout/fade-in";
import Container from "../../layout/container";

const upcomingEvents = [
  {
    month: "JUN",
    day: "15",
    title: "Monthly Fellowship & Devotion",
    location: "Brigade Hall, Surulere",
    time: "10:00 AM",
    href: "/events/monthly-fellowship",
  },
  {
    month: "JUN",
    day: "06",
    title: "Leadership Training",
    location: "Kings Group, Lagos",
    time: "9:00 AM",
    href: "/events/leadership-training",
  },
  {
    month: "JUN",
    day: "25",
    title: "Parents & Leaders Forum",
    location: "Brigade Hall, Surulere",
    time: "11:00 AM",
    href: "/events/parents-leaders-forum",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="pb-12">
      <Container>
        <FadeIn>
          <h2 className="text-xl font-bold text-primary mb-6">
            Upcoming Events
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-4">
          {upcomingEvents.map((event, i) => (
            <FadeIn key={event.title}>
              <div
                className="flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-border bg-background
                  transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm hover:border-border-secondary"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Date badge */}
                <div
                  className="flex flex-col items-center justify-center w-12 h-14 rounded-lg flex-shrink-0 text-white"
                  style={{ background: "#173B61" }}
                >
                  <span
                    className="text-[9px] font-bold uppercase tracking-widest"
                    style={{ color: "#D4A017" }}
                  >
                    {event.month}
                  </span>
                  <span className="text-xl font-bold leading-tight">{event.day}</span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground truncate">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1 mt-1 text-xs text-muted">
                    <MapPin size={11} />
                    <span className="truncate">{event.location}</span>
                    <span className="ml-1 text-muted/60">· {event.time}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={event.href}
                  className="flex-shrink-0 inline-flex items-center justify-center rounded-lg px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90"
                  style={{ background: "#D4A017" }}
                >
                  Register
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}