import {openPopup, closePopup} from './popup.js';
import {isEscapeKey, removeInputValue} from './util.js';
import {hashtagsInputElement, descriptionInputElement} from './form.js';
import {scaleInput, scalePhotoPreview} from './scale-photo.js';
import {sliderElement, sliderValueElement, setDefaultEffects} from './photo-effect-selection.js';
import constants from './constants.js';

const popupElement = document.querySelector('.img-upload__overlay--uploading-form');
const uploadFileInputElement = document.querySelector('#upload-file');
const popupCloseButtonElement = popupElement.querySelector('.img-upload__cancel');
const imagePreviewElement = document.querySelector('.img-upload__preview img');
const effectsPreviewElements = document.querySelectorAll('.effects__preview');

const setImageEffectBackground = (url) => {
  effectsPreviewElements.forEach((element) => {
    element.style.backgroundImage = `url(${url})`;
  });
};

const onClosingUploadingPopup = () => {
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
  setImageEffectBackground('');
  setDefaultEffects();
};

const onPopupEscKeydown = (evt) => {
  const activeElement = document.activeElement;
  const isPopupInputActive = (activeElement === hashtagsInputElement) || (activeElement === descriptionInputElement);
  if (isEscapeKey(evt) && !isPopupInputActive) {
    evt.preventDefault();
    onClosingUploadingPopup();
  }
};

uploadFileInputElement.addEventListener('change', () => {
  const file = uploadFileInputElement.files[0];
  const fileName = file.name.toLowerCase();
  const matches = constants.FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const fileUrl = URL.createObjectURL(file);
    imagePreviewElement.src = fileUrl;
    setImageEffectBackground(fileUrl);

    openPopup(popupElement);
    document.addEventListener('keydown', onPopupEscKeydown);
  }
});

uploadFileInputElement.addEventListener('change', () => {
  openPopup(popupElement);
  document.addEventListener('keydown', onPopupEscKeydown);
});

popupCloseButtonElement.addEventListener('click', () => {
  onClosingUploadingPopup();
  document.removeEventListener('keydown', onPopupEscKeydown);
});

export {popupElement};
