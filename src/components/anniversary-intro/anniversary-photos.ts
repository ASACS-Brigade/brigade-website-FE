import type { AnniversaryPhoto } from "./anniversary-intro.types";

// Temporary Unsplash placeholders are mixed with the approved Brigade images.
// Replace the placeholder entries with official Jubilee photographs later;
// the mosaic layout and responsive crops do not need to change.
const approvedPhotoCrops: AnniversaryPhoto[] = [
  {
    src: "/images/hero.jpg",
    alt: "Officers and members of the Boys' and Girls' Brigade Surulere companies",
    objectPosition: "8% 42%",
    tone: "standard",
  },
  {
    src: "/images/anniversary/placeholder-01.jpg",
    alt: "Young people gathered together at a community celebration",
    objectPosition: "46% 45%",
    tone: "lifted",
  },
  {
    src: "/images/anniversary/placeholder-03.jpg",
    alt: "African young adults smiling together as a community group",
    objectPosition: "12% 45%",
    tone: "standard",
  },
  {
    src: "/gallery/outreach2025.jpg",
    alt: "Brigade members and community partners during the 2025 outreach",
    objectPosition: "22% 44%",
    tone: "standard",
  },
  {
    src: "/images/anniversary/placeholder-04.jpg",
    alt: "Community members sharing a joyful moment together",
    objectPosition: "58% 40%",
    tone: "lifted",
  },
  {
    src: "/about/biblestud.jpeg",
    alt: "A young Brigade participant completing an activity",
    objectPosition: "50% 32%",
    tone: "lifted",
  },
  {
    src: "/images/hero.jpg",
    alt: "Boys' Brigade officers in uniform at All Saints Surulere",
    objectPosition: "30% 46%",
    tone: "standard",
  },
  {
    src: "/images/anniversary/placeholder-03.jpg",
    alt: "A group of African young adults gathered for a youth programme",
    objectPosition: "39% 45%",
    tone: "lifted",
  },
  {
    src: "/images/anniversary/placeholder-01.jpg",
    alt: "A smiling young person among members of her community",
    objectPosition: "70% 45%",
    tone: "standard",
  },
  {
    src: "/gallery/outreach2025.jpg",
    alt: "Brigade outreach volunteers standing together",
    objectPosition: "52% 46%",
    tone: "lifted",
  },
  {
    src: "/images/hero.jpg",
    alt: "Boys' and Girls' Brigade officers assembled together",
    objectPosition: "53% 45%",
    tone: "standard",
  },
  {
    src: "/images/anniversary/placeholder-03.jpg",
    alt: "Young African community members seated together and smiling",
    objectPosition: "68% 45%",
    tone: "standard",
  },
  {
    src: "/about/biblestud.jpeg",
    alt: "A child taking part in a Brigade learning activity",
    objectPosition: "48% 50%",
    tone: "lifted",
  },
  {
    src: "/images/anniversary/placeholder-04.jpg",
    alt: "African community members celebrating together outdoors",
    objectPosition: "72% 42%",
    tone: "standard",
  },
  {
    src: "/images/hero.jpg",
    alt: "Girls' Brigade officers in white uniform",
    objectPosition: "76% 43%",
    tone: "lifted",
  },
  {
    src: "/images/anniversary/placeholder-01.jpg",
    alt: "A community gathering with young people smiling together",
    objectPosition: "25% 48%",
    tone: "standard",
  },
  {
    src: "/gallery/outreach2025.jpg",
    alt: "Boys' Brigade officers at the 2025 community outreach",
    objectPosition: "88% 43%",
    tone: "standard",
  },
  {
    src: "/images/anniversary/placeholder-03.jpg",
    alt: "African youth programme participants posing as a group",
    objectPosition: "91% 45%",
    tone: "deep",
  },
];

export const anniversaryPhotos: AnniversaryPhoto[] = Array.from(
  { length: 48 },
  (_, index) => approvedPhotoCrops[(index * 7 + Math.floor(index / 8)) % approvedPhotoCrops.length],
);

export const anniversaryPhotoSources = Array.from(
  new Set(approvedPhotoCrops.map((photo) => photo.src)),
);
