const formElement = document.querySelector('.form__footer-form');
const emailField = formElement.querySelector('.email-input');
const emailRegexp = /^[a-zA-Z0-9а-яА-ЯёЁ._%+-]+@[a-zA-Z0-9а-яА-ЯёЁ.-]+\.[a-zA-Z]{2,}$/;

let submitAttempted = false;

const onEmailInput = () => {
  if (submitAttempted) {
    if (!emailRegexp.test(emailField.value.trim())) {
      emailField.classList.add('email-input--error');
      emailField.setCustomValidity('Введите корректный email.');
    } else {
      emailField.classList.remove('email-input--error');
      emailField.setCustomValidity('');
    }
  } else {
    emailField.classList.remove('email-input--error');
    emailField.setCustomValidity('');
  }
};

const onFormSubmit = (event) => {
  submitAttempted = true;
  const trimmedValue = emailField.value.trim();

  if (trimmedValue === '') {
    emailField.setCustomValidity('Введите Ваш email.');
    emailField.classList.add('email-input--error');
    emailField.reportValidity();
    event.preventDefault();
  } else if (!emailRegexp.test(trimmedValue)) {
    emailField.setCustomValidity('Введите корректный email.');
    emailField.classList.add('email-input--error');
    emailField.reportValidity();
    event.preventDefault();
  } else {
    emailField.setCustomValidity('');
    emailField.classList.remove('email-input--error');
  }
};

const initEmailValidation = () => {
  emailField.addEventListener('input', onEmailInput);
  formElement.addEventListener('submit', onFormSubmit);
};

export { initEmailValidation };
