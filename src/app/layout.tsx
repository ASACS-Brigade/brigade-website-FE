import "../styles/globals.css";

import Navbar from "../components/navigation/navbar";
import Footer from "../components/layout/footer";
import { Providers } from "../components/layout/theme-provider";

import { Inter, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={`${inter.variable} ${montserrat.variable}`}>

        <Providers>

          <Navbar />

          {children}

          <Footer />

        </Providers>

      </body>

    </html>
  );
}