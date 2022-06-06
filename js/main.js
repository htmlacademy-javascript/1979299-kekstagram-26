// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// expected output: 0, 1 or 2

console.log(getRandomInt(1));
// expected output: 0

console.log(Math.random());
// expected output: a number from 0 to <1

// Функция для проверки максимальной длины строки
// источник https://rche.ru/434_ogranichit-maks-dlinu-stroki-v-pole-input-primer-na-javascript.html

function limiter(fild, size) {
  if (fild.value.length &gt; size) {
  fild.value = fild.value.substring(0, size);}
  }

  