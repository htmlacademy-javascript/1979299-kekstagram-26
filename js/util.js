import constants from './constants.js';

// проверяет длину коментария
const checkCommentLength = (comment) => {
  const commentLength = String(comment).length;

  return commentLength <= constants.COMMENT_MAX_LENGTH;
};

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

export {checkCommentLength, isEscapeKey, showElement, hideElement, removeInputValue};
