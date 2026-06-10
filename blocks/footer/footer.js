import { decorateIcons } from '../../scripts/aem.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const rows = [...block.children];

  // 1. Label Top Bar (Row 1 with 6 columns)
  const topBar = rows[0];
  if (topBar) {
    topBar.classList.add('footer-top-bar');
    [...topBar.children].forEach((cell) => cell.classList.add('footer-column'));
  }

  // 2. Label Main Links (Rows 2-5)
  rows.slice(1).forEach((row) => row.classList.add('footer-vertical-row'));

  // 3. Mark social links to disable yellow hover and prepare icons
  block.querySelectorAll('a').forEach((a) => {
    const text = a.textContent.toLowerCase().trim();
    // If the link text is just an icon name or contains colons, treat as social
    if (['youtube', 'facebook', 'linkedin', 'instagram'].includes(text) || text.includes(':')) {
      a.classList.add('social-link');
      // If author used text links like "FACEBOOK", convert them to EDS icon syntax
      if (!a.querySelector('.icon')) {
        a.innerHTML = `<span class="icon icon-${text.replace(/:/g, '')}"></span>`;
      }
    }
  });

  // 4. Force EDS to render SVG icons from your /icons/ folder
  await decorateIcons(block);
}
