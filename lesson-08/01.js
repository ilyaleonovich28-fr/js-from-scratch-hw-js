/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/
function capitalizeWords(item) {
  let array = [];
  let result = "";
  for (let i = 0; i < item.length; i++) {
    array.push(item[i]);
  }
  for (let i = 0; i < array.length; i++) {
    array[0] = array[0].toUpperCase();
    if (array[i] === " " && array[i + 1] !== undefined) {
      array[i + 1] = array[i + 1].toUpperCase();
    }
    result += array[i];
  }

  return result;
}
