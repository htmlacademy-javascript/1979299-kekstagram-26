// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// const { name } = require("browser-sync");

// function getRandomInt(min, max) {
//   return Math.random() * (max - min) + min;
// }
// getRandomInt();

// Функция от Кекса getRandomPositiveInteger, возвращающая случайное целое число из переданного диапазона включительно

// function getRandomPositiveInteger (a, b) {
//   const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
//   const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// }

// Функция для проверки максимальной длины строки
// источник https://rche.ru/434_ogranichit-maks-dlinu-stroki-v-pole-input-primer-na-javascript.html

// function getMaximumStringlength(fild, size) {
//   if (fild.value.length > size) {
//     fild.value = fild.value.substring(0, size);
//   }
// }
// getMaximumStringlength();

// Функция от Кекса checkStringLength для проверки максимальной длины строки

// function checkStringLength (string, length) {
//   return string.length <= length;
// }
// checkStringLength();

// Создания массива из 25 сгенерированных объектов

// const makePhoto = () => ({
//   id,
// });

// const generatePhotos = (count) => {
//   const photos = [];
//   for (let i = 1; i <= count; i++) {
//     photos.push(makePhoto(i));
//   }

//   return photos;
// }

// const MAX_PHOTO_COUNT = 25;
// const photos = generatePhotos(MAX_PHOTO_COUNT);

const MakePhotoId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const URL_INDEX = ['photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg', 'photos/4.jpg', 'photos/5.jpg', 'photos/6.jpg', 'photos/7.jpg', 'photos/8.jpg', 'photos/9.jpg', 'photos/10.jpg', 'photos/11.jpg', 'photos/12.jpg', 'photos/13.jpg', 'photos/14.jpg', 'photos/15.jpg', 'photos/16.jpg', 'photos/17.jpg', 'photos/18.jpg', 'photos/19.jpg', 'photos/20.jpg', 'photos/21.jpg', 'photos/22.jpg', 'photos/23.jpg', 'photos/24.jpg', 'photos/25.jpg'];

const DESCRIPTION_INDEX = ['Вид пляжа', 'на пляж Туда', 'Лагуна', 'Вот такие фотографы у нас', 'Супчик джакузи', 'Тачка', 'Десерт', 'Компотик', 'Самолетик', 'Обувной ящик', 'Ляпота', 'Аудюха', 'Салатик', 'Кото-суши', 'Тапки-боты', 'В илюминаторе', 'Хор', 'Ретро-кар', 'Тапочки-светлячки', 'Отель', 'Обед-вкусняшка' , 'Закат', 'Крабик', 'На концерте', 'Доброжелательный бегемот'];

const MESSAGE = ['Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.'];

const NAME = ['Евпатий', 'Хон-Гильдон', 'Мишенька', 'Андрюша', 'Алексей'];

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];


const checkStringLength = (string, length) => string.length <= length;

// const getPhotoDecriotion = () => {
//   const getRandomDescrIndex = getRandomPositiveInteger(0, MakePhotoId.length - 1);
//   const getRandomMessageIndex = getRandomPositiveInteger(0, MESSAGE - 1);
//   const getRandomNameIndex = getRandomPositiveInteger(0, NAME - 1);

//   const photoComments = [ {
//     id: getRandomPositiveInteger(1,25),
//     avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
//     message: getRandomPositiveInteger(MESSAGE),
//     name: getRandomPositiveInteger(NAME),
//   }
//   ];
// }

const photoDescription = () => {
  const getRandomDescrIndex = getRandomPositiveInteger(0, MakePhotoId.length - 1);
  const getRandomMessageIndex = getRandomPositiveInteger(0, MESSAGE - 1);
  const getRandomNameIndex = getRandomPositiveInteger(0, NAME - 1);

  const photoComments = [ {
    id: getRandomPositiveInteger(1,25),
    avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
    message: getRandomPositiveInteger(MESSAGE),
    name: getRandomPositiveInteger(NAME),
  }
  ];

  getRandomDescrIndex();
  getRandomMessageIndex();
  getRandomNameIndex();
  return{
    id: getRandomArrayElement(MakePhotoId),
    url: getRandomArrayElement(URL_INDEX),
    description: getRandomArrayElement(DESCRIPTION_INDEX),
    likes: checkStringLength(15, 200),
    comments: photoComments,
  };
};

photoDescription();

