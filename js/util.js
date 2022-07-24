import constants from './constants.js';

const checkCommentLength = (comment) => {
  const commentLength = String(comment).length;

  return commentLength <= constants.COMMENT_MAX_LENGTH;
};

const isEscapeKey = (evt) => evt.key === constants.ESCAPE_KEY;

const showElement = (element) => {
  element.classList.remove('hidden');
};

const hideElement = (element) => {
  element.classList.add('hidden');
};

const removeInputValue = (input) => {
  input.innerHtml = '';
  input.value = '';
};

const shuffleArray = (array) => {
  array.sort(() => Math.random() - 0.5);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  const createTimeuot = (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };

  return createTimeuot();
};

export {checkCommentLength, isEscapeKey, showElement, hideElement, removeInputValue, shuffleArray, debounce};
