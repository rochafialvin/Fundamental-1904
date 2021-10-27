//////////////////
// MARKET V.1.1 //
//////////////////

// Tentukan harga satuan masing - masing buah
var priceApple = 10000;
var priceGrape = 15000;
var priceOrange = 20000;

// Stock
var stockApple = 5;
var stockGrape = 7;
var stockOrange = 9;

// Meminta input user
var qtyApple = prompt(`Masukan jumlah qty Apel ( stock : ${stockApple} )`);
if (qtyApple > stockApple) {
  // Menampilkan informasi bahwa qty melebihi stock
  alert(
    `Permintaan melebihi stock, qty akan terisi sesuai jumlah stock yaitu ${stockApple}`
  );
  // Menyimpan stock apel sebagai jumlah qty yang dipesan
  qtyApple = stockApple;
}
var qtyGrape = prompt(`Masukan jumlah qty Anggur ( stock : ${stockGrape} ) `);
if (qtyGrape > stockGrape) {
  // Menampilkan informasi bahwa qty melebihi stock
  alert(
    `Permintaan melebihi stock, qty akan terisi sesuai jumlah stock yaitu ${stockGrape}`
  );
  // Menyimpan stock apel sebagai jumlah qty yang dipesan
  qtyGrape = stockGrape;
}
var qtyOrange = prompt(`Masukan jumlah qty Jeruk ( stock : ${stockOrange} ) `);
if (qtyOrange > stockOrange) {
  // Menampilkan informasi bahwa qty melebihi stock
  alert(
    `Permintaan melebihi stock, qty akan terisi sesuai jumlah stock yaitu ${stockOrange}`
  );
  // Menyimpan stock apel sebagai jumlah qty yang dipesan
  qtyOrange = stockOrange;
}

// Hitung total harga dari masing - masing buah
var totalPriceApple = qtyApple * priceApple;
var totalPriceGrape = qtyGrape * priceGrape;
var totalPriceOrange = qtyOrange * priceOrange;

// Total harga keseluruhan
var finalPrice = totalPriceApple + totalPriceGrape + totalPriceOrange;

// Susun teks yang akan di tampilkan
var detailInformation = `
  Detail Belanja

  Apel : ${qtyApple} x ${priceApple} = ${totalPriceApple}
  Grape : ${qtyGrape} x ${priceGrape} = ${totalPriceGrape}
  Orange : ${qtyOrange} x ${priceOrange} = ${totalPriceOrange}

  Total : ${finalPrice}
`;
// Tampilkan informasi pada alert
var money = parseInt(prompt(detailInformation));
// Mencari margin antara total yang harus dibayar dengan input dari user
var margin = Math.abs(money - finalPrice);

if (money < finalPrice) {
  // Jika uangnya kurang, transaksi dibatalkan
  alert(`Transaksi dibatalkan, Uang yang anda masukkan kurang ${margin}`);
} else if (money > finalPrice) {
  // Jika uangnya lebih
  alert(`Terimakasih, Uang kembali untuk Anda ${margin}`);
} else {
  // Jika uangnya sama
  alert("Terimakasih");
}
