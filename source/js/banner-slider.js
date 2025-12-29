const sliderListItems = [...document.querySelectorAll('.banners-list__item')];
const bulletButtons = [...document.querySelectorAll('.bullet-button')];
const bannersSection = document.querySelector('.banners');

const createModelArr = (length, index) => {
  const newArr = new Array(length).fill(false);
  newArr[index] = true;
  return newArr;
};

const model = createModelArr(sliderListItems.length, 0);
let isTransitioning = false;

const getActiveScreen = (index) => {
  const current = model.findIndex((item) => item === true);
  if (current !== -1) {
    model[current] = false;
  }
  model[index] = true;
  return index;
};
const renderActiveScreen = (index) => {
  if (isTransitioning) {
    return;
  }

  isTransitioning = true;
  bannersSection.classList.remove('is-animated--visible');
  const prevSlide = document.querySelector('.banners-list__item--current');
  if (prevSlide) {
    prevSlide.classList.remove('banners-list__item--current');
  }

  const prevBullet = document.querySelector('.bullet-button--current');
  if (prevBullet) {
    prevBullet.classList.remove('bullet-button--current');
  }

  sliderListItems[index].classList.add('banners-list__item--current');
  bulletButtons[index].classList.add('bullet-button--current');

  requestAnimationFrame(() => {
    bannersSection.classList.add('is-animated--visible');
  });

  setTimeout(() => {
    isTransitioning = false;
  }, 600);
};
const initializeSlider = () => {
  if (!bannersSection || sliderListItems.length === 0 || bulletButtons.length === 0) {
    return;
  }

  bulletButtons.forEach((bullet, index) => {
    bullet.addEventListener('click', (evt) => {
      evt.preventDefault();
      renderActiveScreen(getActiveScreen(index));
    });
  });
};

document.addEventListener('DOMContentLoaded', initializeSlider);
export { initializeSlider };
