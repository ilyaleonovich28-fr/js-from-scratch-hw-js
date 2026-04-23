// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(firstNumber, secondNumber, thirdNumber) {
  if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    return firstNumber;
  } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    return secondNumber;
  } else {
    return thirdNumber;
  }
}
let result = findLargest(44, 55, 99);
console.log(result);
