import AboutPreview from "../components/sections/about-preview";
import ArticlesPreview from "../components/sections/articles-preview";
import CtaBanner from "../components/sections/cta-banner";
import FeatureCards from "../components/sections/feature-cards";
import GalleryPreview from "../components/sections/gallery-preview";
import HomeHero from "../components/sections/home-hero";
import Programs from "../components/sections/programs";
import Testimonials from "../components/sections/testimonials";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <FeatureCards />
      <AboutPreview />
      <Programs />

      <ArticlesPreview />

      <GalleryPreview />

      <Testimonials />
      <CtaBanner />
    </main>
  );
}
