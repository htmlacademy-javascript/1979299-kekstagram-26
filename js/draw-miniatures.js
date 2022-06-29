const drawMiniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture'); //создаю элемент шаблона picture
const picturesContainer = document.querySelector('.pictures');

const renderPhoto = (photo) => {
  const pictureElement = drawMiniaturesTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;

  return pictureElement;
};

const renderPhotos = (photos) => {
  const fragment = document.createDocumentFragment(); // Создаю "коробочку"

  photos.forEach((photo) => {
    const photoElement = renderPhoto(photo);

    fragment.appendChild(photoElement);
  });

  picturesContainer.appendChild(fragment);
};

export {renderPhotos};


// import {generatePhotos, MAX_COUNT} from './data.js';
// import { getBigViewDisplay } from './big-image-display.js';

// const renderPhotos = (container, template, pictures) => {
//   const fragment = document.createDocumentFragment();

//   renderPhoto.forEach((photo) => {
//     const pictureElement = drawMiniaturesTemplate.cloneNode(true);

//     pictureElement.querySelector('.picture__img').src = photo.url;
//     pictureElement.querySelector('.picture__likes').textContent = photo.likes;
//     pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;

//     pictureElement.addEventListener('click', (evt) => {
//       evt.preventDefault();
//       getBigViewDisplay(photo.url, photo.likes, photo.comments, photo.description);
//     });

//     fragment.appendChild(pictureElement);
//   });

//   picturesContainer.appendChild(fragment);
// };

// const photos = [];

// for (let i = 1; i <= MAX_COUNT; i++) {
//   photos.push(generatePhotos(i));
// }


// export {renderPhotos};
// renderPhoto(pictureListContainer, pictureTemplate, photos);

