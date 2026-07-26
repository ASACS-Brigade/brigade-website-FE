"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { UserRound, X } from "lucide-react";

import FadeIn from "../../layout/fade-in";
import Container from "../../layout/container";

type Person = {
  image: string;
  name: string;
  role: string;
  bio?: string;
};

const leaders: Person[] = [
  {
    image: "/images/avatar2.jpg",
    name: "Barr. Rex O.",
    role: "Boys Captain",
  },
  {
    image: "/about/biblestud.jpeg",
    name: "Lady Maria E.",
    role: "Girls Captain",
  },
  {
    image: "/team/ekenepic.png",
    name: "Lt. Norah H.",
    role: "Secretary",
  },
  {
    image: "/team/ekenepic.png",
    name: "Lt. Ekene O.",
    role: "Company Fin. Secretary",
  },
  {
    image: "/images/avatar2.jpg",
    name: "Lt. Susan U.",
    role: "Welfare Officer",
  },
];

const activeLeaders: Person[] = [
  {
    image: "/images/avatar2.jpg",
    name: "Lt. Prince D.",
    role: "Officer",
  },
  {
    image: "/about/biblestud.jpeg",
    name: "Lt. Victor N.",
    role: "Battalion Asst. Secretary",
  },
  {
    image: "/images/avatar2.jpg",
    name: "Lt. Samuel A.",
    role: "Asst. Welfare Officer",
  },
  {
    image: "/team/ekenepic.png",
    name: "Lt. Joy H.",
    role: "Inventory",
  },
  {
    image: "/images/avatar2.jpg",
    name: "WO. Obinna I.",
    role: "Warrant Officer",
  },
  {
    image: "/images/avatar2.jpg",
    name: "Lt. Uloma U.",
    role: "Officer",
  },
  {
    image: "/images/avatar2.jpg",
    name: "WO. Osita O.",
    role: "Band Leader",
  },
  {
    image: "/images/avatar2.jpg",
    name: "NCO. Michelle U.",
    role: "Asst. Company Secretary",
  },
  {
    image: "/images/avatar2.jpg",
    name: "WO. Emeka A.",
    role: "Program Coord.",
  },
  {
    image: "/images/avatar2.jpg",
    name: "WO. Ifeanyi I.",
    role: "PRO",
  },
];

const activeMembers: Person[] = [
  {
    image: "/images/avatar2.jpg",
    name: "NCO Michael U.",
    role: "Asst. Orchestra leader",
  },
  {
    image: "/images/avatar2.jpg",
    name: "NCO Ugwum I.",
    role: "Asst. Band leader",
  },
  {
    image: "/about/biblestud.jpeg",
    name: "Brigader Favour O.",
    role: "Secretaire",
  },
];

const groups = [
  {
    id: "leadership",
    label: "Leadership",
    description: "Company officers guiding worship, discipline and administration.",
    people: leaders,
  },
  {
    id: "active-leaders",
    label: "Active Leaders",
    description: "Officers, warrant officers and NCOs serving weekly company life.",
    people: activeLeaders,
  },
  {
    id: "active-members",
    label: "Active Members",
    description: "Members growing in service, music, teamwork and responsibility.",
    people: activeMembers,
  },
] as const;

function getBio(person: Person, groupLabel: string) {
  return (
    person.bio ??
    `${person.name} serves as ${person.role.toLowerCase()} within the ${groupLabel.toLowerCase()} team, supporting Brigade life through faith, discipline, mentoring and practical service.`
  );
}

export default function LeadershipTeam() {
  const [activeGroupId, setActiveGroupId] = useState<(typeof groups)[number]["id"]>(
    "leadership",
  );
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const activeGroup = useMemo(
    () => groups.find((group) => group.id === activeGroupId) ?? groups[0],
    [activeGroupId],
  );

  return (
    <section id="leadership" className="pb-16 pt-8">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">
              Company People
            </span>
            <h2 className="mt-2 text-2xl font-bold text-primary md:text-4xl">
              Leadership & Members
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted md:text-base">
              Browse the people serving across leadership, active leaders and
              active members of the company.
            </p>
          </div>

          <div className="grid gap-2 rounded-xl border border-border bg-background p-2 sm:grid-cols-3 md:min-w-[520px]">
            {groups.map((group) => {
              const isActive = group.id === activeGroup.id;

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setActiveGroupId(group.id)}
                  className={`min-h-11 rounded-lg px-3 text-sm font-bold transition ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-primary hover:bg-primary/5 dark:hover:bg-secondary/10"
                  }`}
                >
                  {group.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-4 sm:p-5 lg:p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-primary">{activeGroup.label}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              {activeGroup.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {activeGroup.people.map((person) => (
              <FadeIn key={`${activeGroup.id}-${person.name}`}>
                <article className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg hover:shadow-slate-900/10 dark:hover:shadow-black/30">
                  <div className="relative aspect-square bg-primary/10">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 90vw"
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedPerson(person)}
                      aria-label={`Open ${person.name} profile`}
                      className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-card text-primary shadow-lg transition hover:bg-secondary hover:text-white"
                    >
                      <UserRound size={18} />
                    </button>
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="font-bold text-primary">{person.name}</h3>
                    <p className="mt-1 text-sm text-muted">{person.role}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>

      {selectedPerson ? (
        <div
          className="fixed inset-0 z-[10000] grid place-items-center bg-primary/80 p-4"
          onClick={() => setSelectedPerson(null)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card text-foreground shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-72 bg-primary/10">
              <Image
                src={selectedPerson.image}
                alt={selectedPerson.name}
                fill
                className="object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedPerson(null)}
                aria-label="Close profile"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card text-primary shadow-lg transition hover:bg-secondary hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                  <UserRound size={20} />
                </span>
                <div>
                  <h3 className="text-2xl font-bold">{selectedPerson.name}</h3>
                  <p className="text-sm font-semibold text-secondary">
                    {selectedPerson.role}
                  </p>
                </div>
              </div>
              <p className="leading-7 text-muted">
                {getBio(selectedPerson, activeGroup.label)}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
