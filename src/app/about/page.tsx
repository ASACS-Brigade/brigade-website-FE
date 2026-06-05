import PageHero from "../../components/layout/page-hero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Developing young people through faith and leadership."
      />

      <section className="section">
        <div className="container">
          Mission, Vision, Leadership,
          Programs and History go here.
        </div>
      </section>
    </>
  );
}