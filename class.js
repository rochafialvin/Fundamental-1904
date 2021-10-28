// LOOP STATEMENTS
// Statement yang memungkinkan kita untuk mengulang suatu proses / task

// WHILE Loop

/*
    Aturan Utama
    Berlaku untuk segala jenis loop : while, do while, for

    "Selama 'condition' bernilai 'true', maka 'task' yang ada pada loop akan diproses"
*/

/*
    Alur Proses

    Alur A (Condition first): While dan For

    Alur B (Task first) : Do While

*/

/*
    Syntax

    while (condition) {

        task

        modification

    }
*/

///////////////////////////
// Menampilkan angka 1 - 5
///////////////////////////

/*
    Alur Proses While Loop

    1. Membuat variabel dengan nilai awal, digunakan sebagai acuan loop (init)
    2. Mengevaluasi condition (condition)
        a. condition : true, lanjut ke langkah 3
        b. condition : false, keluar dari block loop
    3. Menyelesaikan task
    4. Menjalankan modification
    5. Kembali ke langkah 2

*/

// number = 6
// init
// var number = 1;

// condition
// while (number <= 5) {
// task
// console.log(`Number: ${number}`);

// modification
// number++;
// }

// console.log(number);
// console.log("Selesai");

///////////////
// Dua Langkah
///////////////

// number = 7
// var number = 1;

// while (number <= 6) {
// Number : 5
//   console.log(`Number: ${number}`);

//   number += 2;
// }

// console.log("Selesai, dan nilai number sekarang adalah ", number);

// Rules : hanya boleh menggunakan number++

///////////////////////////////////
// Menampilkan nilai Genap (0 - 10)
///////////////////////////////////

// // init
// var number = 0;
// // condition
// while (number <= 10) {
//   // task
//   // Jika number merupakan bilangan genap
//   // Tampilkan di terminal
//   if (number % 2 == 0) {
//     console.log(`${number} adalah bilangan genap`);
//   }

//   // modification
//   number++;
// }
// console.log("Nilai number ", number);
///////////////////////////////////
// Menampilkan nilai Ganjil (0 - 10)
///////////////////////////////////
// init
// var number = 0;
// condition
// while (number <= 10) {
// task
// Jika number merupakan bilangan ganjil
// Tampilkan di terminal
//   if (number % 2 == 1) {
// console.log(`${number} adalah bilangan ganjil`);
//   }

// modification
//   number++;
// }
// console.log("Nilai number ", number);

///////////////////////////////////////////////
// Menampilkan nilai Ganjil dan Genap (0 - 10)
//////////////////////////////////////////////

// number = 4
// var number = 0;

// while (number <= 10) {
// Jika number merupakan bilangan ganjil
//   if (number % 2 == 1) {
// console.log(`${number} adalah bilangan ganjil`);
//   } else {
// console.log(`${number} adalah bilangan genap`);
//   }

//   number++;
// }

/////////////////
// DO WHILE LOOP
/////////////////

/*
    Alur Proses While Loop (Condition first)

    1. Membuat variabel dengan nilai awal, digunakan sebagai acuan loop (init)
    2. Mengevaluasi condition (condition)
        a. condition : true, lanjut ke langkah 3
        b. condition : false, keluar dari block loop
    3. Menyelesaikan task
    4. Menjalankan modification
    5. Kembali ke langkah 2

*/

/*
    Alur Proses DO WHILE (task first)

    1. Membuat variabel dengan nilai awal, digunakan sebagai acuan loop (init)
    2. Menyelesaikan task
    3. Menjalankan modification
    4. Mengevaluasi condition (condition)
        a. condition : true, lanjut ke langkah 2
        b. condition : false, keluar dari block loop

*/

/*

    Synatx Do While

    do{

        statement

    } while (condition)

*/

// number = 7
// var number = 1;

// do {
//   console.log(`DO WHILE : ${number}`);

