import './style.css';

document.documentElement.classList.add('js');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Cursor spotlight
const spot = document.querySelector<HTMLElement>('.spotlight')!;
addEventListener('pointermove', (e) => {
  spot.style.setProperty('--x', `${e.clientX}px`);
  spot.style.setProperty('--y', `${e.clientY}px`);
}, { passive: true });

// Scroll reveal
const reveal = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); reveal.unobserve(e.target); }
}, { rootMargin: '0px 0px -10% 0px' });
document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));

// Active nav link follows the section in view
const links = new Map([...document.querySelectorAll<HTMLAnchorElement>('.nav a')].map((a) => [a.hash.slice(1), a]));
const navSpy = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) links.forEach((a, id) => a.classList.toggle('active', id === e.target.id));
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section').forEach((s) => navSpy.observe(s));

// 3D hero: skipped for reduced motion and low-memory devices; the CSS gradient stays as fallback.
const lowEnd = ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) < 4;
if (!reduceMotion && !lowEnd) {
  if ('requestIdleCallback' in window) requestIdleCallback(load, { timeout: 1500 }); else setTimeout(load, 200);
}
function load() {
  import('./hero3d').then((m) => m.start(document.getElementById('hero3d') as HTMLCanvasElement));
}
