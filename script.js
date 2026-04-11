const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => { hamburger.classList.toggle('open'); navLinks.classList.toggle('open'); });
navLinks.querySelectorAll('a').forEach(link => { link.addEventListener('click', () => { hamburger.classList.remove('open'); navLinks.classList.remove('open'); }); });
document.addEventListener('click', (e) => { if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) { hamburger.classList.remove('open'); navLinks.classList.remove('open'); } });

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => { if (el.isIntersecting) { el.target.classList.add('visible'); observer.unobserve(el.target); } });
}, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => observer.observe(el));
