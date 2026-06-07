import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  slug?: string;
}

const badgeColors: Record<string, string> = {
  Leadership: "bg-primary",
  Faith: "bg-secondary text-white",
  Devotion: "bg-muted text-white",
};

export default function ArticleCard({
  image,
  category,
  title,
  excerpt,
  slug = "#",
}: ArticleCardProps) {
  return (
    <article
      className="
      overflow-hidden
      rounded-xl
      border
      border-slate-200
      bg-white
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-lg
      "
    >
      {/* Image */}

      <div className="relative h-70 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

        <span
          className={`
            absolute
            left-3
            bottom-3
            rounded-md
            px-3
            py-1
            text-xs
            font-medium
            text-white
            ${badgeColors[category] || "bg-primary"}
          `}
        >
          {category}
        </span>
      </div>

      {/* Content */}

      <div className="p-5">

        <h3
          className="
          text-lg
          font-bold
          leading-snug
          text-primary
          "
        >
          {title}
        </h3>

        <p
          className="
          mt-3
          text-sm
          leading-relaxed
          text-slate-500
          "
        >
          {excerpt}
        </p>

        <Link
          href={slug}
          className="
          mt-4
          inline-flex
          items-center
          gap-1
          text-sm
          font-medium
          text-primary
          hover:text-secondary
          "
        >
          Read More →
        </Link>

      </div>
    </article>
  );
}  




// export default function ArticleCard() {
//   return (
//     <div className="card overflow-hidden">

//       <div className="h-56 bg-slate-200" />

//       <div className="p-6">

//         <span className="text-sm text-[#D4A437]">
//           Leadership
//         </span>

//         <h3 className="font-bold text-xl mt-2">
//           Raising Leaders Through Service
//         </h3>

//       </div>

//     </div>
//   );
// }