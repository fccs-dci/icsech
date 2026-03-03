import type { DrupalJsonApiResponse, DrupalJsonApiNode, Event } from "./types";

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

export async function getAllEvents(): Promise<Event[]> {
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

  return events;
}

export async function getEventById(id: string): Promise<Event | null> {
  if (!DRUPAL_BASEURL) {
    throw new Error("DRUPAL_BASEURL environment variable is not set");
  }

  const res = await fetch(
    `${DRUPAL_BASEURL}/jsonapi/node/event/${id}`
  );

  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error(`Drupal API error: ${res.status} ${res.statusText}`);
  }

  const json: { data: DrupalJsonApiNode } = await res.json();
  return flattenNode(json.data);
}
