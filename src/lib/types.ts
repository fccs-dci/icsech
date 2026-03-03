export interface DrupalTextField {
  value: string;
  processed: string;
}

export interface DrupalLinkField {
  uri: string;
  title: string;
}

export interface DrupalEventAttributes {
  drupal_internal__nid: number;
  title: string;
  field_starting_time: string;
  field_speakers: DrupalTextField | null;
  field_organizers: DrupalTextField | null;
  field_event_mode: string | null;
  field_event_category: string | null;
  field_event_language: string | null;
  field_event_venue: string | null;
  field_event_record: boolean;
  field_registration: boolean;
  field_time_zone: string | null;
  field_event_website: DrupalLinkField | null;
  field_description: DrupalTextField | null;
}

export interface DrupalJsonApiNode {
  id: string;
  type: string;
  attributes: DrupalEventAttributes;
}

export interface DrupalJsonApiResponse {
  data: DrupalJsonApiNode[];
  links: {
    next?: { href: string };
  };
}

export interface Event {
  id: string;
  title: string;
  field_starting_time: string;
  field_speakers: DrupalTextField | null;
  field_organizers: DrupalTextField | null;
  field_event_mode: string | null;
  field_event_category: string | null;
  field_event_language: string | null;
  field_event_venue: string | null;
  field_event_record: boolean;
  field_registration: boolean;
  field_time_zone: string | null;
  field_event_website: DrupalLinkField | null;
  field_description: DrupalTextField | null;
}
