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

var a = 23;
var b = 3;
var c = 3.14;
var d = "23";

// string + number = string

// 3 + 23 = 26
console.log(b + a); // 26
// 3 + "23"
// "3" + "23" = "323"
console.log(b + d); // ?

// string - number = number
// string * number = number
// string / number = number

console.log("23" - 3);
console.log("23" * 3);
console.log("23" / 3);

var firstName = "Tanjirou";
var secondName = "Kamado";
var fullName = firstName + " " + secondName;
console.log(fullName);

// Penjumlahan / Addition

// 23 + 3 = 26
var addOne = a + b;
// 26 + 3.14 = 29.14
var addTwo = addOne + c;
console.log(addOne); // 26
console.log(addTwo); // 29.4

// Pengurangan

// 23 - 3 = 20
var subOne = a - b;
// 20
console.log(subOne);

// 3 - 23 = -20
var subTwo = b - a;
// -20
console.log(subTwo);

// 23 - 3 - 3 - 23 = -6
console.log(a - b - b - a);

// 23 - 3 - ( 3 - 23 )
// 20 - ( - 20 ) == 20 + 20
// 40
console.log(a - b - (b - a));

// Perkalian / Multiplication
// // // // //

// 23 * 3 = 69
console.log(a * b);

// 23 * -2 = -46
console.log(a * -2);

// Pembagian / Division
// // // // //

// 23 / 3  = 7.6
console.log(a / b);

// 23 / -3 = -7.6
console.log(a / -3);

// 9 - 6 / 5
// 9 / 1.2
// 7.8
console.log(4 + 5 - (2 * 3) / 5);
