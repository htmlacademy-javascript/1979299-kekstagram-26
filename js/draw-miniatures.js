import {getBigViewDisplay} from './big-image-display.js';
import {getData} from './api.js';
import {showElement, hideElement} from './util.js';

const drawMiniaturesTemplateElement = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainerElement = document.querySelector('.pictures');
const errorElement = document.querySelector('.img-upload__overlay--error');
const reloadingButtonElement = document.querySelector('.img-upload__button-reload');

const clearPictureList = () => {
  const pictures = document.querySelectorAll('.picture');

  pictures.forEach((picure) => {
    picure.remove();
  });
};

const renderPictureList = (pictures) => {
  clearPictureList();
  const fragment = document.createDocumentFragment();

  pictures.forEach((photo) => {
    const pictureElement = drawMiniaturesTemplateElement.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = photo.url;
    pictureElement.querySelector('.picture__likes').textContent = photo.likes;
    pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;

    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      getBigViewDisplay(photo.url, photo.likes, photo.comments, photo.description);
    });
    fragment.appendChild(pictureElement);
  });
  picturesContainerElement.appendChild(fragment);
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

export {renderPictureList};
