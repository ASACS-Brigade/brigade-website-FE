import Link from "next/link";
import { ArrowLeft, Compass, Home, SearchX } from "lucide-react";

import Container from "../layout/container";

export default function NotFoundState() {
  return (
    <main className="bg-background text-foreground">
      <section className="min-h-[calc(100vh-5rem)] py-20">
        <Container>
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div
              className="
              relative
              mx-auto
              flex
              aspect-square
              w-full
              max-w-[360px]
              items-center
              justify-center
              rounded-3xl
              border
              border-border
              bg-card
              p-10
              shadow-xl
              shadow-black/5
              "
              aria-hidden="true"
            >
              <div className="absolute inset-6 rounded-3xl border border-dashed border-secondary/40" />
              <div className="absolute left-8 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15 text-secondary">
                <Compass size={28} />
              </div>
              <SearchX className="h-32 w-32 text-primary" strokeWidth={1.5} />
              <span className="absolute bottom-8 right-8 rounded-full bg-primary px-5 py-2 text-sm font-bold text-white">
                404
              </span>
            </div>

            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                Page Not Found
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-primary sm:text-5xl md:text-6xl">
                This page has marched off route.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                The link may be broken, moved, or no longer available. You can
                return home or browse the gallery to find your way back.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
                >
                  <Home size={18} />
                  Go Home
                </Link>

                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-secondary"
                >
                  <ArrowLeft size={18} />
                  Back To Gallery
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
