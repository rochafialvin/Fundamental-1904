///////////////////////////////////////////
// RIGHT TRIANGLE - UPSIDE DOWN (Terbalik)
//////////////////////////////////////////

// *  *  *  *  *
// *  *  *  *
// *  *  *
// *  *
// *

// var stars = "";
// var rows = 5;
// // i = 5 -> 4 -> 3 ...
// for (var i = rows; i >= 1; i--) {
//   for (var j = 1; j <= i; j++) {
//     stars += "* ";
//   }

//   stars += "\n";
// }

// console.log(stars);

/////////////////////////
// DOUBLE RIGHT TRIANGLE
/////////////////////////

// *  *  *  *  *
// *  *  *  *
// *  *  *
// *  *
// *
// *  *
// *  *  *
// *  *  *  *
// *  *  *  *  *

// var stars = "";
// var rows = 5;
// // i = 5 -> 4 -> 3 ...
// for (var i = rows; i >= 1; i--) {
//   for (var j = 1; j <= i; j++) {
//     stars += "* ";
//   }

//   stars += "\n";
// }

// for (var i = 2; i <= rows; i++) {
//   for (var j = 1; j <= i; j++) {
//     stars += "* ";
//   }

//   stars += "\n";
// }

// console.log(stars);

////////////////////
// PYRAMID TRIANGLE
////////////////////

//              *
//           *  *  *
//        *  *  *  *  *
//     *  *  *  *  *  *  *
//  *  *  *  *  *  *  *  *  *

//////////////
// FIZZ BUZZ
/////////////

/*
    Jika suatu angka dapat dibagi 3. Gantikan dengan kata Fizz

    Jika suatu angka dapat dibagi 5. Gantikan dengan kata Buzz

    Jika suatu angka dapat dibagi 3 dan 5. Gantikan dengan kata FizzBuzz
*/

// 1;
// 2;
// Fizz;
// 4;
// Buzz;
// Fizz;
// 7;
// 8;
// Fizz;
// Buzz;

for (var i = 1; i <= 30; i++) {
  if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
