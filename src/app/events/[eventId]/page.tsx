import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3, ImageOff, MapPin } from "lucide-react";
import Container from "../../../components/layout/container";
import OutreachSponsorsMarquee from "../../../components/shared/outreach-sponsors-marquee";
import { eventFullDate } from "../../../constants/events";
import { getEventDetailData } from "../../../lib/content-api";

export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  const event = await getEventDetailData(eventId);

  if (!event) {
    return {
      title: "Event Not Found | Boys & Girls Brigade Surulere",
    };
  }

  return {
    title: `${event.title} | Boys & Girls Brigade Surulere`,
    description: event.description,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  const event = await getEventDetailData(eventId);

  if (!event) {
    notFound();
  }

  const deadline = event.deadlineAt
    ? new Date(event.deadlineAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;
  const isCommunityOutreach =
    eventId === "community-outreach-program" || event.id === "community-outreach";

  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden bg-primary py-16 text-white sm:py-20">
        {event.image ? (
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority
            className="pointer-events-none object-cover opacity-55"
          />
        ) : (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary-light/20 text-white/25">
            <ImageOff size={96} />
          </div>
        )}
        <div
          className="event-detail-hero-overlay pointer-events-none absolute inset-0"
        />

        <Container className="relative z-10">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-secondary"
          >
            <ArrowLeft size={16} />
            Back To Events
          </Link>

          <div className="mt-8 max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
              Event Story
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {event.title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
              {event.description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                <CalendarDays size={18} className="text-secondary" />
                <p className="mt-2 text-sm font-semibold">
                  {eventFullDate(event)}
                </p>
              </div>
              <div className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                <Clock3 size={18} className="text-secondary" />
                <p className="mt-2 text-sm font-semibold">{event.time}</p>
              </div>
              <div className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                <MapPin size={18} className="text-secondary" />
                <p className="mt-2 text-sm font-semibold">{event.location}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-18 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(300px,0.35fr)]">
            <article className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-heading">
                About The Event
              </h2>

              <div className="mt-5 space-y-5 text-base leading-8 text-muted">
                {event.writeup.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {event.videoUrl ? (
                <div className="mt-8">
                  <h3 className="text-lg font-bold text-heading">
                    Event Video
                  </h3>
                  <div className="mt-4 overflow-hidden rounded-lg border border-border bg-primary">
                    <video
                      src={event.videoUrl}
                      controls
                      preload="metadata"
                      className="aspect-video w-full bg-black"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              ) : null}
            </article>

            <aside className="self-start rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-bold text-heading">Quick Details</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-bold text-foreground">Date</dt>
                  <dd className="mt-1 text-muted">{eventFullDate(event)}</dd>
                </div>
                <div>
                  <dt className="font-bold text-foreground">Time</dt>
                  <dd className="mt-1 text-muted">{event.time}</dd>
                </div>
                <div>
                  <dt className="font-bold text-foreground">Venue</dt>
                  <dd className="mt-1 text-muted">{event.location}</dd>
                </div>
                {deadline ? (
                  <div>
                    <dt className="font-bold text-foreground">
                      Registration Deadline
                    </dt>
                    <dd className="mt-1 text-muted">{deadline}</dd>
                  </div>
                ) : null}
              </dl>

              <Link
                href="/gallery"
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#b98c22] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-background"
              >
                See More In Gallery
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      {isCommunityOutreach ? <OutreachSponsorsMarquee /> : null}

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-heading">
                Event Pictures
              </h2>
              <p className="mt-1 text-sm text-muted">
                A few moments from the event.
              </p>
            </div>
            <Link
              href="/gallery"
              className="text-sm font-bold text-secondary transition hover:text-heading"
            >
              View Full Gallery
            </Link>
          </div>

          {event.galleryImages.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-3">
              {event.galleryImages.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-primary/10 shadow-sm ring-1 ring-border"
                >
                  <Image
                    src={image}
                    alt={`${event.title} photo ${index + 1}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-border p-8 text-center text-sm font-semibold text-muted">
              No event pictures have been added yet.
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
