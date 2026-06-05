import Container from "../layout/container";
import SectionHeader from "../layout/section-header";
import ArticleCard from "../cards/article-card";

export default function ArticlesPreview() {
  return (
    <section className="section">

      <Container>

        <SectionHeader
          title="Latest Articles"
          subtitle="Insights, devotionals and leadership lessons."
        />

        <div className="grid md:grid-cols-3 gap-6">

          <ArticleCard />
          <ArticleCard />
          <ArticleCard />

        </div>

      </Container>

    </section>
  );
}