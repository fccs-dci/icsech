import { readFileSync } from "node:fs";
import path from "node:path";
import type { Event } from "./types";

/**
 * The site is an archive. All events live in data/events.json, which was
 * snapshotted from the old Drupal backend. The build never talks to Drupal.
 * To refresh the snapshot (only if Drupal is reachable), run:
 *   npm run snapshot
 */
const DATA_FILE = path.join(process.cwd(), "data", "events.json");

let cache: Event[] | null = null;

export function getAllEvents(): Event[] {
  if (!cache) {
    const raw = readFileSync(DATA_FILE, "utf-8");
    const events = JSON.parse(raw) as Event[];
    // Newest first.
    events.sort(
      (a, b) =>
        new Date(b.field_starting_time).getTime() -
        new Date(a.field_starting_time).getTime()
    );
    cache = events;
  }
  return cache;
}

export function getEventById(id: string): Event | null {
  return getAllEvents().find((event) => event.id === id) ?? null;
}

export function getEventYear(event: Event): string {
  return event.field_starting_time.slice(0, 4);
}

/** Distinct years with at least one event, newest first. */
export function getEventYears(): string[] {
  const years = new Set(getAllEvents().map(getEventYear));
  return [...years].sort((a, b) => b.localeCompare(a));
}

export function getEventsByYear(year: string): Event[] {
  return getAllEvents().filter((event) => getEventYear(event) === year);
}
