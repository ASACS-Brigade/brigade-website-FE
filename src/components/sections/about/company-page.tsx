import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Dumbbell,
  HeartHandshake,
  Music2,
  ShieldCheck,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

import {
  getCompanyBySlug,
  type CompanyActivityIcon,
  type CompanyPageData,
} from "../../../constants/companies";
import Container from "../../layout/container";
import FadeIn from "../../layout/fade-in";
import CompanySectionsShowcase from "./company-sections";
import ExpandableHistory from "./expandable-history";

const activityIcons: Record<CompanyActivityIcon, LucideIcon> = {
  bible: BookOpen,
  community: HeartHandshake,
  leadership: UsersRound,
  music: Music2,
  parade: ShieldCheck,
  skills: Sparkles,
  sports: Dumbbell,
};

function CompanyPageHero({ company }: { company: CompanyPageData }) {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:28px_28px]" />
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
            <li>
              <Link className="rounded-sm hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary" href="/">
                Home
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
            <li>
              <Link className="rounded-sm hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary" href="/about">
                About
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
            <li aria-current="page" className="text-white">
              {company.companyName}
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
              {company.organisationName}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {company.companyName}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              {company.heroDescription}
            </p>
          </div>
          <div className="flex h-36 w-36 items-center justify-center rounded-2xl border border-white/15 bg-white p-5 shadow-xl shadow-black/10 sm:h-44 sm:w-44">
            <Image
              src={company.logo}
              alt={company.logoAlt}
              width={144}
              height={144}
              priority
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function IntroductionAndHistory({ company }: { company: CompanyPageData }) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">Our Company</p>
              <h2 className="mt-3 text-3xl font-bold text-heading">Who We Are</h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-muted">
                {company.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div
              id="company-history"
              data-history-panel
              className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">Our Heritage</p>
              <h2 className="mt-3 text-3xl font-bold text-heading">Our History</h2>
              <ExpandableHistory history={company.history} />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function ObjectOrAim({ company }: { company: CompanyPageData }) {
  return (
    <section className="bg-primary py-16 text-white md:py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
            The {company.organisationName}
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Our {company.objectOrAim.label}</h2>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-secondary" />
          <blockquote className="mt-7 text-lg leading-9 text-white/90 sm:text-xl sm:leading-10">
            “{company.objectOrAim.text}”
          </blockquote>
        </div>
      </Container>
    </section>
  );
}

function IdentityAndActivities({ company }: { company: CompanyPageData }) {
  return (
    <>
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <FadeIn>
              <div className="flex justify-center">
                <div className="flex aspect-square w-full max-w-72 items-center justify-center rounded-full border border-secondary/30 bg-secondary/10 p-12">
                  <Image src={company.logo} alt={company.logoAlt} width={180} height={180} className="h-full w-full object-contain" />
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">Motto &amp; Identity</p>
                <h2 className="mt-3 text-3xl font-bold text-heading md:text-4xl">{company.motto}</h2>
                {company.scriptureReference ? (
                  <p className="mt-3 font-semibold text-secondary">{company.scriptureReference}</p>
                ) : null}
                <div className="mt-5 max-w-2xl">
                  <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-heading">
                    How the motto shapes company life
                  </h3>
                  <p className="mt-2 text-base leading-8 text-muted">{company.identityExplanation}</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {company.identityDetails.map((detail) => (
              <article key={detail.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-bold text-heading">{detail.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{detail.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CompanySectionsShowcase sections={company.sections} />

      <section className="bg-primary/[0.035] py-16 dark:bg-white/[0.025] md:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">Company Life</p>
            <h2 className="mt-3 text-3xl font-bold text-heading md:text-4xl">What We Do</h2>
            <p className="mt-4 leading-7 text-muted">
              Our activities connect Christian formation with practical growth, teamwork and service.
            </p>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {company.activities.map((activity) => {
              const Icon = activityIcons[activity.icon];
              return (
                <FadeIn key={activity.title}>
                  <article className="h-full rounded-xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg hover:shadow-slate-900/10 dark:hover:shadow-black/30">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-secondary">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-heading">{activity.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{activity.description}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}

function Leadership({ company }: { company: CompanyPageData }) {
  if (!company.leadership?.length) return null;

  const currentLeaders = company.leadership.filter(
    (leader) => leader.status === "current",
  );
  const pastLeaders = company.leadership.filter(
    (leader) => leader.status === "past",
  );

  function LeadershipCard({
    leader,
  }: {
    leader: NonNullable<CompanyPageData["leadership"]>[number];
  }) {
    return (
      <article className="w-full max-w-52 overflow-hidden rounded-xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg hover:shadow-slate-900/10 dark:hover:shadow-black/30">
        <div className="relative aspect-square bg-primary/5">
          {leader.image ? (
            <Image
              src={leader.image}
              alt={leader.name}
              fill
              sizes="(min-width: 1024px) 208px, (min-width: 640px) 25vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary/10 text-3xl font-bold text-heading" aria-hidden="true">
              {leader.name
                .split(" ")
                .filter(Boolean)
                .map((part) => part[0])
                .join("")
                .slice(0, 3)}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-sm font-bold leading-5 text-heading">{leader.name}</h3>
          <p className="mt-1 text-xs text-muted">{leader.role}</p>
          {leader.servicePeriod ? (
            <p className="mt-3 inline-flex w-fit items-center gap-1.5 whitespace-nowrap rounded-full border border-secondary/30 bg-secondary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-heading max-[384px]:gap-1 max-[384px]:px-2 max-[384px]:text-[9px] max-[384px]:tracking-normal">
              <CalendarDays aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-secondary" />
              {leader.servicePeriod}
            </p>
          ) : null}
          {leader.note ? (
            <p className="mt-3 text-xs leading-5 text-muted">{leader.note}</p>
          ) : null}
        </div>
      </article>
    );
  }

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">Serving the Company</p>
          <h2 className="mt-3 text-3xl font-bold text-heading">Leadership Succession</h2>
          <p className="mt-4 leading-7 text-muted">
            Honouring the captains who have guided the company through different seasons of service.
          </p>
        </div>

        {currentLeaders.length ? (
          <div className="mt-9">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-heading">Current Captain</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {currentLeaders.map((leader) => <LeadershipCard key={leader.name} leader={leader} />)}
            </div>
          </div>
        ) : null}

        {pastLeaders.length ? (
          <div className="mt-10 border-t border-border pt-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-heading">Past Captains</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {pastLeaders.map((leader) => <LeadershipCard key={leader.name} leader={leader} />)}
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function CompanyAchievements({ company }: { company: CompanyPageData }) {
  if (!company.achievements.length) return null;

  return (
    <section className="bg-primary/[0.035] py-16 dark:bg-white/[0.025] md:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
            Our Journey
          </p>
          <h2 className="mt-3 text-3xl font-bold text-heading md:text-4xl">
            Company Achievements
          </h2>
          <p className="mt-4 leading-7 text-muted">
            Confirmed anniversaries and major milestones in the company’s continuing story.
          </p>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {company.achievements.map((achievement) => (
            <article
              key={`${achievement.year ?? "milestone"}-${achievement.title}`}
              className="rounded-xl border border-border bg-card p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-secondary">
                <Award aria-hidden="true" className="h-5 w-5" />
              </span>
              {achievement.year ? (
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-secondary">
                  {achievement.year}
                </p>
              ) : null}
              <h3 className="mt-2 text-lg font-bold text-heading">
                {achievement.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                {achievement.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CompanyGalleryPreview({ company }: { company: CompanyPageData }) {
  if (!company.galleryImages.length) return null;

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
              Company Life in Pictures
            </p>
            <h2 className="mt-3 text-3xl font-bold text-heading md:text-4xl">
              Photo Highlights
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Approved photographs from learning, fellowship and community service.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex min-h-11 items-center gap-2 self-start rounded-lg font-bold text-heading outline-none transition hover:text-secondary focus-visible:ring-2 focus-visible:ring-secondary sm:self-auto"
          >
            View the gallery
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {company.galleryImages.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] bg-primary/5">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-4 text-sm leading-6 text-muted">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

function RelatedCompany({ company }: { company: CompanyPageData }) {
  const related = getCompanyBySlug(company.relatedCompanySlug);
  return (
    <section className="pb-16 md:pb-20">
      <Container>
        <Link
          href={`/about/${related.slug}`}
          className="group flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 outline-none transition hover:border-secondary focus-visible:ring-2 focus-visible:ring-secondary sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="flex items-center gap-5">
            <Image src={related.logo} alt="" width={64} height={64} className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">Also discover</p>
              <h2 className="mt-1 text-xl font-bold text-heading">{related.companyName}</h2>
              <p className="mt-1 text-sm text-muted">{related.organisationName}</p>
            </div>
          </div>
          <ArrowRight aria-hidden="true" className="h-5 w-5 text-heading transition-transform group-hover:translate-x-1" />
        </Link>
      </Container>
    </section>
  );
}

function JoinCta({ company }: { company: CompanyPageData }) {
  return (
    <section className="bg-primary py-16 text-white md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{company.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/80">{company.cta.description}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/register" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-secondary px-6 py-3 font-bold text-white transition hover:bg-[#b98c22] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
              Become a Member
            </Link>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/70 px-6 py-3 font-bold text-white transition hover:border-white hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function CompanyPage({ company }: { company: CompanyPageData }) {
  return (
    <main>
      <CompanyPageHero company={company} />
      <IntroductionAndHistory company={company} />
      <ObjectOrAim company={company} />
      <IdentityAndActivities company={company} />
      <Leadership company={company} />
      <CompanyAchievements company={company} />
      <CompanyGalleryPreview company={company} />
      <RelatedCompany company={company} />
      <JoinCta company={company} />
    </main>
  );
}
