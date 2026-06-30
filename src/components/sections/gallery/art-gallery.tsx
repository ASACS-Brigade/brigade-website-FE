"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import Container from "../../layout/container";

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  rotation: number;
  position?: {
    top: string;
    left: string;
  };
  size: "sm" | "md" | "lg" | "xl";
  width: number;
  height: number;
}

const galleryItems: GalleryItem[] = [
  // COLUMN 1 (Left Area - Positioned inside the left block)
  {
    id: "1",
    image: "/gallery/gallery1.png",
    title: "Enrolment",
    rotation: -5,
    position: { top: "25%", left: "8%" },
    size: "xl",
    width: 310,
    height: 320,
  },
  {
    id: "7",
    image: "/gallery/outreach.jpg",
    title: "Service",
    rotation: 13,
    position: { top: "63%", left: "33%" },
    size: "md",
    width: 210,
    height: 300,
  },

  // COLUMN 2 (Center Area - Spread out to prevent overlaps)
  {
    id: "2",
    image: "/about/biblestud.jpeg",
    title: "Parade Night",
    rotation: 7,
    position: { top: "-2%", left: "35%" },
    size: "md",
    width: 130,
    height: 100,
  },
  {
    id: "6",
    image: "/gallery/parade.jpg",
    title: "Excellence",
    rotation: 10,
    position: { top: "18%", left: "34%" },
    size: "xl",
    width: 160,
    height: 300,
  },
  {
    id: "9",
    image: "/gallery/enrolment.jpg",
    title: "Together",
    rotation: -5,
    position: { top: "55%", left: "38%" },
    size: "sm",
    width: 450,
    height: 300,
  },

  // COLUMN 3 (Right Area)
  {
    id: "3",
    image: "/gallery/outreach.jpg",
    title: "Community",
    rotation: -6,
    position: { top: "-5%", left: "51%" },
    size: "lg",
    width: 250,
    height: 240,
  },
  {
    id: "4",
    image: "/gallery/gallery1.png",
    title: "Orchestra",
    rotation: 10,
    position: { top: "-5%", left: "77%" },
    size: "md",
    width: 300,
    height: 320,
  },
  {
    id: "5",
    image: "/gallery/enrolment.jpg",
    title: "Moment",
    rotation: 9,
    position: { top: "47%", left: "82%" },
    size: "sm",
    width: 200,
    height: 300,
  },
  {
    id: "8",
    image: "/gallery/orchestra.jpg",
    title: "Harmony",
    rotation: 6,
    position: { top: "90%", left: "40%" },
    size: "sm",
    width: 100,
    height: 100,
  },
  {
    id: "10",
    image: "/gallery/parade.jpg",
    title: "Legacy",
    rotation: 5,
    position: { top: "80%", left: "88%" },
    size: "sm",
    width: 100,
    height: 120,
  },
];

