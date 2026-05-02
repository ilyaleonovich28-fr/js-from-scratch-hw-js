/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function findCommonElements(firstArray, secondArray) {
  let reapeatingEements = [];
  for (let i = 0; i < firstArray.length; i++) {
    if (findUniqueElements(secondArray, firstArray[i]) !== true) {
      reapeatingEements.push(firstArray[i]);
    }
  }
  return reapeatingEements;
}

function findUniqueElements(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2) {
      return false;
    }
  }
  return true;
}

console.log(findCommonElements(array1, array2));