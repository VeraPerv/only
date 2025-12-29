import {initializeSlider} from './banner-slider';
import {initProjectsSlider} from './projects-slider';
import {initToggleMenu} from './burger-menu';
import {intersectionObserver} from './banners-animation';
import {intersectionObserverFooter} from './footer-animation';

initializeSlider();
initProjectsSlider();
initToggleMenu();
intersectionObserver();
intersectionObserverFooter();


//интерсекшен обсервер ДЛЯ БАННЕРОВ

// const intersectionObserver = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('is-animated--visible');
//       observer.unobserve(entry.target); // одноразовое срабатывание
//     }
//   });
// }, {
//   threshold: 0.1,
//   // rootMargin: '0px 0px -100px 0px' // срабатывает за 100px до появления
// });

// // Наблюдаем за контейнером banner (все promo-wrapper внутри него анимируются)
// document.querySelectorAll('.banners').forEach((banner) => {
//   intersectionObserver.observe(banner);
// });


//ВИДИМЫЕ НЕ ВИДИМЫЕ ЭЛЕМЕНТЫ СЛАЙДЕРА проджект
// const sliderContainer = document.querySelector('.projects__list');
// const items = document.querySelectorAll('.projects-list__item');

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     const link = entry.target.querySelector('.projects-card__link');
//     if (entry.isIntersecting) {
//       link.removeAttribute('tabindex'); // Видим - фокусируем
//     } else {
//       link.setAttribute('tabindex', '-1'); // Скрыт - убираем из Tab
//     }
//   });
// }, {
//   root: sliderContainer, // Контейнер слайдера как область наблюдения
//   threshold: 0.1 // Срабатывает при 10% видимости
// });

// // Запускаем наблюдение
// items.forEach(item => observer.observe(item));

// // Обновление при ресайзе (transform может сдвигаться)
// window.addEventListener('resize', () => observer.disconnect() || observer.observe(items));


// табиндексы

// const header = document.querySelector('.header');
// const nav = header?.querySelector('.header-nav');
// const toggleButton = nav?.querySelector('.header-nav__button');
// const mobileMenu = nav?.querySelector('.header-nav__list');
// // const navList = mobileMenu?.querySelectorAll('a, button');

// const headerNavList = document.querySelector('.header-nav__list');
// const headerNavListItems = headerNavList ? headerNavList.querySelectorAll('.header-nav__link') : null;
// const breakpoint = window.matchMedia('(min-width: 1280px)');

// const setTabIndex = () => {
//   const arrOfItems = Array.from(headerNavListItems);
//   if (headerNavList.classList.contains('header-nav__list--open')) {
//     arrOfItems.forEach((item) => {
//       item.setAttribute('tabindex', '0');
//     });
//   }

//   if(!breakpoint) {
//     arrOfItems.forEach((item) => {
//       item.setAttribute('tabindex', '-1');
//     });
//   }
//   if (breakpoint.matches) {
//     arrOfItems.forEach((item) => {
//       item.setAttribute('tabindex', '0');
//     });
//   }
// };

// setTabIndex();

// toggleButton.addEventListener('click', () => {
//   mobileMenu.classList.toggle('header-nav__list--open');
//   document.body.classList.toggle('body--overflow');
//   nav.classList.toggle('header-nav--open');
//   setTabIndex();
// });

//  breakpoint.addEventListener('change', () => {
//   if (breakpoint.matches) {
//     setTabIndex();
//   }
// }

// );

// const breakpoint = window.matchMedia('(min-width: 1280px)');
// breakpoint.addEventListener('change', () => {
//   if (breakpoint.matches) {
//     // На десктопе всегда убираем tabindex=-1
//     Array.from(headerNavListItems).forEach((item) => {
//       item.tabIndex = 0;
//     });
//   } else {
//     setTabIndex(); // Мобильная логика по классу
//   }
// });




// breakpoint.addEventListener('change', () => {
//   if (breakpoint.matches) {
//     // На десктопе всегда убираем tabindex=-1
//     Array.from(headerNavListItems).forEach(item => {
//       item.removeAttribute('tabindex');
//     });
//   } else {
//     setTabIndex(); // Мобильная логика по классу
//   }
// });

//футер обсервер

// const intersectionObserverFooter = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('is-animated--visible');
//       // ✅ УБРАЛИ unobserve() - теперь МНОГОКРАТНЫЙ
//     }
//   });
// }, {
//   threshold: 0.1,
//   rootMargin: '0px 0px -100px 0px'
// });

///ДЛЯ ФУТЕРА

// const footer = document.querySelector('.footer');
// // Наблюдаем за контейнером footer
// intersectionObserver.observe(footer);


// const intersectionObserverFooter = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('is-animated--visible');
//     } else {
//       // ✅ СБРОС: remove + reflow для перезапуска transition
//       entry.target.classList.remove('is-animated--visible');
//       entry.target.offsetHeight; // ✅ Принудительный reflow
//     }
//   });
// }, {
//   threshold: [0, 0.1], // ✅ Ловим ВХОД(0) и ВЫХОД(0.1)
//   rootMargin: '0px 0px -100px 0px'
// });

// const footer = document.querySelector('.footer');
// intersectionObserverFooter.observe(footer);

//проджект слайдер
// const projectsSection = document.querySelector('.projects');
// const projectsList = projectsSection?.querySelector('.projects-list');
// const projectsListItems = projectsList?.querySelectorAll('.projects-list__item');
// const projectsSliderScreen = projectsSection?.querySelector('.project__slider-screen');
// const previousButton = projectsSection?.querySelector('.slider-button--left');
// const nextButton = projectsSection?.querySelector('.slider-button--right');

// let slideWidth = 0;
// let totalSlides = 0;
// let projectModel = [];

// const createModelArr = (length, index) => {
//   const newArr = new Array(length).fill(false);
//   newArr[index] = true;
//   return newArr;
// };

// // ✅ РЕАЛЬНАЯ ШИРИНА СПИСКА = сумма ширин слайдов
// const getRealListWidth = () => {
//   if (projectsListItems?.length > 0) {
//     const totalWidth = Array.from(projectsListItems).reduce((sum, item) => {
//       return sum + item.offsetWidth;
//     }, 0);
//     console.log('Реальная ширина списка:', totalWidth);
//     return totalWidth;
//   }
//   return 0;
// };

