"use client";

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
import { motion } from "framer-motion";

export default function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <main>
      <HomeHero />
      <FeatureCards />
      <AboutStats />
      <AboutPreview />

      <Events />
      <Programs />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="w-full overflow-hidden"
      >
        <Testimonials />
      </motion.div>
      <GalleryPreview />
      <ArticlesPreview />

      <CtaBanner />
    </main>
  );
}
