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

var addition = (num1, num2) => {
  return num1 + num2;
};

var multiplication = (num1, num2) => {
  return num1 * num2;
};

var numbers = [1, 2, 3];

// array, operation, operand
// [1, 2, 3], 10 , multiplication --> [10, 20, 30]

var arrCalculator = (arr, operand, cb) => {
  // arr = [1, 2, 3]
  // operand = 2
  // cb = (num1, num2) => {
  //   return num1 * num2;
  // };
  var arrResult = []; // [2, 4, 6]

  // i = 3
  // arr.length = 3
  for (var i = 0; i < arr.length; i++) {
    // cb(3, 2)
    var result = cb(arr[i], operand);
    arrResult.push(result);
  }

  console.log(`Before : ${arr}\nAfter : ${arrResult}`);
};

arrCalculator(numbers, 2, multiplication);
arrCalculator(numbers, 5, addition);