// const updateSlideWidth = () => {
//   if (projectsSliderScreen && projectsListItems?.length > 0) {
//     totalSlides = projectsListItems.length;
//     slideWidth = projectsSliderScreen.offsetWidth; // Ширина видимой области
//     projectModel = createModelArr(totalSlides, 0);
//     projectsList.style.transform = 'translateX(0px)';
//   }
// };

// const compareListWithTransformWidth = (currentOffset) => {
//   const realListWidth = getRealListWidth(); // ✅ Реальная ширина
//   const maxOffset = realListWidth - slideWidth; // Максимальный сдвиг

//   // Блокируем кнопки по реальным границам
//   previousButton.disabled = currentOffset <= 0;
//   nextButton.disabled = currentOffset >= maxOffset;

//   console.log('Текущий сдвиг:', currentOffset);
//   console.log('Макс сдвиг:', maxOffset);
//   console.log('Реальная ширина списка:', realListWidth);
// };

// const setActiveElement = (index) => {
//   if (index >= 0 && index < totalSlides) {
//     projectModel.forEach((item, i) => {
//       projectModel[i] = i === index;
//     });
//   }
// };

// const renderActiveScreen = () => {
//   const index = projectModel.findIndex((item) => item);
//   if (slideWidth > 0 && index >= 0) {
//     const currentOffset = slideWidth * index; // Положительное число
//     projectsList.style.transform = `translateX(-${currentOffset}px)`;

//     compareListWithTransformWidth(currentOffset);
//   }
// };

// const render = () => {
//   renderActiveScreen();
// };

// previousButton?.addEventListener('click', () => {
//   const index = projectModel.findIndex((item) => item);
//   if (index > 0) {
//     setActiveElement(index - 1);
//     render();
//   }
// });

// nextButton?.addEventListener('click', () => {
//   const index = projectModel.findIndex((item) => item);
//   if (index < totalSlides - 1) {
//     setActiveElement(index + 1);
//     render();
//   }
// });

// const initProjectsSlider = () => {
//   if (projectsListItems?.length > 0) {
//     updateSlideWidth();
//     render();
//   }
// };

// window.addEventListener('resize', updateSlideWidth);
// window.addEventListener('load', initProjectsSlider);
// document.addEventListener('DOMContentLoaded', initProjectsSlider);

// анимация футер спан



//нормальный

// const projectsSection = document.querySelector('.projects');
// const projectsList = projectsSection?.querySelector('.projects-list');
// const projectsListItems = projectsList?.querySelectorAll('.projects-list__item');
// const projectsSliderScreen = projectsSection?.querySelector('.project__slider-screen');
// const previousButton = projectsSection?.querySelector('.slider-button--left');
// const nextButton = projectsSection?.querySelector('.slider-button--right');

// let slideWidth = 0;
// let totalSlides = 0;

// const createModelArr = (length, index) => {
//   const newArr = new Array(length).fill(false);
//   newArr[index] = true;
//   return newArr;
// };

// let projectModel = []; // Будет обновляться динамически

// // Функция пересчёта ширины и количества слайдов

// const updateButtonsState = () => {
//   const currentIndex = projectModel.findIndex(item => item);

//   // Блокируем "назад" на первом слайде (index 0)
//   const isFirstSlide = currentIndex <= 0;
//   previousButton.disabled = isFirstSlide;
//   previousButton.classList.toggle('disabled', isFirstSlide);

//   // Блокируем "вперёд" на последнем слайде
//   const isLastSlide = currentIndex >= totalSlides - 1;
//   nextButton.disabled = isLastSlide;
//   nextButton.classList.toggle('disabled', isLastSlide);
// };

// const updateSlideWidth = () => {
//   if (projectsSliderScreen && projectsListItems?.length > 0) {
//     totalSlides = projectsListItems.length;
//     slideWidth = projectsSliderScreen.offsetWidth;
//     projectModel = createModelArr(totalSlides, 0);

//     // Сбрасываем трансформацию при изменении ширины
//     projectsList.style.transform = 'translateX(0px)';
//     updateButtonsState();
//   }
// };

// // Обновление состояния кнопок


// const setActiveElement = (index) => {
//   projectModel.forEach((item, i) => {
//     projectModel[i] = i === index;
//   });
// };

// const renderActiveScreen = () => {
//   const index = projectModel.findIndex((item) => item);
//   projectsList.style.transform = `translateX(${-slideWidth * index}px)`;
//   updateButtonsState();
// };

// const render = () => {
//   renderActiveScreen();
// };

// // Обработчик предыдущей кнопки
// previousButton?.addEventListener('click', (evt) => {
//   const currentIndex = projectModel.findIndex((item) => item);
//   if (currentIndex > 0) { // Только если НЕ первый слайд
//     setActiveElement(currentIndex - 1);

//     render();
//   }
// });

// // Обработчик следующей кнопки
// nextButton?.addEventListener('click', (evt) => {
//   const currentIndex = projectModel.findIndex((item) => item);
//   if (currentIndex < totalSlides - 1) { // Только если НЕ последний слайд

//     render();
//   }
// });

// // Инициализация слайдера
// const initProjectsSlider = () => {
//   if (projectsListItems?.length > 0) {
//     updateSlideWidth();
//   }
// };

// // Обработчики событий
// window.addEventListener('resize', updateSlideWidth);
// window.addEventListener('load', initProjectsSlider);


// projects-slider
// const projectsSection = document.querySelector('.projects');
// const projectsList = projectsSection?.querySelector('.projects-list');
// const projectsListItems = projectsList?.querySelectorAll('.projects-list__item');
// const projectsSliderScreen = projectsSection?.querySelector('.project__slider-screen');
// const previousButton = projectsSection?.querySelector('.slider-button--left');
// const nextButton = projectsSection?.querySelector('.slider-button--right');

// let slideWidth = 0; // Ширина одного слайда (динамическая)

// const createModelArr = (length, index) => {
//   const newArr = new Array(length).fill(false);
//   newArr[index] = true;
//   return newArr;
// };

// const projectModel = createModelArr(projectsListItems.length, 0);

// // Функция пересчёта ширины слайда
// const updateSlideWidth = () => {
//   if (projectsSliderScreen && projectsListItems[0]) {
//     slideWidth = projectsSliderScreen.offsetWidth;
//     // Сбрасываем трансформацию при изменении ширины
//     projectsList.style.transform = 'translateX(0px)';
//   }
// };

