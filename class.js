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

// var numbers = [2];
// var min, max;

// // min = 2
// // max = 7
// numbers.forEach((number, index) => {
//   // number = 7 ; index = 3
//   if (index == 0) {
//     min = max = number;
//   } else if (number > max) {
//     max = number;
//   } else if (number < min) {
//     min = number;
//   }
// });

// console.log(`Min : ${min}, Max: ${max}`);

// Min : 2, Max : 7

///////////////////////////////////////////////////////////////////////
// Buat sebuah function yang dapat memisahkan nilai genap dan ganjil //
// data awal = [11, 22, 34, 41, 52, 63, 71, 86,]                     //
// hasil = [ [11, 41, 63 ,71], [22, 34, 52, 86] ]                    //
//////////////////////////////////////////////////////////////////////

// var oddEven = (numbers) => {
//   var odds = [];
//   var evens = [];

//   numbers.forEach((number) => {
//     if (number % 2 == 0) {
//       // Masukkan ke array genap
//       evens.push(number);
//     } else {
//       // Masukkan ke array ganjil
//       odds.push(number);
//     }
//   });

//   return [odds, evens];
// };

// var result = oddEven([11, 22, 34, 41, 52, 63, 71, 86]);
// console.log(result);

/////////
/* MAP */
/////////

// jumlah data di array baru akan sama, bentuknya akan berbeda

/*
  1. Callback function harus me-return suatu nilai (tipe data apapun), dimana setiap nilai yang direturn akan masuk ke dalam array baru yang dibuat oleh function map secara internal, bukan karena kita yang menulis kodenya.

  2. Map akan me-return array baru yang sudah berisi nilai yang di return oleh callback function
*/

/* Multiple by two : For Each */
// var numbers = [1, 2, 3];
// var arrResult = [];

// numbers.forEach((number) => {
//   arrResult.push(number * 2);
// });

// console.log(`for each : ${arrResult}`);

/* Multiple by two : Map */

// var integers = [1, 2, 3];

// new array = [2, 4, 6]
// var result = integers.map((integer) => {
// return integer * 2;
// });

// console.log(`map : ${result}`);

/* Man or Woman */

/* Mrs. Janette */
/* Mr. Kim Shin */

// ["Mrs. Janette", "Mr. Kim Shin", "Mr. Tony"]

// var persons = [
//   ["Janette", "Woman"],
//   ["Kim Shin", "Man"],
//   ["Tony", "Man"],
// ];

// // new array (di dalam map) = [`Mrs. Janette`, `Mr. Kim Shin`, `Mr. Tony`]
// var result = persons.map((value) => {
//   // value = ["Tony", "Man"]
//   // value[0] = "Tony"
//   // value[1] = "Man"
//   if (value[1] == "Woman") {
//     //
//     return `Mrs. ${value[0]}`;
//   } else {
//     //
//     return `Mr. ${value[0]}`;
//   }
// });

// console.log(result);

//////////////////////////////////////////////////////////////////
// Sebuah function yang dapat menentukan nilai genap dan ganjil //
// [1, 2, 3, 4]                                                 //
// [ [1, "Ganjil"], [2, "Genap"], [3, "Ganjil"], [4, "Genap"] ] //
//////////////////////////////////////////////////////////////////
// var oddEven = (numbers) => {
//   // numbers = [1, 2, 3]
//   // new array = [ [1, "Ganjil"], [2, "Genap"], [3, "Ganjil"] ]

//   // result = [ [1, "Ganjil"], [2, "Genap"], [3, "Ganjil"] ]
//   var result = numbers.map((number) => {
//     if (number % 2 == 0) {
//       return [number, "Genap"];
//     } else {
//       return [number, "Ganjil"];
//     }
//   });

//   return result;
// };

// var result = oddEven([1, 2, 3]);
// console.log(result);
// result = [ [1, "Ganjil"], [2, "Genap"], [3, "Ganjil"] ]

////////////
/* FILTER */
///////////

/*
  1. Callback function harus me-return suatu boolean.

  2. Callback me-return true : value yang sedang diproses akan disimpan ke array baru.

  3. Callback me-return false : value yang sedang diproses akan diabaikan.

  4. Filter akan me-return array baru.
*/

var fruits = [
  ["Apel Hijau", "segar"],
  ["Apel Merah", "segar"],
  ["Apel Coklat", "tidak segar"],
];

// new array = [ ["Apel Hijau", "segar"], ["Apel Merah", "segar"] ]
var arrBaru = fruits.filter((fruit) => {
  // fruit = ["Apel Coklat", "tidak segar"]
  // fruit[0] = "Apel Coklat"
  // fruit[1] = "tidak segar"
  return fruit[1] == "segar"; // false
});

console.log(arrBaru);
