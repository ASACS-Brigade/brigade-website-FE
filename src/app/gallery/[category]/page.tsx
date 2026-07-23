import { notFound } from "next/navigation";

import ParadePage from "../../../components/sections/gallery/parade/parade-page";
import AlbumPage from "../../../components/sections/gallery/category-album/album-page";
import {
  getGalleryCategoryData,
  getGalleryCategorySlugs,
} from "../../../lib/content-api";

export const dynamicParams = true;

export function generateStaticParams() {
  return getGalleryCategorySlugs().map((category) => ({ category }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}) {
  const { category } = await params;

  const data = await getGalleryCategoryData(category);

  if (!data) {
    notFound();
  }

  /**
   * Special Parade Experience
   */

  if (category === "parade") {
    return <ParadePage album={data} />;
  }

  return <AlbumPage album={data} categorySlug={category} />;
}
