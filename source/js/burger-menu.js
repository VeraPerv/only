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

const initToggleMenu = () => {
  toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('header-nav__list--open');
    document.body.classList.toggle('body--overflow');
    nav.classList.toggle('header-nav--open');
    setTabIndex();
  });
};

breakpoint.addEventListener('change', () => {
  if (breakpoint.matches) {
    setTabIndex();
  }
}
);

export {initToggleMenu};
