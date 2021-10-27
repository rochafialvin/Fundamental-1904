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

    Alur A: While dan For

    Alur B: Do While

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
var number = 1;

while (number <= 6) {
  console.log(`Number: ${number}`);

  number += 2;
}

console.log("Selesai, dan nilai number sekarang adalah ", number);
