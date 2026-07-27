import {
  type ArticleCategory,
  type ArticleSection,
  type ArticleTimelineItem,
  type BrigadeArticle,
} from "../constants/articles";
import { type BrigadeEvent } from "../constants/events";
import {
  galleryCategories,
  type GalleryCategory,
  type GalleryYear,
} from "../../data/gallery";
import { apiRequest } from "./api";

type PaginatedResponse<T> = {
  items: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

type ApiArticleCategory = {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
};

type ApiArticle = {
  id: string;
  title: string;
  slug: string;
  eyebrow?: string | null;
  excerpt: string;
  deck?: string | null;
  content: string;
  sections?: unknown;
  timeline?: unknown;
  coverImageUrl?: string | null;
  readTime?: string | null;
  featured: boolean;
  publishedAt?: string | null;
  createdAt: string;
  category?: ApiArticleCategory | null;
  author?: {
    name: string;
  } | null;
};

type ApiEvent = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: string | null;
  startsAt: string;
  endsAt?: string | null;
  time?: string | null;
  location: string;
  coverImageUrl?: string | null;
  galleryImageUrls?: string[];
  deadlineAt?: string | null;
  videoUrl?: string | null;
  videoPublicId?: string | null;
  galleryAlbumId?: string | null;
  featured: boolean;
};

type ApiGalleryCategory = {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  overviewTitle?: string | null;
  overviewBody?: string | null;
  coverImageUrl?: string | null;
  albums?: ApiGalleryAlbumSummary[];
};

type ApiGalleryAlbumSummary = {
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  year?: number | null;
  coverImageUrl?: string | null;
  featured: boolean;
  _count?: {
    images: number;
  };
};

type ApiGalleryAlbum = ApiGalleryAlbumSummary & {
  category: ApiGalleryCategory;
  images: {
    id: string;
    url: string;
    alt?: string | null;
    caption?: string | null;
  }[];
};

export type GalleryCategoryCard = {
  title: string;
  count: string;
  slug: string;
  image: string;
  description: string;
};

function todayIsoDate() {
  return new Date().toISOString().slice(0, 10);
}

