"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Container from "../../layout/container";

const categories = [
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
    title: "Awards & Promotions",
    count: "40+ Photos",
    slug: "awards",
    image: "/gallery/gallery1.png",
    description: "Excellence Recognized",
  },
  {
    title: "Camp Meetings",
    count: "90+ Photos",
    slug: "camp",
    image: "/gallery/gallery1.png",
    description: "Fellowship & Growth",
  },
  {
    title: "Enrolment Service",
    count: "110+ Photos",
    slug: "enrolment",
    image: "/gallery/gallery1.png",
    description: "New Beginnings",
  },
  {
    title: "Leadership Events",
    count: "75+ Photos",
    slug: "leadership",
    image: "/gallery/gallery1.png",
    description: "Inspiring Tomorrow's Leaders",
  },
];

export default function GalleryCategories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [screenSize, setScreenSize] = useState<"sm" | "md" | "lg">("lg");

  // Detect screen size on mount and window resize
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

  const toggleFavorite = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    e.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(slug)) {
      newFavorites.delete(slug);
    } else {
      newFavorites.add(slug);
    }
    setFavorites(newFavorites);
  };

  const getScrollAmount = () => {
    // Card width + gap
    // sm: 260px + 16px (gap-4) = 276px
    // md: 280px + 24px (gap-6) = 304px
    // lg: 320px + 24px (gap-6) = 344px
    switch (screenSize) {
      case "sm":
        return 276; // One card on mobile
      case "md":
        return 304; // One card on tablet
      default:
        return 344; // One card on desktop
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

    // Update button states
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
    <section className="py-12 sm:py-16 bg-white">
      {/* Header - Inside Container */}
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

      {/* Carousel Wrapper - Full Width with Overflow Hidden */}
      <div className="relative w-full overflow-hidden">
        {/* Carousel Container */}
        <div className="relative group">
          {/* Scroll Container with Snap */}
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
            {/* Left Padding */}
            <div className="flex-shrink-0 w-4 sm:w-6 md:w-8 lg:w-12" />

            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/gallery/${category.slug}`}
                className="gallery-category-card shrink-0 w-65 sm:w-[280px] md:w-[300px] lg:w-[320px] group/card"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Card Container */}
                <div className="gallery-card-wrapper overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl h-full flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Image Container */}
                  <div className="gallery-card-image-container relative w-full h-[180px] sm:h-[220px] md:h-[240px] lg:h-[260px] overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />

                    {/* Overlay */}
                    <div className="gallery-card-overlay absolute inset-0 bg-black/0 group-hover/card:bg-black/20 transition-colors duration-300" />

                    {/* Favorite Button */}
                    <button
                      type="button"
                      onClick={(e) => toggleFavorite(e, category.slug)}
                      aria-label={
                        favorites.has(category.slug)
                          ? `Remove ${category.title} from favorites`
                          : `Add ${category.title} to favorites`
                      }
                      className="gallery-favorite-btn absolute top-2 sm:top-3 right-2 sm:right-3 w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-300 hover:bg-white active:scale-95"
                    >
                      <Heart
                        size={18}
                        className={
                          favorites.has(category.slug)
                            ? "fill-rose-500 text-rose-500"
                            : "text-gray-900"
                        }
                      />
                    </button>

                    {/* Featured Badge */}
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/95 backdrop-blur-sm rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-semibold text-gray-900 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                      Featured
                    </div>
                  </div>

                  {/* Card Info - Improved spacing */}
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

            {/* See All Card */}
            <Link
              href="/gallery"
              className="gallery-category-card flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] group/card"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="gallery-card-wrapper overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="text-center px-4 sm:px-6">
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 opacity-60 group-hover/card:opacity-100 transition-opacity">
                    →
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

            {/* Right Padding */}
            <div className="flex-shrink-0 w-4 sm:w-6 md:w-8 lg:w-12" />
          </div>

          {/* Left Arrow - Overlay */}
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

          {/* Right Arrow - Overlay */}
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