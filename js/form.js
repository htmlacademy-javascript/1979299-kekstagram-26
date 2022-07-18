import {checkCommentLength} from './util.js';
import {sendData} from './api.js';
import constants from './constants.js';

const formElement = document.querySelector('.img-upload__form');
const hashtagsInputElement = formElement.querySelector('#hashtags');
const descriptionInputElement = formElement.querySelector('#description');
const re = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;
const submitButton = formElement.querySelector('.img-upload__submit');

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
    if (hashtags.length > constants.HASHTAG_MAX_AMOUNT) {
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

const blockSubmitButton = () => {
  submitButton.setAttribute('disabled', true);
  submitButton.textContent = constants.BUTTON_PUBLISH_TEXT_PROGRESS;
};

const unblockSubmitButton = () => {
  submitButton.removeAttribute('disabled');
  submitButton.textContent = constants.BUTTON_PUBLISH_TEXT;
};

pristine.addValidator(
  hashtagsInputElement,
  hashtagsValidate,
  constants.HASHTAG_ERROR_MESSAGE
);

pristine.addValidator(
  descriptionInputElement,
  checkCommentLength,
  constants.COMMENT_ERROR_MESSAGE
);

formElement.addEventListener('submit', (evt) => {
  const isValidate = pristine.validate();
  if (isValidate) {
    blockSubmitButton();
    const formData = new FormData(evt.target);
    evt.preventDefault();
    const sendForm = () => sendData(formData);
    sendForm();
  } else {
    evt.preventDefault();
  }
});

export {hashtagsInputElement, descriptionInputElement, unblockSubmitButton};