// const setActiveElement = (index) => {
//   projectModel.forEach((item, i) => {
//     projectModel[i] = i === index;
//   });
// };

// const renderActiveScreen = () => {
//   const index = projectModel.findIndex((item) => item);
//   projectsList.style.transform = `translateX(${-slideWidth * index}px)`;
// };

// const render = () => {
//   renderActiveScreen();
// };

// // Обработчики кнопок
// previousButton?.addEventListener('click', () => {
//   const index = projectModel.findIndex((item) => item);
//   const previous = index - 1 >= 0 ? index - 1 : 0;
//   setActiveElement(previous);
//   render();
// });

// nextButton?.addEventListener('click', () => {
//   const index = projectModel.findIndex((item) => item);
//   const next = index + 1 < projectModel.length ? index + 1 : projectModel.length - 1;
//   setActiveElement(next);
//   render();
// });

// // Инициализация и обработка ресайза
// const initProjectsSlider = () => {
//   updateSlideWidth();
//   render();
// };

// window.addEventListener('resize', () => {
//   updateSlideWidth();
//   render();
// });

// window.addEventListener('load', initProjectsSlider);



// projects-slider
// const projectsList = document.querySelector('.projects-list');
// const projectsListItems = projectsList?.querySelectorAll('.projects-list__item');
// const projectsSection = document.querySelector('.projects');
// const previousButton = projectsSection?.querySelector('.slider-button--left');
// const nextButton = projectsSection?.querySelector('.slider-button--right');

// const projectsSLiderScreen = projectsSection?.querySelector('.project__slider-screen');
// console.log(projectsSLiderScreen);

// const createModelArr = (length,index) => {
//   const newArr = new Array(length).fill(false);
//   newArr[index] = true;
//   return newArr;
// };

// const projectModel = createModelArr(projectsListItems.length,0);
// console.log(projectModel)


// //              0     1       2
// const setActiveElement = (index) => {
//   projectModel.forEach((item, i) => {
//     projectModel[i] = i === index;
//   });
// };

//   const renderActiveScreen = () => {
//     const index = projectModel.findIndex((item) => item);
//     projectsList.style.transform = `translateX(${-728 * index}px)`;
//   };


//   const render = () => {
//     renderActiveScreen();
//     // renderActiveDot();
//     // setTabIndex();
//   };

// previousButton.addEventListener('click', () => {
//   const index = projectModel.findIndex((item) => item);
//   const previous = index - 1 > 0 ? index - 1 : 0;
//   setActiveElement(previous);
//   render();
// });


// nextButton.addEventListener('click', () => {
//   const index = projectModel.findIndex((item) => item);
//   const next = index + 1 < projectModel.length ? index + 1 : projectModel.length - 1;
//   setActiveElement(next);
//   render();
// });





// const heroVideo = document.querySelector('.video');
// const heroSection = document.querySelector('.hero');

// const io = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       heroVideo.classList.add('video--expanded');
//       // закрепляем позицию относительно секции
//       heroVideo.style.position = 'absolute';
//       heroVideo.style.top = '0';
//       heroVideo.style.left = '0';
//     } else {
//       heroVideo.classList.remove('video--expanded');
//       heroVideo.style.position = 'relative';
//       heroVideo.style.width = '225px';
//       heroVideo.style.height = '135px';
//     }
//   });
// }, { threshold: [0, 1] }); // Следим за полным попаданием секции

// io.observe(heroSection);

// // Для плавной анимации скролла можно добавить listener scroll
// window.addEventListener('scroll', () => {
//   const rect = heroSection.getBoundingClientRect();
//   if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
//     // Видео увеличено и внутри секции
//     heroVideo.classList.add('video--expanded');
//   } else if (rect.top > 0) {
//     // Вверху страницы - видео возвращается в исходный размер
//     heroVideo.classList.remove('video--expanded');
//   }
// });

// const heroSection = document.querySelector('.hero');
// const video = document.querySelector('.hero__video');
// const videoInitialWidth = 225;
// const videoInitialHeight = 135;
// const aspectRatio = videoInitialWidth / videoInitialHeight; // Сохраняем пропорцию

// function updateVideoSize() {
//   const heroRect = heroSection.getBoundingClientRect();
//   const scrollProgress = Math.max(0, Math.min(1, (heroRect.height - heroRect.bottom) / heroRect.height));

//   // Пропорционально увеличиваем видео
//   const newWidth = videoInitialWidth + (heroRect.width - videoInitialWidth) * scrollProgress;
//   const newHeight = newWidth / aspectRatio; // Вычисляем высоту по пропорции

//   // Ограничиваем размер видео по высоте родителя
//   const maxHeight = heroRect.height;
//   const finalHeight = Math.min(newHeight, maxHeight);
//   const finalWidth = finalHeight * aspectRatio;

//   video.style.width = `${finalWidth}px`;
//   video.style.height = `${finalHeight}px`;
// }

// // Оптимизация: обновляем размер только при прокрутке
// let ticking = false;
// window.addEventListener('scroll', () => {
//   if (!ticking) {
//     requestAnimationFrame(() => {
//       updateVideoSize();
//       ticking = false;
//     });
//     ticking = true;
//   }
// });

// // Вызываем функцию при загрузке
// updateVideoSize();

// const heroSection = document.querySelector('.hero');
// const video = document.querySelector('.hero__video');
// const videoInitialWidth = 225;
// const videoInitialHeight = 135;
// const aspectRatio = videoInitialWidth / videoInitialHeight;

// function updateVideoSize() {
//   const heroRect = heroSection.getBoundingClientRect();
//   const windowHeight = window.innerHeight;
//   const scrollProgress = Math.max(0, Math.min(1, (heroRect.height - heroRect.bottom) / heroRect.height));

//   // Если секция полностью ушла из виду, возвращаем исходный размер
//   if (heroRect.bottom < 0) {
//     video.style.width = `${videoInitialWidth}px`;
//     video.style.height = `${videoInitialHeight}px`;
//     return;
//   }

//   // Плавно увеличиваем видео до размера экрана
//   const newWidth = videoInitialWidth + (window.innerWidth - videoInitialWidth) * scrollProgress;
//   const newHeight = newWidth / aspectRatio;

