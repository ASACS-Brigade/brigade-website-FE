import type { GalleryCategory } from "../../../../../data/gallery";
import Image from "next/image";
import Container from "../../../layout/container";

const overviewCopy: Record<
  string,
  {
    summary: string;
  }
> = {
  parade: {
    summary:
      "Parade and drill capture the discipline, order and teamwork at the heart of Brigade life. This gallery preserves inspection days, ceremonial marches, awards, uniform presentation and the shared pride of members learning to move with confidence, respect and purpose.",
  },
  outreach: {
    summary:
      "Outreach is the Brigade in action beyond weekly meetings. Members, officers and partners serve families through medical support, charity visits, practical care, prayer and encouragement, helping young people understand Christian service as visible love in the community.",
  },
  default: {
    summary:
      "This archive preserves the story of Brigade life through photos, events and shared memories. Each gallery reflects faith, discipline, leadership, teamwork and the joy of belonging to a Christ-centred company.",
  },
};

export default function AlbumOverview({
  album,
  categorySlug,
}: {
  album: GalleryCategory;
  categorySlug: string;
}) {
  const copy = overviewCopy[categorySlug] ?? overviewCopy.default;
  const title = album.overviewTitle || "What This Gallery Is About";
  const summary = album.overviewBody || copy.summary;

  return (
    <section className="bg-background py-14 sm:py-18">
      <Container>
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 text-center shadow-sm sm:p-8 lg:p-10">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
            {album.shortTitle} Story
          </span>
          <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
            {summary}
          </p>
        </div>
      </Container>
    </section>
  );
}

// Add future sponsor logos here; the repeated marquee updates automatically.
const sponsors = [
  {
    name: "Flour Mills of Nigeria",
    logo: "/gallery/flour mills logo.jpeg",
  },
  {
    name: "Nigerian Red Cross Society",
    logo: "/gallery/Nigerian-Red-Cross-Society-Official-LOGO_0.png.webp",
  },
    {
    name: "Advantage health Africa",
    logo: "/gallery/aha.png",
  },
];

const sponsorSequence = [...sponsors, ...sponsors, ...sponsors];

export function OutreachSponsorsMarquee() {
  return (
    <section className="overflow-hidden bg-white py-12">
      <Container>
        <div className="mb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
            Outreach Partner
          </span>
          <h2 className="mt-2 text-2xl font-black text-primary uppercase">
            and Sponsors
          </h2>
        </div>
      </Container>

      <div className="border-y border-slate-100 dark:border-slate-800 py-8">
        <div className="outreach-marquee flex w-max items-center">
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              aria-hidden={groupIndex === 1}
              className="flex shrink-0 items-center gap-16 px-8 sm:gap-24 sm:px-12 lg:gap-32 lg:px-16"
            >
              {sponsorSequence.map((sponsor, sponsorIndex) => (
                <div
                  key={`${groupIndex}-${sponsor.name}-${sponsorIndex}`}
                  title={sponsor.name}
                  className="group flex h-20 w-48 shrink-0 cursor-pointer items-center justify-center rounded-lg px-3 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 sm:w-56"
                >
                  <div className="relative h-16 w-full">
                    <Image
                      src={sponsor.logo}
                      alt={groupIndex === 0 ? sponsor.name : ""}
                      fill
                      sizes="(min-width: 640px) 224px, 192px"
                      className="object-contain opacity-55 grayscale dark:grayscale-0 dark:opacity-100 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
