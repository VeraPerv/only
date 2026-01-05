const projectsSection = document.querySelector('.projects');
const projectsList = projectsSection?.querySelector('.projects__list');
const projectsListItems = projectsList?.querySelectorAll('.projects-list__item');
const projectsSliderScreen = projectsSection?.querySelector('.projects__slider-screen');
const previousButton = projectsSection?.querySelector('.slider-button--left');
const nextButton = projectsSection?.querySelector('.slider-button--right');
const sliderContainer = document.querySelector('.projects__list');
const items = document.querySelectorAll('.projects-list__item');

let slideWidth = 0;
let totalSlides = 0;
let projectModel = [];
let observer = null;

const createModelArr = (length, index) => new Array(length).fill(false).map((_, i) => i === index);

const getRealListWidth = () => Array.from(projectsListItems || []).reduce((sum, item) => sum + item.offsetWidth, 0);

const updateSlideWidth = () => {
  if (!projectsSliderScreen || !projectsListItems?.length) {
    return;
  }
  totalSlides = projectsListItems.length;
  slideWidth = projectsSliderScreen.offsetWidth;
  projectModel = createModelArr(totalSlides, 0);
  projectsList.style.transform = 'translateX(0px)';
};

const compareListWithTransformWidth = (currentOffset) => {
  if (!previousButton || !nextButton) {
    return;
  }
  const realListWidth = getRealListWidth();
  const maxOffset = realListWidth - slideWidth;
  previousButton.disabled = currentOffset <= 0;
  nextButton.disabled = currentOffset >= maxOffset;
};

const setActiveElement = (index) => {
  if (index >= 0 && index < totalSlides) {
    projectModel = createModelArr(totalSlides, index);
  }
};

const renderActiveScreen = () => {
  if (slideWidth <= 0) {
    return;
  }
  const index = projectModel.findIndex(Boolean);
  if (index >= 0) {
    const currentOffset = slideWidth * index;
    projectsList.style.transform = `translateX(-${currentOffset}px)`;
    compareListWithTransformWidth(currentOffset);
  }
};

const previousSlide = () => {
  const index = projectModel.findIndex(Boolean);
  if (index > 0) {
    setActiveElement(index - 1);
    renderActiveScreen();
  }
};

const nextSlide = () => {
  const index = projectModel.findIndex(Boolean);
  if (index < totalSlides - 1) {
    setActiveElement(index + 1);
    renderActiveScreen();
  }
};

const initSliderObserver = () => {
  if (observer) {
    observer.disconnect();
  }
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = entry.target.querySelector('.projects-card__link');
      if (link) {
        if (entry.isIntersecting) {
          link.removeAttribute('tabindex');
        } else {
          link.setAttribute('tabindex', '-1');
        }
      }
    });
  }, { root: sliderContainer, threshold: 0.1 });
  items.forEach((item) => observer?.observe(item));
};

const initProjectsSlider = () => {
  updateSlideWidth();
  renderActiveScreen();
  initSliderObserver();
};

previousButton?.addEventListener('click', previousSlide);
nextButton?.addEventListener('click', nextSlide);

window.addEventListener('resize', () => {
  updateSlideWidth();
  initSliderObserver();
});

window.addEventListener('load', initProjectsSlider);
document.addEventListener('DOMContentLoaded', initProjectsSlider);

export { initProjectsSlider };
