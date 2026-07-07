"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryCategories } from "../../../../data/gallery";
import Container from "../../layout/container";

// Adjust this class to increase or reduce the bottom spacing of this section.
const SECTION_BOTTOM_SPACE_CLASS = "pb-24 sm:pb-28 lg:pb-32";

const categoryCards = [
  {
    title: "Parade & Drill",
    count: "120+ Photos",
    slug: "parade",
    image: "/gallery/gallery1.png",
    description: "Discipline and Precision",
  },
  {
    title: "Medical Outreach",
    count: "80+ Photos",
    slug: "outreach",
    image: "/gallery/gallery1.png",
    description: "Service to Community",
  },
  {
    title: "Band & Orchestra",
    count: "65+ Photos",
    slug: "band",
    image: "/gallery/gallery1.png",
    description: "Music Ministry",
  },
  {
    title: "Enrolment Service",
    count: "110+ Photos",
    slug: "enrolment",
    image: "/gallery/gallery1.png",
    description: "New Beginnings",
  },
];

const seeAllPreviewImages = Object.values(galleryCategories)
  .flatMap((category) => [
    category.heroImage,
    ...category.images,
    ...category.years.flatMap((year) => year.images),
  ])
  .filter((image, index, images) => images.indexOf(image) === index)
  .slice(0, 3);

