/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

let arrayNumber = [1, 2, 3, 4, 4, 3, 1, 5, 5, 6, 7, 8, 8, true, "hello"];

function findUniqueElements(array) {
  let uniqueElement = [];
  for (let i = 0; i < array.length; i++) {
    if (getUniqueElement(uniqueElement, array[i]) !== true) {
      uniqueElement.push(array[i]);
    }
  }
  return uniqueElement;
}

function getUniqueElement(arrayUnique, arrayElement) {
  for (let i = 0; i < arrayUnique.length; i++) {
    if (arrayUnique[i] === arrayElement) {
      return true;
    }
  }
  return false;
}
console.log(findUniqueElements(arrayNumber));
