import AboutPreview from "../components/sections/about-preview";
import ArticlesPreview from "../components/sections/articles-preview";
import CtaBanner from "../components/sections/cta-banner";
import EventsPreview from "../components/sections/events-preview";
import FeatureCards from "../components/sections/feature-cards";
import GalleryPreview from "../components/sections/gallery-preview";
import HomeHero from "../components/sections/home-hero";
import Newsletter from "../components/sections/newsletter";
import Programs from "../components/sections/programs";
import Testimonials from "../components/sections/testimonials";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <FeatureCards />
      <AboutPreview />
      <Programs />
      {/* <EventsPreview /> */}

      <ArticlesPreview />

      <GalleryPreview />

      <Testimonials />
      {/* <Newsletter /> */}
      <CtaBanner />
    </main>
  );
}
