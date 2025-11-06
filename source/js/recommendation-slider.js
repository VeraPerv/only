const recommendationLinks = document.querySelectorAll('.recommendation .products-slider__scrollbar-link');
const recommendationItems = document.querySelectorAll('.recommendation-slider__item');

const initRecommendationSlider = () => {
  recommendationItems.forEach((item, index) => {
    item.style.display = index === 0 ? 'block' : 'none';
  });

  recommendationLinks.forEach((link, index) => {
    link.classList.toggle('products-slider__scrollbar-link--active', index === 0);
  });

  recommendationLinks.forEach((link) => {
    const activateSlide = () => {
      recommendationItems.forEach((item, idx) => {
        item.style.display = idx === [...recommendationLinks].indexOf(link) ? 'block' : 'none';
      });
      recommendationLinks.forEach((l) => l.classList.remove('products-slider__scrollbar-link--active'));
      link.classList.add('products-slider__scrollbar-link--active');
    };

    link.addEventListener('mouseenter', activateSlide);
    link.addEventListener('focus', activateSlide);
  });
};

document.addEventListener('DOMContentLoaded', initRecommendationSlider);

export { initRecommendationSlider };
