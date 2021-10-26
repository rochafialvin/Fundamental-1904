
// Meminta input user
var apple = prompt("Masukan jumlah qty Apel")
var grape = prompt("Masukan jumlah qty Anggur")
var orange = prompt("Masukan jumlah qty Jeruk")

// Tentukan harga satuan masing - masing buah
var priceApple = 10000
var priceGrape = 15000
var priceOrange = 20000

// Hitung total harga dari masing - masing buah
var totalPriceApple = apple * priceApple
var totalPriceGrape = grape * priceGrape
var totalPriceOrange = orange * priceOrange

// Total harga keseluruhan
var totalPrice = totalPriceApple + totalPriceGrape + totalPriceOrange

// Susun teks yang akan di tampilkan
var detailInformation = `
  Detail Belanja

  Apel : ${apple} x ${priceApple} = ${totalPriceApple}
  Grape : ${grape} x ${priceGrape} = ${totalPriceGrape}
  Orange : ${orange} x ${priceOrange} = ${totalPriceOrange}

  Total : ${totalPrice}
`
// Tampilkan informasi pada alert
alert(detailInformation)