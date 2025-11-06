const slider = document.querySelector('.category__list');
const slides = slider ? Array.from(slider.querySelectorAll('.category-list__item')) : [];

const initCategorySlider = () => {
  if (!slider || slides.length === 0) {
    return;
  }

  let currentIndex = 0;
  let slideWidth = slides[0]?.clientWidth || slider.clientWidth;
  let startX = 0;
  let isDragging = false;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID = 0;
  let velocity = 0;
  let lastTouchX = 0;
  let lastTime = 0;

  const setSlidePosition = () => {
    slideWidth = slides[0]?.clientWidth || slider.clientWidth;
    const visibleCount = Math.floor(slider.clientWidth / slideWidth);
    const maxTranslate = -slideWidth * (slides.length - visibleCount);

    currentTranslate = -currentIndex * slideWidth;

    if (currentTranslate < maxTranslate) {
      currentTranslate = maxTranslate;
    }
    if (currentTranslate > 0) {
      currentTranslate = 0;
    }

    prevTranslate = currentTranslate;
    slider.style.transform = `translateX(${currentTranslate}px)`;
  };

  const animation = () => {
    slider.style.transform = `translateX(${currentTranslate}px)`;

    if (isDragging) {
      animationID = requestAnimationFrame(animation);
    }
  };

  const inertiaAnimation = () => {
    velocity *= 0.95;

    currentTranslate += velocity;

    const maxTranslate = -slideWidth * (slides.length - Math.floor(slider.clientWidth / slideWidth));

    if (currentTranslate > 0) {
      currentTranslate = 0;
      velocity = 0;
    }
    if (currentTranslate < maxTranslate) {
      currentTranslate = maxTranslate;
      velocity = 0;
    }

    slider.style.transform = `translateX(${currentTranslate}px)`;

    if (Math.abs(velocity) > 0.5) {
      animationID = requestAnimationFrame(inertiaAnimation);
    } else {
      currentIndex = Math.round(-currentTranslate / slideWidth);
      setSlidePosition();
    }
  };

  const touchStart = (event) => {
    if (window.innerWidth > 919) {
      return;
    }
    event.preventDefault();
    startX = event.touches[0].clientX;
    lastTouchX = startX;
    lastTime = performance.now();
    isDragging = true;
    velocity = 0;
    animationID = requestAnimationFrame(animation);
    slider.style.transition = 'none';
  };

  const touchMove = (event) => {
    if (!isDragging) {
      return;
    }
    event.preventDefault();

    const currentX = event.touches[0].clientX;
    const deltaX = currentX - startX;
    currentTranslate = prevTranslate + deltaX;

    const now = performance.now();
    const dt = now - lastTime;
    if (dt > 0) {
      velocity = (currentX - lastTouchX) / dt * 16;
      lastTouchX = currentX;
      lastTime = now;
    }
  };

  const touchEnd = () => {
    if (!isDragging) {
      return;
    }
    cancelAnimationFrame(animationID);
    isDragging = false;

    inertiaAnimation();
  };

  const onResize = () => {
    setSlidePosition();
  };

  const initSlider = () => {
    if (window.innerWidth <= 919) {
      setSlidePosition();
    } else {
      slider.style.transition = '';
      slider.style.transform = '';
    }
  };

  slider.addEventListener('touchstart', touchStart, { passive: false });
  slider.addEventListener('touchmove', touchMove, { passive: false });
  slider.addEventListener('touchend', touchEnd);

  window.addEventListener('resize', () => {
    onResize();
    initSlider();
  });

  window.addEventListener('load', () => {
    onResize();
    initSlider();
  });

  initSlider();
};

document.addEventListener('DOMContentLoaded', initCategorySlider);

export { initCategorySlider };
