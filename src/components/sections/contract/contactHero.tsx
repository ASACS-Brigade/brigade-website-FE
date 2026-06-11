"use client";
import Link from "next/link";
import Container from "../../layout/container";
import FadeIn from "../../layout/fade-in";

export default function ContactHero() {
  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ background: "#173B61" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, #D4A017 0%, transparent 60%)",
        }}
      />

      <Container className="relative z-10">
        <FadeIn>
          <nav className="mb-4 flex items-center gap-2 text-xs text-white/50">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <span className="text-white/80">Contact</span>
          </nav>

          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            We'd Love to
            <br />
            Hear From You
          </h1>
          <p className="mt-3 text-white/70 text-sm sm:text-base max-w-md">
            Have questions or want to get involved? We're here for you.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}