import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Flame,
  ImageOff,
  Megaphone,
  Newspaper,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

import ArticleCard from "../../cards/article-card";
import Container from "../../layout/container";
import {
  articleCategories,
  brigadeArticles,
  formatArticleDate,
  type ArticleCategory,
  type BrigadeArticle,
} from "../../../constants/articles";

const articlesPerPage = 6;

const categoryIcons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  "Latest News": Newspaper,
  "Brigade History": BookOpen,
  "Faith & Devotion": Flame,
  "Leadership & Training": ShieldCheck,
  "Events & Reports": Megaphone,
  "Golden Jubilee": Trophy,
};

const categoryDescriptions: Record<string, string> = {
  "Latest News": "Recent announcements, notices and company updates.",
  "Brigade History": "Educational features about the movement, traditions and identity.",
  "Faith & Devotion": "Bible studies, reflections and spiritual formation for members.",
  "Leadership & Training": "Guides for members, officers and young leaders.",
  "Events & Reports": "Coverage from parades, camps, outreach and enrolment services.",
  "Golden Jubilee": "A dedicated archive for the 50th anniversary story.",
};

function categoryId(category: ArticleCategory) {
  return category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and");
}

function getCategoryIcon(category: ArticleCategory) {
  return categoryIcons[category] ?? Newspaper;
}

function getCategoryDescription(category: ArticleCategory) {
  return (
    categoryDescriptions[category] ??
    "Stories and updates grouped by this editorial section."
  );
}

function ArticleImagePlaceholder({ label }: { label: string }) {
  return (
    <span className="flex h-full min-h-full w-full flex-col items-center justify-center gap-2 bg-slate-100 text-slate-400">
      <ImageOff size={30} />
      <span className="px-4 text-center text-xs font-black uppercase tracking-[0.14em]">
        {label}
      </span>
    </span>
  );
}

function articleHref(article: BrigadeArticle) {
  return `/articles/${article.slug}`;
}

function clampPage(value: string | string[] | undefined, totalPages: number) {
  const rawValue = Array.isArray(value) ? value[0] : value;
  const page = Number.parseInt(rawValue ?? "1", 10);

  if (Number.isNaN(page) || page < 1) {
    return 1;
  }

  return Math.min(page, totalPages);
}

function getArticlesByCategoryFrom(
  articles: BrigadeArticle[],
  category: ArticleCategory,
) {
  return articles.filter((article) => article.category === category);
}

