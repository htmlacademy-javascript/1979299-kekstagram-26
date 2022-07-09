import constants from './constants.js';

const imagePreviewElement = document.querySelector('.img-upload__preview img');
const effectListInputsElement = document.querySelectorAll('.effects__radio');

const sliderElement = document.querySelector('.effect-level__slider');
const sliderValueElement = document.querySelector('.effect-level__value');

let selectedEffect = 'none';

noUiSlider.create(sliderElement, {
  range: {
    min: constants.NONE_MIN_VALUE,
    max: constants.NONE_MAX_VALUE,
  },
  start: constants.NONE_START,
  step: constants.NONE_STEP,
  connect: 'lower',
});

sliderElement.setAttribute('disabled', true);

const updateSliderOptions = (effectType) => {
  sliderElement.removeAttribute('disabled');

  switch (effectType) {
    case 'chrome':
    case 'sepia':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: constants.CHROMESEPIA_MIN_VALUE,
          max: constants.CHROMESEPIA_MAX_VALUE
        },
        step: constants.CHROMESEPIA_STEP
      });
      sliderElement.noUiSlider.set(1);
      break;
    case 'marvin':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: constants.MARVIN_MIN_VALUE,
          max: constants.MARVIN_MAX_VALUE
        },
        step: constants.MARVIN_STEP,
      });
      sliderElement.noUiSlider.set(100);
      break;
    case 'phobos':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: constants.PHOBOS_MIN_VALUE,
          max: constants.PHOBOS_MAX_VALUE
        },
        step: constants.PHOBOS_STEP,
      });
      sliderElement.noUiSlider.set(3);
      break;
    case 'heat':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: constants.HEAT_MIN_VALUE,
          max: constants.HEAT_MAX_VALUE
        },
        step: constants.HEAT_STEP,
      });
      sliderElement.noUiSlider.set(3);
      break;
    case 'none':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: constants.NONE_MIN_VALUE,
          max: constants.NONE_MAX_VALUE,
        },
        step: constants.NONE_STEP,
      });
      sliderElement.noUiSlider.set(100);
      sliderElement.setAttribute('disabled', true);
      break;
  }
};

const setImgStyle = (style) => {
  imagePreviewElement.style.filter = style;
};

const setEffectStyle = (value) => {
  switch(selectedEffect) {
    case 'chrome':
      setImgStyle(`grayscale(${value})`);
      break;
    case 'sepia':
      setImgStyle(`sepia(${value})`);
      break;
    case 'marvin':
      setImgStyle(`invert(${value}%)`);
      break;
    case 'phobos':
      setImgStyle(`blur(${value}px)`);
      break;
    case 'heat':
      setImgStyle(`brightness(${value})`);
      break;
    case 'none':
      setImgStyle('');
      break;
  }
};

effectListInputsElement.forEach((effectButton) => {
  effectButton.addEventListener('change', () => {
    imagePreviewElement.className = '';
    setEffectStyle();
    selectedEffect = effectButton.value;

    if (selectedEffect !== 'none') {
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

export {imagePreviewElement, sliderElement, sliderValueElement, selectedEffect};
