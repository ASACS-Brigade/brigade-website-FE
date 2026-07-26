export type CompanySlug =
  | "5th-surulere-company"
  | "9th-surulere-company";

export type CompanyTheme = "boys" | "girls";

export type CompanyActivityIcon =
  | "bible"
  | "community"
  | "leadership"
  | "music"
  | "parade"
  | "skills"
  | "sports";

export type CompanyPageData = {
  slug: CompanySlug;
  theme: CompanyTheme;
  companyName: string;
  organisationName: string;
  heroDescription: string;
  logo: string;
  logoAlt: string;
  motto: string;
  scriptureReference?: string;
  introduction: string[];
  history: {
    paragraphs: string[];
    milestones?: {
      year: string;
      title: string;
      description: string;
    }[];
  };
  objectOrAim: {
    label: "Object" | "Aim";
    text: string;
  };
  identityExplanation: string;
  identityDetails: {
    title: string;
    description: string;
  }[];
  sections: {
    name: string;
    description: string;
    ageRange?: string;
  }[];
  achievements: {
    year?: string;
    title: string;
    description: string;
  }[];
  galleryImages: {
    src: string;
    alt: string;
  }[];
  activities: {
    title: string;
    description: string;
    icon: CompanyActivityIcon;
  }[];
  leadership?: {
    name: string;
    role: string;
    image?: string;
    servicePeriod?: string;
    status: "current" | "past";
    note?: string;
  }[];
  relatedCompanySlug: CompanySlug;
  cta: {
    title: string;
    description: string;
  };
};

