const footer = document.querySelector('.footer');

const intersectionObserverFooter = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-animated--visible');
    } else {
      entry.target.classList.remove('is-animated--visible');
    }
  });
}, {
  threshold: [0, 0.1],
  rootMargin: '0px 0px -100px 0px'
});

intersectionObserverFooter.observe(footer);

export { intersectionObserverFooter };