//   // Ограничиваем высоту по размеру экрана
//   const finalHeight = Math.min(newHeight, windowHeight);
//   const finalWidth = finalHeight * aspectRatio;

//   video.style.width = `${finalWidth}px`;
//   video.style.height = `${finalHeight}px`;
// }

// // Оптимизация через requestAnimationFrame
// let ticking = false;
// window.addEventListener('scroll', () => {
//   if (!ticking) {
//     requestAnimationFrame(() => {
//       updateVideoSize();
//       ticking = false;
//     });
//     ticking = true;
//   }
// });

// updateVideoSize();


// const video = document.querySelector('.video__video');
// const heroSection = document.querySelector('.hero');

// function updateVideoSize() {
//   const heroRect = heroSection.getBoundingClientRect();
//   const windowHeight = window.innerHeight;

//   // Показываем видео на весь экран, если секция в зоне видимости
//   if (heroRect.top <= windowHeight && heroRect.bottom >= 0) {
//     video.style.position = 'fixed';
//     video.style.top = '0';
//     video.style.left = '0';
//     video.style.width = '100vw';
//     video.style.height = '100vh';
//     video.style.objectFit = 'cover';
//     video.style.zIndex = '10';
//     video.style.opacity = '1';
//   } else {
//     // Возвращаем исходные стили
//     video.style.position = '';
//     video.style.top = '';
//     video.style.left = '';
//     video.style.width = '225px';
//     video.style.height = '135px';
//     video.style.objectFit = '';
//     video.style.zIndex = '';
//     video.style.opacity = '';
//   }
// }

// // Оптимизация через requestAnimationFrame
// let ticking = false;
// window.addEventListener('scroll', () => {
//   if (!ticking) {
//     requestAnimationFrame(() => {
//       updateVideoSize();
//       ticking = false;
//     });
//     ticking = true;
//   }
// });

// // Вызываем функцию при загрузке
// updateVideoSize();

////УДАЧНЫЙ ВЫХОД
// const video = document.querySelector('.video__video');
// const video = document.querySelector('.video');
// const heroSection = document.querySelector('.hero');

// function updateVideoSize() {
//   const heroRect = heroSection.getBoundingClientRect();
//   const windowHeight = window.innerHeight;
//   const scrollProgress = Math.max(0, Math.min(1, (heroRect.height - heroRect.bottom) / heroRect.height));

//   // Плавное увеличение с запозданием
//   if (heroRect.top <= windowHeight && heroRect.bottom >= 0) {
//     const newWidth = 225 + (window.innerWidth - 225) * scrollProgress;
//     const newHeight = 135 + (window.innerHeight - 135) * scrollProgress;
//     // video.style.position = 'fixed';
//     video.style.position = 'sticky';
//     video.style.top = '0';
//     video.style.left = '0';
//     video.style.width = `${newWidth}px`;
//     video.style.height = `${newHeight}px`;
//     video.style.objectFit = 'cover';
//     video.style.zIndex = '10';
//     video.style.opacity = '1';
//   } else {
//     // Плавное уменьшение
//     video.style.position = '';
//     video.style.top = '';
//     video.style.left = '';
//     video.style.width = '225px';
//     video.style.height = '135px';
//     video.style.objectFit = '';
//     video.style.zIndex = '';
//     video.style.opacity = '';
//   }
// }

// // Оптимизация через requestAnimationFrame
// let ticking = false;
// window.addEventListener('scroll', () => {
//   if (!ticking) {
//     requestAnimationFrame(() => {
//       updateVideoSize();
//       ticking = false;
//     });
//     ticking = true;
//   }
// });

// // Вызываем функцию при загрузке
// updateVideoSize();
//удачный два

// const video = document.querySelector('.video');
// const heroSection = document.querySelector('.hero');

// function updateVideoSize() {
//   const heroRect = heroSection.getBoundingClientRect();
//   const windowHeight = window.innerHeight;
//   // Увеличиваем диапазон, чтобы видео успевало увеличиться
//   const scrollProgress = Math.max(0, Math.min(1, (heroRect.height - heroRect.bottom + windowHeight * 0.5) / (heroRect.height + windowHeight * 0.5)));

//   if (heroRect.top <= windowHeight && heroRect.bottom >= 0) {
//     const newWidth = 225 + (window.innerWidth - 225) * scrollProgress;
//     const newHeight = 135 + (window.innerHeight - 135) * scrollProgress;

//     video.style.position = 'sticky';
//     video.style.top = '0';
//     video.style.left = '0';
//     video.style.width = `${newWidth}px`;
//     video.style.height = `${newHeight}px`;
//     video.style.objectFit = 'cover';
//     video.style.zIndex = '10';
//     video.style.opacity = '1';
//   } else {
//     video.style.position = '';
//     video.style.top = '';
//     video.style.left = '';
//     video.style.width = '225px';
//     video.style.height = '135px';
//     video.style.objectFit = '';
//     video.style.zIndex = '';
//     video.style.opacity = '';
//   }
// }

// let ticking = false;
// window.addEventListener('scroll', () => {
//   if (!ticking) {
//     requestAnimationFrame(() => {
//       updateVideoSize();
//       ticking = false;
//     });
//     ticking = true;
//   }
// });

// updateVideoSize();
//НИЧЕГО ТАКОЙ
// const video = document.querySelector('.video');
// const heroSection = document.querySelector('.hero');
// const initialWidth = 225;
// const initialHeight = 135;
// const maxWidth = window.innerWidth;
// const maxHeight = window.innerHeight;

// function updateVideoSize() {
//   const heroRect = heroSection.getBoundingClientRect();
//   const windowHeight = window.innerHeight;
//   // Увеличиваем скорость анимации в 2 раза
//   const scrollProgress = Math.max(0, Math.min(1, (heroRect.height - heroRect.bottom + windowHeight * 0.5) / (heroRect.height + windowHeight * 0.5)) * 2);

//   if (heroRect.top <= windowHeight && heroRect.bottom >= 0) {
//     const newWidth = initialWidth + (maxWidth - initialWidth) * scrollProgress;
//     const newHeight = initialHeight + (maxHeight - initialHeight) * scrollProgress;

//     // Ограничиваем максимальные размеры
//     const finalWidth = Math.min(newWidth, maxWidth);
//     const finalHeight = Math.min(newHeight, maxHeight);

