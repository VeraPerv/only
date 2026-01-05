const header = document.querySelector('.header');
const nav = header?.querySelector('.header-nav');
const toggleButton = nav?.querySelector('.header-nav__button');
const mobileMenu = nav?.querySelector('.header-nav__list');
const headerNavList = document.querySelector('.header-nav__list');
const headerNavListItems = headerNavList ? headerNavList.querySelectorAll('.header-nav__link') : null;
const breakpoint = window.matchMedia('(min-width: 1280px)');

const setTabIndex = () => {
  const arrOfItems = Array.from(headerNavListItems);
  if (headerNavList.classList.contains('header-nav__list--open')) {
    arrOfItems.forEach((item) => {
      item.setAttribute('tabindex', '0');
    });
  }

  if(!breakpoint.matches && !headerNavList.classList.contains('header-nav__list--open')) {
    arrOfItems.forEach((item) => {
      item.setAttribute('tabindex', '-1');
    });
  }
  if (breakpoint.matches) {
    arrOfItems.forEach((item) => {
      item.setAttribute('tabindex', '0');
    });
  }
};

setTabIndex();

const closeMobileMenu = () => {
  mobileMenu.classList.remove('header-nav__list--open');
  document.body.classList.remove('body--overflow');
  nav.classList.remove('header-nav--open');
  setTabIndex();
};

const initToggleMenu = () => {
  toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('header-nav__list--open');
    document.body.classList.toggle('body--overflow');
    nav.classList.toggle('header-nav--open');
    setTabIndex();
  });

  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('header-nav__list--open') &&
        !nav?.contains(e.target) &&
        !toggleButton?.contains(e.target)) {
      closeMobileMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('header-nav__list--open')) {
      closeMobileMenu();
    }
  });
};

breakpoint.addEventListener('change', () => {
  if (breakpoint.matches) {
    setTabIndex();
  }
});

export {initToggleMenu};
