// Conditional Statement
// Boolean : true or false

// Operator perbandingan
// Menghasilkan nilai boolean

// var result = 5 < 4
// console.log(result)

// console.log(5 > 4) // true
// console.log(5 < 4) // false

// compare : value
// console.log( 7 == 9) // false
// console.log( 7 == 7) // true
// console.log( 7 == "7") // true

// compare : value and data type
// console.log( 7 === 9) // false
// console.log( 7 === 7) // true
// console.log( 7 === "7") // false

// compare: value
// console.log( 18 != 17 ) // true
// console.log( 24 != 24 ) // false
// console.log( 24 != "24" ) // false

// compare: value and data type
// console.log( 18 !== 17 ) // true
// console.log( 24 !== 24 ) // false
// console.log( 24 !== "24" ) // true

// Boleh mengikuti ujian jika membawa pensil ATAU pulpen
// Pulpen : true | Pensil : false | Ujian : true
// Pulpen : false | Pensil : true | Ujian : true
// Pulpen : false | Pensil : false | Ujian : false

// 7 > 8 ? false
// 7 == 8 ? false
// false
// console.log( 7 >= 8) // false

// 7 < 8 ? true
// 7 == 8 ? false
// true
// console.log( 7 <= 8) // true


// Operator logika (AND, OR, NOT)

// OR

// "Jika keduanya bernilai false, maka hasilnya false. Kondisi lainnya akan menghasilkasn true"
// "false OR false = false, sisanya true"

// Boleh mengikuti ujian jika membawa pensil ATAU pulpen
// Pulpen : true | Pensil : false | Ujian : true
// Pulpen : false | Pensil : true | Ujian : true
// Pulpen : false | Pensil : false | Ujian : false

// console.log(true || true) // true
// console.log(true || false) // true
// console.log(false || false) // false

// Menghasilkan number
// console.log(true | true) // 1
// console.log(true | false) // 1

// true || true = true
// console.log((6 < 9) || (7 > 6)) // true
// false || true
// console.log((3 >= 4) || (5 == "5")) // true


// AND
// "Jika keduanya bernilai true, maka hasilnya true. Kondisi lainnya akan menghasilkasn false"
// "true AND true = true, sisanya false"

// Boleh mengikuti ujian jika membawa pensil DAN pulpen
// Pulpen : true | Pensil : true | Ujian : true
// Pulpen : true | Pensil : false | Ujian : false
// Pulpen : false | Pensil : true | Ujian : false
// Pulpen : false | Pensil : false | Ujian : false

// console.log(true && true) // true
// console.log(true && false) // false
// console.log(false && false) // false

// Akan menghasilkan number
// console.log(true & true) // 1
// console.log(true & false) // 0

// false && true = false
// console.log((3 >= 4) && (5 == "5")) // false
// true && true = true
// console.log((6 < 9) && (7 > 6)) // true 

// NOT
// Membalikkan nilai yang ada didepannya

// console.log(!true) // false
// console.log(!false) // true

// var show = false

// menekan tombol "hubungi kami"
// menekan tombol x
// show = !show


// IF STATEMENT

// Jika condition bernilai true, task akan dijalankan
// Jika condition bernilai false, task tidak dijalankan
// if(condition){
  //task
// }


// Jika kondisi hujan -> kenakan jas hujan
// var rain = false

// if(rain){
//   console.log("Kenakan jas hujan")
// }

// Jika tidak bersalah -> dibebaskan
// var guilty = false

// if(!guilty){
//   console.log("Anda di bebaskan")
// }

// Jika umur sudah mencapai 18 atau lebih : dapat membuat SIM
// var age = 21
// true && false = false
// if(age >= 18 && age <=20){
//   console.log("Permohonan diterima, silahkan lanjutkan ke proses berikutnya");
// }

// IF ELSE STATEMENT

// Jika condition bernilai true, maka task 1 akan dijalankan
// Jika condition bernilai false, maka task 2 akan dijalankan

// if(condition){
  // task 1
// } else {
  // task 2
// }

// Jika kondisi hujan : kenakan payung
// Jika kondisi tidak hujan : kenakan jaket

// var rain = false

// if(rain){
  // Jika rain : true
  // console.log(`Rain : ${rain}`);
  // console.log("Kenakan payung");
// } else {
  // Jika rain : false
  // console.log(`Rain : ${rain}`);
  // console.log("Kenakan jaket");
// }

// Jika tidak bersalah : dibebaskan
// Jika bersalah : dihukum
// var guilty = true
// if(!guilty){
  // Jika guilty : false
  // console.log(`Guilty ${guilty}`);
  // console.log("Anda dibebaskan");
// } else {
  // Jika guilty : true
  // console.log(`Guilty ${guilty}`);
  // console.log("Anda dihukum");
// }

// Jika sudah mencapai 18 : Diizinkan
// Jika belum mencapai 18 : Ditolak

var age = 151

if(age >= 18){
  // Jika age > 18 atau age == 18 (18 ke atas)
  console.log(`Age : ${age}`);
  console.log("Permohonan diterima");
} else {
  // Jika age < 18
  console.log(`Age : ${age}`);
  console.log("Permohonan ditolak");
}