//     video.style.position = 'sticky';
//     video.style.top = '0';
//     video.style.left = '0';
//     video.style.width = `${finalWidth}px`;
//     video.style.height = `${finalHeight}px`;
//     video.style.objectFit = 'cover';
//     video.style.zIndex = '10';
//     video.style.opacity = '1';
//   } else {
//     video.style.position = '';
//     video.style.top = '';
//     video.style.left = '';
//     video.style.width = `${initialWidth}px`;
//     video.style.height = `${initialHeight}px`;
//     video.style.objectFit = '';
//     video.style.zIndex = '';
//     video.style.opacity = '';
//   }
// }

// let ticking = false;
// window.addEventListener('scroll', () => {
//   if (!ticking) {
//     requestAnimationFrame(() => {
//       updateVideoSize();
//       ticking = false;
//     });
//     ticking = true;
//   }
// });

// updateVideoSize();
// const video = document.querySelector('.video');
// const heroSection = document.querySelector('.hero');
// // Получаем изначальные размеры из CSS
// const initialWidth = parseFloat(getComputedStyle(video).width);
// console.log(initialWidth);
// const initialHeight = parseFloat(getComputedStyle(video).height);
// console.log(initialHeight);
// const maxWidth = window.innerWidth;
// const maxHeight = window.innerHeight;

// function updateVideoSize() {
//   const heroRect = heroSection.getBoundingClientRect();
//   const windowHeight = window.innerHeight;
//   // Увеличиваем скорость анимации в 2 раза
//   const scrollProgress = Math.max(0, Math.min(1, (heroRect.height - heroRect.bottom + windowHeight * 0.5) / (heroRect.height + windowHeight * 0.5)) * 2);

//   if (heroRect.top <= windowHeight && heroRect.bottom >= 0) {
//     const newWidth = initialWidth + (maxWidth - initialWidth) * scrollProgress;
//     const newHeight = initialHeight + (maxHeight - initialHeight) * scrollProgress;

//     // Ограничиваем максимальные размеры
//     const finalWidth = Math.min(newWidth, maxWidth);
//     const finalHeight = Math.min(newHeight, maxHeight);

//     video.style.position = 'sticky';
//     video.style.top = '0';
//     video.style.left = '0';
//     video.style.width = `${finalWidth}px`;
//     video.style.height = `${finalHeight}px`;
//     video.style.objectFit = 'cover';
//     video.style.zIndex = '10';
//     video.style.opacity = '1';
//   } else {
//     video.style.position = '';
//     video.style.top = '';
//     video.style.left = '';
//     video.style.width = `${initialWidth}px`;
//     video.style.height = `${initialHeight}px`;
//     video.style.objectFit = '';
//     video.style.zIndex = '';
//     video.style.opacity = '';
//   }
// }

// let ticking = false;
// window.addEventListener('scroll', () => {
//   if (!ticking) {
//     requestAnimationFrame(() => {
//       updateVideoSize();
//       ticking = false;
//     });
//     ticking = true;
//   }
// });

// updateVideoSize();


// const video = document.querySelector('.video');
// const heroSection = document.querySelector('.hero');
// // Получаем изначальные размеры из CSS при загрузке
// const initialWidth = parseFloat(getComputedStyle(video).width);
// const initialHeight = parseFloat(getComputedStyle(video).height);
// const maxWidth = window.innerWidth;
// const maxHeight = window.innerHeight;

// function updateVideoSize() {
//   const heroRect = heroSection.getBoundingClientRect();
//   const windowHeight = window.innerHeight;
//   // Увеличиваем скорость анимации в 2 раза
//   const scrollProgress = Math.max(0, Math.min(1, (heroRect.height - heroRect.bottom + windowHeight * 0.5) / (heroRect.height + windowHeight * 0.5)) * 2);

//   if (heroRect.top <= windowHeight && heroRect.bottom >= 0) {
//     const newWidth = initialWidth + (maxWidth - initialWidth) * scrollProgress;
//     const newHeight = initialHeight + (maxHeight - initialHeight) * scrollProgress;

//     // Ограничиваем максимальные размеры
//     const finalWidth = Math.min(newWidth, maxWidth);
//     const finalHeight = Math.min(newHeight, maxHeight);

//     video.style.position = 'sticky';
//     video.style.top = '0';
//     video.style.left = '0';
//     video.style.width = `${finalWidth}px`;
//     video.style.height = `${finalHeight}px`;
//     video.style.objectFit = 'cover';
//     video.style.zIndex = '10';
//     video.style.opacity = '1';
//   } else {
//     // Возвращаем исходные размеры из CSS
//     video.style.position = '';
//     video.style.top = '';
//     video.style.left = '';
//     video.style.width = '';
//     video.style.height = '';
//     video.style.objectFit = '';
//     video.style.zIndex = '';
//     video.style.opacity = '';
//   }
// }

// let ticking = false;
// window.addEventListener('scroll', () => {
//   if (!ticking) {
//     requestAnimationFrame(() => {
//       updateVideoSize();
//       ticking = false;
//     });
//     ticking = true;
//   }
// });

// // Получаем размеры один раз при загрузке
// updateVideoSize();

//ИЗНАЧАЛЬНЫЕ РАЗМЕРЫ СОХРАНЕНЫ, КОНЕЧНЫЕ НЕ ВОЗВРАЩАЮТСЯ
// const video = document.querySelector('.video');
// const heroSection = document.querySelector('.hero');
// // Размеры берём только при прокрутке
// let initialWidth, initialHeight;
// const maxWidth = window.innerWidth;
// const maxHeight = window.innerHeight;

// function updateVideoSize() {
//   // Получаем изначальные размеры из CSS только при первом вызове
//   if (initialWidth === undefined) {
//     initialWidth = parseFloat(getComputedStyle(video).width);
//     initialHeight = parseFloat(getComputedStyle(video).height);
//   }

//   const heroRect = heroSection.getBoundingClientRect();
//   const windowHeight = window.innerHeight;
//   // Увеличиваем скорость анимации в 2 раза
//   const scrollProgress = Math.max(0, Math.min(1, (heroRect.height - heroRect.bottom + windowHeight * 0.5) / (heroRect.height + windowHeight * 0.5)) * 2);

//   if (heroRect.top <= windowHeight && heroRect.bottom >= 0) {
//     const newWidth = initialWidth + (maxWidth - initialWidth) * scrollProgress;
//     const newHeight = initialHeight + (maxHeight - initialHeight) * scrollProgress;

