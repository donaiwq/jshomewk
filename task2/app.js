// // * Написать программу которая спрашивает у пользователя 2 числа(через prompt) и выводит в консоль какое меньше. Если числа равны, то вывести что они равны. Например: 5 и 10 "5 меньше 10", 7 и 1 "7 больше 1", 5 и 5 "числа равны"

// const getFirstNum = '7'
// const getSecondNum = '9'

// if (getFirstNum >= getSecondNum) {
//   console.log(getFirstNum + ' ', 'больше', getSecondNum);
// }
// else if (getFirstNum <= getSecondNum) {
//   console.log(getFirstNum + ' ',  'меньше', getSecondNum);
// }
// else if (getFirstNum === getSecondNum) {
//   console.log('числа равны');
// }
// else {
//   console.log('Check your number');
// }

// // * Написать программу "Треугольник в цикле". Программа должна в консоль нарисовать следующую фигуру:
// // *
// // **
// // ***
// // ****
// // *****
// // ******
// // *******


// var starDraw = 7;
// var spaceDraw = " ";
// var star = "*";
// for (var i = 0; i < starDraw; i++) {
//   spaceDraw += star;
//   console.log(spaceDraw);
// }


// // * Написать программу FizzBuzz: программа должны вывести числа от 1 до 100 по следующим правилам. Если число делится на 3 то вывести Fizz, если число делится на 5 вывести Buzz, если делится и на 3 и на 5, то вывести FizzBuzz, иначе вывести просто число. Например: 1 2 Fizz 4 Buzz и т.д.
 
// var nums = 100
// for (var i = 0; i < nums; i++){
//   if (i % 3 == 0) {
//     console.log(i +'Fizz');
//   }
//   if (i % 5 == 0) {
//     console.log(i+'Buzz');
//   }
//   if (i % 5 == 0 && i % 3 == 0) {
//     console.log('FizzBuzz');
//   }
 
// }