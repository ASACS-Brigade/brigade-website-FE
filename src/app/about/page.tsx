import AboutHero from "../../components/sections/about/about-hero";
import AboutStory from "../../components/sections/about/about-story";

import AboutVision from "../../components/sections/about/about-vision";
import AboutValues from "../../components/sections/about/about-values";
import Programs from "../../components/sections/about/about-program";
import LeadershipTeam from "../../components/sections/about/leadership-team";
import CtaBanner from "../../components/sections/about/about-cta";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <AboutStory />


      <AboutVision />

      <AboutValues />

      <Programs />
      <LeadershipTeam />
      <CtaBanner />
    </>
  );
}