//     // Ограничиваем максимальные размеры
//     const finalWidth = Math.min(newWidth, maxWidth);
//     const finalHeight = Math.min(newHeight, maxHeight);

//     video.style.position = 'sticky';
//     video.style.top = '0';
//     video.style.left = '0';
//     video.style.width = `${finalWidth}px`;
//     video.style.height = `${finalHeight}px`;
//     video.style.objectFit = 'cover';
//     video.style.zIndex = '10';
//     video.style.opacity = '1';
//   } else {
//     // Возвращаем исходные размеры из CSS
//     video.style.position = '';
//     video.style.top = '';
//     video.style.left = '';
//     video.style.width = '';
//     video.style.height = '';
//     video.style.objectFit = '';
//     video.style.zIndex = '';
//     video.style.opacity = '';
//   }
// }

// let ticking = false;
// window.addEventListener('scroll', () => {
//   if (!ticking) {
//     requestAnimationFrame(() => {
//       updateVideoSize();
//       ticking = false;
//     });
//     ticking = true;
//   }
// });

// Не вызываем updateVideoSize при загрузке
// const video = document.querySelector('.video');
// const heroSection = document.querySelector('.hero');
// let initialWidth, initialHeight;
// const maxWidth = window.innerWidth;
// const maxHeight = window.innerHeight;

// function updateVideoSize() {
//   // Получаем изначальные размеры из CSS только при первом вызове
//   if (initialWidth === undefined) {
//     initialWidth = parseFloat(getComputedStyle(video).width);
//     initialHeight = parseFloat(getComputedStyle(video).height);
//   }

//   const heroRect = heroSection.getBoundingClientRect();
//   const windowHeight = window.innerHeight;
//   // Увеличиваем скорость анимации в 2 раза
//   const scrollProgress = Math.max(0, Math.min(1, (heroRect.height - heroRect.bottom + windowHeight * 0.5) / (heroRect.height + windowHeight * 0.5)) * 2);

//   // Если секция в зоне видимости, увеличиваем видео
//   if (heroRect.top <= windowHeight && heroRect.bottom >= 0) {
//     const newWidth = initialWidth + (maxWidth - initialWidth) * scrollProgress;
//     const newHeight = initialHeight + (maxHeight - initialHeight) * scrollProgress;

//     // Ограничиваем максимальные размеры
//     const finalWidth = Math.min(newWidth, maxWidth);
//     const finalHeight = Math.min(newHeight, maxHeight);

//     video.style.position = 'sticky';
//     video.style.top = '0';
//     video.style.left = '0';
//     video.style.width = `${finalWidth}px`;
//     video.style.height = `${finalHeight}px`;
//     video.style.objectFit = 'cover';
//     video.style.zIndex = '10';
//     video.style.opacity = '1';
//   } else {
//     // Возвращаем исходные размеры из CSS, если секция вне зоны видимости
//     video.style.position = '';
//     video.style.top = '';
//     video.style.left = '';
//     video.style.width = '';
//     video.style.height = '';
//     video.style.objectFit = '';
//     video.style.zIndex = '';
//     video.style.opacity = '';
//   }
// }

// let ticking = false;
// window.addEventListener('scroll', () => {
//   if (!ticking) {
//     requestAnimationFrame(() => {
//       updateVideoSize();
//       ticking = false;
//     });
//     ticking = true;
//   }
// });
// const video = document.querySelector('.video');
// const heroSection = document.querySelector('.hero');
// let initialWidth, initialHeight;
// const maxWidth = window.innerWidth;
// const maxHeight = window.innerHeight;

// function updateVideoSize() {
//   // Получаем изначальные размеры из CSS только при первом вызове
//   if (initialWidth === undefined) {
//     initialWidth = parseFloat(getComputedStyle(video).width);
//     initialHeight = parseFloat(getComputedStyle(video).height);
//   }

//   const heroRect = heroSection.getBoundingClientRect();
//   const windowHeight = window.innerHeight;
//   // Увеличиваем скорость анимации в 2 раза
//   const scrollProgress = Math.max(0, Math.min(1, (heroRect.height - heroRect.bottom + windowHeight * 0.5) / (heroRect.height + windowHeight * 0.5)) * 2);

//   // Если секция в зоне видимости, увеличиваем видео
//   if (heroRect.top <= windowHeight && heroRect.bottom >= 0) {
//     const newWidth = initialWidth + (maxWidth - initialWidth) * scrollProgress;
//     const newHeight = initialHeight + (maxHeight - initialHeight) * scrollProgress;

//     // Ограничиваем максимальные размеры
//     const finalWidth = Math.min(newWidth, maxWidth);
//     const finalHeight = Math.min(newHeight, maxHeight);

//     video.style.position = 'sticky';
//     video.style.top = '0';
//     video.style.left = '0';
//     video.style.width = `${finalWidth}px`;
//     video.style.height = `${finalHeight}px`;
//     video.style.objectFit = 'cover';
//     video.style.zIndex = '10';
//     video.style.opacity = '1';
//   } else {
//     // Возвращаем исходные размеры из CSS, если секция вне зоны видимости
//     video.style.position = '';
//     video.style.top = '';
//     video.style.left = '';
//     video.style.width = '';
//     video.style.height = '';
//     video.style.objectFit = '';
//     video.style.zIndex = '';
//     video.style.opacity = '';
//   }
// }

// let ticking = false;
// window.addEventListener('scroll', () => {
//   if (!ticking) {
//     requestAnimationFrame(() => {
//       updateVideoSize();
//       ticking = false;
//     });
//     ticking = true;
//   }
// });

// const video = document.querySelector('.video');
// const heroSection = document.querySelector('.hero');
// let initialWidth, initialHeight;
// const maxWidth = window.innerWidth;
// const maxHeight = window.innerHeight;

// function updateVideoSize() {
//   // Получаем изначальные размеры из CSS только при первом вызове
//   if (initialWidth === undefined) {
//     initialWidth = parseFloat(getComputedStyle(video).width);
//     initialHeight = parseFloat(getComputedStyle(video).height);
//   }

//   const heroRect = heroSection.getBoundingClientRect();
//   const windowHeight = window.innerHeight;
//   // Увеличиваем скорость анимации в 2 раза
//   const scrollProgress = Math.max(0, Math.min(1, (heroRect.height - heroRect.bottom + windowHeight * 0.5) / (heroRect.height + windowHeight * 0.5)) * 2);

