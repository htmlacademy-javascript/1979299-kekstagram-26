import {createComments} from './create-comments';

const bigViewDisplay = document.querySelector('.big-picture');
const bigViewDisplayImage = bigViewDisplay.querySelector('.big-picture__img');
const bigViewDisplayLikes = bigViewDisplay.querySelector('.likes-count');
const bigViewDisplayDescription = bigViewDisplay.querySelector('.social__caption');
const bigViewDisplayCloseButton = bigViewDisplay.querySelector('.big-picture__cancel');

const getBigViewDisplay  = (url, likes, comments, description) => {
  bigViewDisplayImage.src = url;
  bigViewDisplayLikes.textContent = likes;
  bigViewDisplayDescription.textContent = description;

  if (comments.length > 0) {
    createComments(comments);
  }

  bigViewDisplay.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeBigViewDisplay = () => {
  bigViewDisplay.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

bigViewDisplayCloseButton.addEventListener('click', closeBigViewDisplay);

addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    closeBigViewDisplay();
  }
});

export {getBigViewDisplay};
