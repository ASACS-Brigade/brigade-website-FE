"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Clock3, MapPin } from "lucide-react";
import FadeIn from "../../layout/fade-in";
import {
  BrigadeEvent,
  eventDate,
  eventsForDate,
  eventsForMonth,
} from "../../../constants/events";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
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

type EventCalendarProps = {
  events: BrigadeEvent[];
  selectedDate: string | null;
  onSelectDate: (date: string) => void;
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

export default function EventCalendar({
  events,
  selectedDate,
  onSelectDate,
}: EventCalendarProps) {
  const firstEventDate = eventDate(events[0]);
  const [year, setYear] = useState(firstEventDate.getFullYear());
  const [month, setMonth] = useState(firstEventDate.getMonth());

  const today = new Date();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const monthlyEvents = useMemo(
    () => eventsForMonth(events, year, month),
    [events, year, month]
  );
  const eventDates = new Set(monthlyEvents.map((event) => event.date));
  const selectedEvents = eventsForDate(events, selectedDate);

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

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <FadeIn>
      <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
        <div className="flex items-center justify-between bg-primary-light px-4 py-4">
          <button
            type="button"
            onClick={prev}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white/75 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary"
            aria-label="Previous month"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="text-center">
            <span className="block text-sm font-bold text-white">
              {MONTHS[month]} {year}
            </span>
            <span className="text-xs text-white/65">
              {monthlyEvents.length} event{monthlyEvents.length === 1 ? "" : "s"}
            </span>
          </div>

          <button
            type="button"
            onClick={next}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white/75 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary"
            aria-label="Next month"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-7 border-b border-border bg-primary/5">
          {DAYS.map((day) => (
            <div
              key={day}
              className="py-2 text-center text-[11px] font-semibold text-muted"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 bg-card p-3">
          {cells.map((day, idx) => {
            if (day === null) {
              return <div key={`empty-${idx}`} className="h-9" />;
            }

            const currentDateId = dateId(year, month, day);
            const hasEvent = eventDates.has(currentDateId);
            const isSelected = selectedDate === currentDateId;
            const isToday =
              day === today.getDate() &&
              month === today.getMonth() &&
              year === today.getFullYear();

            return (
              <button
                key={currentDateId}
                type="button"
                onClick={() => hasEvent && onSelectDate(currentDateId)}
                disabled={!hasEvent}
                className={[
                  "relative flex h-9 items-center justify-center rounded-lg text-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-secondary",
                  hasEvent
                    ? "font-semibold text-primary hover:-translate-y-0.5 hover:bg-secondary/15"
                    : "cursor-default text-muted/50",
                  isToday ? "ring-1 ring-primary/30" : "",
                  isSelected ? "bg-primary text-white hover:bg-primary" : "",
                ].join(" ")}
                aria-label={
                  hasEvent
                    ? `View events for ${MONTHS[month]} ${day}, ${year}`
                    : `${MONTHS[month]} ${day}, ${year}`
                }
              >
                {day}
                {hasEvent && !isSelected && (
                  <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-secondary" />
                )}
              </button>
            );
          })}
        </div>

        <div className="border-t border-border bg-background/80 p-4">
          <h3 className="text-sm font-bold text-primary">
            {selectedEvents.length > 0 ? "Selected Date" : "This Month"}
          </h3>

          <div className="mt-3 flex flex-col gap-3">
            {(selectedEvents.length > 0 ? selectedEvents : monthlyEvents).map(
              (event) => (
                <div key={event.id} className="rounded-lg bg-card p-3 ring-1 ring-border">
                  <p className="text-sm font-semibold text-foreground">
                    {event.title}
                  </p>
                  <div className="mt-2 flex flex-col gap-1 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <Clock3 size={12} className="text-secondary" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-secondary" />
                      {event.location}
                    </span>
                  </div>
                </div>
              )
            )}

            {monthlyEvents.length === 0 && selectedEvents.length === 0 && (
              <p className="text-sm text-muted">
                No events are scheduled for this month.
              </p>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
