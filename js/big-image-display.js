import {renderCommentsList, clearCommentsList} from './comments-list.js';
import {isEscapeKey} from './util.js';
import {closePopup, openPopup} from './popup.js';

const bigViewDisplay = document.querySelector('.big-picture');
const bigViewDisplayImage = bigViewDisplay.querySelector('.big-picture__img img');
const bigViewDisplayLikes = bigViewDisplay.querySelector('.likes-count');
const bigViewDisplayDescription = bigViewDisplay.querySelector('.social__caption');
const bigViewDisplayCloseButton = bigViewDisplay.querySelector('.big-picture__cancel');

// const closeBigViewDisplay = () => {
//   bigViewDisplay.classList.add('hidden');
//   document.body.classList.remove('modal-open');
// };

const onBigViewDisplayEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup(bigViewDisplay);
    clearCommentsList();
  }
};

const getBigViewDisplay  = (url, likes, comments, description) => {
  openPopup(bigViewDisplay);
  bigViewDisplayImage.src = url;
  bigViewDisplayLikes.textContent = likes;
  bigViewDisplayDescription.textContent = description;

  renderCommentsList(comments);

  document.addEventListener('keydown', onBigViewDisplayEscKeydown);
};

bigViewDisplayCloseButton.addEventListener('click', () => {
  closePopup(bigViewDisplay);
  clearCommentsList();
  document.addEventListener('keydown', onBigViewDisplayEscKeydown);
});

export {getBigViewDisplay};
