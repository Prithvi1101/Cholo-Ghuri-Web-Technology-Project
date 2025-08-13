// js/script.js
document.addEventListener('DOMContentLoaded', () => {
  // Active nav-link er jonno
  document.querySelectorAll('.navbar a').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });

  //Smooth scroll korar jonno
  document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href'))
              .scrollIntoView({ behavior: 'smooth' });
    });
  });
});
