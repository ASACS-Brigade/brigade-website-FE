import Image from "next/image";

import Container from "../layout/container";

type OutreachSponsor = {
  name: string;
  logo: string;
  detail?: string;
};

// Add future outreach sponsors here; both outreach pages update automatically.
const sponsors: OutreachSponsor[] = [
  {
    name: "Flour Mills of Nigeria",
    logo: "/gallery/flour mills logo.jpeg",
  },
  {
    name: "Nigerian Red Cross Society",
    logo: "/gallery/Nigerian-Red-Cross-Society-Official-LOGO_0.png.webp",
    detail: "Detachment 287",
  },
  {
    name: "Advantage Health Africa",
    logo: "/gallery/aha.png",
  },
];

const sponsorSequence = [...sponsors, ...sponsors, ...sponsors];

export default function OutreachSponsorsMarquee() {
  return (
    <section className="overflow-hidden bg-card py-12 text-foreground">
      <Container>
        <div className="mb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
            Outreach Partner
          </span>
          <h2 className="mt-2 text-2xl font-black uppercase text-heading">
            and Sponsors
          </h2>
        </div>
      </Container>

      <div className="border-y border-border py-8">
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
                  className="outreach-sponsor-card flex h-24 w-48 shrink-0 cursor-pointer flex-col items-center justify-center rounded-lg px-3 sm:w-56"
                >
                  <div className="relative h-14 w-full">
                    <Image
                      src={sponsor.logo}
                      alt={groupIndex === 0 ? sponsor.name : ""}
                      fill
                      sizes="(min-width: 640px) 224px, 192px"
                      className="outreach-sponsor-logo object-contain"
                    />
                  </div>
                  {sponsor.detail ? (
                    <span className="mt-1 text-xs font-bold uppercase tracking-wide text-heading">
                      {sponsor.detail}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
