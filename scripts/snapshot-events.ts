/**
 * Pull every event from the Drupal JSON:API and write data/events.json.
 * Only needed if the archive data ever has to be refreshed from Drupal.
 *
 *   DRUPAL_BASEURL=https://example.org npm run snapshot
 */
import { writeFileSync } from "node:fs";
import path from "node:path";
import type {
  DrupalJsonApiResponse,
  DrupalJsonApiNode,
  Event,
} from "../src/lib/types";

const DRUPAL_BASEURL = process.env.DRUPAL_BASEURL;

function flattenNode(node: DrupalJsonApiNode): Event {
  const attrs = node.attributes;
  return {
    id: node.id,
    title: attrs.title,
    field_starting_time: attrs.field_starting_time,
    field_speakers: attrs.field_speakers,
    field_organizers: attrs.field_organizers,
    field_event_mode: attrs.field_event_mode,
    field_event_category: attrs.field_event_category,
    field_event_language: attrs.field_event_language,
    field_event_venue: attrs.field_event_venue,
    field_event_record: attrs.field_event_record,
    field_registration: attrs.field_registration,
    field_time_zone: attrs.field_time_zone,
    field_event_website: attrs.field_event_website,
    field_description: attrs.field_description,
  };
}

async function main() {
  if (!DRUPAL_BASEURL) {
    throw new Error("DRUPAL_BASEURL environment variable is not set");
  }

  const events: Event[] = [];
  let url: string | null =
    `${DRUPAL_BASEURL}/jsonapi/node/event?sort=-field_starting_time&page[limit]=50`;

  while (url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Drupal API error: ${res.status} ${res.statusText}`);
    }
    const json: DrupalJsonApiResponse = await res.json();
    events.push(...json.data.map(flattenNode));
    url = json.links.next?.href ?? null;
  }

  events.sort(
    (a, b) =>
      new Date(b.field_starting_time).getTime() -
      new Date(a.field_starting_time).getTime()
  );

  const out = path.join(process.cwd(), "data", "events.json");
  writeFileSync(out, JSON.stringify(events, null, 1) + "\n");
  console.log(`Wrote ${events.length} events to ${out}`);
}

main().catch((err) => {
  console.error("Snapshot failed:", err);
  process.exit(1);
});
