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

// Student answer (Mujaddid Shibghotul Islam)
var totalHari = 485;
var tahun = 360;
var bulan = 30;
var minggu = 7;

var totalYears = Math.floor(totalHari / tahun);
var totalMonths = Math.floor((totalHari % tahun) / bulan);
var totalWeeks = Math.floor(((totalHari % tahun) % bulan) / minggu);
var totalDays = Math.floor(((totalHari % tahun) % bulan) % minggu);

// console.log("years total:", tahun1);
// console.log("months total:", bulan1);
// console.log("weeks total:", minggu1);
// console.log("days total:", hari1);

// Variables

// Deklarasi / membuat
var weather = "Sunny";
// Mengubah nilai
weather = "Thunderstorm";
