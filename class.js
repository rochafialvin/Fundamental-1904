////////////
// REVIEW //
////////////

// LOOP
// Mengulang sebuah proses yang sama selama kondisi tertentu masih tepenuhi (true)

// init
// task
// condition
// modification

// Untuk menentukan banyaknya loop, cukup ganti angka 6
// 1 2 3 4 5 6
// var i = 1 ; i <= 6 ; i++
// var i = 1 ; i < 7 ; i++

// 6 5 4 3 2 1
// 6 --> 7
// var i = 6; i >= 1; i--
// var i = 6; i > 0; i--

// Ketika berhadapan dengan array
// var i = 0; i < days.length; i++
// var days = ["senin", "selasa", "rabu", "kamis", "jumat"]; // length = 5 - 1
// ["senin", "selasa", "rabu"] , length = 3 - 1

// 0, 1, 2,
// var i = 0; i < days.length; i++

// 2 , 1, 0
// var i = days.length - 1; i >= 0; i--
// for (var i = days.length - 1; i >= 0; i--) {
//   console.log(`Hari : ${days[i]}`);
// }

// var full = 5;

// i = 6
// for (var i = 1; i <= 5; i++) {
//   console.log(`Suap : ${i}`);
// }

// Untuk menentukan banyaknya loop, cukup ganti angka 6
// var i = 1 ; i <= 6 ; i++

///////////
// ARRAY //
///////////

// Dapat menyimpan banyak data
// var colors = ["Red", "Green", "Blue"];

// var things = [
//   ["green pen", "yellow pen"],
//   ["whiteboard", "blackboard"],
//   ["small cup", "medium cup", "large cup"],
// ];

// console.log(colors[1]); // Green
// console.log(things[1]); // ["whiteboard", "blackboard"]
// x = array, array itu memiliki index
// x = ["whiteboard", "blackboard"]
// var x = things[1];

// Menampilkan whiteboard
// console.log(x[0]);
// console.log(things[1][0]);
// console.log(things[2][2]);

// - Clue : variable fruits kini berisi array dua dimensi. Dimana isi dari array tersebut adalah array juga yang setiap arraynya akan menyimpan informasi nama buah, harga satuan buah, dan stock buah yang dimiliki.

var fruits = [
  ["Apple", 10000, 5],
  ["Grape", 15000, 7],
  ["Orange", 20000, 10],
];

var carts = [];

// Mau beli buah apa ?
// 0. Apple
// 1. Grape
// 2. Orange

var userInput = prompt("Mau beli apa ?");
console.log(fruits[userInput]);

// qtyOrange = 3
// fruits[0] = ["JEruk", 15000, 7]
// fruits[0][2] = 5
if (qtyOrange > fruits[0][2]) {
  console.log("Permintaan apple melebihi stock");
}
