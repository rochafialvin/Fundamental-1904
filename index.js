// CTRL + L : membersihkan terminal
// CTRL + J : open / minimize terminal
// CTRL + / : membuat / menghilangkan komentar
// CTRL + SHIFT + X
// CTRL + SHIFT + E
// COMMAND + SHIFT + X

// Tipe data
// String (text)
// console.log("Ini adalah string");

// Number
// console.log(235);
// console.log(-234);
// console.log(23.5);

// Boolean
// console.log(true);
// console.log(false);

// Array / [ ]
// Dapat menyimpan banyak data dengan berbagai macam tipe data
// console.log(["senin", "selasa", "rabu"]);
// console.log(["senin", 1904, -1904, true]);

// Object / { }
// key value pair
// Dapat menyimpan banyak data dengan berbagai macam tipe data
// console.log({ day: "senin", date: 25, rain: false });

////////////
// VARIABLES
////////////

// Membuat variabel tanpa memberikan value untuk disimpan
// var rain;
// Menampilkan isi dari variabel rain
// console.log(rain);

// Membuat variabel dengan memberikan value untuk disimpan
// var sky = "Blue";
// Menampilkan isi dari variabel sky
// console.log(sky);

// Rules : aturan dalam membuat variabel

// // // // // // // // // // // // /
// 1. Tidak dapat mengandung spasi //
// // // // // // // // // // // // /

// var firstname = "Alvin";
// console.log(firstname);

// var myaddress = "Bekasi";
// console.log(myaddress);

// // // // // // // // // // // // // // // // // // // // // // //
// 2. Hanya dapat diawali oleh huruf, underscore, atau dollar sign /
// // // // // // // // // // // // // // // // // // // // // // //

// var phonenumber, _age, $quality;

// // // // // // // // // // // // // // // // // // // // // // //
// 3. Hanya dapat terdiri dari huruf, underscore, atau dollar sign /
// // // // // // // // // // // // // // // // // // // // // // //

// var hello_123, my_address, $cloud9;

// // // // // // // // // // // // // // // // // // // // // // // // //
// 4. Bersifat case sensitive (membedakan huruf kecil dan huruf kapital) /
// // // // // // // // // // // // // // // // // // // // // // // // //

// var nextday;

// var Nextday;

// var thank = "Thank you for today";
// console.log(thank);
// console.log(thank);
// console.log(thank);

// Case Style
// Camel case

// var firstName;
// var myLastNight;

// var a = 23;
// var b = 3;
// var c = 3.14;
// var d = "23";

// string + number = string

// 3 + 23 = 26
// console.log(b + a); // 26
// 3 + "23"
// "3" + "23" = "323"
// console.log(b + d); // ?

// string - number = number
// string * number = number
// string / number = number

// console.log("23" - 3);
// console.log("23" * 3);
// console.log("23" / 3);

// var firstName = "Tanjirou";
// var secondName = "Kamado";
// var fullName = firstName + " " + secondName;
// console.log(fullName);

// Penjumlahan / Addition

// 23 + 3 = 26
// var addOne = a + b;
// 26 + 3.14 = 29.14
// var addTwo = addOne + c;
// console.log(addOne); // 26
// console.log(addTwo); // 29.4

// Pengurangan

// 23 - 3 = 20
// var subOne = a - b;
// 20
// console.log(subOne);

// 3 - 23 = -20
// var subTwo = b - a;
// -20
// console.log(subTwo);

// 23 - 3 - 3 - 23 = -6
// console.log(a - b - b - a);

// 23 - 3 - ( 3 - 23 )
// 20 - ( - 20 ) == 20 + 20
// 40
// console.log(a - b - (b - a));

// Perkalian / Multiplication
// // // // //

// 23 * 3 = 69
// console.log(a * b);

// 23 * -2 = -46
// console.log(a * -2);

// Pembagian / Division
// // // // //

// 23 / 3  = 7.6
// console.log(a / b);

// 23 / -3 = -7.6
// console.log(a / -3);

// 9 - 6 / 5
// 9 / 1.2
// 7.8
// console.log(4 + 5 - (2 * 3) / 5);

// Modulus / mode
// 10 / 2 = 5 sisa 0
// ii ii ii ii ii
// console.log(10 % 2);
// 10 / 3 = 3 sisa 1
// iii iii iii i
// console.log(10 % 3);
// 11 / 3 = 3 sisa 2
// iii iii iii ii
// console.log(11 % 3);
// Modulus dengan angka sama hasilnya adalah nol
// console.log(10 % 10);

// Ganjil / Genap
// Bilangan ganjil : jika dimodulus 2 akan menghasilkan 1
// ii ii ii i
// var oddSeven = 7 % 2;
// var oddNine = 9 % 2;
// console.log(oddSeven);
// console.log(oddNine);

