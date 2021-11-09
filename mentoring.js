// const products = [
//   {
//     name: "Pepaya",
//     price: 2000,
//   },
//   {
//     name: "Nanas",
//     price: 2200,
//   },
//   {
//     name: "Pisang",
//     price: 2300,
//   },
//   {
//     name: "Pisang",
//     price: 2400,
//   },
// ];

// const index = products.findIndex((product) => {
//   return product.name == "Pisang";
// });

// console.log(index);

// Spread Operatior
// const car = { color: "green", seats: "4", merk: "Hondu" };

// const copyCar = { ...car };
// console.log(copyCar); // { color: "green", seats: "4", merk: "Hondu" }

// const redCar = { ...car, color: "red" };
// console.log(redCar); // { color: "red", seats: "4", merk: "Hondu" }

// const suzukaCar = { ...car, merk: "suzuka" };
// console.log(suzukaCar); // { color: "green", seats: "4", merk: "suzuka" }

// const warrantyCar = { ...car, warranty: "5 years" };
// console.log(warrantyCar); // { color: "green", seats: "4", merk: "Hondu", warranty: "5 years" }

// const finalCar = { ...car, color: "black", warranty: "5 years" };
// console.log(finalCar); // { color: "black", seats: "4", merk: "Hondu", warranty: "5 years" }

// let mobil = { color: "green", seats: "4", merk: "Hondu" };

// mobil = { ...mobil, merk: "Yamasih" };
// console.log(mobil); // { color: "green", seats: "4", merk: "Yamasih" }

// FIND

const products = [
  {
    id: 1,
    name: "Pepaya",
    price: 2000,
  },
  {
    id: 2,
    name: "Nanas",
    price: 2200,
  },
  {
    id: 3,
    name: "Pisang",
    price: 2300,
  },
  {
    id: 4,
    name: "Pisang",
    price: 2400,
  },
];

const ketemu = products.find((product) => {
  // saat return true, maka data yang sedang diproses yang akan menjadi hasil return dari method find
  return product.name === "Pisang";
});
console.log(ketemu);
