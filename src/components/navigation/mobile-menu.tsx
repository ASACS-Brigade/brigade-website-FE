"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Articles",
    href: "/articles",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div
      className={`
      fixed
      inset-0
      z-[9999]
      transition-all
      duration-300
      ${
        open
          ? "pointer-events-auto bg-black/50"
          : "pointer-events-none bg-transparent"
      }
      `}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
        absolute
        top-0
        right-0
        h-screen
        w-[85%]
        max-w-[350px]
        bg-white
        dark:bg-slate-950
        shadow-2xl
        transition-transform
        duration-300
        ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }
        `}
      >
        <div className="flex items-center justify-between border-b p-5">
          <h2
            className="
            text-lg
            font-bold
            text-[#0E2A47]
            dark:text-white
            "
          >
            Menu
          </h2>

          <button
            title="Close menu"
            aria-label="Close menu"
            onClick={onClose}
            className="
            rounded-lg
            p-2
            hover:bg-gray-100
            dark:hover:bg-slate-800
            "
          >
            <X className="dark:text-white" />
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className="flex flex-col p-6"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="
              py-4
              text-lg
              font-medium
              text-gray-700
              dark:text-gray-200
              border-b
              border-gray-100
              dark:border-slate-800
              hover:text-[#D4A437]
              transition-colors
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="p-6">
          <div
            className="
            rounded-xl
            bg-[#D4A437]
            p-4
            text-center
            text-white
            font-semibold
            "
          >
            BGB Surulere Chapter
          </div>
        </div>
      </div>
    </div>
  );
}


// "use client";

// import Link from "next/link";
// import { X } from "lucide-react";

// interface MobileMenuProps {
//   open: boolean;
//   onClose: () => void;
// }

// const links = [
//   {
//     label: "Home",
//     href: "/",
//   },
//   {
//     label: "About",
//     href: "/about",
//   },
//   {
//     label: "Articles",
//     href: "/articles",
//   },
//   {
//     label: "Events",
//     href: "/events",
//   },
//   {
//     label: "Gallery",
//     href: "/gallery",
//   },
//   {
//     label: "Contact",
//     href: "/contact",
//   },
// ];

// export default function MobileMenu({
//   open,
//   onClose,
// }: MobileMenuProps) {
//   if (!open) return null;

//   return (
//     <div
//       className="
//       fixed
//       inset-0
//       z-[100]
//       bg-black/50
//       "
//     >
//       <div
//         className="
//         ml-auto
//         h-full
//         w-[300px]
//         bg-white
//         p-6
//         "
//       >
//         <div className="flex justify-end">

//           <button title="Close menu" onClick={onClose}>
//             <X />
//           </button>

//         </div>

//         <nav className="mt-10 flex flex-col gap-6">

//           {links.map((link) => (
//             <Link
//               key={link.label}
//               href={link.href}
//               onClick={onClose}
//               className="text-lg font-medium"
//             >
//               {link.label}
//             </Link>
//           ))}

//         </nav>

//       </div>
//     </div>
//   );
// }
