// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
// найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

console.log("----------------")

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: 
// increment и decrement. Метод increment должен увеличивать значение счетчика на 1, 
// а метод decrement должен уменьшать значение счетчика на 1. 
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = (count) => {
  let countIndex = 0;
  return {
      inc: () => {return count + ++countIndex},
      dec: () => {return count + --countIndex}
  }
}

const counter = createCounter(0);
console.log(counter.inc());
console.log(counter.inc());
console.log(counter.dec());

console.log("----------------")

// 3) Напишем функцию, которая будет находить 
// факториал числа с использованием рекурсии:

function factorial(number) {
  if (number === 1 || number === 0) {
    return 1;
  }
  if (number < 0) {
    return "Число не может быть меньше нуля"
  }
  return factorial(number - 1) * number;
}

console.log(factorial(5)); 
console.log(factorial(0)); 
console.log(factorial(-1)); 