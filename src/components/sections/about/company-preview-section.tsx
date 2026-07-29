import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { companies, type CompanyPageData } from "../../../constants/companies";
import Container from "../../layout/container";
import FadeIn from "../../layout/fade-in";

function CompanyPreviewCard({ company }: { company: CompanyPageData }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-xl hover:shadow-slate-900/10 focus-within:border-secondary focus-within:ring-2 focus-within:ring-secondary/40 dark:hover:shadow-black/30">
      <div className="flex min-h-44 items-center justify-center bg-primary/5 p-8 dark:bg-white/5">
        <Image
          src={company.logo}
          alt={company.logoAlt}
          width={112}
          height={112}
          className="h-28 w-28 object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
          {company.organisationName}
        </p>
        <h3 className="mt-3 text-2xl font-bold text-heading">
          {company.companyName}
        </h3>
        <p className="mt-3 text-sm font-semibold text-foreground">
          {company.motto}
        </p>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">
          {company.heroDescription}
        </p>
        <Link
          href={`/about/${company.slug}`}
          className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-lg text-sm font-bold text-heading outline-none transition hover:text-secondary focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-4 focus-visible:ring-offset-card"
        >
          Explore the {company.companyName.replace("Surulere ", "")}
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}

export default function CompanyPreviewSection() {
  return (
    <section className="bg-primary/[0.035] py-16 dark:bg-white/[0.025] md:py-20">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
              One church, two companies
            </p>
            <h2 className="mt-3 text-3xl font-bold text-heading md:text-4xl">
              Meet Our Companies
            </h2>
            <p className="mt-4 leading-7 text-muted">
              United by one church and one mission, the 5th and 9th Surulere
              Companies serve boys and girls through Christian teaching,
              discipline, leadership development and community service. Explore
              the individual history and identity of each company.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <FadeIn>
            <CompanyPreviewCard company={companies["5th-surulere-company"]} />
          </FadeIn>
          <FadeIn>
            <CompanyPreviewCard company={companies["9th-surulere-company"]} />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
