import { Cross, HandHeart, UserRound } from "lucide-react";

import Container from "../layout/container";

const features = [
  {
    title: "Faith First",
    description: "Growing through scripture and character.",
    icon: Cross,
  },
  {
    title: "Leadership Development",
    description: "Training and equipping future leaders.",
    icon: UserRound,
  },
  {
    title: "Community Service",
    description: "Serving our community with love and compassion.",
    icon: HandHeart,
  },
];

export default function FeatureCards() {
  return (
    <section className="relative z-20 mt-8 pb-7 md:-mt-10 md:pb-7">
      <Container>
        <div
          className="
          overflow-hidden
          rounded-md
          border
          border-slate-200
          bg-white
          shadow-xl
          shadow-slate-900/10
          "
        >
          <div className="grid divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="
                  flex
                  gap-4
                  p-5
                  sm:p-6
                  lg:p-7
                  "
                >
                  <div
                    className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D4A437]/45
                    text-[#D4A437]
                    sm:h-16
                    sm:w-16
                    "
                  >
                    <Icon
                      strokeWidth={1.8}
                      className="h-8 w-8 sm:h-9 sm:w-9"
                    />
                  </div>

                  <div className="min-w-0 pt-1">
                    <h3 className="text-base font-bold leading-snug text-heading sm:text-lg dark:text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-[15px]">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

