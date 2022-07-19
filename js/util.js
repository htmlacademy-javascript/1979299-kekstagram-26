import constants from './constants.js';

// проверяет длину коментария
const checkCommentLength = (comment) => {
  const commentLength = String(comment).length;

  return commentLength <= constants.COMMENT_MAX_LENGTH;
};

// на закрытие клавишей Esc
const isEscapeKey = (evt) => evt.key === constants.ESCAPE_KEY;

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
  input.value = '';
};

const shuffleArray = (array) => {
  array.sort(() => Math.random() - 0.5);
};

// устранение дребезга
const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  const createTimeuot = (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };

  return createTimeuot();
};

export {checkCommentLength, isEscapeKey, showElement, hideElement, removeInputValue, shuffleArray, debounce};
