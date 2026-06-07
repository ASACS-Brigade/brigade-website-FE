import Link from "next/link";

import Container from "../layout/container";
import ArticleCard from "../cards/article-card";
import FadeIn from "../layout/fade-in";

const articles = [
  {
    image: "/images/hero.jpeg",
    category: "Leadership",
    title: "Leading with Purpose and Integrity",
    excerpt:
      "Discover how young leaders can lead with values that inspire and transform.",
  },
  {
    image: "/events/pic2.png",
    category: "Faith",
    title: "Lessons from Service: A Heart Like Christ",
    excerpt:
      "Serving others brings us closer to God and builds lasting character.",
  },
  {
    image: "/events/pic3.png",
    category: "Devotion",
    title: "Growing Through Fellowship",
    excerpt:
      "The power of community in spiritual growth, communion and development. The power of community in spiritual growth.",
  },
];

export default function ArticlesPreview() {
  return (
    <section className="pb-10 bg-white">

      <Container>

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <h2
              className="
              text-2xl
              font-bold
              text-primary
              "
            >
              Latest Articles
            </h2>

            <p
              className="
              mt-1
              text-sm
              text-slate-500
              "
            >
              Insights, stories, and teachings.
            </p>

          </div>

          <Link
            href="/articles"
            className="
            text-sm
            font-medium
            text-primary
            hover:text-secondary
            "
          >
            Read More Articles
          </Link>

        </div>

        {/* Cards */}

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {articles.map((article) => (
            <FadeIn key={article.title}>
              <ArticleCard {...article} />
            </FadeIn>
          ))}

        </div>

      </Container>
    </section>
  );
}