function FeaturedStory({ article }: { article: BrigadeArticle }) {
  return (
    <section className="pt-10 sm:pt-12 lg:pt-16">
      <Container>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">
              Featured Story
            </p>
            <h1 className="mt-2 max-w-3xl text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Brigade Journal
            </h1>
          </div>

          <Link
            href="#archive"
            className="hidden items-center gap-2 text-sm font-bold text-secondary transition hover:text-primary sm:inline-flex"
          >
            Browse Archive
            <ArrowRight size={16} />
          </Link>
        </div>

        <article className="grid overflow-hidden rounded-lg border border-border bg-card shadow-2xl shadow-slate-900/10 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.72fr)]">
          <Link
            href={articleHref(article)}
            className="relative min-h-[330px] overflow-hidden sm:min-h-[430px] lg:min-h-[560px]"
          >
            {article.image ? (
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            ) : (
              <ArticleImagePlaceholder label="No cover image" />
            )}
          </Link>

          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-muted">
                <span className="rounded-full bg-secondary px-3 py-1 text-white">
                  {article.eyebrow}
                </span>
                <span>{formatArticleDate(article.date)}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 size={13} />
                  {article.readTime}
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
                {article.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                {article.deck}
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <Link
                href={articleHref(article)}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                Read Full History
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}

function MagazineIntro({
  articles,
  categories,
}: {
  articles: BrigadeArticle[];
  categories: ArticleCategory[];
}) {
  return (
    <section className="border-b border-border py-8 sm:py-10">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(280px,0.25fr)]">
          <p className="max-w-4xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            Stories, reports, devotions and training notes from the Boys' and
            Girls' Brigade Surulere Company, arranged like a living magazine for
            members, parents, officers and alumni.
          </p>

          <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-2xl font-black text-foreground">
                {articles.length}
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-muted">
                Articles
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-2xl font-black text-foreground">
                {categories.length}
              </p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-muted">
                Sections
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <p className="text-2xl font-black text-foreground">50</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-muted">
                Jubilee Focus
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CategoryRail({ categories }: { categories: ArticleCategory[] }) {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category);

            return (
              <a
                key={category}
                href={`#${categoryId(category)}`}
                className="inline-flex min-w-max items-center gap-3 rounded-full border border-border bg-card px-4 py-3 text-sm font-bold text-foreground transition hover:border-secondary hover:text-secondary"
              >
                <Icon size={17} />
                {category}
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function LatestNews({ articles }: { articles: BrigadeArticle[] }) {
  const latest = getArticlesByCategoryFrom(articles, "Latest News").slice(0, 3);

  return (
    <section id="latest-news" className="pb-12">
      <Container>
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
              Latest News
            </p>
            <h2 className="mt-2 text-3xl font-black text-foreground">
              Recent Announcements
            </h2>
          </div>
          <Link
            href="#archive"
            className="inline-flex items-center gap-2 text-sm font-bold text-secondary transition hover:text-primary"
          >
            More Stories
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {latest.map((article) => (
            <ArticleCard
              key={article.slug}
              image={article.image}
              category={article.category}
              title={article.title}
              excerpt={article.excerpt}
              href={articleHref(article)}
              date={formatArticleDate(article.date)}
              readTime={article.readTime}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function HistoryTimeline({ articles }: { articles: BrigadeArticle[] }) {
  const historyArticles = getArticlesByCategoryFrom(
    articles,
    "Brigade History",
  ).slice(0, 4);

  return (
    <section id="brigade-history" className="py-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(280px,0.35fr)_minmax(0,0.65fr)]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
              Brigade History
            </p>
            <h2 className="mt-2 text-3xl font-black text-foreground">
              Timeline-Style Learning
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Educational articles that explain where the movement came from,
              why the traditions matter and how the local company carries the
              story forward.
            </p>
          </div>

          <div className="relative space-y-4">
            <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-border sm:block" />
            {historyArticles.map((article, index) => (
              <Link
                key={article.slug}
                href={articleHref(article)}
                className="group grid gap-4 rounded-lg border border-border bg-card p-5 transition hover:border-secondary/60 hover:shadow-lg hover:shadow-slate-900/10 sm:grid-cols-[44px_1fr]"
              >
                <span className="relative z-10 hidden h-8 w-8 items-center justify-center rounded-full border border-secondary bg-background text-sm font-black text-secondary sm:flex">
                  {index + 1}
                </span>
                <span>
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    {formatArticleDate(article.date)}
                  </span>
                  <span className="mt-2 block text-xl font-black text-foreground transition group-hover:text-secondary">
                    {article.title}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-muted">
                    {article.excerpt}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function CategorySections({
  articles,
  categories: allCategories,
}: {
  articles: BrigadeArticle[];
  categories: ArticleCategory[];
}) {
  const categories = allCategories.filter(
    (category) => category !== "Latest News" && category !== "Brigade History"
  );

  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-5 lg:grid-cols-2">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category);
            const sectionArticles = getArticlesByCategoryFrom(
              articles,
              category,
            ).slice(0, 2);
            const sectionId = categoryId(category);

            return (
              <section
                key={category}
                id={sectionId}
                className="rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6"
              >
                <div className="mb-5 flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-secondary">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h2 className="text-2xl font-black text-foreground">
                      {category}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {getCategoryDescription(category)}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {sectionArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={articleHref(article)}
                      className="group grid gap-4 border-t border-border pt-4 sm:grid-cols-[96px_1fr]"
                    >
                      <span className="relative hidden aspect-square overflow-hidden rounded-lg bg-primary/10 sm:block">
                        {article.image ? (
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            sizes="96px"
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <ArticleImagePlaceholder label="No image" />
                        )}
                      </span>
                      <span>
                        <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                          {formatArticleDate(article.date)}
                        </span>
                        <span className="mt-1 block text-base font-black leading-snug text-foreground transition group-hover:text-secondary">
                          {article.title}
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-muted">
                          {article.excerpt}
                        </span>
                      </span>
                    </Link>
                  ))}
                  {sectionArticles.length === 0 ? (
                    <div className="rounded-lg border border-dashed border-border p-5 text-sm font-semibold text-muted">
                      No published articles in this section yet.
                    </div>
                  ) : null}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ArchivePagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const previousPage = Math.max(1, page - 1);
  const nextPage = Math.min(totalPages, page + 1);

  return (
    <nav
      aria-label="Articles pagination"
      className="mt-8 flex flex-wrap items-center justify-center gap-2"
    >
      <Link
        href={`/articles?page=${previousPage}#archive`}
        aria-disabled={page === 1}
        className={`inline-flex h-11 items-center gap-2 rounded-lg border px-4 text-sm font-bold transition ${
          page === 1
            ? "pointer-events-none border-border text-muted opacity-45"
            : "border-border text-foreground hover:border-secondary hover:text-secondary"
        }`}
      >
        <ChevronLeft size={16} />
        Previous
      </Link>

      {pages.map((item) => (
        <Link
          key={item}
          href={`/articles?page=${item}#archive`}
          aria-current={item === page ? "page" : undefined}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border text-sm font-black transition ${
            item === page
              ? "border-primary bg-primary text-white"
              : "border-border bg-card text-foreground hover:border-secondary hover:text-secondary"
          }`}
        >
          {item}
        </Link>
      ))}

      <Link
        href={`/articles?page=${nextPage}#archive`}
        aria-disabled={page === totalPages}
        className={`inline-flex h-11 items-center gap-2 rounded-lg border px-4 text-sm font-bold transition ${
          page === totalPages
            ? "pointer-events-none border-border text-muted opacity-45"
            : "border-border text-foreground hover:border-secondary hover:text-secondary"
        }`}
      >
        Next
        <ChevronRight size={16} />
      </Link>
    </nav>
  );
}

function ArchiveGrid({
  page,
  articles,
}: {
  page: number;
  articles: BrigadeArticle[];
}) {
  const totalPages = Math.max(1, Math.ceil(articles.length / articlesPerPage));
  const currentPage = clampPage(String(page), totalPages);
  const start = (currentPage - 1) * articlesPerPage;
  const visibleArticles = articles.slice(start, start + articlesPerPage);

  return (
    <section id="archive" className="py-12 sm:py-16">
      <Container>
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
              Read More
            </p>
            <h2 className="mt-2 text-3xl font-black text-foreground">
              Magazine Archive
            </h2>
          </div>

          <p className="text-sm font-semibold text-muted">
            Page {currentPage} of {totalPages}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              image={article.image}
              category={article.category}
              title={article.title}
              excerpt={article.excerpt}
              href={articleHref(article)}
              date={formatArticleDate(article.date)}
              readTime={article.readTime}
              variant="compact"
            />
          ))}
        </div>

        <ArchivePagination page={currentPage} totalPages={totalPages} />
      </Container>
    </section>
  );
}

export default function ArticlesPageContent({
  page,
  articles = brigadeArticles,
  categories = articleCategories,
  featuredArticle = articles.find((article) => article.featured) ?? articles[0],
}: {
  page: string | string[] | undefined;
  articles?: BrigadeArticle[];
  categories?: ArticleCategory[];
  featuredArticle?: BrigadeArticle;
}) {
  const totalPages = Math.max(1, Math.ceil(articles.length / articlesPerPage));
  const currentPage = clampPage(page, totalPages);

  return (
    <main className="bg-background text-foreground">
      <FeaturedStory article={featuredArticle} />
      <MagazineIntro articles={articles} categories={categories} />
      <CategoryRail categories={categories} />
      <LatestNews articles={articles} />
      <HistoryTimeline articles={articles} />
      <CategorySections articles={articles} categories={categories} />

      <section className="py-10">
        <Container>
          <div className="flex flex-col gap-5 rounded-lg border border-border bg-primary p-6 text-white sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                <Sparkles size={15} />
                Golden Jubilee Collection
              </span>
              <h2 className="mt-3 text-3xl font-black">
                Preserve the stories, photos and lessons of fifty years.
              </h2>
            </div>
            <Link
              href="/articles/golden-jubilee-why-fifty-years-matters"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-white transition hover:bg-[#b98c22]"
            >
              Open Jubilee Feature
              <ArrowRight size={17} />
            </Link>
          </div>
        </Container>
      </section>

      <ArchiveGrid page={currentPage} articles={articles} />
    </main>
  );
}
