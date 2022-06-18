// функция ввывода случайных чисел
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

export {getRandomArrayElement};


// функция генерации сдучайных чисел
function getRandomIndex (min, max) {
  return Math.floor (Math.random() * (max - min) + min);
}

export {getRandomIndex};
