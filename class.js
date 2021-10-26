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

console.log(true || true) // true
console.log(true || false) // true
console.log(false || false) // false

// true || true = true
console.log((6 < 9) || (7 > 6)) // true
// false || true
console.log((3 >= 4) || (5 == "5")) // true