export default function ArtGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // We find elements specifically mapped to the left column to render them inside the left block
  const pic1 = galleryItems.find((item) => item.id === "1");
  const pic7 = galleryItems.find((item) => item.id === "7");
  const remainingPics = galleryItems.filter(
    (item) => item.id !== "1" && item.id !== "7",
  );

  return (
    <section className="relative w-full min-h-screen bg-slate-950 py-8 md:py-28 overflow-hidden">
      {/* Mobile Title Block */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-8 md:mb-12 lg:hidden">
        <div className="mb-4">
          <h2 className="text-4xl md:text-5xl italic font-light text-white mb-2">
            Memories in
          </h2>
          <div className="flex items-center gap-3">
            <h2 className="text-4xl md:text-5xl italic font-light text-white">
              Pictures...
            </h2>
            <div className="w-20 h-1 border-b-2 border-cyan-500"></div>
          </div>
        </div>
      </div>

      <Container>
        {/* Desktop Scattered Gallery */}
        <div
          className="hidden lg:block relative w-full h-[1000px]"
          ref={containerRef}
        >
        
          <div className="absolute left-0 top-0 w-1/3 h-full flex flex-col">
            {/* Title */}
            <div className="absolute top-0 left-0 w-100 h-45 z-50 pointer-events-none">
            <Image
              src="/gallery/memories.svg"
              alt="gallery art section"
              width={320}
              height={160}
              className="w-full h-full object-contain"
              priority
            />
          </div>


            {/* Picture 1 (xl) Placement */}
            {pic1 && (
              <div
                className="absolute transition-all duration-300 z-20"
                style={{
                  top: pic1.position?.top,
                  left: pic1.position?.left,
                }}
                onMouseEnter={() => setHoveredId(pic1.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`
                  relative border-1 border-dashed border-gray-400 bg-white/5 backdrop-blur-sm
                  overflow-hidden cursor-pointer
                  transition-all duration-300
                  ${
                    hoveredId === pic1.id
                      ? "shadow-2xl shadow-cyan-500/40 border-cyan-400 scale-105"
                      : "shadow-lg"
                  }
                `}
                  style={{
                    width: `${pic1.width}px`,
                    height: `${pic1.height}px`,
                    padding: "8px",
                    transform: `rotate(${pic1.rotation}deg)`,
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden bg-gray-800 border-8 border-white">
                    <Image
                      src={pic1.image}
                      alt={pic1.title}
                      fill
                      className="object-cover"
                      sizes={`${pic1.width}px`}
                      priority
                    />
                    {hoveredId === pic1.id && (
                      <div className="absolute inset-0 bg-black/50 flex items-end p-3">
                        <p className="text-white text-sm font-medium">
                          {pic1.title}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-pink-500 border-3 border-slate-950 z-30"></div>
                  <div className="absolute -bottom-4 -left-4 w-5 h-5 rounded-full bg-cyan-400 border-3 border-slate-950 z-30"></div>
                </div>
              </div>
            )}

                {/* Curvy Dot Line connecting Enrolment and Orchestra */}
          <div
            className="absolute pointer-events-none "
            style={{
              top: "48%",
              left: "10%",
              width: "350px",
              height: "300px",
              transform: "rotate(87deg)",
                transformOrigin: "center right",
            }}
          >
            <Image
              src="/images/curveDotLine.png"
              alt="connecting line"
              width={500}
              height={300}
              className="w-full h-full object-contain"
              priority
            />
          </div>

            {/* Picture 7 (md) Placement — Directly under Picture 1 */}
            {pic7 && (
              <div
                className="absolute transition-all duration-300 z-20"
                style={{
                  top: pic7.position?.top,
                  left: pic7.position?.left,
                }}
                onMouseEnter={() => setHoveredId(pic7.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className={`
                  relative border-4 border-dashed border-gray-400 bg-white/5 backdrop-blur-sm
                  overflow-hidden cursor-pointer
                  transition-all duration-300
                  ${
                    hoveredId === pic7.id
                      ? "shadow-2xl shadow-cyan-500/40 border-cyan-400 scale-105"
                      : "shadow-lg"
                  }
                `}
                  style={{
                    width: `${pic7.width}px`,
                    height: `${pic7.height}px`,
                    padding: "8px",
                    transform: `rotate(${pic7.rotation}deg)`,
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden bg-gray-800">
                    <Image
                      src={pic7.image}
                      alt={pic7.title}
                      fill
                      className="object-cover"
                      sizes={`${pic7.width}px`}
                    />
                    {hoveredId === pic7.id && (
                      <div className="absolute inset-0 bg-black/50 flex items-end p-3">
                        <p className="text-white text-sm font-medium">
                          {pic7.title}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-pink-500 border-3 border-slate-950 z-30"></div>
                  <div className="absolute -bottom-4 -left-4 w-5 h-5 rounded-full bg-cyan-400 border-3 border-slate-950 z-30"></div>
                </div>
              </div>
            )}
          </div>

                  {/* Curvy Dot Line connecting Enrolment and Orchestra */}
          <div
            className="absolute pointer-events-none "
            style={{
              top: "50%",
              left: "1%",
              width: "350px",
              height: "300px",
              transform: "rotate(160deg)",
              
            }}
          >
            <Image
              src="/images/curveDotLine.png"
              alt="connecting line"
              width={500}
              height={300}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Right Side Map: Renders remaining scattered image frames (2-6, 8-10) */}
          {remainingPics.map((item) => (
            <div
              key={item.id}
              className="absolute transition-all duration-300 z-20"
              style={{
                top: item.position?.top,
                left: item.position?.left,
              }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`
                relative border-1 border-dashed border-gray-400 bg-white/5 backdrop-blur-sm
                overflow-hidden cursor-pointer
                transition-all duration-300
                ${
                  hoveredId === item.id
                    ? "shadow-2xl shadow-cyan-500/40 border-cyan-400 scale-105"
                    : "shadow-lg"
                }
              `}
                style={{
                  width: `${item.width}px`,
                  height: `${item.height}px`,
                  padding: "8px",
                  transform: `rotate(${item.rotation}deg)`,
                }}
              >
                <div className="relative w-full h-full overflow-hidden bg-gray-800 border-8 border-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes={`${item.width}px`}
                  />
                  {hoveredId === item.id && (
                    <div className="absolute inset-0 bg-black/50 flex items-end p-3">
                      <p className="text-white text-sm font-medium">
                        {item.title}
                      </p>
                    </div>
                  )}
                </div>
                <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-pink-500 border-3 border-slate-950 z-30"></div>
                <div className="absolute -bottom-4 -left-4 w-5 h-5 rounded-full bg-cyan-400 border-3 border-slate-950 z-30"></div>
              </div>
            </div>
          ))}

          {/* Curvy Dot Line connecting Enrolment and Orchestra */}
          <div
            className="absolute pointer-events-none "
            style={{
              top: "8%",
              left: "55%",
              width: "350px",
              height: "300px",
            }}
          >
            <Image
              src="/images/curveDotLine.png"
              alt="connecting line"
              width={500}
              height={300}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Decorative Love It Text Elements */}
          <div
            className="absolute z-20 pointer-events-none"
            style={{ top: "93%", left: "84%" }}
          >
           <Image 
              src="/gallery/iloveit.svg"
              alt="gallery art section"
              width={320}
              height={160}
              className="w-full h-full object-contain"
              priority
           />
          </div>

          {/* Aesthetic Lower Bound Ring Indicator */}
          <div className="absolute bottom-8 left-8 w-6 h-6 rounded-full border-2 border-pink-500 z-10"></div>
        </div>
      </Container>

      {/* Mobile & Tablet Grid Gallery */}
      <div className="lg:hidden px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {galleryItems.map((item, index) => {
              const sizes = ["xl", "lg", "md", "sm"] as const;
              const sizeIndex = index % sizes.length;
              const sizeMap: Record<
                (typeof sizes)[number],
                { w: number; h: number }
              > = {
                xl: { w: 280, h: 200 },
                lg: { w: 240, h: 180 },
                md: { w: 200, h: 150 },
                sm: { w: 160, h: 130 },
              };
              const dimensions = sizeMap[sizes[sizeIndex]];

              return (
                <div
                  key={item.id}
                  className="flex justify-center"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div
                    className={`
                      relative border-3 md:border-4 border-dashed border-gray-400 bg-white/5 backdrop-blur-sm
                      overflow-hidden cursor-pointer
                      transition-all duration-300
                      ${
                        hoveredId === item.id
                          ? "shadow-xl shadow-cyan-500/40 border-cyan-400"
                          : "shadow-md"
                      }
                    `}
                    style={{
                      width: `${dimensions.w}px`,
                      height: `${dimensions.h}px`,
                      padding: "6px",
                      transform: `rotate(${item.rotation}deg)`,
                    }}
                  >
                    <div className="relative w-full h-full overflow-hidden bg-gray-800">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes={`${dimensions.w}px`}
                        priority={item.id === "1"}
                      />
                      {hoveredId === item.id && (
                        <div className="absolute inset-0 bg-black/50 flex items-end p-2">
                          <p className="text-white text-xs md:text-sm font-medium">
                            {item.title}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-pink-500 border-2 border-slate-950 z-30"></div>
                    <div className="absolute -bottom-3 -left-3 w-3 h-3 rounded-full bg-cyan-400 border-2 border-slate-950 z-30"></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex items-center justify-between px-4">
           
           <Image 
              src="/gallery/iloveit.svg"
              alt="gallery art section"
              width={320}
              height={160}
              className="w-full h-full object-contain"
              priority
           />
          
          </div>
        </div>
      </div>
    </section>
  );
}
