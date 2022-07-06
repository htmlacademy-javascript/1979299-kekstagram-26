import './scale-photo.js';

const formElement = document.querySelector('.img-upload__form');
const hashtagsInput = formElement.querySelector('#hashtags');
const descriptionInput = formElement.querySelector('#description');
const re = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;

const pristine = window.Pristine(formElement, {
  classTo: 'img-upload__item',
  errorClass: 'img-upload__item--invalid',
  errorTextParent: 'img-upload__item',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
}, false);

const commentValidate = (value) => value.length <= 140;

const hashtagsValidate = (value) => {
  const hashtagArray = value.split(' ');
  let isValidate = true;

  if (value.length > 0) {
    hashtagArray.forEach((hashtag) => {
      isValidate = isValidate && re.test(hashtag);
    });
  }
  return isValidate;
};

pristine.addValidator(
  hashtagsInput,
  hashtagsValidate,
  'Неверный формат хэштега'
);

pristine.addValidator(
  descriptionInput,
  commentValidate,
  'Длина комментария не более 140 символов'
);

formElement.addEventListener('submit', (evt) => {
  const isValidate = pristine.validate();

  if (!isValidate) {
    evt.preventDefault();
  }
});

export {hashtagsInput, descriptionInput};
