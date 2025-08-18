// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal elements on scroll
const observer = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) e.target.classList.add('is-visible');
  }
}, { rootMargin: '0px 0px -10% 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Subtle parallax on logo
const logo = document.querySelector('.logo');
window.addEventListener('mousemove', (e) => {
  const { innerWidth:w, innerHeight:h } = window;
  const x = (e.clientX - w/2) / (w/2);
  const y = (e.clientY - h/2) / (h/2);
  logo.style.transform = `translateY(${y*6}px) translateX(${x*4}px) scale(1)`;
});
window.addEventListener('mouseleave', () => {
  logo.style.transform = 'translateY(0) translateX(0) scale(1)';
});