function splitParagraphs(content?: string | null) {
  return (content ?? "")
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function isArticleSections(value: unknown): value is ArticleSection[] {
  return (
    Array.isArray(value) &&
    value.every((item) => {
      if (!item || typeof item !== "object") {
        return false;
      }

      const section = item as { heading?: unknown; body?: unknown };

      return (
        typeof section.heading === "string" &&
        Array.isArray(section.body) &&
        section.body.every((paragraph: unknown) => typeof paragraph === "string")
      );
    })
  );
}

function isArticleTimeline(value: unknown): value is ArticleTimelineItem[] {
  return (
    Array.isArray(value) &&
    value.every((item) => {
      if (!item || typeof item !== "object") {
        return false;
      }

      const timelineItem = item as {
        year?: unknown;
        title?: unknown;
        description?: unknown;
      };

      return (
        typeof timelineItem.year === "string" &&
        typeof timelineItem.title === "string" &&
        typeof timelineItem.description === "string"
      );
    })
  );
}

function normalizeArticle(article: ApiArticle): BrigadeArticle {
  const publishedDate = article.publishedAt ?? article.createdAt;
  const paragraphs = splitParagraphs(article.content);
  const sections = isArticleSections(article.sections)
    ? article.sections
    : [
        {
          heading: article.title,
          body: paragraphs.length > 0 ? paragraphs : [article.excerpt],
        },
      ];

  return {
    slug: article.slug,
    title: article.title,
    eyebrow: article.eyebrow ?? "Article",
    category: article.category?.name?.trim() || "Latest News",
    excerpt: article.excerpt,
    image: article.coverImageUrl ?? "",
    author: article.author?.name ?? "Editorial Team",
    date: publishedDate.slice(0, 10),
    readTime: article.readTime ?? "4 min read",
    featured: article.featured,
    deck: article.deck ?? article.excerpt,
    sections,
    timeline: isArticleTimeline(article.timeline) ? article.timeline : undefined,
  };
}

function normalizeEvent(event: ApiEvent, fallback?: BrigadeEvent): BrigadeEvent {
  const writeup = splitParagraphs(event.content);
  const galleryImages =
    event.galleryImageUrls && event.galleryImageUrls.length > 0
      ? event.galleryImageUrls
      : fallback?.galleryImages ?? [];

  return {
    id: event.slug,
    title: event.title,
    date: event.startsAt.slice(0, 10),
    time: event.time ?? fallback?.time ?? "Time to be announced",
    location: event.location,
    description: event.description,
    writeup:
      writeup.length > 0
        ? writeup
        : fallback?.writeup ?? [event.description],
    outcome:
      fallback?.outcome ??
      "Event outcomes and follow-up notes will be updated after the programme.",
    galleryImages,
    deadlineAt: event.deadlineAt ?? undefined,
    videoUrl: event.videoUrl ?? undefined,
    image: event.coverImageUrl ?? fallback?.image ?? "",
    href: `/events/${event.slug}`,
    featured: event.featured,
  };
}

function sortEvents(events: BrigadeEvent[]) {
  return [...events].sort((a, b) => a.date.localeCompare(b.date));
}

function normalizeGalleryYear(album: ApiGalleryAlbum): GalleryYear {
  const images = album.images.map((image) => image.url);
  const cover = album.coverImageUrl ?? images[0] ?? "/gallery/gallery1.png";

  return {
    year: album.year?.toString() ?? "Archive",
    title: album.title,
    description: album.description ?? "Brigade memories preserved in photos.",
    status: images.length > 0 ? "available" : "coming",
    cover,
    images,
  };
}

function uniqueImages(images: string[]) {
  return images.filter((image, index) => image && images.indexOf(image) === index);
}

function mergeGalleryCategory(
  category: ApiGalleryCategory,
  albums: ApiGalleryAlbum[],
): GalleryCategory {
  const fallback =
    galleryCategories[
      category.slug as keyof typeof galleryCategories
    ] as GalleryCategory | undefined;

  const liveYears = albums
    .map(normalizeGalleryYear)
    .sort((a, b) => b.year.localeCompare(a.year));
  const fallbackYears = fallback?.years ?? [];
  const missingComingYears = fallbackYears.filter(
    (year) =>
      year.status === "coming" &&
      !liveYears.some((liveYear) => liveYear.year === year.year),
  );
  const years =
    liveYears.length > 0 ? [...missingComingYears, ...liveYears] : fallbackYears;
  const liveImages = uniqueImages(years.flatMap((year) => year.images));
  const heroImage =
    category.coverImageUrl ??
    years.find((year) => year.cover)?.cover ??
    fallback?.heroImage ??
    "/gallery/gallery1.png";

  return {
    title: category.name,
    shortTitle: fallback?.shortTitle ?? category.name,
    heroTitle: fallback?.heroTitle ?? category.name,
    description:
      category.description ??
      fallback?.description ??
      "Explore Brigade memories by year.",
    overviewTitle: category.overviewTitle ?? fallback?.overviewTitle,
    overviewBody: category.overviewBody ?? fallback?.overviewBody,
    heroImage,
    icon: fallback?.icon ?? "shield",
    galleryPattern: fallback?.galleryPattern ?? "masonry",
    stats: fallback?.stats ?? [],
    years,
    cta:
      fallback?.cta ?? {
        heading: "Become Part of Our Story",
        subheading: "Join the Brigade and grow through faith, discipline and service.",
        buttonLabel: "Join The Brigade",
        buttonHref: "/register",
      },
    images: liveImages.length > 0 ? liveImages : fallback?.images ?? [heroImage],
  };
}

async function getApiOrNull<T>(path: string): Promise<T | null> {
  try {
    return await apiRequest<T>(path, {
      next: {
        revalidate: 60,
      },
    });
  } catch {
    return null;
  }
}

export async function getArticlesData() {
  const [response, categoryResponse] = await Promise.all([
    getApiOrNull<PaginatedResponse<ApiArticle>>("/articles?limit=100"),
    getApiOrNull<ApiArticleCategory[]>("/articles/categories"),
  ]);
  const liveArticles = response?.items.map(normalizeArticle) ?? [];
  const articles = liveArticles.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.date.localeCompare(a.date);
  });
  const liveCategories =
    categoryResponse
      ?.map((category) => category.name.trim())
      .filter(Boolean) ?? [];
  const articleCategoryNames = articles.map((article) => article.category);
  const categories = Array.from(
    new Set([...liveCategories, ...articleCategoryNames]),
  );

  return {
    articles,
    categories,
    featuredArticle:
      articles.find((article) => article.featured) ?? articles[0],
  };
}

