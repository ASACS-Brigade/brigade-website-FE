"use client";

import {
  Award,
  Users,
  Trophy,
  Calendar,
} from "lucide-react";

import FadeIn from "../../layout/fade-in";
import Container from "../../layout/container";

const achievements = [
  {
    icon: Award,
    title: "1000+ Trained Members",
    description:
      "Young people equipped in faith, discipline and leadership.",
  },
  {
    icon: Users,
    title: "Community Outreach",
    description:
      "Regular service projects impacting local communities.",
  },
  {
    icon: Trophy,
    title: "Leadership Development",
    description:
      "Raising Officers, Captains and future leaders.",
  },
  {
    icon: Calendar,
    title: "Decades of Service",
    description:
      "Serving Surulere families across generations.",
  },
];

export default function ChapterAchievements() {
  return (
    <section className="py-20 bg-secondary/5">
      <Container>

        <FadeIn>

          <div className="text-center mb-14">

            <span className="text-secondary uppercase tracking-[0.2em] text-sm">
              Companies' Impact
            </span>

            <h2 className="mt-3 text-4xl font-bold text-primary">
              Our Achievements
            </h2>

          </div>

        </FadeIn>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title}>
                <div
                  className="
                  hover-card
                  bg-white
                  border
                  border-border
                  rounded-2xl
                  p-7
                  h-full
                  "
                >
                  <Icon
                    size={34}
                    className="hover-card-icon mb-5 text-secondary"
                  />

                  <h3
                    className="
                    hover-card-title
                    font-semibold
                    text-lg
                    mb-3
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="hover-card-text text-muted">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}

        </div>
      </Container>
    </section>
  );
}