
const links = document.querySelectorAll('.sale .products-slider__scrollbar-link');
const listItems = document.querySelectorAll('.sale-slider__item');

const initProductSlider = () => {
  listItems.forEach((item, index) => {
    item.style.display = index === 0 ? 'block' : 'none';
  });

  links.forEach((link, index) => {
    link.classList.toggle('products-slider__scrollbar-link--active', index === 0);
  });

  links.forEach((link) => {
    const activateSlide = () => {
      listItems.forEach((item, idx) => {
        item.style.display = idx === [...links].indexOf(link) ? 'block' : 'none';
      });

      links.forEach((l) => l.classList.remove('products-slider__scrollbar-link--active'));
      link.classList.add('products-slider__scrollbar-link--active');
    };

    link.addEventListener('mouseenter', activateSlide);
    link.addEventListener('focus', activateSlide);
  });
};

document.addEventListener('DOMContentLoaded', initProductSlider);

export { initProductSlider };
