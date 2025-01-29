// Smooth and sexy   Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// GSAP se li hai  Animations (AI ki help :)
gsap.from('.hero h1', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from('.hero p', { opacity: 0, y: 50, duration: 1, delay: 1 });
gsap.from('.hero .btn', { opacity: 0, y: 50, duration: 1, delay: 1.5 });