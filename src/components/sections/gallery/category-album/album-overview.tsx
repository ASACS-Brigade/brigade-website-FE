import type { GalleryCategory } from "../../../../../data/gallery";
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

  return (
    <section className="bg-background py-14 sm:py-18">
      <Container>
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 text-center shadow-sm sm:p-8 lg:p-10">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
            {album.shortTitle} Story
          </span>
          <h2 className="mt-3 text-3xl font-black text-primary sm:text-4xl">
            What This Gallery Is About
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
            {copy.summary}
          </p>
        </div>
      </Container>
    </section>
  );
}

const sponsors = [
  "Flour Mills of Nigeria",
  "Nigerian Red Cross",
  "Lagos State Health Team",
  "All Saints Anglican Church",
  "Community Pharmacists",
  "Surulere Volunteers",
];

export function OutreachSponsorsMarquee() {
  return (
    <section className="overflow-hidden bg-white py-10">
      <Container>
        <div className="mb-6 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
            Outreach Partners
          </span>
          <h2 className="mt-2 text-2xl font-black text-primary">
            Past Sponsors & Supporters
          </h2>
        </div>
      </Container>

      <div className="outreach-marquee flex gap-4">
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div
            key={`${sponsor}-${index}`}
            className="flex min-w-[240px] items-center gap-3 rounded-full border border-secondary/25 bg-background px-5 py-3 shadow-sm"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-secondary">
              {sponsor
                .split(" ")
                .slice(0, 2)
                .map((word) => word[0])
                .join("")}
            </span>
            <span className="text-sm font-bold text-primary">{sponsor}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
