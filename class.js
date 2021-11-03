////////////////////////
/* CALLBACK FUNCTION */
///////////////////////

// var addition = (num1, num2) => {
//   return num1 + num2;
// };

// var multiplication = (num1, num2) => {
//   return num1 * num2;
// };

// var calculator = (a, b, cb) => {
//   // a = 2
//   // b = 10
//   cb = (num1, num2) => {
//     // num1 = 2
//     // num2 = 10
//     return num1 * num2;
//   };
//   return cb(a, b);
// };

// var x = calculator(2, 10, multiplication);

// console.log(x);

/* Array Caculator */

// var addition = (num1, num2) => {
//   return num1 + num2;
// };

// var multiplication = (num1, num2) => {
//   return num1 * num2;
// };

// var numbers = [1, 2, 3];

// array, operation, operand
// [1, 2, 3], 10 , multiplication --> [10, 20, 30]

// var arrCalculator = (arr, operand, cb) => {
// arr = [1, 2, 3]
// operand = 2
// cb = (num1, num2) => {
//   return num1 * num2;
// };
// var arrResult = []; // [2, 4, 6]

// i = 3
// arr.length = 3
// for (var i = 0; i < arr.length; i++) {
// cb(3, 2)
// var result = cb(arr[i], operand);
// arrResult.push(result);
// }

//   console.log(`Before : ${arr}\nAfter : ${arrResult}`);
// };

// arrCalculator(numbers, 2, multiplication);
// arrCalculator(numbers, 5, addition);

////////////////////////////
/* CALLING OTHER FUNCTION */
///////////////////////////

// var first = () => {
//   console.log("First");
// };

// var second = () => {
//   first();
//   console.log("Second");
// };

// second();

// var add = (a, b) => {
//   return a + b;
// };
// var sub = (a, b) => {
//   return a + b;
// };
// var mul = (a, b) => {
//   return a + b;
// };

// var calculator = (num1, num2, operation) => {
//   if (operation == "add") {
//     return add(num1, num2);
//   } else if (operation == "sub") {
//     return sub(num1, num2);
//   } else {
//     return mul(num1, num2);
//   }
// };

// calculator(2, 3, "add");
// calculator(2, 3, "mul");
// calculator(2, 3, "sub");

////////////////////////
/* RECURSIVE FUNCTION */
////////////////////////

/* Function yang memanggil dirinya sendiri */

// counter = 0
// var countdown = (counter) => {
//   console.log(counter);
//   counter--;
//   if (counter > 0) {
//     countdown(counter);
//   }
// };

// countdown(3);

//////////////
/* FOR EACH */
//////////////

// var calculator = (num1, num2, cb) => {
//   return cb(num1, num2);
// };

// var x = calculator(2, 4, (a, b) => {
//   return a + b;
// });
// console.log(x);

/* For Each : Loop */

// var nums = [1, 2, 3];

// var cb = (value) => {
//   console.log(`Loop : ${value}`);
// };

// nums.forEach((value) => {
//   console.log(`Loop : ${value}`);
// });

//  #1
// nums.forEach(cb)

//  #2
// nums.forEach((value) => {
//   if (value % 2 == 0) {
//     console.log(`${value} adalah genap`);
//   } else {
//     console.log(`${value} adalah ganjil`);
//   }
// });

/* For Each : second argument */

// var letters = ["R", "G", "B"];

// letters.forEach((value, idx) => {
//   console.log(`Index ke ${idx} : ${value}`);
// });

/* For Each : third argument */

// var days = ["sunday", "monday", "tuesday"];

// days.forEach((val, idx, arr) => {
//   console.log(`val : ${val}`);
//   console.log(`idx : ${idx}`);
//   console.log(`arr : ${arr}`);
// });

// var numbers = [2, 5, 7];
// var arrResult = [];

// numbers.forEach((number) => {
//   arrResult.push(number * 2);
// });

// console.log(arrResult);

var nums = [2, 5, 3, 7];
var min, max;