export default function GalleryCategories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const seeAllCardRef = useRef<HTMLAnchorElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [screenSize, setScreenSize] = useState<"sm" | "md" | "lg">("lg");
  const [isSeeAllVisible, setIsSeeAllVisible] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("sm");
      } else if (window.innerWidth < 768) {
        setScreenSize("md");
      } else {
        setScreenSize("lg");
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const seeAllCard = seeAllCardRef.current;

    if (!scrollContainer || !seeAllCard || !("IntersectionObserver" in window)) {
      setIsSeeAllVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSeeAllVisible(true);
          observer.disconnect();
        }
      },
      {
        root: scrollContainer,
        threshold: 0.45,
      }
    );

    observer.observe(seeAllCard);

    return () => observer.disconnect();
  }, []);

  const getScrollAmount = () => {
    switch (screenSize) {
      case "sm":
        return 276;
      case "md":
        return 304;
      default:
        return 344;
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = getScrollAmount();
    const newScrollPosition =
      scrollContainerRef.current.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    scrollContainerRef.current.scrollTo({
      left: newScrollPosition,
      behavior: "smooth",
    });

    setTimeout(() => {
      if (scrollContainerRef.current) {
        setCanScrollLeft(scrollContainerRef.current.scrollLeft > 0);
        setCanScrollRight(
          scrollContainerRef.current.scrollLeft <
            scrollContainerRef.current.scrollWidth -
              scrollContainerRef.current.clientWidth -
              10
        );
      }
    }, 100);
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    setCanScrollLeft(scrollContainerRef.current.scrollLeft > 0);
    setCanScrollRight(
      scrollContainerRef.current.scrollLeft <
        scrollContainerRef.current.scrollWidth -
          scrollContainerRef.current.clientWidth -
          10
    );
  };

  return (
    <section className={`pt-12 sm:pt-16 ${SECTION_BOTTOM_SPACE_CLASS} bg-white`}>
      <Container>
        <div className="mb-10 sm:mb-12">
          <span className="text-secondary uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold">
            Explore Albums
          </span>

          <div className="flex items-center justify-between mt-4">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Browse By Category
              </h2>
              <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
                Discover memorable moments through Brigade activities, outreach
                programmes, camps, music ministry and leadership events.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative w-full overflow-hidden">
        <div className="relative group">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-6 scroll-smooth"
            style={{
              scrollBehavior: "smooth",
              overflow: "hidden",
              scrollSnapType: "x mandatory",
              scrollPaddingLeft: "1rem",
            }}
          >
            <div className="flex-shrink-0 w-4 sm:w-6 md:w-8 lg:w-12" />

            {categoryCards.map((category) => (
              <Link
                key={category.slug}
                href={`/gallery/${category.slug}`}
                className="gallery-category-card shrink-0 w-65 sm:w-[280px] md:w-[300px] lg:w-[320px] group/card"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="gallery-card-wrapper overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl h-full flex flex-col bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="gallery-card-image-container relative w-full h-[180px] sm:h-[220px] md:h-[240px] lg:h-[260px] overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />

                    <div className="gallery-card-overlay absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition-colors duration-300" />

                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/95 backdrop-blur-sm rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold text-gray-900 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                      Featured
                    </div>
                  </div>

                  <div className="flex-1 p-3 sm:p-4 md:p-5 flex flex-col justify-between bg-white">
                    <div className="min-h-[60px] sm:min-h-[70px] flex flex-col justify-between mb-2">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 line-clamp-2 leading-tight mb-1">
                          {category.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 line-clamp-1 leading-snug">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-xs sm:text-sm font-semibold text-gray-700">
                        {category.count}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            <Link
              ref={seeAllCardRef}
              href="/gallery/all"
              className="gallery-category-card flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] group/card"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="gallery-card-wrapper overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl h-full min-h-[300px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[420px] flex flex-col items-center justify-center bg-white border border-gray-200 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="text-center px-4 sm:px-6">
                  <div className="relative mx-auto mb-5 h-24 w-36 sm:h-28 sm:w-40">
                    {seeAllPreviewImages.map((image, index) => {
                      const imageStyles = [
                        "left-8 -top-4 z-10 h-16 w-20 -rotate-6 sm:h-20 sm:w-24",
                        "-left-5 top-9 z-20 h-16 w-20 -rotate-7 sm:h-20 sm:w-24",
                        "right-2 top-6 z-30 h-16 w-20 rotate-6 sm:h-20 sm:w-24",
                      ];

                      return (
                        <span
                          key={`${image}-${index}`}
                          className={`absolute transition-transform duration-300 group-hover/card:-translate-y-1 ${imageStyles[index]}`}
                        >
                          <span
                            className={`gallery-see-all-preview relative block h-full w-full overflow-hidden rounded-lg border-4 border-white bg-gray-100 shadow-lg ${
                              isSeeAllVisible ? "is-visible" : ""
                            }`}
                            style={{ transitionDelay: `${index * 140}ms` }}
                          >
                            <Image
                              src={image}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="96px"
                            />
                          </span>
                        </span>
                      );
                    })}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                    See All
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Browse complete gallery
                  </p>
                </div>
              </div>
            </Link>

            <div className="flex-shrink-0 w-4 sm:w-6 md:w-8 lg:w-12" />
          </div>

          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`
              gallery-nav-button
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              z-30
              w-9
              h-9
              sm:w-10
              sm:h-10
              rounded-full
              bg-white
              shadow-lg
              flex
              items-center
              justify-center
              transition-all
              duration-300
              ml-2
              sm:ml-4
              ${
                canScrollLeft
                  ? "opacity-100 hover:bg-gray-100 hover:scale-110 cursor-pointer active:scale-95"
                  : "opacity-30 cursor-not-allowed"
              }
            `}
          >
            <ChevronLeft size={18} className="text-gray-900 sm:w-5 sm:h-5" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`
              gallery-nav-button
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              z-30
              w-9
              h-9
              sm:w-10
              sm:h-10
              rounded-full
              bg-white
              shadow-lg
              flex
              items-center
              justify-center
              transition-all
              duration-300
              mr-2
              sm:mr-4
              ${
                canScrollRight
                  ? "opacity-100 hover:bg-gray-100 hover:scale-110 cursor-pointer active:scale-95"
                  : "opacity-30 cursor-not-allowed"
              }
            `}
          >
            <ChevronRight size={18} className="text-gray-900 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
