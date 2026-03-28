// Waveform animado no hero
(function () {
  const poly = document.getElementById('wave');
  let t = 0;

  function draw() {
    const pts = [];
    for (let x = 0; x <= 1440; x += 6) {
      const y = 90
        + Math.sin((x * 0.01) + t) * 28
        + Math.sin((x * 0.025) + t * 1.3) * 14
        + Math.sin((x * 0.006) + t * 0.7) * 20;
      pts.push(x + ',' + y);
    }
    poly.setAttribute('points', pts.join(' '));
    t += 0.015;
    requestAnimationFrame(draw);
  }

  draw();
})();

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));