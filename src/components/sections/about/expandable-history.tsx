"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

import type { CompanyPageData } from "../../../constants/companies";

export default function ExpandableHistory({
  history,
}: {
  history: CompanyPageData["history"];
}) {
  const [expanded, setExpanded] = useState(false);
  const [collapsing, setCollapsing] = useState(false);
  const contentId = useId();
  const historyContentRef = useRef<HTMLDivElement>(null);
  const readMoreButtonRef = useRef<HTMLButtonElement>(null);
  const collapseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const collapseFrameRef = useRef<number | null>(null);
  const hasMore = history.paragraphs.length > 2 || Boolean(history.milestones?.length);

  useEffect(() => {
    return () => {
      if (collapseTimerRef.current) clearTimeout(collapseTimerRef.current);
      if (collapseFrameRef.current) cancelAnimationFrame(collapseFrameRef.current);
    };
  }, []);

  function showLess() {
    if (collapsing || !historyContentRef.current) return;

    setCollapsing(true);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const historyPanel = historyContentRef.current.closest<HTMLElement>(
      "[data-history-panel]",
    );
    const scrollTarget = historyPanel ?? historyContentRef.current;
    const getTargetTop = () =>
      Math.max(0, window.scrollY + scrollTarget.getBoundingClientRect().top - 96);
    const safeTargetTop = getTargetTop();
    let finished = false;

    const finishCollapse = () => {
      if (finished) return;
      finished = true;

      if (collapseTimerRef.current) clearTimeout(collapseTimerRef.current);
      if (collapseFrameRef.current) cancelAnimationFrame(collapseFrameRef.current);
      collapseFrameRef.current = null;
      setExpanded(false);
      setCollapsing(false);
      requestAnimationFrame(() => {
        window.scrollTo({ top: getTargetTop(), behavior: "auto" });
        requestAnimationFrame(() => {
          window.scrollTo({ top: getTargetTop(), behavior: "auto" });
          readMoreButtonRef.current?.focus({ preventScroll: true });
        });
      });
    };

    window.scrollTo({
      top: safeTargetTop,
      behavior: reduceMotion ? "auto" : "smooth",
    });

    if (reduceMotion || Math.abs(window.scrollY - safeTargetTop) < 4) {
      finishCollapse();
      return;
    }

    const waitUntilHistoryIsInPlace = () => {
      if (Math.abs(window.scrollY - safeTargetTop) < 4) {
        finishCollapse();
        return;
      }

      collapseFrameRef.current = requestAnimationFrame(waitUntilHistoryIsInPlace);
    };

    collapseFrameRef.current = requestAnimationFrame(waitUntilHistoryIsInPlace);
    collapseTimerRef.current = setTimeout(finishCollapse, 1500);
  }

  return (
    <div ref={historyContentRef} data-testid="company-history-content">
      <div className="mt-5 space-y-4 text-base leading-8 text-muted">
        {history.paragraphs.slice(0, 2).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {!hasMore ? null : expanded ? (
        <>
          <div id={contentId} className="mt-5 space-y-4 text-base leading-8 text-muted">
            {history.paragraphs.slice(2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {history.milestones?.length ? (
              <ol className="mt-8 space-y-5 border-l-2 border-secondary/30 pl-5">
                {history.milestones.map((milestone) => (
                  <li key={`${milestone.year}-${milestone.title}`} className="relative">
                    <span className="absolute -left-[1.7rem] top-1.5 h-3 w-3 rounded-full border-2 border-secondary bg-card" />
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-secondary">
                      {milestone.year}
                    </p>
                    <h3 className="mt-1 font-bold text-heading">{milestone.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {milestone.description}
                    </p>
                  </li>
                ))}
              </ol>
            ) : null}
          </div>

          <button
            type="button"
            aria-expanded="true"
            aria-controls={contentId}
            disabled={collapsing}
            onClick={showLess}
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg border border-secondary/40 px-4 py-2 text-sm font-bold text-heading outline-none transition hover:border-secondary hover:text-secondary focus-visible:ring-2 focus-visible:ring-secondary disabled:cursor-wait disabled:opacity-70"
          >
            Show less
            <ChevronRight aria-hidden="true" className="h-4 w-4 rotate-90" />
          </button>
        </>
      ) : (
        <button
          ref={readMoreButtonRef}
          type="button"
          aria-expanded="false"
          aria-controls={contentId}
          onClick={() => setExpanded(true)}
          className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-secondary/40 px-4 py-2 text-sm font-bold text-heading outline-none transition hover:border-secondary hover:text-secondary focus-visible:ring-2 focus-visible:ring-secondary"
        >
          Read more
          <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
