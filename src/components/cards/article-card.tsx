import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, ImageOff } from "lucide-react";

interface ArticleCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  href?: string;
  slug?: string;
  date?: string;
  readTime?: string;
  variant?: "default" | "compact";
}

const badgeColors: Record<string, string> = {
  "Latest News": "bg-primary text-white",
  "Brigade History": "bg-secondary text-white",
  "Faith & Devotion": "bg-emerald-700 text-white",
  "Leadership & Training": "bg-sky-700 text-white",
  "Events & Reports": "bg-indigo-700 text-white",
  "Golden Jubilee": "bg-amber-600 text-white",
  Leadership: "bg-primary text-white",
  Faith: "bg-secondary text-white",
  Devotion: "bg-muted text-white",
};

export default function ArticleCard({
  image,
  category,
  title,
  excerpt,
  href,
  slug,
  date,
  readTime,
  variant = "default",
}: ArticleCardProps) {
  const articleHref = href ?? slug ?? "#";

  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-xl hover:shadow-slate-900/10">
      <Link
        href={articleHref}
        className={`relative block overflow-hidden ${
          variant === "compact" ? "h-48" : "h-64"
        }`}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <span className="flex h-full w-full flex-col items-center justify-center gap-2 bg-slate-100 text-slate-400">
            <ImageOff size={30} />
            <span className="text-xs font-black uppercase tracking-[0.14em]">
              No cover
            </span>
          </span>
        )}

        <span
          className={`absolute bottom-3 left-3 rounded-md px-3 py-1 text-xs font-bold ${
            badgeColors[category] || "bg-primary text-white"
          }`}
        >
          {category}
        </span>
      </Link>

      <div className="p-5">
        {(date || readTime) && (
          <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            {date && <span>{date}</span>}
            {readTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock3 size={13} />
                {readTime}
              </span>
            )}
          </div>
        )}

        <Link href={articleHref}>
          <h3 className="text-lg font-bold leading-snug text-foreground transition group-hover:text-secondary">
            {title}
          </h3>
        </Link>

        <p className="mt-3 text-sm leading-6 text-muted">{excerpt}</p>

        <Link
          href={articleHref}
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-secondary transition hover:text-primary"
        >
          Read More
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
