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
// [name, price, stock]
var fruits = [
  ["Apple", 10000, 5],
  ["Grape", 15000, 7],
  ["Orange", 20000, 8],
];

// [name, price, qty]
var cart = [];

var showMenu = true;
while (showMenu) {
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
      // Create daftar buah
      var fruitList = `Menghapus buah\n\n`;

      for (var i = 0; i < fruits.length; i++) {
        fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || stock: ${fruits[i][2]}\n`;
      }

      // selectedIndex = 0 (Apple)
      var selectedIndex = parseInt(prompt(fruitList));

      // menampilkan daftar buah dan memilih buah untuk dihapus
      // index dari buah terpilih akan disimpan ke variable selIndex
      fruits.splice(selectedIndex, 1);

      var fruitList = `Daftar buah\n\n`;

      for (var i = 0; i < fruits.length; i++) {
        fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || stock: ${fruits[i][2]}\n`;
      }

      alert(fruitList);
      break;

    case 4:
      var isShoping = true;
      while (isShoping) {
        // Tampilkan daftar buah dan minta user untuk memilih
        var fruitList = `Membeli buah\n\n`;

        for (var i = 0; i < fruits.length; i++) {
          fruitList += `${i}. ${fruits[i][0]} || Rp.${fruits[i][1]} || stock: ${fruits[i][2]}\n`;
        }

        // 1 --> Grape
        var selectedIndex = parseInt(prompt(fruitList));

        // var [selName, selPrice, selStock] = ["Grape", 15000, 7]
        // selectedName = "Grape"
        // selectedPrice = 15000
        // selectedStock = 7
        var [selectedName, selectedPrice, selectedStock] =
          fruits[selectedIndex];

        while (true) {
          // Minta user input qty
          // ["Grape", 15000, 7]
          var selectedQty = parseInt(
            prompt(
              `Masukan quantity untuk ${selectedName}, stock: ${selectedStock}`
            )
          );

          // Jika melebihi stock, minta input ulang
          if (selectedQty > selectedStock) {
            alert(
              `Quantity yang diminta ${selectedQty}, melebihi jumlah stock ${selectedStock}`
            );
          } else {
            // Jika tidak melebihi stock, masukan buah yang terpilih ke dalam keranjang
            // cart.push(["Grape", 15000, 5]);
            cart.push([selectedName, selectedPrice, selectedQty]);
            // Kurangi stock buah yang dimasukkan ke keranjang
            // ["Grape", 15000, 2]
            fruits[selectedIndex][2] -= selectedQty;
            break;
          }
        }

        // Tampilkan isi keranjang dan tanyakan user apakah ingin beli buah lainnya ?
        var cartList = `Keranjang\n\n`;

        for (var i = 0; i < cart.length; i++) {
          cartList += `${i}. ${cart[i][0]} || Rp.${cart[i][1]} || qty: ${cart[i][2]}\n`;
        }

        cartList += "\nApakah ingin belanja lainnya ?";

        // OK -> true
        // Cancel -> false
        isShoping = confirm(cartList);
      }

      /*
        cart = [
          ["Grape", 15000, 5, 75000],
          ["Apple", 10000, 1, 10000],
        ]
      
      */
      // hitung
      // i = 1
      // cart.length = 2
      var finalPrice = 0; // 85000
      for (var i = 0; i < cart.length; i++) {
        // cart[1] = ["Apple", 10000, 1, 10000]
        cart[i][3] = cart[i][1] * cart[i][2];
        finalPrice += cart[i][3];
      }

      var finalReport = "";

      // Grape : 15000 * 2 = 30000
      for (var i = 0; i < cart.length; i++) {
        finalReport += `${cart[i][0]} : ${cart[i][1]} * ${cart[i][2]} = ${cart[i][3]}\n`;
      }

      while (true) {
        var money = parseInt(
          prompt(`Detail Belanja\n\n${finalReport}\nTotal : ${finalPrice}`)
        );

        var margin = Math.abs(money - finalPrice);

        if (money < finalPrice) {
          alert(
            `Uang yang Anda masukkan masih kurang ${margin}, total belanja ${finalPrice}`
          );
        } else {
          if (money > finalPrice) {
            alert(`Terimakasih, uang kembalian Anda ${margin}`);
          } else {
            alert(`Terimakasih`);
          }
          break;
        }
      }

      cart = [];
      break;

    case 5:
      showMenu = false;
      break;
  }
}
