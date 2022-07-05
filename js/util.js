// функция ввывода случайных чисел
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// функция генерации сдучайных чисел
function getRandomIndex (min, max) {
  return Math.floor (Math.random() * (max - min) + min);
}

// на закрытие клавишей Esc
const isEscapeKey = (evt) => evt.key === 'Escape';

// показывает элемент
const showElement = (element) => {
  element.classList.remove('hidden');
};

//скрывает елемент
const hideElement = (element) => {
  element.classList.add('hidden');
};

// очищает строку в input
const removeInputValue = (input) => {
  input.innerHtml = '';
};
export {getRandomArrayElement, getRandomIndex, isEscapeKey, showElement, hideElement, removeInputValue};
