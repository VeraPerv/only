const toggleMenu = document.querySelector('.header-nav__menu-wrapper');
const toggleBtn = document.getElementById('toggle-btn');
const headerElement = document.querySelector('.header');

const openCloseToggleMenu = () => {
  toggleMenu.classList.toggle('header-nav__menu-wrapper--open');
  toggleBtn.classList.toggle('header-nav__toggle--open');
  document.body.classList.toggle('body--overlay');
  headerElement.classList.toggle('header--overlay');
};

const mobileMenuToggle = () => {
  toggleBtn.addEventListener('click', openCloseToggleMenu);
};


export { mobileMenuToggle };
