import './scale-photo.js';
import {checkCommentLength} from './util.js';
import constants from './constants.js';

const formElement = document.querySelector('.img-upload__form');
const hashtagsInputElement = formElement.querySelector('#hashtags');
const descriptionInputElement = formElement.querySelector('#description');
const re = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;

const pristine = window.Pristine(formElement, {
  classTo: 'img-upload__item',
  errorClass: 'img-upload__item--invalid',
  errorTextParent: 'img-upload__item',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error'
}, false);

function hasUniqueElements(hashtags) {
  const uniqueHashtags = [];

  for (const hashtag of hashtags) {
    if (!uniqueHashtags.includes(hashtag)) {
      uniqueHashtags.push(hashtag);
    }
  }
  return uniqueHashtags.length === hashtags.length;
}

const hashtagsValidate = (value) => {
  let isValidate = true;
  if (value.length > 0) {
    const hashtags = value.toLowerCase().split(' ');
    if (hashtags.length > 5) {
      return false;
    }
    if (!hasUniqueElements(hashtags)) {
      return false;
    }

    hashtags.forEach((hashtag) => {
      if (hashtag.length > constants.HASHTAG_MAX_LENGTH) {
        isValidate = false;
      }

      isValidate = isValidate && re.test(hashtag);
    });
  }
  return isValidate;
};

pristine.addValidator(
  hashtagsInputElement,
  hashtagsValidate,
  'Неверный формат хэштега'
);

pristine.addValidator(
  descriptionInputElement,
  checkCommentLength,
  'Длина комментария не более 140 символов'
);

formElement.addEventListener('submit', (evt) => {
  const isValidate = pristine.validate();
  if (!isValidate) {
    evt.preventDefault();
  }
});

export {hashtagsInputElement, descriptionInputElement};
