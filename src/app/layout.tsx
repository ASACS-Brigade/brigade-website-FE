import "../styles/globals.css";

import type { Metadata } from "next"; 
import Navbar from "../components/navigation/navbar";
import Footer from "../components/layout/footer";
import { Providers } from "../components/layout/theme-provider";
import ImageProtection from "../components/shared/image-protection";
import ScrollToTop from "../components/shared/scroll-to-top";
import AnniversaryIntro from "../components/anniversary-intro/AnniversaryIntro";

export const metadata: Metadata = {
  title:
    "5th & 9th Surulere Companies | Boys & Girls Brigade Surulere, Lagos Nigeria",

  description:
    "Official website of the 5th & 9th Surulere Companies of The Boys' Brigade Nigeria and Girls' Brigade Nigeria, All Saints Anglican Church Surulere, Lagos. Building faith, leadership, discipline and service through Christian youth development.",

  keywords: [
    "Boys Brigade Surulere",
    "Girls Brigade Surulere",
    "Boys Brigade Lagos",
    "Girls Brigade Lagos",
    "Boys Brigade Nigeria",
    "Girls Brigade Nigeria",
    "5th Surulere Company",
    "9th Surulere Company",
    "Boys and Girls Brigade",
    "Christian youth organization Nigeria",
    "All Saints Anglican Church Surulere",
    "Brigade Lagos",
    "Youth leadership Nigeria",
    "Brigade activities Surulere",
  ],

  authors: [
    {
      name: "Boys & Girls Brigade Surulere",
    },
  ],

  creator:
    "Boys & Girls Brigade Surulere",

  publisher:
    "Boys & Girls Brigade Surulere",

  metadataBase: new URL(
    "https://bgbsurulere.org"
  ),

  openGraph: {
    title:
      "5th & 9th Surulere Companies | Boys & Girls Brigade Surulere",

    description:
      "Faith. Leadership. Service.",

    url:
      "https://bgbsurulere.org",

    siteName:
      "Boys & Girls Brigade Surulere",

    locale: "en_NG",

    type: "website",

    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Boys and Girls Brigade Surulere",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Boys & Girls Brigade Surulere",

    description:
      "Building Faith, Leadership and Service.",

    images: [
      "/images/hero.jpg",
    ],
  },

  icons: {
    icon: "/favicon.png",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body>

        <Providers>

          <AnniversaryIntro />

          <Navbar />

          <ImageProtection />

          {children}

          <ScrollToTop />

          <Footer />

        </Providers>

      </body>

    </html>
  );
}
