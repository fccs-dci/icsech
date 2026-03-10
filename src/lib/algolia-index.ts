import { algoliasearch } from "algoliasearch";
import { getAllEvents } from "./drupal";

const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME || "dev_DRUPALEVENTS";

async function main() {
  if (!ALGOLIA_APP_ID || !ALGOLIA_ADMIN_KEY) {
    console.warn(
      "ALGOLIA_APP_ID or ALGOLIA_ADMIN_KEY not set — skipping Algolia indexing."
    );
    return;
  }

  console.log("Fetching events from Drupal...");
  const events = await getAllEvents();

  if (events.length === 0) {
    console.log("No events to index.");
    return;
  }

  console.log(`Fetched ${events.length} events. Pushing to Algolia...`);

  const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY);

  const records = events.map((event) => ({
    objectID: event.id,
    title: event.title,
    description: event.field_description,
    organizers: event.field_organizers,
    speakers: event.field_speakers,
    starting_time: Date.parse(event.field_starting_time),
    mode: event.field_event_mode,
    category: event.field_event_category,
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
