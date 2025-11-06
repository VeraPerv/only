const menuLinks = [...document.querySelectorAll('.menu-primary__link')];
const initialCurrentLink = menuLinks[0];
const menuContainer = document.querySelector('.menu-primary');
const mediaQuery = window.matchMedia('(min-width: 920px)');

const removeCurrentClassFromAll = () => {
  menuLinks.forEach((link) => link.classList.remove('menu-primary__link--current'));
};

const addCurrentClassToInitial = () => {
  initialCurrentLink.classList.add('menu-primary__link--current');
};

const mouseEnterHandler = () => {
  removeCurrentClassFromAll();
};

const mouseLeaveHandler = () => {
  removeCurrentClassFromAll();
  addCurrentClassToInitial();
};

const addMouseHoverHandlers = () => {
  if (!menuContainer) {
    return;
  }

  menuLinks.forEach((link, index) => {
    if (index !== 0) {
      link.addEventListener('mouseenter', mouseEnterHandler);
    }
  });

  menuContainer.addEventListener('mouseleave', mouseLeaveHandler);
};

const removeMouseHoverHandlers = () => {
  if (!menuContainer) {
    return;
  }

  menuLinks.forEach((link, index) => {
    if (index !== 0) {
      link.removeEventListener('mouseenter', mouseEnterHandler);
    }
  });

  menuContainer.removeEventListener('mouseleave', mouseLeaveHandler);
};

const handleResponsiveMenu = () => {
  if (mediaQuery.matches) {
    removeCurrentClassFromAll();
    addCurrentClassToInitial();
    addMouseHoverHandlers();
  } else {
    removeMouseHoverHandlers();
    removeCurrentClassFromAll();
    addCurrentClassToInitial();
  }
};

mediaQuery.addEventListener('change', () => handleResponsiveMenu());
window.addEventListener('load', () => handleResponsiveMenu());

export { handleResponsiveMenu };
