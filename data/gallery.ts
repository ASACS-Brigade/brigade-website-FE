export type GalleryStat = {
  icon: "users" | "award" | "church" | "heart" | "music" | "tent" | "shield";
  value: number;
  suffix: string;
  title: string;
  description: string;
};

export type GalleryYear = {
  year: string;
  title: string;
  description: string;
  status: "coming" | "available";
  cover: string;
  images: string[];
};

export type GalleryCategory = {
  title: string;
  shortTitle: string;
  heroTitle: string;
  description: string;
  heroImage: string;
  icon: GalleryStat["icon"];
  galleryPattern: "masonry" | "feature" | "rows" | "mosaic" | "tiles";
  stats: GalleryStat[];
  years: GalleryYear[];
  cta: {
    heading: string;
    subheading: string;
    buttonLabel: string;
    buttonHref: string;
  };
  images: string[];
};

const sharedImages = {
  enrolment: "/gallery/gallery1.png",
  hero: "/images/hero.jpeg",
  study: "/about/biblestud.jpeg",
  founder: "/about/william-A-Smith.jpg",
  eventOne: "/gallery/outreach2025.jpg",
  eventTwo: "/events/pic2.png",
  eventThree: "/events/pic3.png",
};

export const galleryCategories = {
  enrolment: {
    title: "Enrolment & Rededication Service",
    shortTitle: "Enrolment",
    heroTitle: "Welcoming New Brigaders Into A Lifetime Of Service",
    description:
      "Explore enrolment and rededication ceremonies across the years as members are welcomed into the Brigade family.",
    heroImage: sharedImages.enrolment,
    icon: "church",
    galleryPattern: "masonry",
    stats: [
      {
        icon: "users",
        value: 420,
        suffix: "+",
        title: "Members Enrolled",
        description: "Young boys and girls officially welcomed into the Brigade.",
      },
      {
        icon: "church",
        value: 28,
        suffix: "",
        title: "Services Held",
        description: "Annual enrolment and rededication ceremonies preserved.",
      },
      {
        icon: "award",
        value: 130,
        suffix: "+",
        title: "Badges Presented",
        description: "Badges, ranks and recognitions awarded during services.",
      },
      {
        icon: "shield",
        value: 100,
        suffix: "%",
        title: "Commitment",
        description: "A public pledge to faith, discipline and Christian service.",
      },
    ],
    years: [
      {
        year: "2026",
        title: "Next Enrolment Service",
        description: "The upcoming enrolment service is being prepared.",
        status: "coming",
        cover: sharedImages.enrolment,
        images: [],
      },
      {
        year: "2025",
        title: "Rededication Service",
        description: "Members renewed their commitment and new brigaders were welcomed.",
        status: "available",
        cover: sharedImages.enrolment,
        images: [
          sharedImages.enrolment,
          sharedImages.study,
          sharedImages.hero,
          sharedImages.eventOne,
          sharedImages.eventTwo,
          sharedImages.eventThree,
        ],
      },
      {
        year: "2024",
        title: "Service Of Welcome",
        description: "A warm ceremony of worship, presentation and dedication.",
        status: "available",
        cover: sharedImages.study,
        images: [
          sharedImages.study,
          sharedImages.enrolment,
          sharedImages.eventTwo,
          sharedImages.founder,
        ],
      },
      {
        year: "2023",
        title: "Called To Serve",
        description: "A memorable day of faith, family and Brigade commitment.",
        status: "available",
        cover: sharedImages.eventOne,
        images: [
          sharedImages.eventOne,
          sharedImages.eventThree,
          sharedImages.hero,
          sharedImages.enrolment,
        ],
      },
    ],
    cta: {
      heading: "Become Part of Our Enrolment Journey",
      subheading:
        "Join a community shaped by faith, leadership, discipline and service.",
      buttonLabel: "Join The Brigade",
      buttonHref: "/register",
    },
    images: [
      sharedImages.enrolment,
      sharedImages.study,
      sharedImages.hero,
      sharedImages.eventOne,
    ],
  },

  parade: {
    title: "Parade & Drill",
    shortTitle: "Parade",
    heroTitle: "Parade & Drill Archive",
    description: "Discipline, inspection and excellence.",
    heroImage: sharedImages.enrolment,
    icon: "shield",
    galleryPattern: "masonry",
    stats: [],
    years: [],
    cta: {
      heading: "Become Part of Our Next Parade Story",
      subheading:
        "Join the Boys' & Girls' Brigade and become part of the next chapter of our history.",
      buttonLabel: "Join The Brigade",
      buttonHref: "/register",
    },
    images: [
      sharedImages.enrolment,
      sharedImages.hero,
      sharedImages.eventTwo,
    ],
  },

  outreach: {
    title: "Medical & Charity Outreach",
    shortTitle: "Outreach",
    heroTitle: "Serving Communities With Compassion",
    description:
      "Moments from medical outreach, charity visits and community service activities.",
    heroImage: sharedImages.eventOne,
    icon: "heart",
    galleryPattern: "feature",
    stats: [
      {
        icon: "heart",
        value: 3,
        suffix: "+",
        title: "Outreaches",
        description: "Service visits and charity projects across the community.",
      },
      {
        icon: "users",
        value: 900,
        suffix: "+",
        title: "People Reached",
        description: "Families and individuals supported through Brigade service.",
      },
      {
        icon: "shield",
        value: 12,
        suffix: "+",
        title: "Teams",
        description: "Officers and members serving together with discipline.",
      },
      {
        icon: "award",
        value: 6,
        suffix: "+",
        title: "Partners",
        description: "Community partners and church groups working with us.",
      },
    ],
    years: [
      {
        year: "2026",
        title: "Upcoming Outreach",
        description: "New outreach activities will be added after completion.",
        status: "coming",
        cover: sharedImages.eventOne,
        images: [],
      },
      {
        year: "2025",
        title: "Community Care Visit",
        description: "Service, support and care for families in the community.",
        status: "available",
        cover: sharedImages.eventOne,
        images: [
          sharedImages.eventOne,
          sharedImages.eventTwo,
          sharedImages.eventThree,
          sharedImages.study,
        ],
      },
      {
        year: "2024",
        title: "Charity Outreach",
        description: "A day of compassion and practical Christian service.",
        status: "available",
        cover: sharedImages.eventTwo,
        images: [
          sharedImages.eventTwo,
          sharedImages.eventOne,
          sharedImages.enrolment,
        ],
      },
    ],
    cta: {
      heading: "Serve With The Brigade",
      subheading:
        "Be part of outreach moments that bring care, faith and practical help to others.",
      buttonLabel: "Get Involved",
      buttonHref: "/contact",
    },
    images: [sharedImages.eventOne, sharedImages.eventTwo],
  },

  band: {
    title: "Band & Orchestra",
    shortTitle: "Band",
    heroTitle: "Music, Rhythm And Brigade Discipline",
    description:
      "A visual archive of music ministry, band practice and ceremonial performances.",
    heroImage: sharedImages.hero,
    icon: "music",
    galleryPattern: "rows",
    stats: [
      {
        icon: "music",
        value: 65,
        suffix: "+",
        title: "Music Moments",
        description: "Performances, rehearsals and ceremonial music sessions.",
      },
      {
        icon: "users",
        value: 40,
        suffix: "+",
        title: "Band Members",
        description: "Young members developing confidence through music.",
      },
      {
        icon: "award",
        value: 15,
        suffix: "+",
        title: "Performances",
        description: "Church, Brigade and community events supported by music.",
      },
      {
        icon: "shield",
        value: 100,
        suffix: "%",
        title: "Discipline",
        description: "Every performance reflects practice and teamwork.",
      },
    ],
    years: [
      {
        year: "2026",
        title: "Next Band Season",
        description: "New band moments will be added after upcoming activities.",
        status: "coming",
        cover: sharedImages.hero,
        images: [],
      },
      {
        year: "2025",
        title: "Band Presentation",
        description: "A collection of music and ceremonial performance moments.",
        status: "available",
        cover: sharedImages.hero,
        images: [
          sharedImages.hero,
          sharedImages.enrolment,
          sharedImages.eventThree,
          sharedImages.eventTwo,
        ],
      },
      {
        year: "2024",
        title: "Practice And Praise",
        description: "Members learning rhythm, focus and teamwork.",
        status: "available",
        cover: sharedImages.eventThree,
        images: [
          sharedImages.eventThree,
          sharedImages.hero,
          sharedImages.study,
        ],
      },
    ],
    cta: {
      heading: "Grow Through Music",
      subheading:
        "Join a Brigade family where talent, discipline and service grow together.",
      buttonLabel: "Contact Us",
      buttonHref: "/contact",
    },
    images: [sharedImages.hero, sharedImages.enrolment],
  },

  camp: {
    title: "Leadership Camp",
    shortTitle: "Camp",
    heroTitle: "Faith, Leadership And Fellowship",
    description:
      "Snapshots from camp meetings, leadership training and fellowship activities.",
    heroImage: sharedImages.study,
    icon: "tent",
    galleryPattern: "mosaic",
    stats: [
      {
        icon: "tent",
        value: 20,
        suffix: "+",
        title: "Camp Sessions",
        description: "Training and fellowship gatherings preserved in photos.",
      },
      {
        icon: "users",
        value: 300,
        suffix: "+",
        title: "Participants",
        description: "Members shaped through leadership and Christian growth.",
      },
      {
        icon: "church",
        value: 35,
        suffix: "+",
        title: "Bible Studies",
        description: "Faith-building sessions across camp programmes.",
      },
      {
        icon: "award",
        value: 12,
        suffix: "+",
        title: "Activities",
        description: "Games, drills, study and teamwork challenges.",
      },
    ],
    years: [
      {
        year: "2026",
        title: "Next Camp",
        description: "Upcoming camp memories will be added when available.",
        status: "coming",
        cover: sharedImages.study,
        images: [],
      },
      {
        year: "2025",
        title: "Leadership Camp",
        description: "A season of faith, teamwork and leadership development.",
        status: "available",
        cover: sharedImages.study,
        images: [
          sharedImages.study,
          sharedImages.eventThree,
          sharedImages.hero,
          sharedImages.founder,
        ],
      },
      {
        year: "2024",
        title: "Fellowship Camp",
        description: "Learning, worship and friendship across the Brigade.",
        status: "available",
        cover: sharedImages.eventThree,
        images: [
          sharedImages.eventThree,
          sharedImages.study,
          sharedImages.enrolment,
        ],
      },
    ],
    cta: {
      heading: "Grow In Faith And Leadership",
      subheading:
        "Take part in programmes that build confidence, friendship and Christian character.",
      buttonLabel: "Join Us",
      buttonHref: "/contact",
    },
    images: [sharedImages.study, sharedImages.eventThree],
  },

  awards: {
    title: "Awards & Promotions",
    shortTitle: "Awards",
    heroTitle: "Celebrating Growth And Excellence",
    description:
      "Awards, recognitions and promotion moments from Brigade programmes.",
    heroImage: sharedImages.enrolment,
    icon: "award",
    galleryPattern: "tiles",
    stats: [
      {
        icon: "award",
        value: 80,
        suffix: "+",
        title: "Awards",
        description: "Recognitions presented for commitment and excellence.",
      },
      {
        icon: "shield",
        value: 45,
        suffix: "+",
        title: "Promotions",
        description: "Members advancing in rank and responsibility.",
      },
      {
        icon: "users",
        value: 120,
        suffix: "+",
        title: "Members Celebrated",
        description: "Young leaders honoured for service and growth.",
      },
      {
        icon: "church",
        value: 10,
        suffix: "+",
        title: "Ceremonies",
        description: "Formal presentations across annual Brigade activities.",
      },
    ],
    years: [
      {
        year: "2026",
        title: "Next Awards",
        description: "Awards and promotion photos will appear after the event.",
        status: "coming",
        cover: sharedImages.enrolment,
        images: [],
      },
      {
        year: "2025",
        title: "Awards Presentation",
        description: "Celebrating service, discipline and growth.",
        status: "available",
        cover: sharedImages.enrolment,
        images: [
          sharedImages.enrolment,
          sharedImages.eventOne,
          sharedImages.eventTwo,
          sharedImages.founder,
        ],
      },
      {
        year: "2024",
        title: "Promotion Service",
        description: "Members recognised for progress and responsibility.",
        status: "available",
        cover: sharedImages.eventOne,
        images: [
          sharedImages.eventOne,
          sharedImages.enrolment,
          sharedImages.hero,
        ],
      },
    ],
    cta: {
      heading: "Celebrate Growth With Us",
      subheading:
        "Every award reflects faithfulness, discipline and service in action.",
      buttonLabel: "View Events",
      buttonHref: "/events",
    },
    images: [sharedImages.enrolment, sharedImages.eventOne],
  },
} satisfies Record<string, GalleryCategory>;
