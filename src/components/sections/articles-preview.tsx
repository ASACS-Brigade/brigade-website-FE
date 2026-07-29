import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "../layout/container";
import ArticleCard from "../cards/article-card";
import FadeIn from "../layout/fade-in";
import {
  formatArticleDate,
  type BrigadeArticle,
} from "../../constants/articles";

export default function ArticlesPreview({
  articles = [],
}: {
  articles?: BrigadeArticle[];
}) {
  const previewArticles = articles.slice(0, 3);

  return (
    <section className="bg-background py-12 sm:py-14">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              Brigade Journal
            </p>
            <h2 className="mt-2 text-3xl font-black text-foreground">
              Latest Articles
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
              Stories, teachings, reports and history from the Brigade archive.
            </p>
          </div>

          <Link
            href="/articles"
            className="hidden items-center gap-2 text-sm font-bold text-secondary transition hover:text-heading sm:inline-flex"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {previewArticles.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border bg-card p-6 text-sm text-muted md:col-span-3">
              Latest published articles from the dashboard will appear here.
            </div>
          ) : null}

          {previewArticles.map((article) => (
            <FadeIn key={article.slug}>
              <ArticleCard
                image={article.image}
                category={article.category}
                title={article.title}
                excerpt={article.excerpt}
                href={`/articles/${article.slug}`}
                date={formatArticleDate(article.date)}
                readTime={article.readTime}
              />
            </FadeIn>
          ))}
        </div>

        <Link
          href="/articles"
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-secondary transition hover:text-heading sm:hidden"
        >
          View All
          <ArrowRight size={16} />
        </Link>
      </Container>
    </section>
  );
}
