"use client";

import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, Pagination } from "react-instantsearch";
import Link from "next/link";
import { stripHtml } from "@/lib/strip-html";

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const searchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY;
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;

const searchClient =
  appId && searchKey ? algoliasearch(appId, searchKey) : null;

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
    <Link href={`/event/${hit.objectID}/`} target="_blank" className="block">
      <h2 className="text-primary text-lg font-medium">{hit.title}</h2>
      {hit.organizers?.value && (
        <p className="text-gray-500 text-sm mt-1">
          {stripHtml(hit.organizers.value)}
        </p>
      )}
      {hit.speakers?.value && (
        <p className="text-gray-700 text-sm mt-1">{stripHtml(hit.speakers.value)}</p>
      )}
    </Link>
  );
}

export default function AlgoliaSearch() {
  if (!searchClient || !indexName) {
    return <p className="text-gray-500 text-center">Search is currently unavailable.</p>;
  }

  return (
    <InstantSearch searchClient={searchClient} indexName={indexName} stalledSearchDelay={2000}>
      <SearchBox />
      <div className="mt-4">
        <Hits hitComponent={Hit} />
      </div>
      <Pagination className="flex justify-center" />
      <div className="flex justify-center items-center mt-4 gap-1">
        <span className="text-sm text-gray-500">Powered by</span>
        <a
          href="https://algolia.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Algolia"
        >
          <img width={70} src="/images/logo-algolia.svg" alt="Algolia" />
        </a>
      </div>
    </InstantSearch>
  );
}
