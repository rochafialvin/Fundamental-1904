// SEMUA DI BUAT DALAM BENTUK FUNCTION

/////////////////////
/* SORT DESCENDING */
/////////////////////

/*
  1. return < 0 , a akan berada sebelum b

  2. return 0 , posisi a dan b tidak berubah

  3. return > 0 , b akan berada sebelum a
*/

// const words = ["Elephant", "Black", "Yes", "Yas", "Rain"];

// const descSort = (strings) => {
//   strings.sort((a, b) => {
//     if (a > b) {
//       return -1;
//     } else if (b > a) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });

//   return strings;
// };
// return [ 'Yes', 'Yas', 'Rain', 'Elephant', 'Black' ]

// console.log(descSort(words));

//////////////////
/* REVERSE WORD */
/////////////////

/* Reverse untuk setiap kata */

/* Hai aku Joan Mir */
/* iaH uka naoJ riM */

/*
  "Hai aku Joan Mir"

  // split()
  ["Hai", "aku", "Joan", "Mir"]

  // map()
  ["iaH", "uka", "naoJ", "riM"]

      "aku"

      // split()
      ["a", "k", "u"]

      // reverse()
      ["u", "k", "a"]

      // join()
      "uka"

      // return
      return "uka"


  // join()
  "iaH uka naoJ riM"
*/

/* Hai aku Joan Mir */
// const reverseWord = (word) => {
//   // split()
//   let words = word.split(" ");
//   // map()
//   let wordsFinal = words.map((word) => {
//     // split()
//     words = word.split("");
//     // reverse()
//     words.reverse();
//     // join()
//     return words.join("");
//   });

//   // join()
//   return wordsFinal.join(" ");
// };

// const reverseWord = word => word.split(" ").map(word => word.split("").reverse().join("")).join(" ");

// console.log(reverseWord("Joan Mir"));

// let greet = "Good Morning";

// [Good, Morning]
// let finalGreet = greet.split(" ").reverse().join(" ");

// [Morning, Good]
// let greetReverse = greetSplit.reverse();

// "Morning Good"
// let finalGreet = greetReverse.join(" ");

// console.log(finalGreet);

// const numbers = [1, 2, 3, 4];
// const filterGenap = number => number % 2 == 0;

// console.log(numbers.filter(filterGenap));

////////////////////
// MAP DUPLICATE //
///////////////////

/*
 1.Method map membutuhkan array untuk di proses, dan callback function yang akan memproses setiap data dari array.

  2.Map akan menjalankan callback function sebanyak data yang ada di array, dan setiap kali dijalankan, data pada array akan masuk secara bergantian.

  3.Callback yang masuk kedalam map akan melakukan return nilai, dan nilai yang di return ini akan dimasukkan ke dalam array baru.

  4.Array baru yang berisi hasil dari proses map akan di return oleh map sehingga hasilnya dapat disimpan ke dalam variabel.
*/

// const numbers = [1, 2, 3];
// const multiple = (number) => {
//   return number * 2;
// };

// const mapDuplicate = (arr, cb) => {
//   // arr = [1, 2, 3]
//   // cb = (number) => {
//   //   return number * 2;
//   // };

//   const newArray = []; // [2, 4, 6]

//   arr.forEach((element) => {
//     // element = 3

//     newArray.push(cb(element));
//   });

//   return newArray;
// };

// const resultMap = numbers.map(multiple);
// const resultMapDuplicate = mapDuplicate(numbers, multiple);

// console.log("resultMap", resultMap);
// console.log("resultMapDuplicate", resultMapDuplicate);

//////////////////////
// FILTER DUPLICATE //
/////////////////////

/*
  1.Method filter membutuhkan array untuk di proses, dan callback function yang akan memproses setiap data dari array.

  2.Filter akan menjalankan callback function sebanyak data yang ada di array, dan setiap kali dijalankan, data pada array akan masuk secara bergantian.

  3.Callback yang masuk kedalam filter akan melakukan return boolean, dan boolean yang di return adalah true, maka data yang sedang di proses akan dimasukkan ke dalam array baru, adapun jika me-return false, datanya tidak dimasukkan ke array baru.

  4.Array baru yang berisi hasil dari proses filter akan di return oleh filter sehingga hasilnya dapat disimpan ke dalam variabel.
*/
// const numbers = [1, 2, 3, 4];
// const genap = (number) => {
//   return number % 2 == 0;
// };

// const filterDuplicate = (arr, cb) => {
//   const arrBaru = [];
//   // arr = [1, 2, 3]
//   arr.forEach((value) => {
//     // result --> true or false
//     if (cb(value)) {
//       arrBaru.push(value);
//     }
//   });

//   return arrBaru;
// };

// const resultDuplicate = filterDuplicate(numbers, genap);
// console.log(resultDuplicate);
