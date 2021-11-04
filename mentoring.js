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

const mapDuplicate = (arr, cb) => {
  // Isi jawaban teman - teman disini
  return [];
};

//////////////////////
// FILTER DUPLICATE //
/////////////////////

const filterDuplicate = (arr, cb) => {
  // Isi jawaban teman - teman disini
  return [];
};
