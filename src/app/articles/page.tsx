import type { Metadata } from "next";

import ArticlesPageContent from "../../components/sections/articles/articles-page-content";
import { getArticlesData } from "../../lib/content-api";

export const metadata: Metadata = {
  title: "Articles | Boys & Girls Brigade Surulere",
  description:
    "Read Brigade news, history, devotions, leadership guides, event reports and Golden Jubilee stories from Boys & Girls Brigade Surulere.",
};

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string | string[] }>;
}) {
  const resolvedSearchParams = await searchParams;
  const { articles, categories, featuredArticle } = await getArticlesData();

  return (
    <ArticlesPageContent
      page={resolvedSearchParams?.page}
      articles={articles}
      categories={categories}
      featuredArticle={featuredArticle}
    />
  );
}
