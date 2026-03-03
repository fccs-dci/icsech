import { algoliasearch } from "algoliasearch";
import type { DrupalJsonApiResponse, DrupalJsonApiNode } from "./types";

const DRUPAL_BASEURL = process.env.DRUPAL_BASEURL;
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME || "dev_DRUPALEVENTS";

async function fetchAllEvents() {
  if (!DRUPAL_BASEURL) {
    console.warn("DRUPAL_BASEURL not set — skipping Algolia indexing.");
    return [];
  }

  const events: DrupalJsonApiNode[] = [];
  let url: string | null =
    `${DRUPAL_BASEURL}/jsonapi/node/event?page[limit]=50`;

  while (url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Drupal API error: ${res.status} ${res.statusText}`);
    }
    const json: DrupalJsonApiResponse = await res.json();
    events.push(...json.data);
    url = json.links.next?.href ?? null;
  }

  return events;
}

async function main() {
  if (!ALGOLIA_APP_ID || !ALGOLIA_ADMIN_KEY) {
    console.warn(
      "ALGOLIA_APP_ID or ALGOLIA_ADMIN_KEY not set — skipping Algolia indexing."
    );
    return;
  }

  console.log("Fetching events from Drupal...");
  const events = await fetchAllEvents();

  if (events.length === 0) {
    console.log("No events to index.");
    return;
  }

  console.log(`Fetched ${events.length} events. Pushing to Algolia...`);

  const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);

  const records = events.map((node) => ({
    objectID: node.id,
    title: node.attributes.title,
    description: node.attributes.field_description,
    organizers: node.attributes.field_organizers,
    speakers: node.attributes.field_speakers,
    starting_time: Date.parse(node.attributes.field_starting_time),
    mode: node.attributes.field_event_mode,
    category: node.attributes.field_event_category,
  }));

  await client.saveObjects({
    indexName: ALGOLIA_INDEX_NAME,
    objects: records,
  });

  console.log(`Indexed ${records.length} events to Algolia.`);
}

main().catch((err) => {
  console.error("Algolia indexing failed:", err);
  process.exit(1);
});
