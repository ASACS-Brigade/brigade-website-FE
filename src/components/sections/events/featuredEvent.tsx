"use client";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin } from "lucide-react";
import FadeIn from "../../layout/fade-in";
import Container from "../../layout/container";

// Replace with your actual featured event data / CMS fetch
const featuredEvent = {
  title: "Community Outreach Program",
  date: "Saturday, 28 June 2024",
  time: "9:00 AM",
  location: "Surulere Community Hall",
  description:
    "Join us as we reach out to the community this June, sharing hope and making a difference in the lives of those around us.",
  image: "/events/pic1.png",
  href: "/events/community-outreach-program",
};

export default function FeaturedEvent() {
  return (
    <section className="py-12">
      <Container>
        <FadeIn>
          <h2 className="text-xl font-bold text-primary mb-6">
            Featured Event
          </h2>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-border shadow-sm">
            {/* Image */}
            <div className="relative min-h-[220px] md:min-h-[280px] bg-primary/10">
              <Image
                src={featuredEvent.image}
                alt={featuredEvent.title}
                fill
                className="object-cover"
              />
              {/* Date badge */}
              <div
                className="absolute top-4 left-4 flex flex-col items-center justify-center w-14 h-14 rounded-xl text-white font-bold shadow-lg"
                style={{ background: "#173B61" }}
              >
                <span className="text-[10px] uppercase tracking-widest leading-none" style={{ color: "#D4A017" }}>
                  JUN
                </span>
                <span className="text-2xl leading-tight">28</span>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 sm:p-8 flex flex-col justify-center bg-background">
              <h3 className="text-lg font-bold text-foreground mb-3">
                {featuredEvent.title}
              </h3>

              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Calendar size={14} style={{ color: "#D4A017" }} />
                  <span>{featuredEvent.date} &nbsp;|&nbsp; {featuredEvent.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <MapPin size={14} style={{ color: "#D4A017" }} />
                  <span>{featuredEvent.location}</span>
                </div>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-6">
                {featuredEvent.description}
              </p>

              <Link
                href={featuredEvent.href}
                className="inline-flex items-center justify-center self-start rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
                style={{ background: "#D4A017" }}
              >
                Register a Spot
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}