import type { AnniversaryPhoto } from "./anniversary-intro.types";

const imageKitAnniversaryPath = (fileName: string) =>
  `https://ik.imagekit.io/Michie/tr:w-640,q-58,f-auto/brigade-oldies/${fileName}`;

const imageKitAnniversaryPhoto = (
  fileName: string,
  alt: string,
  tone: AnniversaryPhoto["tone"],
): AnniversaryPhoto => ({
  src: imageKitAnniversaryPath(fileName),
  alt,
  objectPosition: "50% 50%",
  tone,
});

const anniversaryPhotoPool: AnniversaryPhoto[] = [
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0061.jpg",
    "Brigade members gathered together for a special celebration",
    "standard",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0088.jpg",
    "Brigade members standing together at an anniversary gathering",
    "lifted",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0057.jpg",
    "Brigade members taking part in a community event",
    "standard",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0036.jpg",
    "Brigade members assembled for a special occasion",
    "deep",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0122.jpg",
    "Brigade members gathered outdoors",
    "standard",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0074.jpg",
    "Brigade members sharing a celebratory moment",
    "lifted",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0015.jpg",
    "Brigade members gathered for a group photograph",
    "standard",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0105.jpg",
    "Brigade members taking part in a special programme",
    "deep",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0110.jpg",
    "Brigade members standing together in uniform",
    "standard",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0084.jpg",
    "Brigade member captured during an anniversary activity",
    "lifted",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0103.jpg",
    "Brigade members gathered during a community event",
    "standard",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0051.jpg",
    "Brigade members celebrating together",
    "deep",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0014.jpg",
    "Brigade members assembled in formation",
    "standard",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0023.jpg",
    "Brigade members gathered for a shared occasion",
    "lifted",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0021.jpg",
    "Brigade members taking part in an outdoor gathering",
    "standard",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0031.jpg",
    "Brigade members gathered together",
    "deep",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0106.jpg",
    "Brigade members during a special celebration",
    "standard",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0104.jpg",
    "Brigade members participating in a community programme",
    "lifted",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0093.jpg",
    "Brigade members sharing a moment together",
    "standard",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0049.jpg",
    "Brigade members gathered for a group photograph",
    "deep",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0073.jpg",
    "Brigade members captured during an anniversary moment",
    "standard",
  ),
  imageKitAnniversaryPhoto(
    "IMG-20260930-WA0019.jpg",
    "Brigade members taking part in a special event",
    "lifted",
  ),
  // {
  //   src: "/images/hero.jpg",
  //   alt: "Officers and members of the Boys' and Girls' Brigade Surulere companies",
  //   objectPosition: "50% 50%",
  //   tone: "standard",
  // },
  // {
  //   src: "/gallery/outreach2025.jpg",
  //   alt: "Brigade members and community partners during the 2025 outreach",
  //   objectPosition: "50% 50%",
  //   tone: "lifted",
  // },
  // {
  //   src: "/about/biblestud.jpeg",
  //   alt: "A young Brigade participant completing an activity",
  //   objectPosition: "50% 50%",
  //   tone: "standard",
  // },
];

export const anniversaryPhotos: AnniversaryPhoto[] = Array.from(
  { length: 30 },
  (_, index) => anniversaryPhotoPool[(index * 7) % anniversaryPhotoPool.length],
);

export const anniversaryPhotoSources = Array.from(
  new Set(anniversaryPhotoPool.map((photo) => photo.src)),
);
