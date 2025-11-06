const selectButtons = document.querySelectorAll('.select-button');
const activeButton = document.querySelector('.select-button--current');

const initSelectButtonHover = () => {
  selectButtons.forEach((btn) => {
    if (!btn.classList.contains('select-button--current')) {
      btn.addEventListener('mouseenter', (evt) => {
        const currentBtn = evt.target;
        if (currentBtn) {
          selectButtons.forEach((btnElem) => btnElem.classList.remove('select-button--current'));
          currentBtn.classList.add('select-button--current');
        }
        activeButton.classList.remove('select-button--current');
      });

      btn.addEventListener('mouseleave', (evt) => {
        const btnForLeave = evt.target;
        btnForLeave.classList.remove('select-button--current');
        activeButton.classList.add('select-button--current');
      });
    }
  });
};

export { initSelectButtonHover };
