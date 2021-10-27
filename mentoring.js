// IMT
// massa / tinggi ^ 2

// var weight = parseInt(prompt("Masukkan Massa(kg) : "));
// var height = parseFloat(prompt("Masukkan Tinggi(m) : "));

// var imt = weight / Math.pow(height, 2);
// var desc;

// if (imt < 18.5) {
//   desc = "Kurang";
// } else if (imt >= 18.5 && imt <= 24.9) {
//   desc = "Ideal";
// } else if (imt >= 25.0 && imt <= 29.9) {
//   desc = "Berlebih";
// } else if (imt >= 30.0 && imt <= 39.9) {
//   desc = "Sangat Berlebih";
// } else {
//   desc = "Obesitas";
// }

// var info = `Massa ${weight}kg & tinggi ${height}m\nIMT = ${imt}, berat badan ${desc}`;

// alert(info);
// console.log(info);

// ODD EVEN

// var number = parseInt(prompt("Masukkan angka : "));
// var condition;

// if (number % 2 == 0) {
//   condition = "genap";
// } else {
//   condition = "ganjil";
// }

// var info = `Angka ${number} adalah bilangan ${condition}`;

// alert(info);
// console.log(info);

// var pets = ["cat", "dog"];

// !pets.length > 0
// !2 > 0
// !true > 0
// false > 0
// false > false
// false
// console.log(!pets.length > 0);

// true lebih besar dari false
// console.log(true > false);
// console.log(false > true);

//
// var firstNumber = parseInt(prompt("Masukkan angka pertama"));
// var secondNumber = parseInt(prompt("Masukkan angka kedua"));

// if (firstNumber > secondNumber) {
//   alert(`${firstNumber} adalah yang terbesar`);
// } else if (firstNumber < secondNumber) {
//   alert(`${secondNumber} adalah yang terbesar`);
// } else {
//   alert("Kedua angka besarnya sama");
// }

// Besaran belanja lebih besar 1000 --> discount 15%
// Besaran belanja lebih kecil atau sama dengan 1000 --> discount 5%

var amount = parseInt(prompt("Masukan besaran total belanja"));
var discount;

if (amount > 1000) {
  discount = 15;
} else {
  discount = 5;
}

var totalDiscount = amount * (discount / 100);
var finalAmount = amount - totalDiscount;

alert(`
Besaran belanja    ${amount}
Besaran discount ${discount}%   ${totalDiscount}
Besaran yang dibayar    ${finalAmount}`);
