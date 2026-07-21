"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function CategoryBreadcrumb() {
  return (
    <Link
      href="/gallery"
      className="
      inline-flex
      items-center
      gap-2
      text-secondary
      font-medium
      hover:underline
      "
    >
      <ChevronLeft size={18} />
      Back To Gallery
    </Link>
  );
}