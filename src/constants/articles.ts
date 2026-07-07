export type ArticleCategory =
  | "Latest News"
  | "Brigade History"
  | "Faith & Devotion"
  | "Leadership & Training"
  | "Events & Reports"
  | "Golden Jubilee";

export type ArticleSection = {
  heading: string;
  body: string[];
};

export type ArticleTimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type BrigadeArticle = {
  slug: string;
  title: string;
  eyebrow: string;
  category: ArticleCategory;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  deck: string;
  sections: ArticleSection[];
  timeline?: ArticleTimelineItem[];
};

export const articleCategories: ArticleCategory[] = [
  "Latest News",
  "Brigade History",
  "Faith & Devotion",
  "Leadership & Training",
  "Events & Reports",
  "Golden Jubilee",
];

export const brigadeArticles: BrigadeArticle[] = [
  {
    slug: "history-of-the-brigade",
    title: "The Full History Of The Boys' Brigade And The Girls' Brigade",
    eyebrow: "Archive Feature",
    category: "Brigade History",
    excerpt:
      "A researched full read on two separate Christian youth organisations: The Boys' Brigade and The Girls' Brigade.",
    image: "/about/william-A-Smith.jpg",
    author: "Editorial Team",
    date: "2026-07-07",
    readTime: "12 min read",
    featured: true,
    deck:
      "The Boys' Brigade and The Girls' Brigade share Christian roots and a similar language of faith, discipline and service, but they are not the same organisation. Each has its own founder story, history, symbols and contribution to youth formation.",
    timeline: [
      {
        year: "1883",
        title: "The Boys' Brigade Is Founded",
        description:
          "Sir William Alexander Smith founded The Boys' Brigade in Glasgow, Scotland, on 4 October 1883.",
      },
      {
        year: "1886",
        title: "Boys' Brigade Camping Begins",
        description:
          "Early Brigade camping helped boys grow in responsibility, friendship and practical leadership beyond regular weekly meetings.",
      },
      {
        year: "1893",
        title: "The Girls' Brigade Begins In Dublin",
        description:
          "The Girls' Brigade tradition began in Dublin, Ireland, as a Christian movement for girls and young women.",
      },
      {
        year: "1900-1902",
        title: "Related Girls' Movements Grow",
        description:
          "The Girls' Guildry began in Scotland in 1900 and the Girls' Life Brigade began in England in 1902.",
      },
      {
        year: "1965",
        title: "The Modern Girls' Brigade Is Formed",
        description:
          "The Girls' Brigade of Ireland, the Girls' Guildry and the Girls' Life Brigade joined to form the modern Girls' Brigade.",
      },
      {
        year: "Today",
        title: "Two Legacies, One Local Witness",
        description:
          "Local Boys' and Girls' Brigade companies carry these two histories forward through worship, training, enrolment, camps, outreach and service.",
      },
    ],
    sections: [
      {
        heading: "The Boys' Brigade: A Separate Organisation",
        body: [
          "The Boys' Brigade is a Christian uniformed youth organisation founded in Glasgow, Scotland, on 4 October 1883 by Sir William Alexander Smith. Smith was a Sunday School teacher and a volunteer officer, and he saw that many boys needed a structured Christian environment where faith could be taught through habit, discipline, activity and belonging.",
          "The first Boys' Brigade company met around church life, Bible teaching, drill, physical exercise, recreation and organised duty. Its formation is widely recognised as a landmark in Christian youth work because it joined spiritual instruction with practical training and a clear company identity.",
          "The Boys' Brigade motto is 'Sure and Stedfast', taken from Hebrews 6:19. The anchor became a powerful symbol of hope, stability and Christian confidence. For Boys' Brigade members, the motto is not only decorative; it points to the kind of character the movement seeks to form.",
        ],
      },
      {
        heading: "The Boys' Brigade Object And Method",
        body: [
          "The historic object of The Boys' Brigade centres on advancing Christ's Kingdom among boys and promoting habits such as obedience, reverence, discipline and self-respect. These words explain why Boys' Brigade training has always been more than display.",
          "Drill, uniform, inspections, Bible classes, games, camps and service activities each teach a different part of formation. Drill trains attention and shared movement. Uniform teaches belonging and presentation. Camps teach responsibility and friendship. Bible teaching keeps the whole programme rooted in Christian faith.",
          "Boys' Brigade work spread quickly beyond Glasgow into other parts of the United Kingdom and then into many countries. Its model also influenced later uniformed youth movements, because it showed that young people could be organised, mentored and trusted with responsibility inside a Christian framework.",
        ],
      },
      {
        heading: "The Boys' Brigade In The Life Of A Company",
        body: [
          "In a local company, Boys' Brigade history becomes practical through weekly meetings, parade practice, enrolment, leadership training, service projects and worship. Members are not only learning facts about the past; they are entering a tradition of Christian discipline and service.",
          "The best Boys' Brigade formation is steady and relational. Officers mentor boys over time, correct with care, reward progress, and teach that leadership is built from faithfulness in ordinary responsibilities.",
        ],
      },
      {
        heading: "The Girls' Brigade: A Different Organisation With Its Own History",
        body: [
          "The Girls' Brigade is also an international Christian youth organisation, but it has its own beginning and should not be treated as simply the girls' section of The Boys' Brigade. Its story is connected to Christian formation for girls and young women.",
          "The Girls' Brigade began in Dublin, Ireland, in 1893. It grew from the desire to provide girls with Christian fellowship, purposeful activity, discipline, service and leadership opportunities at a time when girls also needed structured spaces for spiritual and personal development.",
          "Two other related movements also became important to the modern Girls' Brigade story: the Girls' Guildry in Scotland, founded in 1900, and the Girls' Life Brigade in England, founded in 1902. These movements shared a concern for Christian character, service and the development of girls and young women.",
        ],
      },
      {
        heading: "The Modern Girls' Brigade",
        body: [
          "In 1965, the Girls' Brigade of Ireland, the Girls' Guildry and the Girls' Life Brigade united to form the modern Girls' Brigade. This union gave the movement a wider identity while preserving symbols and emphases from the earlier organisations.",
          "The Girls' Brigade crest carries meaning: the cross points to Christian faith, the lamp speaks of light and witness, the crown points to Christ the King, and the torch speaks of God's presence and continuing mission. These symbols help members understand that the movement is spiritual, educational and practical.",
          "The Girls' Brigade motto is commonly expressed as 'Seek, Serve and Follow Christ'. It captures the heart of the movement: girls are encouraged to know Christ, serve others and grow as confident young women of faith and character.",
        ],
      },
      {
        heading: "The Girls' Brigade In The Life Of A Company",
        body: [
          "In local Girls' Brigade life, members grow through Bible study, badge work, creativity, service, physical activity, leadership opportunities and fellowship. The work is not only about attending meetings; it is about helping girls discover identity, purpose and confidence in Christ.",
          "Girls' Brigade formation gives girls and young women room to lead, speak, serve and develop gifts. It honours their place in the church and community while teaching that Christian service can be both strong and compassionate.",
        ],
      },
      {
        heading: "How Both Legacies Meet In Our Local Story",
        body: [
          "The Boys' Brigade and The Girls' Brigade are two different organisations, but local church life often brings their values together in shared witness. Both traditions care deeply about Christian faith, disciplined growth, leadership, service and community impact.",
          "For the 5th and 9th Surulere Brigade Companies, the local story is therefore not a merger of histories into one vague movement. It is the honouring of two legacies: the Boys' Brigade legacy of 'Sure and Stedfast' formation, and the Girls' Brigade legacy of seeking, serving and following Christ.",
          "That is why the About page can tell the story briefly, while this article gives the fuller read. The brief timeline introduces the heritage; the full article explains the two histories separately and shows how both continue to shape members today.",
        ],
      },
    ],
  },
  {
    slug: "community-care-visit-2025",
    title: "Community Care Visit Strengthens Service Culture",
    eyebrow: "Latest Report",
    category: "Latest News",
    excerpt:
      "Members stepped into the community with care packs, prayers and practical support for families around Surulere.",
    image: "/gallery/outreach2025.jpg",
    author: "News Desk",
    date: "2026-07-04",
    readTime: "4 min read",
    deck:
      "The visit reminded members that Brigade service is not only ceremonial. It is practical, local and deeply personal.",
    sections: [
      {
        heading: "Care Beyond The Hall",
        body: [
          "The outreach gave members a chance to serve families with practical support and encouragement.",
          "Officers guided the teams through preparation, distribution and prayer so that the visit remained organised, respectful and warm.",
        ],
      },
      {
        heading: "What Members Learned",
        body: [
          "Members learned that service begins with attention. Listening, greeting people well and working quietly as a team became part of the day's lesson.",
        ],
      },
    ],
  },
  {
    slug: "enrolment-service-meaning",
    title: "What Enrolment Service Teaches Every Member",
    eyebrow: "Formation",
    category: "Brigade History",
    excerpt:
      "Enrolment is more than a ceremony. It is a public promise of belonging, discipline and Christian witness.",
    image: "/gallery/gallery1.png",
    author: "Editorial Team",
    date: "2026-06-29",
    readTime: "5 min read",
    deck:
      "Every enrolment service gives the company a chance to remember its promise and renew its purpose.",
    sections: [
      {
        heading: "A Public Promise",
        body: [
          "Enrolment marks a member's formal place in the company. The service brings families, officers, church leaders and members together around commitment.",
          "The ceremony helps younger members understand that Brigade life is not casual attendance. It is a path of formation.",
        ],
      },
      {
        heading: "Why The Church Gathers",
        body: [
          "The congregation witnesses and supports the promise. That shared witness matters because the work of raising young people belongs to the whole church family.",
        ],
      },
    ],
  },
  {
    slug: "devotion-serving-like-christ",
    title: "Serving Like Christ In Ordinary Places",
    eyebrow: "Reflection",
    category: "Faith & Devotion",
    excerpt:
      "A devotion on humility, attention and the quiet strength of serving without needing applause.",
    image: "/events/pic2.png",
    author: "Chaplaincy Team",
    date: "2026-06-26",
    readTime: "3 min read",
    deck:
      "Christian service is often formed in small acts: arriving early, noticing need, helping without noise and staying faithful.",
    sections: [
      {
        heading: "The Posture Of Service",
        body: [
          "Jesus teaches service as a posture before it becomes a programme. The heart learns to ask, 'How can I help?' before it asks, 'Who will notice?'",
          "For Brigade members, this posture shapes parade, worship, outreach and fellowship.",
        ],
      },
    ],
  },
  {
    slug: "young-leaders-guide-to-responsibility",
    title: "A Young Leader's Guide To Responsibility",
    eyebrow: "Training Guide",
    category: "Leadership & Training",
    excerpt:
      "Practical habits for young leaders who are learning to lead teams, carry tasks and model discipline.",
    image: "/events/pic3.png",
    author: "Training Unit",
    date: "2026-06-20",
    readTime: "6 min read",
    deck:
      "Leadership in the Brigade is learned through dependable habits before it is seen in rank or title.",
    sections: [
      {
        heading: "Start With Reliability",
        body: [
          "A young leader becomes trustworthy by doing ordinary things well: arriving on time, listening carefully and finishing assigned duties.",
          "Reliability creates peace for the team because others know they can depend on you.",
        ],
      },
      {
        heading: "Lead With Clarity",
        body: [
          "Good instructions are short, calm and respectful. A leader should help people know what to do next without making them feel small.",
        ],
      },
    ],
  },
  {
    slug: "parade-report-discipline-on-display",
    title: "Parade Report: Discipline On Display",
    eyebrow: "Event Coverage",
    category: "Events & Reports",
    excerpt:
      "A look at the preparation, precision and teamwork behind the latest inspection and march past.",
    image: "/events/pic1.png",
    author: "Events Desk",
    date: "2026-06-14",
    readTime: "4 min read",
    deck:
      "A parade is the visible result of quiet practice, shared timing and patient leadership.",
    sections: [
      {
        heading: "Preparation Before Presentation",
        body: [
          "The strongest parade moments are built before the public sees them. Members rehearse posture, command response, spacing and movement until the company can move as one.",
        ],
      },
    ],
  },
  {
    slug: "golden-jubilee-why-fifty-years-matters",
    title: "Golden Jubilee: Why Fifty Years Matters",
    eyebrow: "Anniversary Collection",
    category: "Golden Jubilee",
    excerpt:
      "A Jubilee is not only a celebration of age. It is a thanksgiving for people, prayers, service and continuity.",
    image: "/images/hero.jpeg",
    author: "Jubilee Committee",
    date: "2026-06-08",
    readTime: "5 min read",
    deck:
      "Fifty years asks a company to look back with gratitude and forward with renewed courage.",
    sections: [
      {
        heading: "Memory With A Mission",
        body: [
          "A Golden Jubilee should preserve names, stories, photographs and milestones. But memory must also renew mission.",
          "The best anniversary celebrations help younger members understand that they are now part of a continuing story.",
        ],
      },
    ],
  },
  {
    slug: "bible-study-courage-and-obedience",
    title: "Bible Study: Courage And Obedience",
    eyebrow: "Bible Study",
    category: "Faith & Devotion",
    excerpt:
      "A simple study guide for groups reflecting on courage, obedience and daily Christian witness.",
    image: "/about/biblestud.jpeg",
    author: "Chaplaincy Team",
    date: "2026-05-31",
    readTime: "4 min read",
    deck:
      "Courage grows when members learn to obey God in small, faithful decisions.",
    sections: [
      {
        heading: "Opening Thought",
        body: [
          "Courage is not only bravery in big moments. It is also the steady decision to do what is right when no one is applauding.",
        ],
      },
    ],
  },
  {
    slug: "camp-lessons-teamwork",
    title: "Camp Lessons: Teamwork After Lights Out",
    eyebrow: "Training",
    category: "Leadership & Training",
    excerpt:
      "Camp teaches members to share space, carry responsibility and solve problems together.",
    image: "/events/pic3.png",
    author: "Training Unit",
    date: "2026-05-22",
    readTime: "5 min read",
    deck:
      "Some of the strongest leadership lessons happen during the ordinary routines of camp life.",
    sections: [
      {
        heading: "Shared Responsibility",
        body: [
          "Camp routines teach members that shared life requires shared effort. Cleaning, setting up, helping younger members and keeping time all become leadership lessons.",
        ],
      },
    ],
  },
  {
    slug: "outreach-report-faith-in-action",
    title: "Outreach Report: Faith In Action",
    eyebrow: "Field Report",
    category: "Events & Reports",
    excerpt:
      "How outreach helps members connect Christian teaching with visible community care.",
    image: "/events/outreach2026.png",
    author: "Events Desk",
    date: "2026-05-12",
    readTime: "4 min read",
    deck:
      "Outreach gives young people a living classroom for compassion, respect and service.",
    sections: [
      {
        heading: "Service As Witness",
        body: [
          "When members serve with humility, the community sees a practical expression of Christian witness.",
        ],
      },
    ],
  },
  {
    slug: "officers-note-mentoring-with-patience",
    title: "Officer's Note: Mentoring With Patience",
    eyebrow: "Officer Guide",
    category: "Leadership & Training",
    excerpt:
      "A guide for officers helping members grow through correction, encouragement and steady presence.",
    image: "/images/hero.jpg",
    author: "Officers' Council",
    date: "2026-05-01",
    readTime: "6 min read",
    deck:
      "Mentoring is slow work, but it is the soil where confidence and character often grow.",
    sections: [
      {
        heading: "Correction With Hope",
        body: [
          "Young people need correction that protects dignity. The aim is not to embarrass, but to guide the member toward a better habit.",
        ],
      },
    ],
  },
  {
    slug: "jubilee-archive-call-for-photos",
    title: "Golden Jubilee Archive: A Call For Photos",
    eyebrow: "Archive Notice",
    category: "Golden Jubilee",
    excerpt:
      "Families, alumni and officers are invited to help preserve photographs, programmes and memories.",
    image: "/gallery/gallery1.png",
    author: "Jubilee Committee",
    date: "2026-04-24",
    readTime: "3 min read",
    deck:
      "A strong archive is built when every generation contributes its piece of the story.",
    sections: [
      {
        heading: "What To Share",
        body: [
          "Old photographs, anniversary booklets, parade programmes, camp notes and short written memories can help the company preserve its heritage.",
        ],
      },
    ],
  },
  {
    slug: "why-uniform-still-matters",
    title: "Why Uniform Still Matters",
    eyebrow: "Heritage",
    category: "Brigade History",
    excerpt:
      "Uniform can teach belonging, care, presentation and respect when leaders explain its meaning well.",
    image: "/images/hero.jpeg",
    author: "Editorial Team",
    date: "2026-04-15",
    readTime: "5 min read",
    deck:
      "The uniform is not only fabric. It is a visible reminder of identity, responsibility and shared standards.",
    sections: [
      {
        heading: "Belonging And Responsibility",
        body: [
          "A uniform helps a member remember that private conduct and public identity are connected.",
        ],
      },
    ],
  },
];

export const featuredArticle =
  brigadeArticles.find((article) => article.featured) ?? brigadeArticles[0];

export function getArticleBySlug(slug: string) {
  return brigadeArticles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: ArticleCategory) {
  return brigadeArticles.filter((article) => article.category === category);
}

export function getRelatedArticles(article: BrigadeArticle, count = 3) {
  const sameCategory = brigadeArticles.filter(
    (item) => item.category === article.category && item.slug !== article.slug
  );
  const others = brigadeArticles.filter(
    (item) => item.category !== article.category && item.slug !== article.slug
  );

  return [...sameCategory, ...others].slice(0, count);
}

export function formatArticleDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
