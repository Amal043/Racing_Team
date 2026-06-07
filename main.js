/* ═══════════════════════════════════════════════════════
   main.js — NIT Jamshedpur Drift Racing Team
   Handles: Canvas animation · Scroll · Nav · Observers
═══════════════════════════════════════════════════════ */

/* ────────────────────────────────────────
   1. CANVAS SCROLL ANIMATION
──────────────────────────────────────── */
const TOTAL   = 224;
const frameSrc = i => `/frames/ezgif-frame-${String(i).padStart(3, '0')}.jpg`;

const canvas = document.getElementById('canvas');
const ctx    = canvas.getContext('2d');
const images = [];
let loaded     = 0;
let ready      = false;
let currentIdx = 0;

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  drawFrame(currentIdx);
}
window.addEventListener('resize', resizeCanvas);

function drawFrame(i) {
  const img = images[i];
  if (!img || !img.complete || !img.naturalWidth) return;
  const cw = canvas.width, ch = canvas.height;
  const sc = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
  const dw = img.naturalWidth * sc, dh = img.naturalHeight * sc;
  ctx.clearRect(0, 0, cw, ch);
  ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
}

/* ────────────────────────────────────────
   2. PRELOADER
──────────────────────────────────────── */
const lBar  = document.getElementById('l-bar');
const lPct  = document.getElementById('l-pct');
const loader = document.getElementById('loader');

function preload() {
  for (let i = 0; i < TOTAL; i++) {
    const img = new Image();
    img.src = frameSrc(i + 1);
    img.onload = img.onerror = () => {
      loaded++;
      const p = Math.round((loaded / TOTAL) * 100);
      lBar.style.width  = p + '%';
      lPct.textContent  = p + '%';
      if (loaded >= TOTAL) onReady();
    };
    images[i] = img;
  }
}

function onReady() {
  ready = true;
  loader.style.opacity = '0';
  setTimeout(() => { loader.style.display = 'none'; }, 850);
  resizeCanvas();
  /* Activate hero overlay fade-in after animation starts */
  setTimeout(() => {
    const heroOverlay = document.getElementById('hero-overlay');
    if (heroOverlay) heroOverlay.classList.add('active');
  }, 200);
}

/* ────────────────────────────────────────
   3. SCROLL HANDLER
──────────────────────────────────────── */
const animSection = document.getElementById('anim-section');
const progressBar = document.getElementById('progress-bar');
const navEl       = document.getElementById('nav');
let rafPending = false;

function onScroll() {
  if (!rafPending) { requestAnimationFrame(tick); rafPending = true; }
}

function tick() {
  rafPending = false;
  const st = window.scrollY;

  /* Frame scrubbing */
  const animH = animSection.offsetHeight - window.innerHeight;
  const t     = Math.max(0, Math.min(1, st / animH));
  const idx   = Math.min(Math.floor(t * (TOTAL - 1)), TOTAL - 1);
  if (idx !== currentIdx) { currentIdx = idx; if (ready) drawFrame(idx); }

  /* Hero overlay fade out on scroll */
  const heroOverlay = document.getElementById('hero-overlay');
  if (heroOverlay) {
    const fadeLimit = window.innerHeight * 0.45; /* fade out completely over 45% viewport height */
    const opacity = Math.max(0, 1 - (st / fadeLimit));
    heroOverlay.style.opacity = opacity;
    heroOverlay.style.pointerEvents = opacity <= 0.05 ? 'none' : 'auto';
  }

  /* Global progress bar */
  const totalH = document.body.scrollHeight - window.innerHeight;
  progressBar.style.width = ((st / totalH) * 100).toFixed(2) + '%';

  /* Anim progress arc */
  const progFill = document.getElementById('anim-prog-fill');
  if (progFill && st < animSection.offsetHeight) {
    const progDeg = t * 360;
    progFill.style.setProperty('--prog', progDeg + 'deg');
  }

  /* Nav glass */
  navEl.classList.toggle('scrolled', st > window.innerHeight * 0.3);
}

window.addEventListener('scroll', onScroll, { passive: true });

/* ────────────────────────────────────────
   4. INTERSECTION OBSERVER — fade-in
──────────────────────────────────────── */
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fi').forEach(el => obs.observe(el));

/* ────────────────────────────────────────
   5. SMOOTH SCROLL — nav links
──────────────────────────────────────── */
const toggle = document.getElementById('n-toggle');
const drawer = document.getElementById('nav-drawer');

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    if (id === '#' || id === '#top') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      drawer.classList.remove('open');
      toggle.classList.remove('open');
      return;
    }
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      drawer.classList.remove('open');
      toggle.classList.remove('open');
    }
  });
});

/* ────────────────────────────────────────
   6. MOBILE NAV TOGGLE
──────────────────────────────────────── */
toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  drawer.classList.toggle('open');
});

/* ────────────────────────────────────────
   7. INIT
──────────────────────────────────────── */
resizeCanvas();
preload();