export const companies: Record<CompanySlug, CompanyPageData> = {
  "5th-surulere-company": {
    slug: "5th-surulere-company",
    theme: "boys",
    companyName: "5th Surulere Company",
    organisationName: "The Boys’ Brigade Nigeria",
    heroDescription:
      "Building Christian character through faith, discipline, leadership and service.",
    logo: "/images/bb-Logo.png",
    logoAlt: "The Boys’ Brigade emblem",
    motto: "Sure and Stedfast",
    scriptureReference: "Hebrews 6:19",
    introduction: [
      "The 5th Surulere Company is the Boys’ Brigade ministry at All Saints’ Anglican Church, Surulere. It provides a structured Christian community where boys can grow in faith, character and responsibility.",
      "The company serves alongside the 9th Surulere Company in the shared life of the church while retaining the identity, organisation and traditions of The Boys’ Brigade Nigeria.",
    ],
    history: {
      paragraphs: [
        "The Boys’ Brigade was founded by Sir William Alexander Smith in Glasgow, Scotland, on 4 October 1883. It brought Christian teaching together with discipline, activity and a strong sense of belonging.",
        "The Boys’ Brigade was founded at All Saints’ Church, Surulere, in 1976 by Messrs Edmund U. Okongwu and Nathan I. Anyasor, with Dorothy Ejindu and Hope Onwenu assisting. The founders also hoped to establish the Girls’ Brigade thereafter.",
        "Beginning with only ten boys, the two leaders set about building the young organisation. The first officers’ training was held at Ikeja in 1977.",
        "In 1978, the company was recognised by the Lagos State Council of The Boys’ Brigade and became the 26th Lagos Company of the Lagos Battalion of The Boys’ Brigade Nigeria. Its first Enrolment Service was held on 28 May 1978 following a rigorous training exercise and inspection of its training and administrative records by the Lagos State Council.",
        "The Enrolment Service welcomed 20 officers and four boys from each company of the Lagos Battalion. Nathan Anyasor, Paul O. U. Ihejirike and Peter Ichekwai are recorded in the company’s early secretaryship succession, with Peter Ichekwai serving from 1995.",
      ],
      milestones: [
        {
          year: "1976",
          title: "The company is founded",
          description:
            "Edmund U. Okongwu and Nathan I. Anyasor began the Brigade at All Saints’ Church with ten boys, assisted by Dorothy Ejindu and Hope Onwenu.",
        },
        {
          year: "1977",
          title: "First officers’ training",
          description:
            "The young company held its first officers’ training at Ikeja.",
        },
        {
          year: "1978",
          title: "Recognition and first Enrolment Service",
          description:
            "The company became the 26th Lagos Company and held its first Enrolment Service on 28 May.",
        },
      ],
    },
    objectOrAim: {
      label: "Object",
      text: "The Advancement of Christ’s Kingdom among Boys and the Promotion of Habits of Obedience, Reverence, Discipline, Self-Respect and all that tends towards a true Christian Manliness.",
    },
    identityExplanation:
      "The motto points to the Christian hope described as an anchor of the soul—secure and steadfast. It reflects the dependable faith and character the company seeks to nurture in its members.",
    identityDetails: [
      {
        title: "Uniform & Company Identity",
        description:
          "The company follows the approved Boys’ Brigade uniform and identity, carrying the anchor emblem and the tradition represented by ‘Sure and Stedfast’.",
      },
    ],
    sections: [
      {
        name: "Anchors",
        description:
          "The introductory section where younger boys begin learning through Christian teaching, friendship and age-appropriate activities.",
      },
      {
        name: "Junior Section",
        description:
          "A formative section that develops faith, discipline, teamwork and confidence through structured company life.",
      },
      {
        name: "Company Section",
        description:
          "Members take on broader responsibilities while growing through training, service, parade and practical activities.",
      },
      {
        name: "Senior Section",
        description:
          "Older members deepen their leadership, Christian commitment and responsibility within the company.",
      },
      {
        name: "Non-Commissioned Officer (NCO)",
        description:
          "A youth leadership level that supports discipline, teamwork and the guidance of other members.",
      },
      {
        name: "Warrant Officer",
        description:
          "A senior leadership position supporting company organisation, training and mentoring.",
      },
      {
        name: "Lieutenant",
        description:
          "An officer position serving the company through Christian leadership, administration, training and member development.",
      },
    ],
    achievements: [
      {
        year: "1977",
        title: "First Officers’ Training",
        description:
          "The young company held its first officers’ training at Ikeja, strengthening its leadership foundation.",
      },
      {
        year: "1978",
        title: "Recognition and First Enrolment",
        description:
          "The company was recognised as the 26th Lagos Company and held its first Enrolment Service on 28 May.",
      },
      {
        year: "2026",
        title: "50 Years of Service",
        description:
          "The 5th Surulere Company marks fifty years since its establishment at All Saints’ Church in 1976.",
      },
    ],
    galleryImages: [
      {
        src: "/about/biblestud.jpeg",
        alt: "A junior boy taking part in the Battalion bible quiz competition, a creative learning activity",
      },
      {
        src: "/images/hero.jpg",
        alt: "Officers of the 5th and 9th Surulere Companies gathered in uniform",
      },
      {
        src: "/gallery/outreach2025.jpg",
        alt: "Brigade officers and community partners at a medical and charity outreach",
      },
    ],
    activities: [
      {
        title: "Christian Teaching",
        description:
          "Worship, Bible teaching and fellowship keep company life rooted in Christ.",
        icon: "bible",
      },
      {
        title: "Parade & Discipline",
        description:
          "Structured practice develops attentiveness, teamwork and personal responsibility.",
        icon: "parade",
      },
      {
        title: "Leadership Development",
        description:
          "Members learn to lead through dependable habits, mentoring and practical responsibility.",
        icon: "leadership",
      },
      {
        title: "Community Service",
        description:
          "Outreach gives members practical ways to serve the church and wider community.",
        icon: "community",
      },
      {
        title: "Music",
        description:
          "Company music activities encourage teamwork, practice and service through shared gifts.",
        icon: "music",
      },
      {
        title: "Physical Development",
        description:
          "Active company life encourages fitness, cooperation and healthy discipline.",
        icon: "sports",
      },
    ],
    leadership: [
      {
        name: "Barr. Rex O.",
        role: "Boys Captain",
        servicePeriod: "2024 – Present",
        status: "current",
      },
      {
        name: "Edmund U. Okongwu",
        role: "Founding Captain",
        servicePeriod: "From 1976",
        status: "past",
        note: "Co-founded the company and helped lead its earliest development.",
      },
      {
        name: "Emmanuel Iheanacho",
        role: "Past Captain",
        servicePeriod: "Before 1995",
        status: "past",
      },
      {
        name: "Anthony Ajero",
        role: "Past Captain",
        servicePeriod: "1995 – 2009",
        status: "past",
      },
      {
        name: "Barr. Fred Ichekwai",
        role: "Past Captain",
        servicePeriod: "2009 – 2024",
        status: "past",
      },
    ],
    relatedCompanySlug: "9th-surulere-company",
    cta: {
      title: "Join the 5th Surulere Company",
      description:
        "Grow in faith, discipline, leadership and service as part of the Boys’ Brigade community at All Saints’ Anglican Church, Surulere.",
    },
  },
  "9th-surulere-company": {
    slug: "9th-surulere-company",
    theme: "girls",
    companyName: "9th Surulere Company",
    organisationName: "The Girls’ Brigade Nigeria",
    heroDescription:
      "Helping girls grow in faith, confidence, leadership and service.",
    logo: "/images/gb-logo.png",
    logoAlt: "The Girls’ Brigade emblem",
    motto: "Seek, Serve and Follow Christ",
    introduction: [
      "The 9th Surulere Company is the Girls’ Brigade ministry at All Saints’ Anglican Church, Surulere. It supports girls through Christian teaching, confidence-building, practical development, leadership and service.",
      "The company serves alongside the 5th Surulere Company in the shared life of the church while retaining the identity, organisation and traditions of The Girls’ Brigade Nigeria.",
    ],
    history: {
      paragraphs: [
        "The Girls’ Brigade tradition began in Dublin, Ireland, in 1893 as a Christian movement for girls and young women. In 1965, three related movements united to form the modern Girls’ Brigade.",
        "At All Saints’ Anglican Church, the 9th Surulere Company carries that tradition into local company life through worship, training, fellowship, creative development and service.",
      ],
    },
    objectOrAim: {
      label: "Aim",
      text: "To help Girls become followers of the Lord Jesus Christ through self-control, reverence and a sense of responsibility to find true enrichment of life.",
    },
    identityExplanation:
      "The motto expresses a pattern of Christian life: seeking Christ, serving others and following faithfully. It shapes a company culture centred on faith, confidence, compassion and responsibility.",
    identityDetails: [
      {
        title: "Uniform & Company Identity",
        description:
          "The company follows the approved Girls’ Brigade uniform and identity, carrying a Christian heritage expressed through its crest and commitment to seek, serve and follow Christ.",
      },
    ],
    sections: [
      {
        name: "Explorers",
        description:
          "The introductory section where younger girls explore Christian faith, friendship and practical learning through guided activities.",
      },
      {
        name: "Juniors",
        description:
          "Members build confidence, discipline and teamwork through Christian teaching and purposeful activities.",
      },
      {
        name: "Seniors",
        description:
          "Girls develop stronger practical skills, responsibility and opportunities to participate in company leadership.",
      },
      {
        name: "Brigaders",
        description:
          "Older members deepen their Christian commitment, service, confidence and readiness to lead others.",
      },
      {
        name: "Non-Commissioned Officer (NCO)",
        description:
          "A youth leadership level supporting discipline, teamwork and the guidance of other members.",
      },
      {
        name: "Lieutenant",
        description:
          "An officer position serving the company through Christian leadership, administration, training and member development.",
      },
    ],
    achievements: [
      {
        year: "1998",
        title: "Founding Leadership",
        description:
          "The recorded leadership succession begins with Mrs. Jane Doe’s service as the founding Girls’ Captain.",
      },
      {
        year: "2001",
        title: "A New Season of Leadership",
        description:
          "Lady Esther Ofoneme began a period of service that continued through 2019.",
      },
      {
        year: "2019",
        title: "Continuing the Succession",
        description:
          "Lady Maria Ezenma began serving as Girls’ Captain, continuing the company’s leadership story.",
      },
      {
        year: "2023",
        title: "The First Medical & Charity Outreach",
        description:
        "Lady Maria Ezenma, in collaboration with the Boys’ Captain, Sir Fred Ichekwai, launched the first Medical & Charity Outreach—an initiative dedicated to serving the church and giving back to the wider community.",
        },
    ],
    galleryImages: [
      {
        src: "/images/hero.jpg",
        alt: "Officers of the 5th and 9th Surulere Companies gathered in uniform",
      },
      {
        src: "/gallery/outreach2025.jpg",
        alt: "Girls’ and Boys’ Brigade officers with community partners during an outreach",
      },
    ],
    activities: [
      {
        title: "Christian Teaching",
        description:
          "Bible teaching, worship and fellowship help members grow in Christian faith.",
        icon: "bible",
      },
      {
        title: "Parade & Discipline",
        description:
          "Structured practice develops attentiveness, teamwork and personal responsibility.",
        icon: "parade",
      },
      {
        title: "Leadership Development",
        description:
          "Members build confidence through mentoring, participation and opportunities to lead.",
        icon: "leadership",
      },
      {
        title: "Practical Skills",
        description:
          "Purposeful activities help girls develop creativity, confidence and useful skills.",
        icon: "skills",
      },
      {
        title: "Community Outreach",
        description:
          "Service activities put Christian care into practice in the church and community.",
        icon: "community",
      },
      {
        title: "Physical Development",
        description:
          "Active company life encourages wellbeing, cooperation and healthy discipline.",
        icon: "sports",
      },
    ],
    leadership: [
      {
        name: "Mrs. Jane Doe",
        role: "Founding Girls’ Captain",
        servicePeriod: "1998 – 2001",
        status: "past",
      },
      {
        name: "Lady Esther Ofoneme",
        role: "Past Girls’ Captain",
        servicePeriod: "2001 – 2019",
        status: "past",
      },
      {
        name: "Lady Maria Ezenma",
        role: "Girls Captain",
        servicePeriod: "2019 – Present",
        status: "current",
      },
    ],
    relatedCompanySlug: "5th-surulere-company",
    cta: {
      title: "Join the 9th Surulere Company",
      description:
        "Grow in faith, confidence, leadership and service as part of the Girls’ Brigade community at All Saints’ Anglican Church, Surulere.",
    },
  },
};

export const companyContentToConfirm = [
  "The verified establishment date and detailed local history of the 9th Surulere Company",
  "Confirmed age ranges for each Boys’ and Girls’ Brigade membership section",
  "Exact service years and approved portraits for the current and past captains of both companies",
  "The verified succession of past captains for the 9th Surulere Company",
  "Verified company awards beyond the milestones already recorded",
  "Additional company-specific gallery photographs and captions",
  "The Girls’ Brigade motto’s confirmed biblical foundation, if one is to be displayed",
] as const;

export function getCompanyBySlug(slug: CompanySlug) {
  return companies[slug];
}
