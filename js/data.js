import {getRandomArrayElement} from './util.js';
import {getRandomIndex} from './util.js';

// Создание массива из 25 сгенерированных объектов

// Константы
const URL_INDEX = ['photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg', 'photos/4.jpg', 'photos/5.jpg', 'photos/6.jpg', 'photos/7.jpg', 'photos/8.jpg', 'photos/9.jpg', 'photos/10.jpg', 'photos/11.jpg', 'photos/12.jpg', 'photos/13.jpg', 'photos/14.jpg', 'photos/15.jpg', 'photos/16.jpg', 'photos/17.jpg', 'photos/18.jpg', 'photos/19.jpg', 'photos/20.jpg', 'photos/21.jpg', 'photos/22.jpg', 'photos/23.jpg', 'photos/24.jpg', 'photos/25.jpg'];

const DESCRIPTION_INDEX = ['Вид пляжа', 'на пляж Туда', 'Лагуна', 'Вот такие фотографы у нас', 'Супчик джакузи', 'Тачка', 'Десерт', 'Компотик', 'Самолетик', 'Обувной ящик', 'Ляпота', 'Аудюха', 'Салатик', 'Кото-суши', 'Тапки-боты', 'В илюминаторе', 'Хор', 'Ретро-кар', 'Тапочки-светлячки', 'Отель', 'Обед-вкусняшка' , 'Закат', 'Крабик', 'На концерте', 'Доброжелательный бегемот'];

const MESSAGE = ['Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.'];

const NAME = ['Евпатий', 'Хон-Гильдон', 'Мишенька', 'Андрюша', 'Алексей'];

const MIN_COUNT_COMMENT = 0;

const MAX_COUNT_COMMENT = 10;

const MIN_COUNT = 1;

const MAX_COUNT = 25;

const MIN_IMG_NUMBER = 1;

const MAX_IMG_NUMBER = 6;

const MIN_LIKES_COUNT = 15;

const MAX_LIKES_COUNT = 200;

const commentRandomIds = [];

//функция генерации коментариев
const createComment = () => {
  const randomId = getRandomIndex(MIN_COUNT , MAX_COUNT);

  while (commentRandomIds.indexOf(randomId) < 0) {
    commentRandomIds.push(randomId);
  }

  return {
    id: commentRandomIds[commentRandomIds.length - 1],
    avatar: `img/avatar-${getRandomIndex(MIN_IMG_NUMBER, MAX_IMG_NUMBER)}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME)
  };
};

// итоговая функция вывода значений
const generatePhotos = () => {

  // функция поиска фото
  const makePhoto = (id) => ({
    id,
    url: getRandomArrayElement(URL_INDEX),
    description: getRandomArrayElement(DESCRIPTION_INDEX),
    likes: getRandomIndex(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments:  Array.from({length: getRandomIndex(MIN_COUNT_COMMENT, MAX_COUNT_COMMENT)}, createComment)
  });

  const generateData = (count) => {
    const photosId = [];
    for (let i = 1; i <= count; i++) {
      photosId.push(makePhoto(i));
    }
    return photosId;
  };

  const data = generateData(MAX_COUNT);

  return data;
};

export {generatePhotos};

