let placeholdersPromise;

function toCamelCase(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

export default async function fetchPlaceholders() {
  if (!placeholdersPromise) {
    placeholdersPromise = fetch('/placeholders.json')
      .then((resp) => (resp.ok ? resp.json() : { data: [] }))
      .then((json) => {
        const rows = Array.isArray(json?.data) ? json.data : [];
        return rows.reduce((acc, row) => {
          const key = toCamelCase(row.Key || row.key);
          if (!key) return acc;
          acc[key] = row.Text || row.text || '';
          return acc;
        }, {});
      })
      .catch(() => ({}));
  }

  return placeholdersPromise;
}
