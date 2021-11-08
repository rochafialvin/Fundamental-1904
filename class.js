// Membuat object yang berisi informasi waktu saat ini
// const x = new Date();

// console.log(x.getFullYear());
// // Bulan dimulai dari 0 --> January : 0
// console.log(x.getMonth());
// // Hari dimulai dari 1
// console.log(x.getDay());
// console.log(x.getTime());
// console.log(x.getDate());

// console.log(`${x.getFullYear()}-${x.getMonth() + 1}-${x.getDate()}`);

const products = [
  {
    id: 9999,
    name: "Apple",
    price: 90000,
  },
];

const id = 1234456;
const name = "Noodle";
const price = 20000;

products.push({ id, name, price });

console.log(products);
