import {hideElement, showElement} from './util.js';
import constants from './constants.js';

const imagePreviewElement = document.querySelector('.img-upload__preview img');
const effectListInputsElement = document.querySelectorAll('.effects__radio');

const sliderElement = document.querySelector('.effect-level__slider');
const sliderValueElement = document.querySelector('.effect-level__value');
const sliderContainerElement = document.querySelector('.img-upload__effect-level');

const EffectTypes = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

let selectedEffect = EffectTypes.NONE;

noUiSlider.create(sliderElement, {
  range: {
    min: constants.NONE_MIN_VALUE,
    max: constants.NONE_MAX_VALUE,
  },
  start: constants.NONE_START,
  step: constants.NONE_STEP,
  connect: 'lower',
});

sliderElement.disabled = true;
hideElement(sliderContainerElement);

const updateSliderOptions = (effectType) => {
  sliderElement.disabled = false;
  if (sliderContainerElement.classList.contains('hidden')) {
    showElement(sliderContainerElement);
  }

  switch (effectType) {
    case EffectTypes.CHROME:
    case EffectTypes.SEPIA:
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: constants.CHROMESEPIA_MIN_VALUE,
          max: constants.CHROMESEPIA_MAX_VALUE
        },
        step: constants.CHROMESEPIA_STEP
      });
      sliderElement.noUiSlider.set(constants.CHROMESEPIA_MAX_VALUE);
      break;
    case EffectTypes.MARVIN:
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: constants.MARVIN_MIN_VALUE,
          max: constants.MARVIN_MAX_VALUE
        },
        step: constants.MARVIN_STEP,
      });
      sliderElement.noUiSlider.set(constants.MARVIN_MAX_VALUE);
      break;
    case EffectTypes.PHOBOS:
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: constants.PHOBOS_MIN_VALUE,
          max: constants.PHOBOS_MAX_VALUE
        },
        step: constants.PHOBOS_STEP,
      });
      sliderElement.noUiSlider.set(constants.PHOBOS_MAX_VALUE);
      break;
    case EffectTypes.HEAT:
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: constants.HEAT_MIN_VALUE,
          max: constants.HEAT_MAX_VALUE
        },
        step: constants.HEAT_STEP,
      });
      sliderElement.noUiSlider.set(constants.PHOBOS_MAX_VALUE);
      break;
    case EffectTypes.NONE:
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: constants.NONE_MIN_VALUE,
          max: constants.NONE_MAX_VALUE,
        },
        step: constants.NONE_STEP,
      });
      sliderElement.noUiSlider.set(constants.NONE_MAX_VALUE);
      sliderElement.disabled = true;
      hideElement(sliderContainerElement);
      break;
  }
};

const setImgStyle = (style) => {
  imagePreviewElement.style.filter = style;
};

const setEffectStyle = (value) => {
  switch(selectedEffect) {
    case EffectTypes.CHROME:
      setImgStyle(`grayscale(${value})`);
      break;
    case EffectTypes.SEPIA:
      setImgStyle(`sepia(${value})`);
      break;
    case EffectTypes.MARVIN:
      setImgStyle(`invert(${value}%)`);
      break;
    case EffectTypes.PHOBOS:
      setImgStyle(`blur(${value}px)`);
      break;
    case EffectTypes.HEAT:
      setImgStyle(`brightness(${value})`);
      break;
    case EffectTypes.NONE:
      setImgStyle('');
      break;
  }
};

const setDefaultEffects = () => {
  selectedEffect = EffectTypes.NONE;
  updateSliderOptions(selectedEffect);
  setEffectStyle();
  effectListInputsElement[0].checked = true;
};

effectListInputsElement.forEach((effectButton) => {
  effectButton.addEventListener('change', () => {
    imagePreviewElement.className = '';
    setEffectStyle();
    selectedEffect = effectButton.value;

    if (selectedEffect !== EffectTypes.NONE) {
      const newEffectClass = `effects__preview--${selectedEffect}`;
      imagePreviewElement.classList.add(newEffectClass);
    }

    updateSliderOptions(selectedEffect);
  });
});

sliderElement.noUiSlider.on('update', () => {
  sliderValueElement.value = sliderElement.noUiSlider.get();
  setEffectStyle(sliderValueElement.value);
});

export {imagePreviewElement, sliderElement, sliderValueElement, setDefaultEffects};
