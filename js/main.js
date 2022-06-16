// Создание массива из 25 сгенерированных объектов

const URL_INDEX = ['photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg', 'photos/4.jpg', 'photos/5.jpg', 'photos/6.jpg', 'photos/7.jpg', 'photos/8.jpg', 'photos/9.jpg', 'photos/10.jpg', 'photos/11.jpg', 'photos/12.jpg', 'photos/13.jpg', 'photos/14.jpg', 'photos/15.jpg', 'photos/16.jpg', 'photos/17.jpg', 'photos/18.jpg', 'photos/19.jpg', 'photos/20.jpg', 'photos/21.jpg', 'photos/22.jpg', 'photos/23.jpg', 'photos/24.jpg', 'photos/25.jpg'];

const DESCRIPTION_INDEX = ['Вид пляжа', 'на пляж Туда', 'Лагуна', 'Вот такие фотографы у нас', 'Супчик джакузи', 'Тачка', 'Десерт', 'Компотик', 'Самолетик', 'Обувной ящик', 'Ляпота', 'Аудюха', 'Салатик', 'Кото-суши', 'Тапки-боты', 'В илюминаторе', 'Хор', 'Ретро-кар', 'Тапочки-светлячки', 'Отель', 'Обед-вкусняшка' , 'Закат', 'Крабик', 'На концерте', 'Доброжелательный бегемот'];

const MESSAGE = ['Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.'];

const NAME = ['Евпатий', 'Хон-Гильдон', 'Мишенька', 'Андрюша', 'Алексей'];

const MIN_COUNT = 1;

const MAX_COUNT = 25;

const MIN_IMG_NUMBER = 1;

const MAX_IMG_NUMBER = 6;

const MIN_LIKES_COUNT = 15;

const MAX_LIKES_COUNT = 200;

// функция ввывода случайных чисел
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// функция проверки длины строки
const checkStringLength = (string, length) => string.length <= length;

// итоговая функция вывода значений
const generatePhotos = () => {

  // функция поиска Id
  const makePhotoId = () => ({
    id,
  });

  const generatePhotosId = (count) => {
    const photosId = [];
    for (let i = 1; i <= count; i++) {
      photosId.push(makePhotoId(i));
    }
    return photosId;
  };

  const PHOTOS_ID = generatePhotosId(MAX_COUNT);

  const getRandomMessageIndex = getRandomArrayElement(0, MESSAGE - 1);
  const getRandomNameIndex = getRandomArrayElement(0, NAME - 1);

  const photoComments = {
    id: getRandomPositiveInteger(MIN_COUNT, MAX_COUNT),
    avatar: `img/avatar-${getRandomArrayElement(MIN_IMG_NUMBER, MAX_IMG_NUMBER)}.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME),
  };

  getRandomMessageIndex();
  getRandomNameIndex();
  return{
    id: PHOTOS_ID(),
    url: getRandomArrayElement(URL_INDEX),
    description: getRandomArrayElement(DESCRIPTION_INDEX),
    likes: checkStringLength(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: photoComments(),
  };
};

generatePhotos();