//   // Если скролл равен нулю, возвращаем исходные размеры
//   if (window.scrollY === 0) {
//     video.style.removeProperty('position');
//     video.style.removeProperty('top');
//     video.style.removeProperty('left');
//     video.style.removeProperty('width');
//     video.style.removeProperty('height');
//     video.style.removeProperty('object-fit');
//     video.style.removeProperty('z-index');
//     video.style.removeProperty('opacity');
//   } else if (heroRect.top <= windowHeight && heroRect.bottom >= 0) {
//     // Если секция в зоне видимости, увеличиваем видео
//     const newWidth = initialWidth + (maxWidth - initialWidth) * scrollProgress;
//     const newHeight = initialHeight + (maxHeight - initialHeight) * scrollProgress;

//     // Ограничиваем максимальные размеры
//     const finalWidth = Math.min(newWidth, maxWidth);
//     const finalHeight = Math.min(newHeight, maxHeight);

//     video.style.position = 'sticky';
//     video.style.top = '0';
//     video.style.left = '0';
//     video.style.width = `${finalWidth}px`;
//     video.style.height = `${finalHeight}px`;
//     video.style.objectFit = 'cover';
//     video.style.zIndex = '10';
//     video.style.opacity = '1';
//   }
// }

// let ticking = false;
// window.addEventListener('scroll', () => {
//   if (!ticking) {
//     requestAnimationFrame(() => {
//       updateVideoSize();
//       ticking = false;
//     });
//     ticking = true;
//   }
// });
//дебаунс есть, скролл плавнее, но видео скачкообразно в размерах увеличивается  ЭТО ПОСЛЕДНИЙ ВАРИАНТ
// const video = document.querySelector('.video');

//ХОРОШО РАБОТАЕТ
// const video = document.querySelector('.hero__video-wrapper');
// const heroSection = document.querySelector('.hero');
// let initialWidth, initialHeight;
// const maxWidth = window.innerWidth;
// const maxHeight = window.innerHeight;

// function updateVideoSize() {
//   if (initialWidth === undefined) {
//     initialWidth = parseFloat(getComputedStyle(video).width);
//     initialHeight = parseFloat(getComputedStyle(video).height);
//   }

//   const heroRect = heroSection.getBoundingClientRect();
//   const windowHeight = window.innerHeight;
//   const scrollProgress = Math.max(0, Math.min(1, (heroRect.height - heroRect.bottom + windowHeight * 0.5) / (heroRect.height + windowHeight * 0.5)) * 2);

//   if (window.scrollY === 0) {
//     video.style.removeProperty('position');
//     video.style.removeProperty('top');
//     video.style.removeProperty('left');
//     video.style.removeProperty('width');
//     video.style.removeProperty('height');
//     video.style.removeProperty('object-fit');
//     video.style.removeProperty('z-index');
//     video.style.removeProperty('opacity');
//   } else if (heroRect.top <= windowHeight && heroRect.bottom >= 0) {
//     const newWidth = initialWidth + (maxWidth - initialWidth) * scrollProgress;
//     const newHeight = initialHeight + (maxHeight - initialHeight) * scrollProgress;

//     const finalWidth = Math.min(newWidth, maxWidth);
//     const finalHeight = Math.min(newHeight, maxHeight);

//     video.style.position = 'sticky';
//     // video.style.position = 'absolute';
//     video.style.top = '0';
//     video.style.left = '0';
//     video.style.top = '0';
//     video.style.bottom = '0';
//     // video.style.width = `${finalWidth}px`;
//     // video.style.height = `${finalHeight}px`;
//     video.style.width = '100%';
//     video.style.height = '100%';
//     video.style.objectFit = 'cover';
//     video.style.zIndex = '10';
//     video.style.opacity = '1';
//   }
// }


// const debounce = (func, delay = 300) => {
//   let timeout;
//   return function(...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// };


// const debouncedUpdateVideoSize = debounce(() => {
//   requestAnimationFrame(updateVideoSize);
// }, 50);

// window.addEventListener('scroll', () => {
//   debouncedUpdateVideoSize();
// });

// очень хорошо, но резко
const video = document.querySelector('.hero__video-wrapper');
const heroSection = document.querySelector('.hero');
let initialWidth, initialHeight;
const maxWidth = window.innerWidth;
const maxHeight = window.innerHeight;
let currentProgress = 0; // ✅ Текущий прогресс для МЯГКОГО сглаживания

function updateVideoSize() {
  if (initialWidth === undefined) {
    initialWidth = parseFloat(getComputedStyle(video).width);
    initialHeight = parseFloat(getComputedStyle(video).height);
  }

  const heroRect = heroSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // ✅ Твой оригинальный расчет прогресса
  const targetProgress = Math.max(0, Math.min(1,
    (heroRect.height - heroRect.bottom + windowHeight * 0.5) / (heroRect.height + windowHeight * 0.5) * 2
  ));

  // ✅ СУПЕР-МЯГКОЕ сглаживание (0.08 = очень плавно)
  currentProgress += (targetProgress - currentProgress) * 0.08;

  if (window.scrollY === 0) {
    video.style.removeProperty('position');
    video.style.removeProperty('top');
    video.style.removeProperty('left');
    video.style.removeProperty('width');
    video.style.removeProperty('height');
    video.style.removeProperty('object-fit');
    video.style.removeProperty('z-index');
    video.style.removeProperty('opacity');
    currentProgress = 0;
  } else if (heroRect.top <= windowHeight && heroRect.bottom >= 0) {
    const newWidth = initialWidth + (maxWidth - initialWidth) * currentProgress;
    const newHeight = initialHeight + (maxHeight - initialHeight) * currentProgress;

    const finalWidth = Math.min(newWidth, maxWidth);
    const finalHeight = Math.min(newHeight, maxHeight);

    video.style.position = 'sticky';
    video.style.top = '0';
    video.style.left = '0';
    video.style.right = '0';
    video.style.bottom = '0';
    // video.style.width = `${finalWidth}px`;
    // video.style.height = `${finalHeight}px`;
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.zIndex = '10';
    video.style.opacity = '1';
  }
}

// ✅ requestAnimationFrame = 60fps БЕЗ РЫВКОВ
let ticking = false;
function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateVideoSize);
    ticking = true;
  }
  ticking = false;
}

