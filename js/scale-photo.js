import constants from './constants.js';

const imagePreviewElement = document.querySelector('.img-upload__preview img');

const scaleInput = document.querySelector('.scale__control--value');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleSmallerButton = document.querySelector('.scale__control--smaller');

const scalePhotoPreview = (value) => {
  const scale = parseInt(value, 10) / 100;
  imagePreviewElement.style.transform = `scale(${scale})`;
};

scalePhotoPreview(scaleInput.value);

scaleBiggerButton.addEventListener('click', () => {
  const newScale = parseInt(scaleInput.value, 10) + constants.SCALE_STEP;
  if (newScale <= constants.SCALE_MAX) {
    scalePhotoPreview(newScale);
    scaleInput.value = `${newScale}%`;
  }
});

scaleSmallerButton.addEventListener('click', () => {
  const newScale = parseInt(scaleInput.value, 10) - constants.SCALE_STEP;
  if (newScale >= constants.SCALE_MIN) {
    scalePhotoPreview(newScale);
    scaleInput.value = `${newScale}%`;
  }
});

export {scaleInput, scalePhotoPreview};
