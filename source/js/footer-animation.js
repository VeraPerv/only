export const initFooterAnimation = () => {
  const footer = document.querySelector('.footer');

  if (!footer) {
    return;
  }

  const intersectionObserverFooter = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('is-animated--visible', entry.isIntersecting);
    });
  }, {
    threshold: [0, 0.1],
    rootMargin: '0px 0px -100px 0px'
  });

  intersectionObserverFooter.observe(footer);
};
