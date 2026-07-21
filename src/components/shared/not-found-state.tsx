import Image from "next/image";
import Link from "next/link";

import Container from "../layout/container";

export default function NotFoundState() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden py-16 sm:py-20">
        <div className="not-found-dash-track not-found-dash-track-left" />
        <div className="not-found-dash-track not-found-dash-track-right" />

        <Container>
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative mx-auto w-full max-w-[560px]" aria-hidden="true">
              <Image
                src="/images/curveDotLine.png"
                alt=""
                width={340}
                height={200}
                className="not-found-curve-line not-found-curve-line-top absolute -right-20 -top-14 z-0 hidden w-72 object-contain opacity-80 sm:block"
              />

              <Image
                src="/images/curveDotLine.png"
                alt=""
                width={340}
                height={200}
                className="not-found-curve-line not-found-curve-line-bottom absolute -bottom-10 -left-16 z-0 hidden w-72 object-contain opacity-80 sm:block"
              />

              <div className="not-found-photo-frame relative z-10 overflow-hidden rounded-2xl border border-secondary/30 bg-card p-3 shadow-2xl shadow-black/10">
                <div className="absolute inset-3 rounded-xl border border-dashed border-white/70 dark:border-white/20" />

                <div className="relative aspect-[16/11] overflow-hidden rounded-xl bg-primary">
                  <Image
                    src="/images/not-found.jpg"
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="not-found-photo object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" />
                </div>
              </div>

              <span className="not-found-pop absolute -right-2 top-6 z-20 rounded-full bg-secondary px-5 py-2 text-sm font-black text-white shadow-lg shadow-secondary/25 sm:-right-4 sm:top-8">
                404
              </span>

              <span className="not-found-pop absolute bottom-2 left-8 z-20 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary shadow-lg dark:bg-card/90 dark:text-foreground sm:bottom-6">
                Route missing
              </span>

              <div className="not-found-step not-found-step-one" />
              <div className="not-found-step not-found-step-two" />
              <div className="not-found-step not-found-step-three" />
            </div>

            <div className="relative text-center lg:text-left">
              <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
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
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-primary"
                >
                  Go Home
                </Link>

                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-secondary hover:text-secondary"
                >
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
