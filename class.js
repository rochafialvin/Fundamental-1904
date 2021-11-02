///////////////
/* FUNCTION */
//////////////

/*
  Block kode :
    1. Memiliki nama
    2. Dapat digunakan secara berulang
    3. Dapat memiliki input dan output

  Note :
    1. Input adalah proses dimana kita dapat memberikan value kepada function untuk digunakan.
    2. Output adalah proses yang dilakukan oleh function dalam menghasilkan value sehingga dapat disimpan di variabel.
*/

/* Syntax Function */

/*
  keyword 'function' + nama + () + {}

  () -> Tempat menulis parameter

  Parameter -> variabel tempat menyimpan input.

  {} -> Tempat menulis task yang akan dikerjakan saat function dijalankan / dipanggil

*/

/* Function Declaration */

// function firstStep() {
//   var firstName = "Ethan";
//   console.log(
//     `Segala sesuatu yang besar, selalu dimulai dari satu langkah kecil. - ${firstName}`
//   );
// }

// firstStep();

/* Function Expression */

// var keepGoing = function () {
//   console.log(`Apapun yang terjadi, teruslah melangkah.`);
// };

// keepGoing();

/* Perbedaan keduanya */

/* Hoisted */

// leaf();

// function leaf() {
//   console.log(`Hijau Daun`);
// }

/* Not Hoisted */

// leaf();

// var leaf = function () {
//   console.log(`Hijau Daun`);
// };

//////////////////////////
/* ARROW FUNCTION (ES6) */
/////////////////////////

// var earth = () => {
//   console.log("Selamat Bumi");
// };

// earth();

//////////////////////////////////
/* WITHOUT PARAMETER AND RETURN */
//////////////////////////////////

/*

  Parameter = value inputan

  Return = keyword yang berfungsi untuk mengeluarkan value
  return returnedValue

  var = keyword yang berfungsi untuk mmebuat variabel
  var namaVariabel

  if = keyword yang berfungsi untuk mengevaluasi suatu kondisi
  if(conditionValue)

*/

// var fullName = () => {
//   var firstName = "Isac";
//   var lastName = "Newton";

//   console.log(`Halo, nama lengkap saya adalah ${firstName} ${lastName}`);
// };

// var result = fullName();
// console.log(result);

// var intResult = parseInt("234");
// console.log(`intResult : ${intResult}`);

////////////////////////
/* PARAMETER (INPUT) */
//////////////////////

// kita punya function namanya introduction yang memiliki satu buah parameter namanya firstName
var introduction = (firstName) => {
  console.log(`Halo, nama saya adalah ${firstName}`);
};

// introduction("Miraj");
// introduction("Khan");

var fullName = (lastName, firstName) => {
  console.log(`Halo, nama lengkap saya adalah ${firstName} ${lastName}`);
};

fullName("Kyojuro", "Rengoku");
fullName("Isaac", "Newton");