window.addEventListener('scroll', requestTick, { passive: true });
requestAnimationFrame(updateVideoSize);

// по скейлу вырви глаз
// const video = document.querySelector('.hero__video-wrapper');
// const heroSection = document.querySelector('.hero');
// let currentProgress = 0;

// function updateVideoSize() {
//   const heroRect = heroSection.getBoundingClientRect();
//   const windowHeight = window.innerHeight;

//   // ✅ Твой оригинальный расчет прогресса
//   const targetProgress = Math.max(0, Math.min(1,
//     (heroRect.height - heroRect.bottom + windowHeight * 0.5) / (heroRect.height + windowHeight * 0.5) * 2
//   ));

//   // ✅ СУПЕР-МЯГКОЕ сглаживание
//   currentProgress += (targetProgress - currentProgress) * 0.08;

//   if (window.scrollY === 0) {
//     video.style.setProperty('--scale', '1');
//     currentProgress = 0;
//   } else if (heroRect.top <= windowHeight && heroRect.bottom >= 0) {
//     // ✅ ТОЛЬКО scale через CSS переменную (0.8 → 2.0)
//     const scale = 0.8 + (2.0 - 0.8) * currentProgress;
//     video.style.setProperty('--scale', scale);

//     // ✅ Минимальные стили позиционирования
//     video.style.position = 'sticky';
//     video.style.top = '0';
//     video.style.left = '0';
//     video.style.right = '0';
//     video.style.bottom = '0';
//     video.style.width = '100%';
//     video.style.height = '100%';
//     video.style.objectFit = 'cover';
//     video.style.zIndex = '10';
//     video.style.opacity = '1';
//   }
// }

// // ✅ requestAnimationFrame = 60fps БЕЗ РЫВКОВ
// let ticking = false;
// function requestTick() {
//   if (!ticking) {
//     requestAnimationFrame(updateVideoSize);
//     ticking = true;
//   }
//   ticking = false;
// }

// window.addEventListener('scroll', requestTick, { passive: true });
// requestAnimationFrame(updateVideoSize);

//////
// const video = document.querySelector('.hero__video-wrapper');
// const heroSection = document.querySelector('.hero');
// let currentProgress = 0;

// function updateVideoSize() {
//   const heroRect = heroSection.getBoundingClientRect();
//   const windowHeight = window.innerHeight;

//   const targetProgress = Math.max(0, Math.min(1,
//     (heroRect.height - heroRect.bottom + windowHeight * 0.5) / (heroRect.height + windowHeight * 0.5) * 2
//   ));

//   currentProgress += (targetProgress - currentProgress) * 0.08;

//   if (window.scrollY === 0) {
//     video.style.setProperty('--scale', '1');
//     video.style.removeProperty('position');
//     video.style.removeProperty('top');
//     video.style.removeProperty('left');
//     video.style.removeProperty('right');
//     video.style.removeProperty('bottom');
//     video.style.removeProperty('width');
//     video.style.removeProperty('height');
//     video.style.removeProperty('object-fit');
//     video.style.removeProperty('z-index');
//     video.style.removeProperty('opacity');
//     currentProgress = 0;
//   } else if (heroRect.top <= windowHeight && heroRect.bottom >= 0) {
//     // ✅ +2% при каждом скролле (максимум scale 1.2)
//     const scale = 1 + currentProgress * 0.02; // 1.0 → 1.02 (+2%)
//     video.style.setProperty('--scale', scale);

//     video.style.position = 'sticky';
//     video.style.top = '0';
//     video.style.left = '0';
//     video.style.right = '0';
//     video.style.bottom = '0';
//     video.style.width = '100%';
//     video.style.height = '100%';
//     video.style.objectFit = 'cover';
//     video.style.zIndex = '10';
//     video.style.opacity = '1';
//   }
// }

// let ticking = false;
// function requestTick() {
//   if (!ticking) {
//     requestAnimationFrame(updateVideoSize);
//     ticking = true;
//   }
//   ticking = false;
// }

// window.addEventListener('scroll', requestTick, { passive: true });
// requestAnimationFrame(updateVideoSize);







// const video = document.querySelector('.hero__video-wrapper');
// const heroSection = document.querySelector('.hero');
// let currentProgress = 0;
// let scrollTimeout; // ✅ Таймер задержки

// function updateVideoSize() {
//   const heroRect = heroSection.getBoundingClientRect();
//   const windowHeight = window.innerHeight;

//   const targetProgress = Math.max(0, Math.min(1,
//     (heroRect.height - heroRect.bottom + windowHeight * 0.5) / (heroRect.height + windowHeight * 0.5) * 2
//   ));

//   // ✅ Задержка: обновляем только ПОСЛЕ остановки скролла
//   clearTimeout(scrollTimeout);
//   scrollTimeout = setTimeout(() => {
//     currentProgress += (targetProgress - currentProgress) * 0.08;

//     if (window.scrollY === 0) {
//       video.style.setProperty('--scale', '1');
//       video.style.removeProperty('position');
//       video.style.removeProperty('top');
//       video.style.removeProperty('left');
//       video.style.removeProperty('right');
//       video.style.removeProperty('bottom');
//       video.style.removeProperty('width');
//       video.style.removeProperty('height');
//       video.style.removeProperty('object-fit');
//       video.style.removeProperty('z-index');
//       video.style.removeProperty('opacity');
//       currentProgress = 0;
//     } else if (heroRect.top <= windowHeight && heroRect.bottom >= 0) {
//       const scale = 1 + currentProgress * 0.02; // +2%
//       video.style.setProperty('--scale', scale);

//       video.style.position = 'sticky';
//       video.style.top = '0';
//       video.style.left = '0';
//       video.style.right = '0';
//       video.style.bottom = '0';
//       video.style.width = '100%';
//       video.style.height = '100%';
//       video.style.objectFit = 'cover';
//       video.style.zIndex = '10';
//       video.style.opacity = '1';
//     }
//   }, 120); // ✅ 120ms задержка после скролла
// }

// let ticking = false;
// function requestTick() {
//   if (!ticking) {
//     requestAnimationFrame(updateVideoSize);
//     ticking = true;
//   }
//   ticking = false;
// }

// window.addEventListener('scroll', requestTick, { passive: true });
// requestAnimationFrame(updateVideoSize);