//   number++;
// } while (number <= 5);

///////////////////////////////////
// Menampilkan angka ganjil (5 - 0)
//////////////////////////////////
// var number = 5;

// do {
//   if (number % 2 == 1) {
//     console.log(`DO WHILE : ${number}`);
//   }

//   number--;
// } while (number >= 0);

// console.log("selesai");

/////////////////////////////////////////////
// Menampilkan angka ganjil dan genap (5 - 0)
/////////////////////////////////////////////

// var number = 5;

// do {
//   if (number % 2 == 1) {
//     console.log(`DO WHILE GANJIL : ${number}`);
//   } else {
//     console.log(`DO WHILE GENAP : ${number}`);
//   }

//   number--;
// } while (number >= 0);

// console.log("selesai");

///////////
// For Loop
///////////

/*
    Alur Proses For Loop

    1. Membuat variabel dengan nilai awal, digunakan sebagai acuan loop (init)
    2. Mengevaluasi condition (condition)
        a. condition : true, lanjut ke langkah 3
        b. condition : false, keluar dari block loop
    3. Menyelesaikan task
    4. Menjalankan modification
    5. Kembali ke langkah 2

*/

/*
    Syntax for loop

    for(init ; condition ; modification){

        task
    
    }

*/

// number = 4
// for (var number = 0; number <= 3; number++) {
//   console.log(`FOR : ${number}`);
// }

// console.log("selesai");

// for (var number = 0; number <= 7; number += 2) {
//   console.log(`FOR : ${number}`);
// }

// console.log("selesai");

/////////////////////////////////////////////////////////////////
// Menampilkan nilai ganjil 0 - 25 yang merupakan bilangan prima
// 2, 3, 5, 7, 11, 13, 17, 19, 23
////////////////////////////////////////////////////////////////

// number == 3
// for (var number = 0; number < 25; number++) {
//   // false || true == true
//   if (
//     (number % 2 == 1 && number % 3 > 0 && number != 1) ||
//     number == 2 ||
//     number == 3
//   ) {
//     console.log(number);
//   }
// }

// number = 5
// for (number = 2; number < 25; number++) {
//   switch (true) {
//     case number == 2: // false
//       console.log(`number: ${number}`);
//       break;
//     case number == 3: // false
//       console.log(`number: ${number}`);
//       break;
//     case number % 2 == 0: // false
//       break;
//     case number % 3 == 0: // false
//       break;
//     default:
//       console.log(`number: ${number}`);
//       break;
//   }
// }

//////////////////////////////////////
// Menampilkan nilai ganjil dan genap
/////////////////////////////////////

// for (var number = 0; number <= 10; number++) {
//   if (number % 2 == 0) {
//     console.log(`${number} adalah angka genap`);
//   } else {
//     console.log(`${number} adalah angka ganjil`);
//   }
// }

/////////
// BREAK
////////

// Keyword break berfungsi untuk memberhentikan proses loop

// i = 3
// for (var i = 1; i <= 5; i++) {
//   console.log(i);
//   if (i == 3) break;
// }

// console.log(`nilai i ${i}`);

//////////////////////////////////////////////////////
// Mencari angka random (0 - 99) yang dapati dibagi 5
//////////////////////////////////////////////////////

// while (true) {
// Mencari nilai random 0 - 99
//   var randomNumber = Math.floor(Math.random() * 100);

// Tampilkan nilai random yang di dapat
//   console.log(randomNumber);

// Check apakah nilai tersebut habis dibagi 5, jika iya maka hentikan loopnya
//   if (randomNumber % 5 == 0) break;
// }

////////////
// CONTINUE
///////////

////////////////////////////////////////////////////////
// Print 1 - 10. Lewati untuk angka yang habis dibagi 3
////////////////////////////////////////////////////////

// i = 5
for (var i = 1; i <= 5; i++) {
  if (i % 3 == 0) continue;

  console.log(i);
}
