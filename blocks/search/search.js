import {
  createOptimizedPicture,
  decorateIcons,
} from '../../scripts/aem.js';
import fetchPlaceholders from '../../scripts/placeholders.js';

const searchParams = new URLSearchParams(window.location.search);
const dataCache = new Map();

function normalizeText(value) {
  return String(value || '').toLowerCase();
}

function stringifyFieldValue(value) {
  if (Array.isArray(value)) {
    return value.join(' ');
  }
  if (value && typeof value === 'object') {
    return Object.values(value).join(' ');
  }
  return String(value || '');
}

function getRecordFieldValue(record, field) {
  if (!record || !field) return '';
  const metadataValue = record.metadata ? record.metadata[field] : undefined;
  const value = metadataValue !== undefined ? metadataValue : record[field];
  return stringifyFieldValue(value);
}

function getMetadataFiltersFromUrl() {
  return [...searchParams.entries()]
    .filter(([key, value]) => key.startsWith('meta.') && value)
    .map(([key, value]) => ({
      key: key.replace('meta.', '').trim(),
      value: normalizeText(value).trim(),
    }))
    .filter((filter) => filter.key && filter.value);
}

function parseSearchInput(searchValue) {
  const metadataFilters = [];
  const searchTerms = [];

  searchValue
    .split(/\s+/)
    .map((part) => part.trim())
    .filter((part) => part)
    .forEach((token) => {
      const separatorIdx = token.indexOf(':');
      if (separatorIdx > 0 && separatorIdx < token.length - 1) {
        const key = token.substring(0, separatorIdx).trim();
        const value = normalizeText(token.substring(separatorIdx + 1).trim());
        if (key && value) {
          metadataFilters.push({ key, value });
          return;
        }
      }

      searchTerms.push(normalizeText(token));
    });

  return {
    searchTerms,
    metadataFilters,
  };
}

function findNextHeading(el) {
  let preceedingEl = el.parentElement.previousElement || el.parentElement.parentElement;
  let h = 'H2';
  while (preceedingEl) {
    const lastHeading = [...preceedingEl.querySelectorAll('h1, h2, h3, h4, h5, h6')].pop();
    if (lastHeading) {
      const level = parseInt(lastHeading.nodeName[1], 10);
      h = level < 6 ? `H${level + 1}` : 'H6';
      preceedingEl = false;
    } else {
      preceedingEl = preceedingEl.previousElement || preceedingEl.parentElement;
    }
  }
  return h;
}

function highlightTextElements(terms, elements) {
  elements.forEach((element) => {
    if (!element || !element.textContent) return;

    const matches = [];
    const { textContent } = element;
    terms.forEach((term) => {
      let start = 0;
      let offset = textContent.toLowerCase().indexOf(term.toLowerCase(), start);
      while (offset >= 0) {
        matches.push({ offset, term: textContent.substring(offset, offset + term.length) });
        start = offset + term.length;
        offset = textContent.toLowerCase().indexOf(term.toLowerCase(), start);
      }
    });

    if (!matches.length) {
      return;
    }

    matches.sort((a, b) => a.offset - b.offset);
    let currentIndex = 0;
    const fragment = matches.reduce((acc, { offset, term }) => {
      if (offset < currentIndex) return acc;
      const textBefore = textContent.substring(currentIndex, offset);
      if (textBefore) {
        acc.appendChild(document.createTextNode(textBefore));
      }
      const markedTerm = document.createElement('mark');
      markedTerm.textContent = term;
      acc.appendChild(markedTerm);
      currentIndex = offset + term.length;
      return acc;
    }, document.createDocumentFragment());
    const textAfter = textContent.substring(currentIndex);
    if (textAfter) {
      fragment.appendChild(document.createTextNode(textAfter));
    }
    element.innerHTML = '';
    element.appendChild(fragment);
  });
}

export async function fetchData(source) {
  const response = await fetch(source);
  if (!response.ok) {
    // eslint-disable-next-line no-console
    console.error('error loading API response', response);
    return null;
  }

  const json = await response.json();
  if (!json) {
    // eslint-disable-next-line no-console
    console.error('empty API response', source);
    return null;
  }

  return json.data;
}

async function getData(source) {
  if (!dataCache.has(source)) {
    dataCache.set(source, fetchData(source).then((data) => data || []));
  }
  return dataCache.get(source);
}

function renderResult(result, searchTerms, titleTag) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = result.path;
  if (result.image) {
    const wrapper = document.createElement('div');
    wrapper.className = 'search-result-image';
    const pic = createOptimizedPicture(result.image, '', false, [{ width: '375' }]);
    wrapper.append(pic);
    a.append(wrapper);
  }
  if (result.title) {
    const title = document.createElement(titleTag);
    title.className = 'search-result-title';
    const link = document.createElement('a');
    link.href = result.path;
    link.textContent = result.title;
    highlightTextElements(searchTerms, [link]);
    title.append(link);
    a.append(title);
  }
  if (result.description) {
    const description = document.createElement('p');
    description.textContent = result.description;
    highlightTextElements(searchTerms, [description]);
    a.append(description);
  }
  li.append(a);
  return li;
}

function clearSearchResults(block) {
  const searchResults = block.querySelector('.search-results');
  searchResults.innerHTML = '';
}

function clearSearch(block) {
  clearSearchResults(block);
  if (window.history.replaceState) {
    const url = new URL(window.location.href);
    url.search = '';
    searchParams.delete('q');
    window.history.replaceState({}, '', url.toString());
  }
}

