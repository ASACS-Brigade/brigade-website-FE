"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { UserRound, X } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

import FadeIn from "../../layout/fade-in";
import Container from "../../layout/container";

const brigadeLinkedInUrl = "https://www.linkedin.com/company/asacsbrigade/";

type Person = {
  image?: string;
  name: string;
  role: string;
  bio?: string;
  externalUrl?: string;
};

const leaders: Person[] = [
  {
    name: "Barr. Rex Ofoneme.",
    role: "Boys Captain",
  },
  {
    name: "Lady Maria Ezema",
    role: "Girls Captain",
  },
  {
    name: "Lt. Norah Hamilton",
    role: "Secretary",
  },
  {
    image: "/team/ekenepic.png",
    name: "Lt. Ekene Onaeku.",
    role: "Company Fin. Secretary",
  },
  {
    name: "Lt. Susan Utomi",
    role: "Welfare Officer",
  },
];

const activeOfficers: Person[] = [
  {
    image: "/team/oga-prince-brigade.jpeg",
    name: "Lt. Prince Duru",
    role: "Officer",
  },
  {
    image: "/team/captain-ray11.jpeg",
    name: "Lt. Raymond Nwanye",
    role: "8th Surulere Captain",
  },
  {
    name: "Lt. Chukwunonso Oramadike",
    role: "12th Surulere Captain",
  },
  {
    name: "Lt. Victor Nwankwo",
    role: "Battalion Asst. Secretary",
  },
  {
    name: "Lt. Samuel A.",
    role: "Asst. Welfare Officer",
  },
  {
    name: "Lt. Joy Ariyo",
    role: "Inventory",
  },
  {
    name: "WO. Obinna Igwe",
    role: "Warrant Officer",
  },
  {
    name: "Lt. Uloma U.",
    role: "Officer",
  },
  {
    name: "WO. Osita Ogada",
    role: "Band Corps Leader",
  },
  {
    name: "NCO. Michelle U.",
    role: "Asst. Company Secretary",
  },
  {
    name: "WO. Emeka Anyawu",
    role: "Program Coord.",
  },
  {
    name: "WO. Ifeanyi Ikeh",
    role: "PRO",
  },
];

const activeMembers: Person[] = [
  {
    // image: "/about/biblestud.jpeg",
    name: "Brigader Favour Ogada",
    role: "secretariat",
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
    id: "active-officers",
    label: "Active Officers",
    description: "Officers, warrant officers and NCOs serving weekly company life.",
    people: activeOfficers,
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
            <h2 className="mt-2 text-2xl font-bold text-heading md:text-4xl">
              Leadership & Members
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted md:text-base">
              Browse the people serving across leadership, active officers and
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
                  className={`min-h-11 rounded-lg px-3 text-sm font-bold transition cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-heading hover:bg-primary/5 dark:hover:bg-secondary/10"
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
            <h3 className="text-xl font-bold text-heading">{activeGroup.label}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              {activeGroup.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {activeGroup.people.map((person) => (
              <FadeIn key={`${activeGroup.id}-${person.name}`}>
                <article className="overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-lg hover:shadow-slate-900/10 dark:hover:shadow-black/30">
                  <button
                    type="button"
                    onClick={() => setSelectedPerson(person)}
                    aria-label={`Open ${person.name} profile`}
                    className="relative block aspect-square w-full cursor-pointer bg-primary/10"
                  >
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 90vw"
                      />
                    ) : (
                      <span className="absolute inset-0 flex items-center justify-center text-heading/55">
                        <UserRound aria-hidden="true" size={72} strokeWidth={1.4} />
                      </span>
                    )}
                  </button>

                  <div className="p-4 text-center">
                    <div className="flex min-w-0 items-center justify-center gap-2">
                      <h3 className="whitespace-nowrap text-sm font-bold text-heading">
                        {person.name}
                      </h3>
                      <a
                        href={person.externalUrl ?? brigadeLinkedInUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${person.name} on LinkedIn`}
                        className="shrink-0 text-heading transition hover:text-secondary"
                      >
                        <FaLinkedinIn aria-hidden="true" size={16} />
                      </a>
                    </div>
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
              {selectedPerson.image ? (
                <Image
                  src={selectedPerson.image}
                  alt={selectedPerson.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 32rem, 100vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-heading/55">
                  <UserRound aria-hidden="true" size={96} strokeWidth={1.2} />
                </div>
              )}
              <button
                type="button"
                onClick={() => setSelectedPerson(null)}
                aria-label="Close profile"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-card text-heading shadow-lg transition hover:bg-secondary hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold">{selectedPerson.name}</h3>
                  <p className="text-sm font-semibold text-secondary">
                    {selectedPerson.role}
                  </p>
                </div>
                {selectedPerson.externalUrl ? (
                  <a
                    href={selectedPerson.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${selectedPerson.name} external profile`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-heading transition hover:border-secondary hover:text-secondary"
                  >
                    <FaLinkedinIn aria-hidden="true" size={18} />
                  </a>
                ) : null}
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
