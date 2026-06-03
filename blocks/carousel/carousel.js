export default function decorate(block) {
  const rows = [...block.children];
  block.innerText = ''; // Clear original table content

  const slider = document.createElement('div');
  slider.classList.add('carousel-slider');

  rows.forEach((row, i) => {
    const slide = document.createElement('div');
    slide.classList.add('carousel-slide');
    if (i === 0) slide.classList.add('active');
    
    // Move authored content from row to slide
    slide.append(...row.children);
    slider.append(slide);
  });

  // Simple Nav Buttons
  const nav = document.createElement('div');
  nav.className = 'carousel-nav';
  nav.innerHTML = `
    <button class="prev" aria-label="Previous">❮</button>
    <button class="next" aria-label="Next">❯</button>
  `;

  block.append(slider, nav);

  // Basic Click Logic
  nav.querySelector('.next').onclick = () => {
    const active = slider.querySelector('.active');
    const next = active.nextElementSibling || slider.firstElementChild;
    active.classList.remove('active');
    next.classList.add('active');
  };
}
