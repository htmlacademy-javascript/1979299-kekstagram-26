import {renderCommentsList, clearCommentsList} from './comments-list.js';
import {isEscapeKey} from './util.js';

const bigViewDisplay = document.querySelector('.big-picture');
const bigViewDisplayImage = bigViewDisplay.querySelector('.big-picture__img img');
const bigViewDisplayLikes = bigViewDisplay.querySelector('.likes-count');
const bigViewDisplayDescription = bigViewDisplay.querySelector('.social__caption');
const bigViewDisplayCloseButton = bigViewDisplay.querySelector('.big-picture__cancel');

const closeBigViewDisplay = () => {
  bigViewDisplay.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onBigViewDisplayEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigViewDisplay();
    clearCommentsList();
  }
};

const getBigViewDisplay  = (url, likes, comments, description) => {
  bigViewDisplayImage.src = url;
  bigViewDisplayLikes.textContent = likes;
  bigViewDisplayDescription.textContent = description;

  renderCommentsList(comments);

  bigViewDisplay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onBigViewDisplayEscKeydown);
};

bigViewDisplayCloseButton.addEventListener('click', () => {
  closeBigViewDisplay();
  clearCommentsList();
  document.removeEventListener('keydown', onBigViewDisplayEscKeydown);
});

export {getBigViewDisplay};
