import constants from './constants.js';

const imagePreviewElement = document.querySelector('.img-upload__preview img');

const scaleInputElement = document.querySelector('.scale__control--value');
const scaleBiggerButtonElement = document.querySelector('.scale__control--bigger');
const scaleSmallerButtonElement = document.querySelector('.scale__control--smaller');

const scalePhotoPreview = (value) => {
  const scale = parseInt(value, 10) / 100;
  imagePreviewElement.style.transform = `scale(${scale})`;
};

scalePhotoPreview(scaleInputElement.value);

scaleBiggerButtonElement.addEventListener('click', () => {
  const newScale = parseInt(scaleInputElement.value, 10) + constants.SCALE_STEP;
  if (newScale <= constants.SCALE_MAX) {
    scalePhotoPreview(newScale);
    scaleInputElement.value = `${newScale}%`;
  }
});

scaleSmallerButtonElement.addEventListener('click', () => {
  const newScale = parseInt(scaleInputElement.value, 10) - constants.SCALE_STEP;
  if (newScale >= constants.SCALE_MIN) {
    scalePhotoPreview(newScale);
    scaleInputElement.value = `${newScale}%`;
  }
});

export {scaleInputElement, scalePhotoPreview};