async function renderResults(block, config, filteredData, searchTerms) {
  clearSearchResults(block);
  const searchResults = block.querySelector('.search-results');
  const headingTag = searchResults.dataset.h;

  if (filteredData.length) {
    searchResults.classList.remove('no-results');
    filteredData.forEach((result) => {
      const li = renderResult(result, searchTerms, headingTag);
      searchResults.append(li);
    });
  } else {
    const noResultsMessage = document.createElement('li');
    searchResults.classList.add('no-results');
    noResultsMessage.textContent = config.placeholders.searchNoResults || 'No results found.';
    searchResults.append(noResultsMessage);
  }
}

function compareFound(hit1, hit2) {
  if (hit1.score !== hit2.score) {
    return hit2.score - hit1.score;
  }
  return hit1.minIdx - hit2.minIdx;
}

function hasMetadataMatch(result, metadataFilters) {
  if (!metadataFilters.length) return true;

  return metadataFilters.every(({ key, value }) => {
    const fieldValue = normalizeText(getRecordFieldValue(result, key));
    return fieldValue.includes(value);
  });
}

function findMinIndex(term, fields) {
  const matchIndexes = fields
    .map((field) => field.indexOf(term))
    .filter((idx) => idx >= 0);
  return matchIndexes.length ? Math.min(...matchIndexes) : -1;
}

function filterData(searchTerms, metadataFilters, data) {
  if (!searchTerms.length && !metadataFilters.length) {
    return [];
  }

  const ranked = [];

  data.forEach((result) => {
    if (!hasMetadataMatch(result, metadataFilters)) {
      return;
    }

    const title = normalizeText(result.header || result.title);
    const description = normalizeText(result.description);
    const fullText = normalizeText(result.fullText || result.content || result.body);
    const tags = normalizeText(getRecordFieldValue(result, 'tags'));
    const path = normalizeText(result.path);

    let minIdx = Number.MAX_SAFE_INTEGER;
    let score = 0;
    let matches = 0;

    searchTerms.forEach((term) => {
      const titleIdx = title.indexOf(term);
      const descriptionIdx = description.indexOf(term);
      const fullTextIdx = fullText.indexOf(term);
      const tagsIdx = tags.indexOf(term);
      const pathIdx = path.indexOf(term);

      if (titleIdx >= 0) score += 12;
      if (descriptionIdx >= 0) score += 7;
      if (fullTextIdx >= 0) score += 4;
      if (tagsIdx >= 0) score += 3;
      if (pathIdx >= 0) score += 1;

      const idx = findMinIndex(term, [title, description, fullText, tags, path]);
      if (idx >= 0) {
        matches += 1;
        minIdx = Math.min(minIdx, idx);
      }
    });

    if (!searchTerms.length) {
      score = 1;
      minIdx = 0;
      matches = 1;
    }

    if (matches > 0) {
      ranked.push({
        minIdx,
        score,
        result,
      });
    }
  });

  return ranked.sort(compareFound).map((item) => item.result);
}

async function handleSearch(e, block, config) {
  const searchValue = e.target.value;
  searchParams.set('q', searchValue);
  if (window.history.replaceState) {
    const url = new URL(window.location.href);
    url.search = searchParams.toString();
    window.history.replaceState({}, '', url.toString());
  }

  const parsedQuery = parseSearchInput(searchValue);
  const urlMetadataFilters = getMetadataFiltersFromUrl();
  const metadataFilters = [...urlMetadataFilters, ...parsedQuery.metadataFilters];

  if (parsedQuery.searchTerms.join('').length < 3 && !metadataFilters.length) {
    clearSearch(block);
    return;
  }

  const data = await getData(config.source);
  const filteredData = filterData(parsedQuery.searchTerms, metadataFilters, data);
  await renderResults(block, config, filteredData, parsedQuery.searchTerms);
}

function searchResultsContainer(block) {
  const results = document.createElement('ul');
  results.className = 'search-results';
  results.dataset.h = findNextHeading(block);

  // add ARIA live region for screen reader announcements
  results.setAttribute('role', 'status');
  results.setAttribute('aria-live', 'polite');
  results.setAttribute('aria-atomic', true);

  return results;
}

function searchInput(block, config) {
  const input = document.createElement('input');
  input.setAttribute('type', 'search');
  input.className = 'search-input';

  const searchPlaceholder = config.placeholders.searchPlaceholder || 'Search...';
  input.placeholder = searchPlaceholder;
  input.setAttribute('aria-label', searchPlaceholder);

  input.addEventListener('input', (e) => {
    handleSearch(e, block, config);
  });

  input.addEventListener('keyup', (e) => { if (e.code === 'Escape') { clearSearch(block); } });

  return input;
}

function searchIcon() {
  const icon = document.createElement('span');
  icon.classList.add('icon', 'icon-search');
  return icon;
}

function searchBox(block, config) {
  const box = document.createElement('div');
  box.classList.add('search-box');
  box.append(
    searchIcon(),
    searchInput(block, config),
  );

  return box;
}

export default async function decorate(block) {
  const placeholders = await fetchPlaceholders();
  const source = block.querySelector('a[href]') ? block.querySelector('a[href]').href : '/query-index.json';
  block.innerHTML = '';
  block.append(
    searchBox(block, { source, placeholders }),
    searchResultsContainer(block),
  );

  if (searchParams.get('q')) {
    const input = block.querySelector('input');
    input.value = searchParams.get('q');
    input.dispatchEvent(new Event('input'));
  }

  decorateIcons(block);
}
