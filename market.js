/////////////////
// MARKET V.1.4
/////////////////

/*

    1. Hanya boleh ada satu block while untuk input qty semua produk.
    2. Gunakan for loop untuk menghitung total harga setiap barang dan total harga keseluruhan
    3. Terdapat menu tambahan, total semua menu yang dimiliki antara lain :
        1. Menampilkan buah
        2. Menambah buah
        3. Menghapus buah
        4. Membeli buah
        5. Exit
    4. Tampilkan daftar buah setiap selesai proses menambah dan menghapus buah
    5. User kini bisa memilih buah apa yang ingin dibeli, tidak harus beli semua.
    6. Setiap user sudah menentukan qty dari suatu produk, masukkan produk tersebut ke keranjang
    7. Tampilkan isi keranjang setiap selesai memilih satu produk untuk dibeli, dibarengi pertanyaan apakah akan lanjut belanja atau tidak.
    8. Kosongkan array setelah selesai melakukan pembayaran

*/

var fruits = [
  ["Apple", 10000, 5],
  ["Grape", 15000, 7],
  ["Orange", 20000, 8],
];

// menu = 1
var menu = parseInt(
  prompt(`
    Apa yang ingin anda lakukan :
    1. Menampilkan daftar buah
    2. Menambah buah
    3. Menghapus buah
    4. Membeli buah
    5. Exit
  `)
);

var fruits = [
  ["Apple", 10000, 5],
  ["Grape", 15000, 7],
  ["Orange", 20000, 8],
];

switch (menu) {
  case 1:
    var fruitList = `Daftar buah\n\n`;

    for (var i = 0; i < fruits.length; i++) {
      fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || stock: ${fruits[i][2]}\n`;
    }

    alert(fruitList);
    break;
  case 2:
    // Minta input data buah baru (nama, harga satuan, stock)
    var newName = prompt("Masukan nama buah");
    var newPrice = parseInt(prompt("Masukan harga buah"));
    var newStock = parseInt(prompt("Masukan stock buah"));

    // Susun data baru menjadi 1 buah array
    var newFruit = [newName, newPrice, newStock];

    // Masukkan array baru ke dalam array fruits
    fruits.push(newFruit);

    var fruitList = `Daftar buah\n\n`;

    for (var i = 0; i < fruits.length; i++) {
      fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || stock: ${fruits[i][2]}\n`;
    }

    alert(fruitList);
    break;

  case 3:
    // Tampilkan daftar buah, dan minta user pilih buah yang mau di hapus
    var fruitList = `Menghapus buah\n\n`;

    for (var i = 0; i < fruits.length; i++) {
      fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || stock: ${fruits[i][2]}\n`;
    }

    // selectedIndex = 0 (Apple)
    var selectedIndex = parseInt(prompt(fruitList));

    // index awal beroperasi, banyak data yang ingin di hapus
    fruits.splice(selectedIndex, 1);

    var fruitList = `Daftar buah\n\n`;

    for (var i = 0; i < fruits.length; i++) {
      fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || stock: ${fruits[i][2]}\n`;
    }

    alert(fruitList);
    break;
}

// do {
//   // Meminta input user

//   var qtyApple = prompt(`Masukan jumlah qty Apel ( stock : ${stockApple} )`);

//   if (qtyApple > stockApple) {
//     // Menampilkan informasi bahwa qty melebihi stock
//     alert(`Permintaan melebihi stock, stock : ${stockApple}`);
//   } else {
//     // keluar dari loop
//     break;
//   }
// } while (true);

// while (true) {
//   // stockGrape = 7
//   // qtyGrape = 5
//   var qtyGrape = prompt(`Masukan jumlah qty Anggur ( stock : ${stockGrape} ) `);
//   if (qtyGrape > stockGrape) {
//     // Menampilkan informasi bahwa qty melebihi stock
//     alert(`Permintaan melebihi stock, stock : ${stockGrape}`);
//   } else {
//     // keluar dari loop
//     break;
//   }
// }

// while (true) {
//   // stockOrange = 9
//   // qtyOrange = 10
//   var qtyOrange = prompt(`Masukan jumlah qty Jeruk ( stock : ${stockOrange} )`);
//   if (qtyOrange <= stockOrange) break;
//   alert(`Permintaan melebihi stock, stock : ${stockOrange}`);
// }

// // Hitung total harga dari masing - masing buah
// var totalPriceApple = qtyApple * priceApple;
// var totalPriceGrape = qtyGrape * priceGrape;
// var totalPriceOrange = qtyOrange * priceOrange;

// // Total harga keseluruhan
// var finalPrice = totalPriceApple + totalPriceGrape + totalPriceOrange;

// // Susun teks yang akan di tampilkan
// var detailInformation = `
//   Detail Belanja

//   Apel : ${qtyApple} x ${priceApple} = ${totalPriceApple}
//   Grape : ${qtyGrape} x ${priceGrape} = ${totalPriceGrape}
//   Orange : ${qtyOrange} x ${priceOrange} = ${totalPriceOrange}

//   Total : ${finalPrice}
// `;

// while (true) {
//   // Tampilkan informasi pada alert
//   var money = parseInt(prompt(detailInformation));
//   // Mencari margin antara total yang harus dibayar dengan input dari user
//   var margin = Math.abs(money - finalPrice);

//   if (money < finalPrice) {
//     alert(`Uang yang Anda masukkan kurang ${margin}`);
//   } else {
//     if (money > finalPrice) {
//       // Jika uangnya lebih
//       alert(`Terimakasih, Uang kembali untuk Anda ${margin}`);
//     } else {
//       // Jika uang yang diberikan memiliki jumlah yang pas dari seharusnya
//       alert("Terimakasih !");
//     }

//     break;
//   }
// }
