"use client";

import Image from "next/image";

import FadeIn from "../../layout/fade-in";
import Container from "../../layout/container";

const leaders = [
  {
    image: "/images/team/captain.jpg",
    name: "Barr. Rex O.",
    role: "Boys Captain",
  },
  {
    image: "/images/team/deputy.jpg",
    name: "Lady Maria E.",
    role: "Girls Captain",
  },
  {
    image: "/images/team/training.jpg",
    name: "Lt. Nora H.",
    role: "Secretary",
  },
  {
    image: "/team/ekenepic.png",
    name: "Lt. Ekene O.",
    role: "Battalion Fin. Secretary",
  },
  {
    image: "/images/team/treasurer.jpg",
    name: "Lt. Susan U.",
    role: "Welfare Officer",
  },
];

const activeLeaders = [
    {
    image: "/images/team/captain.jpg",
    name: "Lt. Prince D.",
    role: "Officer",
  },
   {
    image: "/images/team/deputy.jpg",
    name: "Lt. Victor N.",
    role: "Battalion Asst. Secretary",
  },
  {
    image: "/images/team/captain.jpg",
    name: "Lt. Samuel A.",
    role: "Asst. Welfare Officer",
  },
  {
    image: "/images/team/training.jpg",
    name: "Lt. Joy H.",
    role: "Store Keeper",
  },
  {
    image: "/images/team/treasurer.jpg",
    name: "WO. Obinna I.",
    role: "Warrant Officer",
  },
  {
    image: "/images/team/treasurer.jpg",
    name: "Lt. Uloma U.",
    role: "Officer",
  },
  {
    image: "/images/team/treasurer.jpg",
    name: "WO. Osita O.",
    role: "Band Leader",
  },
  {
    image: "/images/team/treasurer.jpg",
    name: "NCO. Michelle U.",
    role: "Asst. Company Secretary",
  },
   {
    image: "/images/team/treasurer.jpg",
    name: "WO. Emeka A.",
    role: "Program Coord.",
  },
  {
    image: "/images/team/treasurer.jpg",
    name: "WO. Ifeanyi I.",
    role: "PRO",
  },
];

const activeMembers = [
  {
    image: "/images/team/captain.jpg",
    name: "NCO Michael U.",
    role: "Asst. Orchestra leader",
  },
  {
    image: "/images/team/captain.jpg",
    name: "NCO Ugwum I.",
    role: "Asst. Band leader",
  },
  {
    image: "/images/team/deputy.jpg",
    name: "Brigader Favour O.",
    role: "Secretaire",
  },
];

export default function LeadershipTeam() {
  return (
    <section className="pb-16">
      <Container>
        <h2 className="text-3xl font-bold text-primary">Leadership Team</h2>
        <div
          className="
          mt-8
          grid
          grid-cols-2
          gap-4
          lg:grid-cols-5
          "
        >
          {leaders.map((leader) => (
            <FadeIn key={leader.name}>
              <div
                className="
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                "
              >
                <div className="relative aspect-square">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-3 text-center">
                  <h3
                    className="
                    font-bold
                    text-primary
                    "
                  >
                    {leader.name}
                  </h3>

                  <p
                    className="
                    mt-1
                    text-sm
                    text-muted
                    "
                  >
                    {leader.role}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <h2 className="pt-8 text-3xl font-bold text-primary">
          Active Leaders Of The Company
        </h2>
        <div
          className="
          mt-8
          grid
          grid-cols-2
          gap-4
          lg:grid-cols-5
          "
        >
          {activeLeaders.map((leader) => (
            <FadeIn key={leader.name}>
              <div
                className="
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                "
              >
                <div className="relative aspect-square">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-3 text-center">
                  <h3
                    className="
                    font-bold
                    text-primary
                    "
                  >
                    {leader.name}
                  </h3>

                  <p
                    className="
                    mt-1
                    text-sm
                    text-muted
                    "
                  >
                    {leader.role}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <h2 className="pt-8 text-3xl font-bold text-primary">
          Active Members of The Company
        </h2>
        <div
          className="
          mt-8
          grid
          grid-cols-2
          gap-4
          lg:grid-cols-5
          "
        >
          {activeMembers.map((member) => (
            <FadeIn key={member.name}>
              <div
                className="
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
                "
              >
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-3 text-center">
                  <h3
                    className="
                    font-bold
                    text-primary
                    "
                  >
                    {member.name}
                  </h3>

                  <p
                    className="
                    mt-1
                    text-sm
                    text-muted
                    "
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
