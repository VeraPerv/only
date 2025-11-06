const bestsellerLinks = document.querySelectorAll('.bestseller .products-slider__scrollbar-link');
const bestSellerListItems = document.querySelectorAll('.bestseller-slider__item');

const initBestSellerSlider = () => {
  bestSellerListItems.forEach((item, index) => {
    item.style.display = index === 0 ? 'block' : 'none';
  });

  bestsellerLinks.forEach((link, index) => {
    link.classList.toggle('products-slider__scrollbar-link--active', index === 0);
  });

  bestsellerLinks.forEach((link) => {
    const activateSlide = () => {
      bestSellerListItems.forEach((item, idx) => {
        item.style.display = idx === [...bestsellerLinks].indexOf(link) ? 'block' : 'none';
      });
      bestsellerLinks.forEach((el) => el.classList.remove('products-slider__scrollbar-link--active'));
      link.classList.add('products-slider__scrollbar-link--active');
    };

    link.addEventListener('mouseenter', activateSlide);
    link.addEventListener('focus', activateSlide);
  });
};

document.addEventListener('DOMContentLoaded', initBestSellerSlider);

export { initBestSellerSlider };