export async function getArticleDetailData(slug: string) {
  const { articles } = await getArticlesData();
  const listArticle = articles.find((article) => article.slug === slug);
  const response = await getApiOrNull<ApiArticle>(`/articles/${slug}`);
  const article = response ? normalizeArticle(response) : listArticle;

  if (!article) {
    return null;
  }

  const mergedArticles = articles.some((item) => item.slug === article.slug)
    ? articles
    : [...articles, article];
  const sameCategory = mergedArticles.filter(
    (item) => item.category === article.category && item.slug !== article.slug,
  );
  const others = mergedArticles.filter(
    (item) => item.category !== article.category && item.slug !== article.slug,
  );

  return {
    article,
    relatedArticles: [...sameCategory, ...others].slice(0, 3),
  };
}

export async function getEventsData() {
  const response = await getApiOrNull<PaginatedResponse<ApiEvent>>(
    "/events?limit=100",
  );
  const liveEvents =
    response?.items.map((event) => normalizeEvent(event)) ?? [];
  const events = liveEvents;
  const today = todayIsoDate();
  const upcoming = sortEvents(events.filter((event) => event.date >= today));
  const past = sortEvents(events.filter((event) => event.date < today)).reverse();

  return {
    events: sortEvents(events),
    featuredEvent:
      events.find((event) => event.featured) ?? upcoming[0] ?? events[0],
    upcomingEvents: upcoming,
    pastEvents: past,
  };
}

export async function getEventDetailData(slug: string) {
  const { events } = await getEventsData();
  const fallback = events.find(
    (event) => event.id === slug || event.href.endsWith(`/${slug}`),
  );
  const response = await getApiOrNull<ApiEvent>(`/events/${slug}`);

  return response ? normalizeEvent(response, fallback) : fallback ?? null;
}

export async function getGalleryData() {
  const categories = await getApiOrNull<ApiGalleryCategory[]>(
    "/gallery/categories",
  );

  if (!categories) {
    return {
      categories: [],
      cards: [],
      images: [],
    };
  }

  const categoryEntries = await Promise.all(
    categories.map(async (category) => {
      const summaries = category.albums ?? [];
      const albums = (
        await Promise.all(
          summaries.map((album) =>
            getApiOrNull<ApiGalleryAlbum>(`/gallery/albums/${album.slug}`),
          ),
        )
      ).filter((album): album is ApiGalleryAlbum => Boolean(album));

      return {
        slug: category.slug,
        category: mergeGalleryCategory(category, albums),
      };
    }),
  );

  const mergedCategories = categoryEntries;

  return {
    categories: mergedCategories,
    cards: buildGalleryCards(mergedCategories),
    images: uniqueImages(
      mergedCategories.flatMap(({ category }) => [
        category.heroImage,
        ...category.images,
        ...category.years.flatMap((year) => year.images),
      ]),
    ),
  };
}

export async function getGalleryCategoryData(slug: string) {
  const { categories } = await getGalleryData();

  return categories.find((entry) => entry.slug === slug)?.category ?? null;
}

export function getGalleryCategorySlugs() {
  return Object.keys(galleryCategories);
}

function buildGalleryCards(
  categories: { slug: string; category: GalleryCategory }[],
): GalleryCategoryCard[] {
  return categories.map(({ slug, category }) => {
    const photoCount = category.years.reduce(
      (count, year) => count + year.images.length,
      0,
    );

    return {
      title: category.title,
      count:
        photoCount > 0
          ? `${photoCount} Photo${photoCount === 1 ? "" : "s"}`
          : "Coming Soon",
      slug,
      image: category.heroImage,
      description: category.shortTitle,
    };
  });
}
