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

var number = 6;

while (number <= 5) {
  console.log(`WHILE: ${number}`);

  number++;
}

// init
number = 6; // number = 7
// menjalankan task
do {
  // menampilkan nilai 'number'
  console.log(`DO WHILE : ${number}`);
  // menjumlahkan number dengan nilai 1
  number++;
  // evaluasi number
} while (number <= 5);
