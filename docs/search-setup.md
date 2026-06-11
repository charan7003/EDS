# Search setup from scratch

This project now supports:
- custom index fields (`metadata.*`)
- metadata filtering
- weighted full-text search

## 1) Create index data

Provide a JSON endpoint with this shape:

```json
{
  "data": [
    {
      "path": "/docs/search",
      "title": "Search Setup",
      "description": "How to configure custom index fields",
      "fullText": "Full page text used for full-text ranking",
      "metadata": {
        "category": "docs",
        "audience": "developer",
        "tags": ["search", "metadata"]
      }
    }
  ]
}
```

A sample file is included at `/query-index.json`.

## 2) Add the Search block

Author a Search block and set the first link to your index source (optional).
If omitted, it defaults to `/query-index.json`.

## 3) Query patterns

### Full-text search
Use plain terms in the input:
- `edge delivery`

### Metadata from input
Use `field:value` tokens:
- `category:docs audience:developer search`

### Metadata from URL
Use `meta.<field>` query params:
- `?q=search&meta.category=docs&meta.region=us`

Both input filters and URL filters are applied together.

## 4) Ranking

Results are ranked by weighted matches:
- title/header (highest)
- description
- fullText/content/body
- tags
- path

## 5) Reindexing content

When content changes, regenerate and republish your index JSON so search results stay current.
For production EDS sites, point the search block to your generated index endpoint.

use of placeholders.js

It is a small loader + cache utility:

Fetches values from /placeholders.json
Converts keys to camelCase
Returns an object like { searchPlaceholder: "...", searchNoResults: "..." }
Caches the result (so it fetches once, then reuses)
So it behaves like a “dynamic constants provider” for UI text, not hardcoded constants.

Used by: search.js
Defined in: placeholders.js