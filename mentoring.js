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

var number = parseInt(prompt("Masukkan angka : "));
var condition;

if (number % 2 == 0) {
  condition = "genap";
} else {
  condition = "ganjil";
}

var info = `Angka ${number} adalah bilangan ${condition}`;

alert(info);
console.log(info);
