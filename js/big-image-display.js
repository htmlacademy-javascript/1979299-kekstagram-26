import {getAllComments, clearCommentsList} from './comments-list.js';
import {isEscapeKey} from './util.js';
import {closePopup, openPopup} from './popup.js';

const bigViewDisplayElement = document.querySelector('.big-picture');
const bigViewDisplayImageElement = bigViewDisplayElement.querySelector('.big-picture__img img');
const bigViewDisplayLikesElement = bigViewDisplayElement.querySelector('.likes-count');
const bigViewDisplayDescriptionElement = bigViewDisplayElement.querySelector('.social__caption');
const bigViewDisplayCloseButtonElement = bigViewDisplayElement.querySelector('.big-picture__cancel');

const onBigViewDisplayEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup(bigViewDisplayElement);
    clearCommentsList();
  }
};

const getBigViewDisplay  = (url, likes, comments, description) => {
  openPopup(bigViewDisplayElement);
  bigViewDisplayImageElement.src = url;
  bigViewDisplayLikesElement.textContent = likes;
  bigViewDisplayDescriptionElement.textContent = description;

  getAllComments(comments);

  document.addEventListener('keydown', onBigViewDisplayEscKeydown);
};

bigViewDisplayCloseButtonElement.addEventListener('click', () => {
  closePopup(bigViewDisplayElement);
  clearCommentsList();
  document.removeEventListener('keydown', onBigViewDisplayEscKeydown);
});

export {getBigViewDisplay};
