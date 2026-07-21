"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "../../layout/container";

type GalleryItem = {
  id: string;
  image: string;
  title: string;
  rotation: number;
  x: number;
  y: number;
  width: number;
  height: number;
  pinColor: string;
  priority?: boolean;
};

type CurveLine = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
};

const galleryItems: GalleryItem[] = [
  {
    id: "enrolment",
    image: "/gallery/gallery1.png",
    title: "Enrolment",
    rotation: -5,
    x: 8,
    y: 260,
    width: 400,
    height: 300,
    pinColor: "bg-fuchsia-500",
    priority: true,
  },
  {
    id: "practice",
    image: "/events/pic3.png",
    title: "Practice",
    rotation: 8,
    x: 520,
    y: 74,
    width: 150,
    height: 112,
    pinColor: "bg-pink-500",
  },
  {
    id: "parade",
    image: "/images/hero.jpeg",
    title: "Parade",
    rotation: -4,
    x: 700,
    y: 72,
    width: 270,
    height: 250,
    pinColor: "bg-fuchsia-500",
  },
  {
    id: "presentation",
    image: "/gallery/gallery1.png",
    title: "Presentation",
    rotation: 10,
    x: 1000,
    y: 90,
    width: 300,
    height: 330,
    pinColor: "bg-yellow-400",
  },
  {
    id: "outreach",
    image: "/events/pic1.png",
    title: "Outreach",
    rotation: 9,
    x: 460,
    y: 270,
    width: 178,
    height: 310,
    pinColor: "bg-fuchsia-500",
  },
  {
    id: "service",
    image: "/events/pic2.png",
    title: "Service",
    rotation: -4,
    x: 550,
    y: 708,
    width: 450,
    height: 290,
    pinColor: "bg-sky-500",
  },
  {
    id: "community",
    image: "/about/biblestud.jpeg",
    title: "Community",
    rotation: 8,
    x: 1100,
    y: 548,
    width: 205,
    height: 250,
    pinColor: "bg-sky-500",
  },
  {
    id: "together",
    image: "/gallery/gallery1.png",
    title: "Together",
    rotation: -7,
    x: 790,
    y: 438,
    width: 220,
    height: 170,
    pinColor: "bg-yellow-400",
  },
  {
    id: "harmony",
    image: "/events/pic3.png",
    title: "Harmony",
    rotation: 6,
    x: 246,
    y: 620,
    width: 240,
    height: 332,
    pinColor: "bg-sky-500",
  },
  {
    id: "legacy",
    image: "/about/william-A-Smith.jpg",
    title: "Legacy",
    rotation: 5,
    x: 1074,
    y: 876,
    width: 132,
    height: 146,
    pinColor: "bg-fuchsia-500",
  },
];

const curveLines: CurveLine[] = [
  {
    id: "enrolment-to-outreach",
    x: 350,
    y: 504,
    width: 350,
    height: 155,
    rotation: 26,
  },
  {
    id: "outreach-to-parade",
    x: 710,
    y: 305,
    width: 360,
    height: 155,
    rotation: -42,
  },
  {
    id: "service-to-community",
    x: 900,
    y: 590,
    width: 340,
    height: 150,
    rotation: 36,
  },
];

function GalleryPhotoFrame({
  item,
  hoveredId,
  setHoveredId,
  mobile = false,
}: {
  item: GalleryItem;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  mobile?: boolean;
}) {
  const isHovered = hoveredId === item.id;

  return (
    <div
      className={
        mobile
          ? "memory-photo-card group relative z-20 mx-auto aspect-[4/3] w-full max-w-[320px]"
          : "memory-photo-card group absolute z-20"
      }
      style={
        mobile
          ? { transform: `rotate(${item.rotation}deg)` }
          : {
              left: `${item.x}px`,
              top: `${item.y}px`,
              width: `${item.width}px`,
              height: `${item.height}px`,
              transform: `rotate(${item.rotation}deg)`,
            }
      }
      onMouseEnter={() => setHoveredId(item.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <div
        className={`relative h-full border border-dashed border-white/55 bg-white/5 p-2 shadow-2xl shadow-black/35 transition duration-300 ${
          isHovered ? "scale-[1.035] border-sky-400" : ""
        }`}
      >
        <span
          className={`absolute left-1/2 top-0 z-30 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-slate-950 ${item.pinColor}`}
        />

        <div className="relative h-full overflow-hidden border-[10px] border-white bg-slate-800">
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority={item.priority}
            sizes={
              mobile
                ? "(min-width: 640px) 320px, 86vw"
                : `${item.width}px`
            }
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div
            className={`absolute inset-0 flex items-end bg-black/45 p-3 transition duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-sm font-semibold text-white">{item.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArtGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      className="hng-memory-section relative w-full overflow-hidden py-14 sm:py-20 lg:py-0"
      style={{
        backgroundColor: "#070b18",
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.08) 2px, transparent 2px), radial-gradient(circle at 20% 20%, rgba(14,165,233,0.08), transparent 28%), radial-gradient(circle at 85% 10%, rgba(236,72,153,0.08), transparent 24%)",
        backgroundPosition: "0 0, center, center",
        backgroundSize: "38px 38px, cover, cover",
      }}
    >
      <Container>
        <div className="relative z-20 mx-auto mb-10 w-full max-w-[440px] lg:hidden">
          <Image
            src="/gallery/memories.svg"
            alt="Memories in Pictures"
            width={440}
            height={220}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        <div className="relative hidden h-[1180px] w-full lg:block">
          <Image
            src="/gallery/memories.svg"
            alt="Memories in Pictures"
            width={440}
            height={220}
            className="absolute left-[88px] top-[40px] z-20 h-auto w-[400px] object-contain"
            priority
          />

          {curveLines.map((line) => (
            <Image
              key={line.id}
              src="/images/curveDotLine.png"
              alt=""
              width={454}
              height={184}
              className="absolute z-10 object-contain opacity-85"
              style={{
                left: `${line.x}px`,
                top: `${line.y}px`,
                width: `${line.width}px`,
                height: `${line.height}px`,
                transform: `rotate(${line.rotation}deg)`,
              }}
            />
          ))}

          {galleryItems.map((item) => (
            <GalleryPhotoFrame
              key={item.id}
              item={item}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
            />
          ))}

          <Image
            src="/gallery/iloveit.svg"
            alt="I love it"
            width={280}
            height={140}
            className="absolute z-20 h-auto w-40 object-contain"
            style={{
              left: "910px",
              top: "990px",
            }}
          />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:hidden">
          {galleryItems.map((item) => (
            <GalleryPhotoFrame
              key={item.id}
              item={item}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
              mobile
            />
          ))}

          <Image
            src="/gallery/iloveit.svg"
            alt="I love it"
            width={280}
            height={140}
            className="mx-auto h-auto w-48 object-contain sm:col-span-2"
          />
        </div>
      </Container>
    </section>
  );
}
