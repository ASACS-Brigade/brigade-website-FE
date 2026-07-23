import AboutHero from "../../components/sections/about/about-hero";
import AboutStory from "../../components/sections/about/about-story";

import FounderSpotlight from "../../components/sections/about/founder-spotlight";

import AboutVision from "../../components/sections/about/about-vision";
import AboutValues from "../../components/sections/about/about-values";

import Programs from "../../components/sections/about/about-program";

import ChapterAchievements from "../../components/sections/about/chapter-achievements";

import AboutStats from "../../components/sections/about/about-stats";

import MemberTestimonials from "../../components/sections/testimonials";

import LeadershipTeam from "../../components/sections/about/leadership-team";

import CtaBanner from "../../components/sections/about/about-cta";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <section id="story">
        <AboutStory />
      </section>

      {/* <FounderSpotlight /> */}

      <AboutVision />

      <section id="values">
        <AboutValues />
      </section>

      <section id="programs">
        <Programs />
      </section>

      <ChapterAchievements />

      <AboutStats />

      <MemberTestimonials />

      <LeadershipTeam />

      <CtaBanner />
    </>
  );
}





// import AboutHero from "../../components/sections/about/about-hero";
// import AboutStory from "../../components/sections/about/about-story";

// import AboutVision from "../../components/sections/about/about-vision";
// import AboutValues from "../../components/sections/about/about-values";
// import Programs from "../../components/sections/about/about-program";
// import LeadershipTeam from "../../components/sections/about/leadership-team";
// import CtaBanner from "../../components/sections/about/about-cta";
// import AboutStats from "../../components/sections/about/about-stats";

// export default function AboutPage() {
//   return (
//     <>
//       <AboutHero />

//       <AboutStory />

//       <AboutVision />

//       <AboutValues />

//       <Programs />

//       <AboutStats />
//       1. Founder spotlight.
//        2.  Chapter achievements.
//        3. Testimonies from members.
     

//       <LeadershipTeam />
//       <CtaBanner />
//     </>
//   );
// }
