import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const rows = [...block.children];
  block.innerText = '';

  const slider = document.createElement('div');
  slider.classList.add('carousel-slider');

  rows.forEach((row, i) => {
    const slide = document.createElement('div');
    slide.classList.add('carousel-slide');
    if (i === 0) slide.classList.add('active');

    // Handle 2 Columns: Col 1 is Image, Col 2 is Content
    const [imageCol, textCol] = row.children;
    
    if (imageCol) {
      imageCol.classList.add('slide-image');
      // Optimize images to keep PageSpeed scores high
      imageCol.querySelectorAll('img').forEach((img) => {
        img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]));
      });
    }
    
    if (textCol) {
      textCol.classList.add('slide-content');
    }

    slide.append(...row.children);
    slider.append(slide);
  });

  // Create Navigation
  const nav = document.createElement('div');
  nav.className = 'carousel-nav';
  nav.innerHTML = `
    <button class="prev" aria-label="Previous">❮</button>
    <button class="next" aria-label="Next">❯</button>
  `;

  block.append(slider, nav);

  // Slide Logic Functions
  const showNext = () => {
    const active = slider.querySelector('.active');
    const next = active.nextElementSibling || slider.firstElementChild;
    active.classList.remove('active');
    next.classList.add('active');
  };

  const showPrev = () => {
    const active = slider.querySelector('.active');
    const prev = active.previousElementSibling || slider.lastElementChild;
    active.classList.remove('active');
    prev.classList.add('active');
  };

  // Click Events
  nav.querySelector('.next').onclick = () => showNext();
  nav.querySelector('.prev').onclick = () => showPrev();

  // --- AUTO SLIDE (1 SECOND) ---
  const intervalTime = 1000; 
  let autoSlide = setInterval(showNext, intervalTime);

  // Pause on Hover
  block.onmouseenter = () => clearInterval(autoSlide);
  block.onmouseleave = () => {
    autoSlide = setInterval(showNext, intervalTime);
  };
}
