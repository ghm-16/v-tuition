// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu after tapping a link (mobile)
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Testimonials carousel: native scroll-snap track, arrows page through it
const track = document.getElementById('testimonialTrack');
const prevBtn = document.getElementById('testimonialPrev');
const nextBtn = document.getElementById('testimonialNext');

if (track && prevBtn && nextBtn) {
  const cards = Array.from(track.children);

  const perView = () => {
    const step = cards[1] ? cards[1].offsetLeft - cards[0].offsetLeft : track.clientWidth;
    return Math.max(1, Math.round(track.clientWidth / step));
  };

  const firstVisible = () => {
    const left = track.scrollLeft;
    let index = 0;
    cards.forEach((card, i) => {
      if (Math.abs(card.offsetLeft - cards[0].offsetLeft - left) <
          Math.abs(cards[index].offsetLeft - cards[0].offsetLeft - left)) index = i;
    });
    return index;
  };

  const update = () => {
    const n = perView();
    const first = firstVisible();
    const last = Math.min(cards.length, first + n);
    // Fit the track to the tallest card in view so short quotes don't leave a gap
    const visible = cards.slice(first, last);
    track.style.height = `${Math.max(...visible.map((card) => card.offsetHeight))}px`;
    prevBtn.disabled = first === 0;
    nextBtn.disabled = last >= cards.length;
  };

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(index, cards.length - 1));
    track.scrollTo({ left: cards[clamped].offsetLeft - cards[0].offsetLeft });
  };

  prevBtn.addEventListener('click', () => goTo(firstVisible() - perView()));
  nextBtn.addEventListener('click', () => goTo(firstVisible() + perView()));
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); prevBtn.click(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); nextBtn.click(); }
  });

  let ticking = false;
  track.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  });
  window.addEventListener('resize', update);
  if (document.fonts) document.fonts.ready.then(update);
  update();
}
