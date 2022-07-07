import {openPopup, closePopup} from './popup.js';
import {isEscapeKey, removeInputValue} from './util.js';
import {hashtagsInputElement, descriptionInputElement} from './form.js';
import {scaleInput, scalePhotoPreview} from './scale-photo.js';
import {sliderElement, sliderValueElement, imagePreviewElement} from './photo-effect-selection.js';
import constants from './constants.js';

const popupElement = document.querySelector('.img-upload__overlay');
const uploadFileInputElement = document.querySelector('#upload-file');
const popupCloseButtonElement = popupElement.querySelector('.img-upload__cancel');

const onPopupEscKeydown = (evt) => {
  const activeElement = document.activeElement;
  const isPopupInputActive = (activeElement === hashtagsInputElement) || (activeElement === descriptionInputElement);
  if (isEscapeKey(evt) && !isPopupInputActive) {
    evt.preventDefault();
    closePopup(popupElement);
    removeInputValue(uploadFileInputElement);
  }
};

uploadFileInputElement.addEventListener('change', () => {
  openPopup(popupElement);
  document.addEventListener('keydown', onPopupEscKeydown);
});

popupCloseButtonElement.addEventListener('click', () => {
  closePopup(popupElement);
  removeInputValue(uploadFileInputElement);
  removeInputValue(hashtagsInputElement);
  removeInputValue(descriptionInputElement);
  scaleInput.value = '100%';
  scalePhotoPreview(constants.SCALE_MAX);
  removeInputValue(sliderValueElement);
  sliderElement.setAttribute('disabled', true);
  imagePreviewElement.classList = '';
  imagePreviewElement.style.filter = '';
  document.removeEventListener('keydown', onPopupEscKeydown);
});
