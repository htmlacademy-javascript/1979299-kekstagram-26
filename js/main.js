// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
getRandomInt();


// Функция для проверки максимальной длины строки
// источник https://rche.ru/434_ogranichit-maks-dlinu-stroki-v-pole-input-primer-na-javascript.html

function limiter(fild, size) {
  if (fild.value.length > size) {
    fild.value = fild.value.substring(0, size);}
}
limiter();
