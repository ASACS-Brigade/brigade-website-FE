import HomeHero from "../components/sections/home-hero";
import FeatureCards from "../components/sections/feature-cards";
import AboutPreview from "../components/sections/about-preview";
import Events from "../components/sections/events";
import Testimonials from "../components/sections/testimonials";
import GalleryPreview from "../components/sections/gallery-preview";
import ArticlesPreview from "../components/sections/articles-preview";
import CtaBanner from "../components/sections/cta-banner";
import AboutStats from "../components/sections/about/about-stats";
import Programs from "../components/sections/programs";


export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <FeatureCards />
      <AboutStats />
      <AboutPreview />

      {/* <EventsPreview /> */}

      <Events />
      <Programs />

      <Testimonials />
      <GalleryPreview />
      <ArticlesPreview />

      <CtaBanner />
    </main>
  );
}
