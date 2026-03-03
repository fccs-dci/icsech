"use client";

import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, Pagination } from "react-instantsearch";
import Link from "next/link";
import { stripHtml } from "@/lib/strip-html";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "COIVUY7A28",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || "d35f214bf1152c30583045b4f4955e2c"
);

const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || "dev_DRUPALEVENTS";

interface HitProps {
  hit: {
    objectID: string;
    title: string;
    organizers?: { value: string };
    speakers?: { value: string };
  };
}

function Hit({ hit }: HitProps) {
  return (
    <Link href={`/event/${hit.objectID}/`} target="_blank">
      <div className="grid">
        <div className="grid-cols-1">
          <h2 className="text-primary text-lg">{hit.title}</h2>
        </div>
        <div className="grid-cols-2">
          {hit.organizers?.value && (
            <p className="text-gray-500 text-sm">
              {stripHtml(hit.organizers.value)}
            </p>
          )}
          {hit.speakers?.value && (
            <p>{stripHtml(hit.speakers.value)}</p>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function AlgoliaSearch() {
  return (
    <InstantSearch searchClient={searchClient} indexName={indexName} stalledSearchDelay={2000}>
      <SearchBox />
      <div className="flex justify-end my-2">
        <span className="text-sm text-gray-500">Search by</span>
        <a
          href="https://algolia.com"
          className="ml-1"
          target="_blank"
          rel="noreferrer"
          aria-label="Algolia"
        >
          <img width={70} src="/images/logo-algolia.svg" alt="Algolia" />
        </a>
      </div>
      <div className="grid grid-cols-1">
        <Hits hitComponent={Hit} />
        <Pagination className="flex justify-center" />
      </div>
    </InstantSearch>
  );
}
