import {getBigViewDisplay} from './big-image-display.js';
import {getData} from './api.js';
import {showElement, hideElement} from './util.js';

const drawMiniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const errorElement = document.querySelector('.img-upload__overlay--error');
const reloadingButtonElement = document.querySelector('.img-upload__button-reload');

const renderPictureList = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((photo) => {
    const pictureElement = drawMiniaturesTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = photo.url;
    pictureElement.querySelector('.picture__likes').textContent = photo.likes;
    pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;

    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      getBigViewDisplay(photo.url, photo.likes, photo.comments, photo.description);
    });
    fragment.appendChild(pictureElement);
  });
  picturesContainer.appendChild(fragment);
};

const onRenderUploadingError = () => {
  showElement(errorElement);
};

const loadPictures = () => getData(renderPictureList, onRenderUploadingError);

loadPictures();

reloadingButtonElement.addEventListener('click', () => {
  hideElement(errorElement);
  loadPictures();
});
