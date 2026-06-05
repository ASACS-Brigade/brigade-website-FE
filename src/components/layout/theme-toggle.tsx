// "use client";

// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// export default function ThemeToggle() {
//   const [mounted, setMounted] = useState(false);

//   const { resolvedTheme, setTheme } =
//     useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return (
//       <div className="h-10 w-10" />
//     );
//   }

//   const dark =
//     resolvedTheme === "dark";

//   return (
//     <button
//       onClick={() =>
//         setTheme(
//           dark
//             ? "light"
//             : "dark"
//         )
//       }
//       className="
//       flex
//       h-10
//       w-10
//       items-center
//       justify-center
//       rounded-xl
//       border
//       hover:bg-slate-100
//       dark:hover:bg-slate-800
//       transition
//       "
//     >
//       {dark ? (
//         <Sun size={18} />
//       ) : (
//         <Moon size={18} />
//       )}
//     </button>
//   );
// }

"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10" />
    );
  }

  return (
    <button
      type="button"
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-lg
      border
      text-slate-900
      dark:text-white
      cursor-pointer
      "
    >
      {theme === "dark" ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
}