// Bilangan genap : jika dimodulus 2 akan menghasilkan 0
// var evenFour = 4 % 2;
// var evenFourTeen = 14 % 2;
// console.log(evenFour);
// console.log(evenFourTeen);

// Increment
// var number = 10;
// 11
// number++;
// 12
// number++;
// 13
// number++;
// console.log(number);

// Decrement
// number = 10;
// number--;
// number--;
// number--;
// console.log(number);

// Shorthand operator
// var score = 0;
// 0 + 10 = 10
// score = score + 10;
// 10 + 10 = 20
// score += 10;
// 20 * 20 = 40
// score *= 2;
// 40 / 5 = 8
// score /= 5;
// console.log(score);

// var value = 2;
// value = value + 2;
// console.log(value);

// var day = "Mon";
// var date = 25;
// var rain = false;

// console.log(typeof day);
// console.log(typeof date);
// console.log(typeof rain);

// Math : object bawaan javascript untuk memproses angka

// Properties = variable di dalam object
// Methods = function di dalam object

// var something = {
//   // property
//   day: "senin",
//   date: 25,
//   rain: false,
//   // method
//   hello: () => {
//     console.log("method hello");
//   },
// };
// console.log(something);
// console.log(something.day);
// console.log(something.date);
// console.log(something.rain);

// console.log(something.day); // property
// something.hello(); // method
// console.log("method console"); // method

// Math
// console.log(Math.PI);

// Absolute, mengubah bilangan negatif menjadi positif
// Hasil dari Math.abs() disimpan ke variabel
// var result = Math.abs(-4.7);
// console.log(result);

// Power, memangkatkan bilangan
// 8 pangkat 2
// var result = Math.pow(8, 2);
// console.log(result);

// Square root, mencari akar dua bilangan
// akar 2 dari 64
// var result = Math.sqrt(64);
// console.log(result);

// Cube root, mencari akar tiga bilangan
// akar 3 dari 64
// var result = Math.cbrt(64);
// console.log(result);

// Round, membulatkan bilangan mengikuti aturan pembulatan
// var result = Math.round(4.7); // 5
// console.log(result);

// var result = Math.round(4.4); // 4
// console.log(result);

// Floor, membulatkan ke bawah
// var result = Math.floor(4.9);
// console.log(result);

// Ceil, membulatkan ke atas
// var result = Math.ceil(4.1);
// console.log(result);

// Min, mencari nilai minimum
// var result = Math.min(1, 3, 5);
// console.log(result);

// Max, mencari nilai maximum
// var result = Math.max(1, 3, 5);
// console.log(result);

/*
  Clue : Gunakan modulus / mode
  
  Kita memiliki 485 hari.
  Coba nyatakan dalam tahun, bulan, minggu, hari

  100 hari = 0 tahun, 3 bulan, 1 minggu, 3 hari

  1 tahun  = 360 hari
  1 bulan = 30 hari
  1 minggu = 7 hari

*/

// Memiliki 485 hari
var days = 500;
// 485 / 360 = 1 tahun (360 hari) sisa 125 hari
var years = Math.floor(days / 360);
days = days % 360;
// 125 / 30 = 4 bulan (120 hari) sisa 5 hari
var months = Math.floor(days / 30);
days = days % 30;
// 5 / 7 = 0 minggu (0 hari) sisa 5 hari
var weeks = Math.floor(days / 7);
days = days % 7;

// console.log("years total:", years);
// console.log("months total:", months);
// console.log("weeks total:", weeks);
// console.log("days total:", days);

/*
  Saat ini jumlah usia Andi & Budi = 49 tahun
  Rasio umur Andi & Budi = 0.4
  Berapa usia Andi & Budi 2 tahun lagi ?

*/

// andi + budi = 49
// rasio andi dan budi = 0.4 = 4 / 10 = 4 : 10 = 2 : 5
// rasio andi = 2 , rasio budi = 5
// rasio total = 2 + 5 = 7

var totalAge = 49,
  ratioAndi = 2,
  ratioBudi = 5,
  ratioTotal = ratioAndi + ratioBudi;

// andi = total umur * (rasio andi / total rasio)
var andi = totalAge * (ratioAndi / ratioTotal);
andi += 2;
// budi = total umur * (rasio budi / total rasio)
var budi = totalAge * (ratioBudi / ratioTotal) + 2;

// console.log("Andi :", andi);
// console.log("Budi :", budi);
// console.log(andi + budi);

// Student answer
var totalHari = 485;
var tahun = 360;
var bulan = 30;
var minggu = 7;

var totalYears = Math.floor(totalHari / tahun);
var totalMonths = Math.floor((totalHari % tahun) / bulan);
var totalWeeks = Math.floor(((totalHari % tahun) % bulan) / minggu);
var totalDays = Math.floor(((totalHari % tahun) % bulan) % minggu);

console.log("years total:", tahun1);
console.log("months total:", bulan1);
console.log("weeks total:", minggu1);
console.log("days total:", hari1);
