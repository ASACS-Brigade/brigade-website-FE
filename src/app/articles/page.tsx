import type { Metadata } from "next";

import ArticlesPageContent from "../../components/sections/articles/articles-page-content";

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

  return <ArticlesPageContent page={resolvedSearchParams?.page} />;
}
