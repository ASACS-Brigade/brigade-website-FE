"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "../../layout/fade-in";

// Dates that have events — set these from your CMS / data source
const EVENT_DATES = [6, 15, 20, 25, 28];

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function EventCalendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  function prev() {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  }
  function next() {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  }

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <FadeIn>
      <div className="rounded-xl border border-border overflow-hidden shadow-sm">
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ background: "#173B61" }}
        >
          <button
            onClick={prev}
            className="text-white/70 hover:text-white transition p-1 rounded"
            aria-label="Previous month"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-sm font-semibold text-white">
            {MONTHS[month]} {year}
          </span>
          <button
            onClick={next}
            className="text-white/70 hover:text-white transition p-1 rounded"
            aria-label="Next month"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 bg-primary/5 border-b border-border">
          {DAYS.map(d => (
            <div key={d} className="text-center text-[11px] font-medium text-muted py-2">
              {d}
            </div>
          ))}
        </div>

        {/* Cells */}
        <div className="grid grid-cols-7 bg-background p-2 gap-0.5">
          {cells.map((day, idx) => {
            if (day === null) return <div key={`empty-${idx}`} />;
            const isToday =
              day === today.getDate() &&
              month === today.getMonth() &&
              year === today.getFullYear();
            const hasEvent = EVENT_DATES.includes(day);

            return (
              <div
                key={day}
                className={`
                  relative flex items-center justify-center text-[12px] h-7 w-full rounded
                  ${isToday
                    ? "font-bold text-white"
                    : hasEvent
                    ? "font-medium text-primary cursor-pointer hover:bg-primary/5"
                    : "text-muted"}
                `}
                style={isToday ? { background: "#173B61" } : undefined}
              >
                {day}
                {hasEvent && !isToday && (
                  <span
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "#D4A017" }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </FadeIn>
  );
}