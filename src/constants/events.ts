export type BrigadeEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  writeup: string[];
  outcome: string;
  galleryImages: string[];
  image: string;
  href: string;
  featured?: boolean;
};

export const brigadeEvents: BrigadeEvent[] = [
  {
    id: "monthly-fellowship",
    title: "Weekly Fellowship & Meeting",
    date: "2026-07-11",
    time: "4:00 PM",
    location: "All Saints Anglican Church Surulere",
    description:
      "An Afternoon of devotion, worship, mentoring and group fellowship for members and leaders.",
    writeup: [
      "Weekly Fellowship & Devotion brings members together for worship, prayer, scripture reflection and practical mentoring. It is designed to keep the company spiritually grounded while giving younger members a steady space to learn, ask questions and grow.",
      "The gathering usually includes songs, devotion, group discussion and short leadership reflections from officers and senior members.",
    ],
    outcome:
      "Members left with renewed commitment to service, stronger group bonds and practical lessons they could carry into school, home and Brigade activities.",
    galleryImages: ["/events/pic1.png", "/events/pic2.png", "/events/pic3.png"],
    image: "/events/pic1.png",
    href: "/events/monthly-fellowship",
  },
  {
    id: "community-outreach",
    title: "Medical & Charity Outreach",
    date: "2026-08-22",
    time: "9:00 AM",
    location: "All Saints' Anglican Church, Surulere, Ojuelegba",
    description:
      "Join us as we serve families around Surulere through practical support, prayer and shared hope.",
    writeup: [
      "The Community Outreach Program is one of the clearest expressions of the Brigade's service mission. Members and leaders step beyond regular meetings to engage the community with kindness, practical support and encouragement.",
      "The event creates an opportunity for boys and girls to understand service as something active and local, not just something discussed during devotion.",
    ],
    outcome:
      "The outreach strengthened relationships with the community, encouraged members to serve with humility and created a visible witness of care around Surulere.",
    galleryImages: ["/events/pic2.png", "/events/pic1.png", "/events/pic3.png"],
    image: "/events/outreach2026.png",
    href: "/events/community-outreach-program",
    featured: true,
  },
  {
    id: "leadership-training",
    title: "Battalion NCO Training Camp",
    date: "2026-08-08",
    time: "9:00 AM",
    location: "BAHM Church, Lagos",
    description:
      "A focused training day for young leaders, with team-building drills and guided leadership sessions.",
    writeup: [
      "Leadership Training Camp helps members practice discipline, responsibility and teamwork in a structured environment. The sessions are built around group exercises, guided conversations and practical challenges.",
      "Officers use the camp to identify emerging leaders and help them understand how leadership in the Brigade is connected to character, faith and service.",
    ],
    outcome:
      "Participants gained confidence, improved teamwork and learned practical leadership habits for future company activities.",
    galleryImages: ["/events/pic3.png", "/events/pic1.png", "/events/pic2.png"],
    image: "/events/pic3.png",
    href: "/events/leadership-training",
  },
  {
    id: "parents-leaders-forum",
    title: "Parents & Leaders Forum",
    date: "2026-08-22",
    time: "11:00 AM",
    location: "Brigade Hall, Surulere",
    description:
      "A collaborative forum for parents, guardians and leaders to review plans for the new session.",
    writeup: [
      "The Parents & Leaders Forum creates room for officers, parents and guardians to speak together about the welfare, progress and participation of members.",
      "It also helps the company align upcoming programs with the support structures members need at home, church and school.",
    ],
    outcome:
      "Parents and leaders left with clearer expectations, shared priorities and stronger communication for upcoming Brigade programs.",
    galleryImages: ["/events/pic1.png", "/events/pic3.png", "/events/pic2.png"],
    image: "/events/pic1.png",
    href: "/events/parents-leaders-forum",
  },
  {
    id: "service-project",
    title: "Service Project Day",
    date: "2026-06-27",
    time: "8:30 AM",
    location: "Surulere Community",
    description:
      "Members worked together on a community service project focused on care, cleanliness and teamwork.",
    writeup: [
      "Service Project Day gave members a practical way to serve the community together. The activity focused on teamwork, responsibility and showing care through visible action.",
      "Members were grouped into teams, assigned tasks and guided by officers throughout the day so the service remained organized and purposeful.",
    ],
    outcome:
      "The project improved the immediate environment, built teamwork among members and reminded everyone that service is a core part of Brigade life.",
    galleryImages: ["/events/pic2.png", "/events/pic3.png", "/events/pic1.png"],
    image: "/events/pic2.png",
    href: "/events/service-project",
  },
  {
    id: "bible-quiz",
    title: "Bible Quiz & Games",
    date: "2026-06-13",
    time: "12:00 PM",
    location: "Brigade Hall, Surulere",
    description:
      "A spirited quiz and games session designed to build scripture knowledge and healthy friendship.",
    writeup: [
      "Bible Quiz & Games combined scripture learning with friendly competition. Members prepared, answered questions in teams and took part in activities that made learning lively and memorable.",
      "The format encouraged confidence, listening and respect while helping members engage with Bible knowledge beyond a formal classroom setting.",
    ],
    outcome:
      "The event improved scripture familiarity, built confidence among younger members and created a joyful atmosphere of healthy competition.",
    galleryImages: ["/events/pic3.png", "/events/pic2.png", "/events/pic1.png"],
    image: "/events/pic3.png",
    href: "/events/bible-quiz",
  },
  {
    id: "march-past",
    title: "Inspection & March Past",
    date: "2026-05-30",
    time: "9:30 AM",
    location: "King's Group, Lagos",
    description:
      "A discipline and parade-focused event celebrating precision, teamwork and Brigade tradition.",
    writeup: [
      "Inspection & March Past highlights the discipline, order and ceremonial tradition of the Brigade. Members demonstrate drill, uniform presentation, coordination and respect for command.",
      "The event gives officers a chance to review readiness while helping members take pride in preparation, teamwork and attention to detail.",
    ],
    outcome:
      "Members displayed stronger parade discipline, improved confidence and a deeper appreciation for Brigade tradition.",
    galleryImages: ["/events/pic1.png", "/events/pic2.png", "/events/pic3.png"],
    image: "/events/pic1.png",
    href: "/events/march-past",
  },
];

export const featuredEvent =
  brigadeEvents.find((event) => event.featured) ?? brigadeEvents[0];

export const upcomingEvents = brigadeEvents
  .filter((event) => event.date >= "2026-07-06")
  .sort((a, b) => a.date.localeCompare(b.date));

export const pastEvents = brigadeEvents
  .filter((event) => event.date < "2026-07-06")
  .sort((a, b) => b.date.localeCompare(a.date));

export function getEventById(eventId: string) {
  return brigadeEvents.find((event) => event.id === eventId);
}

export function eventDate(event: BrigadeEvent) {
  return new Date(`${event.date}T00:00:00`);
}

export function eventDay(event: BrigadeEvent) {
  return eventDate(event).toLocaleDateString("en-US", { day: "2-digit" });
}

export function eventMonth(event: BrigadeEvent) {
  return eventDate(event).toLocaleDateString("en-US", { month: "short" }).toUpperCase();
}

export function eventFullDate(event: BrigadeEvent) {
  return eventDate(event).toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function eventsForMonth(events: BrigadeEvent[], year: number, month: number) {
  return events.filter((event) => {
    const date = eventDate(event);
    return date.getFullYear() === year && date.getMonth() === month;
  });
}

export function eventsForDate(events: BrigadeEvent[], dateId: string | null) {
  if (!dateId) {
    return [];
  }

  return events.filter((event) => event.date === dateId);
}
