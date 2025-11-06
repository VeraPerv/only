const promoSlider = document.querySelector('.promo__slider');
const promoSliderList = promoSlider ? promoSlider.querySelector('.promo__slider-list') : null;
const promoSlides = promoSliderList ? promoSliderList.children : [];
const promoPagination = promoSlider ? promoSlider.querySelector('.promo__swiper-pagination') : null;
const promoBullets = promoPagination ? Array.from(promoPagination.children) : [];

const initPromoSlider = () => {
  if (!promoSlider || !promoSliderList || promoSlides.length === 0 || !promoPagination) {
    return;
  }

  let currentIndex = 0;
  let sliderWidth = promoSlider.clientWidth;

  let startX = 0;
  let isDragging = false;
  let currentTranslateX = 0;
  let prevTranslateX = 0;
  let animationFrameId = 0;

  const updateActiveBullet = () => {
    promoBullets.forEach((bullet, idx) => {
      bullet.classList.toggle('swiper-pagination__bullet--active', idx === currentIndex);
    });
  };

  const setSliderPosition = () => {
    if (window.innerWidth >= 920) {
      promoSliderList.style.transform = '';
      return;
    }

    currentTranslateX = -currentIndex * sliderWidth;
    prevTranslateX = currentTranslateX;
    promoSliderList.style.transform = `translateX(${currentTranslateX}px)`;
    updateActiveBullet();
  };

  const goToSlide = (index) => {
    if (window.innerWidth >= 920) {
      return;
    }

    if (index < 0) {
      index = 0;
    }
    if (index >= promoSlides.length) {
      index = promoSlides.length - 1;
    }

    currentIndex = index;
    setSliderPosition();
  };

  promoBullets.forEach((bullet, idx) => {
    bullet.addEventListener('click', () => goToSlide(idx));
  });

  const animateMove = () => {
    promoSliderList.style.transform = `translateX(${currentTranslateX}px)`;

    if (isDragging) {
      animationFrameId = requestAnimationFrame(animateMove);
    }
  };

  const onTouchStart = (event) => {
    if (window.innerWidth >= 920) {
      return;
    }

    startX = event.touches[0].clientX;
    isDragging = true;
    animationFrameId = requestAnimationFrame(animateMove);
    promoSliderList.style.transition = 'none';
  };

  const onTouchMove = (event) => {
    if (!isDragging) {
      return;
    }

    const currentX = event.touches[0].clientX;
    const deltaX = currentX - startX;
    currentTranslateX = prevTranslateX + deltaX;
  };

  const onTouchEnd = () => {
    if (!isDragging) {
      return;
    }

    cancelAnimationFrame(animationFrameId);
    isDragging = false;

    const movedBy = currentTranslateX - prevTranslateX;

    if (movedBy < -50 && currentIndex < promoSlides.length - 1) {
      currentIndex += 1;
    }
    if (movedBy > 50 && currentIndex > 0) {
      currentIndex -= 1;
    }

    promoSliderList.style.transition = 'transform 0.3s ease';
    setSliderPosition();
  };

  const onResize = () => {
    sliderWidth = promoSlider.clientWidth;
    setSliderPosition();
  };

  const initialize = () => {
    sliderWidth = promoSlider.clientWidth;

    if (window.innerWidth <= 919) {
      promoSlider.style.overflow = 'hidden';
      setSliderPosition();
      promoSliderList.style.transition = 'transform 0.3s ease';
    } else {
      promoSlider.style.overflow = '';
      promoSliderList.style.transition = '';
      promoSliderList.style.transform = '';
      currentIndex = 0;
      updateActiveBullet();

      currentTranslateX = 0;
      prevTranslateX = 0;
      isDragging = false;
    }
  };

  window.addEventListener('resize', () => {
    onResize();
    initialize();
  });

  window.addEventListener('load', () => {
    onResize();
    initialize();
  });

  initialize();

  promoSliderList.addEventListener('touchstart', (e) => {
    if (window.innerWidth <= 919) {
      onTouchStart(e);
    }
  }, { passive: true });

  promoSliderList.addEventListener('touchmove', (e) => {
    if (window.innerWidth <= 919) {
      onTouchMove(e);
    }
  }, { passive: true });

  promoSliderList.addEventListener('touchend', (e) => {
    if (window.innerWidth <= 919) {
      onTouchEnd(e);
    }
  });
};

document.addEventListener('DOMContentLoaded', initPromoSlider);

export { initPromoSlider };
