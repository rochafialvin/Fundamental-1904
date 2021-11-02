// https://avantutor.com/blog/10-simple-javascript-for-loop-exercises/

/*
let numbers1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let numbers2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351


// Example output: 
// 276 + 351 = 627

*/

// var numbers1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
// var numbers2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351

// var sum1 = 0;

// for (var i = 0; i < numbers1.length; i++) {
//   sum1 += numbers1[i];
// }

// var sum2 = 0;

// for (var i = 0; i < numbers2.length; i++) {
//   sum2 += numbers2[i];
// }

// console.log(sum1);
// console.log(sum2);
// console.log(sum1 + sum2);

// No. 2 //

// var number = 23;

// for (var i = 1; i <= number; i++) {
//   if (i % 2 == 0) console.log(i);
// }

// for (var i = 2; i <= number; i += 2) {
//   console.log(i);
// }

// No. 3 //

// var things = [43, "what", 9, true, "cannot", false, "be", 3, true];

// for (var i = things.length - 1; i >= 0; i--) {
//   console.log(`Data : ${things[i]}`);
// }

// things.reverse();
// for (var i = 0; i < things.length; i++) {
//   console.log(`Data : ${things[i]}`);
// }

// No. 4 //
// var arr1 = [4, 6, 7];
// var arr2 = [8, 1, 9];
// var arrResult = [];

// for (var i = 0; i < arr1.length; i++) {
//   arrResult[i] = arr1[i] + arr2[i];
// }

// for (var i = 0; i < arr1.length; i++) {
//   arrResult.push(arr1[i] + arr2[i]);
// }

// console.log(arrResult);

// No. 5 //

// var text = "javascript";

// var splitText = text.split(""); // [j, a, v, a, s, c, r, i, p, t]

// // 1 , 3, 5, 7, 9
// for (var i = 1; i < splitText.length; i += 2) {
//   splitText[i] = "Z";
// }

// var joinText = splitText.join("");

// console.log(joinText);

// No. 6 //

// var text = "don’t know why";

// if (text.includes("y")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// No. 7 //

// var number = 4;

// i = 1
// for (var i = number - 1; i >= 1; i--) {
// number *= i;
// }

// console.log(number);

// No. 8 //

// Buat pin

// 92
// var pin = Math.floor(Math.random() * 10000);

// // "92"
// var pinStr = pin.toString();

// if (pinStr.length < 4) {
//   var needDigit = 4 - pinStr.length;

//   // i = 3
//   // neeedDigit = 2
//   for (var i = 1; i <= needDigit; i++) {
//     pinStr += "0";
//   }
// }

// // Loop sebanyak 4 kali
// for (var i = 1; i <= 4; i++) {
//   // Minta input user
//   var inputUser = prompt("Tebak, berapa pinnya ?");
//   // Banding input user dengan pin
//   if (inputUser == pinStr) {
//     // Kalau benar, program berhenti dengan menampilkan informasi
//     console.log(inputUser);
//     console.log("That was correct");
//     break;
//   } else {
//     // Kalau salah, tampilkan informasi lalu minta input user lagi hingga 4 kali
//     console.log(inputUser);
//     console.log("Sorry that was wrong");
//   }

//   // Jika sudah 4 kali loop, maka berhentikan program dan tampilkan jawabannya
//   if (i == 4) {
//     console.log(`The answer is ${pinStr}`);
//   }
// }

// No. 10 //

var number = 4;

// number = 10
// i = 0
for (var i = number - 1; i >= 1; i--) {
  number += i;
}

console.log(number);
