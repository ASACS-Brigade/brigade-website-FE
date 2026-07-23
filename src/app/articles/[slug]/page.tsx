import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  ImageOff,
  UserRound,
} from "lucide-react";

import ArticleCard from "../../../components/cards/article-card";
import Container from "../../../components/layout/container";
import { formatArticleDate } from "../../../constants/articles";
import { getArticleDetailData } from "../../../lib/content-api";

export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = await getArticleDetailData(slug);
  const article = data?.article;

  if (!article) {
    return {
      title: "Article Not Found | Boys & Girls Brigade Surulere",
    };
  }

  return {
    title: `${article.title} | Boys & Girls Brigade Surulere`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : undefined,
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getArticleDetailData(slug);
  const article = data?.article;

  if (!article) {
    notFound();
  }

  const relatedArticles = data.relatedArticles;

  return (
    <main className="bg-background text-foreground">
      <section className="border-b border-border bg-card">
        <Container className="py-6">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted transition hover:text-secondary"
          >
            <ArrowLeft size={16} />
            Back To Articles
          </Link>
        </Container>
      </section>

      <article>
        <section className="relative overflow-hidden bg-primary text-white">
          <div className="absolute inset-0">
            {article.image ? (
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-28"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-primary-light/20 text-white/25">
                <ImageOff size={96} />
              </div>
            )}
            <div className="absolute inset-0 bg-primary/95 lg:bg-primary/80" />
          </div>

          <Container className="relative z-10 py-14 sm:py-18 lg:py-24">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white/75">
                <span className="rounded-full bg-secondary px-3 py-1 text-white">
                  {article.category}
                </span>
                <span>{article.eyebrow}</span>
              </div>

              <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
                {article.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85 sm:text-xl sm:leading-9">
                {article.deck}
              </p>

              <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
                <div className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <UserRound size={17} className="text-secondary" />
                  <p className="mt-2 font-bold">{article.author}</p>
                </div>
                <div className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <CalendarDays size={17} className="text-secondary" />
                  <p className="mt-2 font-bold">
                    {formatArticleDate(article.date)}
                  </p>
                </div>
                <div className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <Clock3 size={17} className="text-secondary" />
                  <p className="mt-2 font-bold">{article.readTime}</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(280px,0.32fr)]">
              <div className="min-w-0">
                <div className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
                  <p className="border-l-4 border-secondary pl-5 text-xl font-semibold leading-9 text-foreground">
                    {article.excerpt}
                  </p>

                  <div className="mt-9 space-y-6">
                    {article.sections.map((section) => {
                      const isBoysSection =
                        section.heading.startsWith("The Boys' Brigade");
                      const isGirlsSection =
                        section.heading.startsWith("The Girls' Brigade");
                      const isLocalSection =
                        section.heading.startsWith("How Both");
                      const chapterLabel = isBoysSection
                        ? "Boys' Brigade"
                        : isGirlsSection
                          ? "Girls' Brigade"
                          : isLocalSection
                            ? "Local Company"
                            : "History Note";

                      return (
                        <section
                          key={section.heading}
                          className={`rounded-lg border p-5 sm:p-6 ${
                            isBoysSection
                              ? "border-primary/25 bg-primary/5"
                              : isGirlsSection
                                ? "border-secondary/35 bg-secondary/10"
                                : isLocalSection
                                  ? "border-border bg-background"
                                  : "border-transparent bg-transparent p-0 sm:p-0"
                          }`}
                        >
                          {(isBoysSection || isGirlsSection || isLocalSection) && (
                            <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-secondary">
                              {chapterLabel}
                            </p>
                          )}

                          <h2 className="text-2xl font-black text-foreground">
                            {section.heading}
                          </h2>
                          <div className="mt-4 space-y-5 text-base leading-8 text-muted">
                            {section.body.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        </section>
                      );
                    })}
                  </div>
                </div>

                {article.timeline && (
                  <section className="mt-8 rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
                    <div className="mb-6 flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-secondary">
                        <BookOpen size={22} />
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                          Timeline
                        </p>
                        <h2 className="text-2xl font-black text-foreground">
                          Key Brigade Milestones
                        </h2>
                      </div>
                    </div>

                    <div className="relative space-y-5">
                      <div className="absolute left-[4.45rem] top-4 hidden h-[calc(100%-2rem)] w-px bg-border sm:block" />
                      {article.timeline.map((item) => (
                        <div
                          key={`${item.year}-${item.title}`}
                          className="grid gap-4 rounded-lg border border-border p-4 sm:grid-cols-[96px_1fr]"
                        >
                          <div className="relative z-10">
                            <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-sm font-black text-white">
                              {item.year}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-lg font-black text-foreground">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-7 text-muted">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                  <h2 className="text-xl font-black text-foreground">
                    Article Details
                  </h2>
                  <dl className="mt-5 space-y-4 text-sm">
                    <div>
                      <dt className="font-bold text-foreground">Section</dt>
                      <dd className="mt-1 text-muted">{article.category}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-foreground">Published</dt>
                      <dd className="mt-1 text-muted">
                        {formatArticleDate(article.date)}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-foreground">Reading Time</dt>
                      <dd className="mt-1 text-muted">{article.readTime}</dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-lg border border-secondary/35 bg-secondary/10 p-6">
                  <h2 className="text-xl font-black text-foreground">
                    Keep Reading
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Explore more Brigade stories, reports and devotionals in
                    the magazine archive.
                  </p>
                  <Link
                    href="/articles#archive"
                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-primary-light"
                  >
                    View Archive
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </aside>
            </div>
          </Container>
        </section>
      </article>

      <section className="pb-14 sm:pb-18 lg:pb-20">
        <Container>
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
              Read More
            </p>
            <h2 className="mt-2 text-3xl font-black text-foreground">
              Related Stories
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {relatedArticles.map((related) => (
              <ArticleCard
                key={related.slug}
                image={related.image}
                category={related.category}
                title={related.title}
                excerpt={related.excerpt}
                href={`/articles/${related.slug}`}
                date={formatArticleDate(related.date)}
                readTime={related.readTime}
                variant="compact"
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
