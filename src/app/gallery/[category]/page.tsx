import { notFound } from "next/navigation";

import { galleryCategories } from "../../../../data/gallery";

import ParadePage from "../../../components/sections/gallery/parade/parade-page";
import AlbumPage from "../../../components/sections/gallery/category-album/album-page";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}) {
  const { category } = await params;

  const data =
    galleryCategories[
      category as keyof typeof galleryCategories
    ];

  if (!data) {
    notFound();
  }

  /**
   * Special Parade Experience
   */

  if (category === "parade") {
    return <ParadePage />;
  }

  return <AlbumPage album={data} />;
}
