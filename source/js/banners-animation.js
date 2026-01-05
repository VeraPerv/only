export const initBannerAnimations = () => {
  const banners = document.querySelectorAll('.banners');

  if (!banners.length) {
    return;
  }

  const intersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-animated--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  banners.forEach((banner) => {
    intersectionObserver.observe(banner);
  });
};
