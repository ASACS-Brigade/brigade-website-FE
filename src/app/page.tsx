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
import { getArticlesData, getEventsData, getGalleryData } from "../lib/content-api";

export default async function HomePage() {
  const [
    { articles },
    { upcomingEvents },
    { images },
  ] = await Promise.all([
    getArticlesData(),
    getEventsData(),
    getGalleryData(),
  ]);

  return (
    <main>
      <HomeHero />
      <FeatureCards />
      <AboutStats />
      <AboutPreview />

      <Events events={upcomingEvents} />
      <Programs />

      <div className="w-full overflow-hidden">
        <Testimonials />
      </div>
      <GalleryPreview images={images} />
      <ArticlesPreview articles={articles} />

      <CtaBanner />
    </main>
  );
}
