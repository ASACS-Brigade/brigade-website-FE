"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  X,
} from "lucide-react";
import {
  BrigadeEvent,
  eventDate,
  eventDay,
  eventFullDate,
  eventMonth,
  eventsForDate,
  eventsForMonth,
} from "../../../constants/events";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type CalendarModalProps = {
  events: BrigadeEvent[];
  open: boolean;
  onClose: () => void;
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function dateId(year: number, month: number, day: number) {
  const mm = String(month + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return `${year}-${mm}-${dd}`;
}

export default function CalendarModal({
  events,
  open,
  onClose,
}: CalendarModalProps) {
  const firstEventDate = events[0] ? eventDate(events[0]) : new Date();
  const [year, setYear] = useState(firstEventDate.getFullYear());
  const [month, setMonth] = useState(firstEventDate.getMonth());
  const [selectedDate, setSelectedDate] = useState(events[0]?.date ?? null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose, open]);

  const monthlyEvents = useMemo(
    () => eventsForMonth(events, year, month),
    [events, month, year]
  );
  const selectedEvents = eventsForDate(events, selectedDate);
  const eventsByDate = monthlyEvents.reduce<Record<string, BrigadeEvent[]>>(
    (acc, event) => {
      acc[event.date] = [...(acc[event.date] ?? []), event];
      return acc;
    },
    {}
  );

  const cells: (number | null)[] = [
    ...Array(getFirstDayOfMonth(year, month)).fill(null),
    ...Array.from({ length: getDaysInMonth(year, month) }, (_, i) => i + 1),
  ];
  const calendarCells: (number | null)[] = [
    ...cells,
    ...Array(42 - cells.length).fill(null),
  ];

  useEffect(() => {
    if (!open) return;

    const selectedInCurrentMonth =
      selectedDate &&
      monthlyEvents.some((event) => event.date === selectedDate);

    if (!selectedInCurrentMonth) {
      setSelectedDate(monthlyEvents[0]?.date ?? null);
    }
  }, [month, monthlyEvents, open, selectedDate, year]);

  if (!open) {
    return null;
  }

  function prev() {
    if (month === 0) {
      setMonth(11);
      setYear((currentYear) => currentYear - 1);
      return;
    }

    setMonth((currentMonth) => currentMonth - 1);
  }

  function next() {
    if (month === 11) {
      setMonth(0);
      setYear((currentYear) => currentYear + 1);
      return;
    }

    setMonth((currentMonth) => currentMonth + 1);
  }

  return (
    <div
      className="fixed inset-0 z-[1000] grid place-items-center overflow-hidden bg-primary/80 p-3 backdrop-blur-sm sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-calendar-modal-title"
    >
      <button
        type="button"
        className="fixed inset-0 cursor-default"
        aria-label="Close calendar"
        onClick={onClose}
      />

      <div className="relative grid h-[calc(100dvh-1.5rem)] max-h-[860px] w-full max-w-7xl grid-rows-[minmax(0,1fr)_minmax(180px,36dvh)] overflow-hidden rounded-lg bg-background shadow-2xl ring-1 ring-white/15 sm:h-[calc(100dvh-2.5rem)] lg:grid-cols-[minmax(0,1fr)_360px] lg:grid-rows-none">
        <div className="flex min-h-0 flex-col overflow-y-auto">
          <header className="flex flex-shrink-0 items-start justify-between gap-3 border-b border-border bg-card px-4 py-3 sm:items-center sm:px-5 sm:py-4">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                <CalendarDays size={15} />
                <span className="hidden sm:inline">Full Event Calendar</span>
                <span className="sm:hidden">Calendar</span>
              </span>
              <h2
                id="event-calendar-modal-title"
                className="mt-1 truncate text-2xl font-bold text-primary sm:text-3xl"
              >
                {MONTHS[month]} {year}
              </h2>
            </div>

            <div className="flex flex-shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-primary transition hover:border-secondary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary sm:h-10 sm:w-10"
                aria-label="Previous month"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={next}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-primary transition hover:border-secondary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary sm:h-10 sm:w-10"
                aria-label="Next month"
              >
                <ChevronRight size={18} />
              </button>

              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white transition hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary sm:h-10 sm:w-10"
                aria-label="Close calendar"
              >
                <X size={18} />
              </button>
            </div>
          </header>

          <div className="grid flex-shrink-0 grid-cols-7 border-b border-border bg-primary/5">
            {DAYS.map((day) => (
              <div
                key={day}
                className="px-1 py-2 text-center text-[10px] font-bold uppercase tracking-wider text-muted sm:px-2 sm:py-3 sm:text-xs"
              >
                <span className="hidden sm:inline">{day}</span>
                <span className="sm:hidden">{day.slice(0, 1)}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-px bg-border [grid-template-rows:repeat(6,minmax(104px,1fr))] sm:[grid-template-rows:repeat(6,minmax(118px,1fr))]">
            {calendarCells.map((day, index) => {
              if (day === null) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="min-h-0 bg-background/60"
                  />
                );
              }

              const currentDateId = dateId(year, month, day);
              const dayEvents = eventsByDate[currentDateId] ?? [];
              const isSelected = selectedDate === currentDateId;
              const today = new Date();
              const isToday =
                day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear();

              return (
                <div
                  key={currentDateId}
                  className={[
                    "flex min-h-[104px] min-w-0 flex-col overflow-hidden bg-card p-1 transition sm:min-h-[118px] sm:p-2",
                    isSelected ? "ring-2 ring-inset ring-secondary" : "",
                    isToday ? "bg-secondary/10" : "",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDate(currentDateId)}
                    className={[
                      "mb-1 inline-flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold transition focus:outline-none focus:ring-2 focus:ring-secondary sm:mb-2 sm:h-8 sm:w-8 sm:rounded-lg sm:text-sm",
                      dayEvents.length > 0
                        ? "bg-secondary/15 text-primary hover:bg-secondary hover:text-white"
                        : "text-muted hover:bg-primary/5",
                      isToday ? "ring-2 ring-secondary ring-offset-1 ring-offset-card" : "",
                      isSelected ? "bg-primary text-white" : "",
                    ].join(" ")}
                  >
                    {day}
                  </button>

                  <div className="min-h-0 flex-1 space-y-1 overflow-y-auto pr-0.5">
                    {dayEvents.slice(0, 3).map((event) => (
                      <Link
                        key={event.id}
                        href={event.href}
                        className="block min-w-0 rounded-md bg-primary/10 px-1.5 py-1 text-[9px] font-semibold leading-tight text-primary transition hover:bg-secondary hover:text-white sm:px-2 sm:text-[10px]"
                        onClick={onClose}
                        title={event.title}
                      >
                        <span className="block truncate sm:line-clamp-2 sm:whitespace-normal">
                          {event.title}
                        </span>
                      </Link>
                    ))}

                    {dayEvents.length > 3 && (
                      <span className="block px-1.5 text-[10px] font-semibold text-muted sm:px-2 sm:text-[11px]">
                        +{dayEvents.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="min-h-0 overflow-y-auto border-t border-border bg-card p-4 sm:p-5 lg:border-l lg:border-t-0">
          <h3 className="text-lg font-bold text-primary">
            {selectedEvents.length > 0
              ? eventFullDate(selectedEvents[0])
              : "Select A Date"}
          </h3>
          <p className="mt-1 text-sm text-muted">
            {selectedEvents.length > 0
              ? `${selectedEvents.length} event${
                  selectedEvents.length === 1 ? "" : "s"
                } scheduled`
              : "Choose a calendar date to see the events planned for that day."}
          </p>

          <div className="mt-5 space-y-4">
            {(selectedEvents.length > 0 ? selectedEvents : monthlyEvents).map(
              (event) => (
                <Link
                  key={event.id}
                  href={event.href}
                  onClick={onClose}
                  className="group block rounded-lg border border-border bg-background p-4 transition hover:-translate-y-0.5 hover:border-secondary hover:shadow-md"
                >
                  <div className="flex gap-3">
                    <div className="flex h-14 w-12 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-primary-light text-white group-hover:bg-primary">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-secondary">
                        {eventMonth(event)}
                      </span>
                      <span className="text-lg font-bold leading-tight">
                        {eventDay(event)}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <p className="font-bold leading-tight text-foreground">
                        {event.title}
                      </p>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-col gap-1 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <Clock3 size={12} className="text-secondary" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-secondary" />
                      {event.location}
                    </span>
                  </div>
                </Link>
              )
            )}

            {monthlyEvents.length === 0 && selectedEvents.length === 0 && (
              <p className="rounded-lg bg-background p-4 text-sm text-muted">
                No events are scheduled for this month.
              </p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
