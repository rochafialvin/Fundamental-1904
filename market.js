/////////////////
// MARKET V.1.5
/////////////////

/*

  - Ubah loop yang menggunakan for loop menjadi for each
    - Membuat list / daftar buah
    - Meminta jumlah qty untuk setiap produk
    - Menghitung total harga
    - Membuat detail belanja
  - Membuat sebuah function untuk membuat list produk

*/
// [name, price, stock]
var fruits = [
  ["Apple", 10000, 5],
  ["Grape", 15000, 7],
  ["Orange", 20000, 8],
];

// [name, price, qty]
var cart = [];

// Function untuk menampilkan list buah
const createList = (arr, header, info = "stock") => {
  let list = `${header}\n\n`;

  for (var i = 0; i < arr.length; i++) {
    list += `${i}. ${arr[i][0]} || Rp.${arr[i][1]} || ${info}: ${arr[i][2]}\n`;
  }

  return list;
};

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
      alert(createList(fruits, "Daftar buah"));
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

      alert(createList(fruits, "Daftar buah"));
      break;

    case 3:
      const fruitList = createList(fruits, "Menghapus buah");
      // selectedIndex = 0 (Apple)
      var selectedIndex = parseInt(prompt(fruitList));

      // menampilkan daftar buah dan memilih buah untuk dihapus
      // index dari buah terpilih akan disimpan ke variable selIndex
      fruits.splice(selectedIndex, 1);

      alert(createList(fruits, "Daftar buah"));
      break;

    case 4:
      var isShoping = true;
      while (isShoping) {
        // Tampilkan daftar buah dan minta user untuk memilih
        const fruitList = createList(fruits, "Membeli buah");

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

        var cartList = createList(cart, "Keranjang", "qty");

        cartList += "\nApakah ingin belanja lainnya ?";

        // OK -> true
        // Cancel -> false
        isShoping = confirm(cartList);
      }

      var finalPrice = 0;
      cart.forEach((val) => {
        // val = ["Grape", 15000, 5]
        val[3] = val[1] * val[2];
        finalPrice += val[3];
      });

      var finalReport = "";

      // Grape : 15000 * 2 = 30000
      cart.forEach((val) => {
        finalReport += `${val[0]} : ${val[1]} * ${val[2]} = ${val[3]}\n`;
      });

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
