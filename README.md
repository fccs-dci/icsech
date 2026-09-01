# International China Studies Events Clearing-house (archive)

Static archive of the Clearing-house, live at
<https://clearinghouse.fairbank.fas.harvard.edu>.

The project ran from 2020 to 2026 and was sunset in September 2026. The site
is no longer updated. It is kept online as a record of the 2,229 events that
were listed.

## How the site is built

- Next.js 15 (App Router) with `output: "export"`, deployed to the `gh-pages`
  branch and served by GitHub Pages.
- All event data lives in `data/events.json`. The build reads that file only.
  It does **not** contact the old Drupal backend.
- Search uses an existing Algolia index. The `algolia:index` script re-pushes
  the snapshot to Algolia and skips itself when no admin key is set.

## Deploying a revision

Nothing deploys automatically. To publish a change:

1. Merge the change into `main`.
2. Open the **Actions** tab on GitHub, choose **Manual Build & Deploy**, and
   click **Run workflow**.

## Local development

```bash
npm ci
npm run dev      # local dev server
npm run build    # static export into ./out
```

Search is shown as "unavailable" locally unless `NEXT_PUBLIC_ALGOLIA_APP_ID`,
`NEXT_PUBLIC_ALGOLIA_SEARCH_KEY`, and `NEXT_PUBLIC_ALGOLIA_INDEX_NAME` are set.

## Refreshing the data snapshot

Only needed if the Drupal backend is reachable and its data changed:

```bash
DRUPAL_BASEURL=https://example.org npm run snapshot
```
