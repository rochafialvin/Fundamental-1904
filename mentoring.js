// var text;
// let text2;
// const text3 = 99;
// var money = 999;
// console.log($money);

// // a-z , 0-9, _, $

// // var --> function
// function test() {
//   var firstName = "Tommy";
//   console.log(firstName);
// }
// console.log(firstName); // tidak bisa

// // let & const --> function, block code (kurung kurawal)
// function testagain() {
//   let x = 1;
//   const y = 2;
// }

///////////////
// CONDITION //
///////////////

// Boolean : true / false

// if (false) {
//   console.log("Jalan di if");
// } else if (false) {
//   console.log("Jalan di else if");
// } else if (true) {
//   console.log("Jalan di else if 2");
// } else {
//   console.log("Semua if bernilai false, jalan di else");
// }

// Truthy & Falsy value
// Falsy : 0, "", undefined, null, NaN

// if (rain) {
//   console.log("Jalan gan");
// }

// switch (false) {
//   case "abc":
//     console.log("Case 1 : abc");
//     break;

//   case "":
//     console.log("Case 2 : string kosong");
//     break;

//   case 13:
//     console.log("Case 3 : 13");
//     break;

//   case 0:
//     console.log("Case 4 : 0");
//     break;

//   case 1 > 9: // false
//     console.log("Case 5: 1 > 9");
//     break;

//   case false || true: // false
//     console.log("Case 6: false || true");
//     break;

//   default:
//     console.log("Default");
// }

// == -> value
// === -> value & data type

// != -> value
// !== -> value & data type

// true || ... --> true
// false && ... --> false

// Perbandingan : < > <= == === ...
// Logic : && ||

// console.log(true > false);

// kiri diubah menjadi boolean
// kiri : true, gunakan data yang kanan
// kiri : false, gunakan data yang kiri
// console.log(0 && 6);

// kiri diubah menjadi boolean
// kiri : true, gunakan data yang kiri
// kiri : false, gunakan data yang kanan
// console.log(99 || 6);

// let number = 10;

// number--;
// number--;
// number - 1;
// number -= 1;
// number = number - 1;

// console.log(number);

// const things = [
//   "clock",
//   2,
//   2,
//   [3, 4],
//   [{ one: 1, two: 2 }],
//   { first: { firstOne: 1.1, firstTwo: 1.2 } },
//   () => {
//     console.log("Dipanggil");
//     return [[123], { random: 123 }];
//   },
// ];

// things[0]; // clock
// things[1]; // 2
// things[2]; // 2
// things[3]; // [3, 4]
// things[3][0]; // 3
// things[3][1]; // 4

// things[4]; // [{ one: 1, two: 2 }]
// things[4][0]; // { one: 1, two: 2 }
// things[4][0].one; // 1
// things[4][0].two; // 2

// things[5]; // { first: { firstOne: 1.1, firstTwo: 1.2 } }
// things[5].first; // { firstOne: 1.1, firstTwo: 1.2 }
// things[5].first.firstOne; // 1.1
// things[5].first.firstTwo; // 1.2

// things[6]; // function
// things[6](); // Dipanggil
// const x = things[6](); // x = [[123], { random: 123 }]
// x[0]; // [ 123 ]
// x[0][0]; // 123
// x[1]; // { random : 123 }
// x[1].random; // 123

// things[6]()[0]; // [ 123 ]
// things[6]()[1]; // { random: 123 }
// things[6]()[0][0]; // 123
// things[6]()[1].random; // 123

// console.log(things[6][0]);

// const add = (a, b) => {
//   const result = a + b;
//   return [result];
// };

// // const z = add(1, 2); // x = [3]
// console.log(add[0]); // undefined

// const something = {
//   number: 123,
//   day: "sunday",
//   pets: ["dogo", "cato"],
//   person: {
//     firstName: "Adam",
//     lastName: "Maulana",
//     pets: ["gator", "snake"],
//   },
//   whatDay: function () {
//     // this == something
//     // something.day
//     console.log(this.day);
//   },
//   personPets: function () {
//     console.log(this.person.pets);
//     return this.pets;
//   },
// };

// something.number; // 123
// something.day; // "sunday"
// something.pets; // ["dogo", "cato"]
// something.pets[0]; // dogo
// something.pets[1]; // cato
// something.person; // { firstName: "Adam", lastName: "Maulana", pets : ["gator", "snake"] }
// something.person.firstName; // Adam
// something.person.lastName; // Maulana
// something.person.pets; // ["gator", "snake"]
// something.person.pets[0]; // gator
// something.person.pets[1]; // snake

// something.whatDay();
// console.log(something.personPets());
// // something.personPets() akan me return ["dogo", "cato"]
// something.personPets().forEach((animal) => {
//   console.log(`Animal : ${animal}`);
// });

// const fnLorem = (a, b) => {
//   console.log(`Nilai a : ${a}`);
//   console.log(`Nilai b : ${b}`);
// };

// const fnIpsum = () => {
//   console.log("fnIpsum is running, sir");
//   return 23;
// };

// fnLorem(fnIpsum, fnIpsum());

// const fnDolor = () => {
//   return { one: "Day one", two: "Day Two" };
// };

// fnLorem(fnDolor(), fnDolor().one);

// fnLorem(1, 3);
// fnLorem([5, 3, 1], { id: 355 });

// const things = ["clock", "pen", "pencil"];
// const something = { pet: "cato", color: "black" };

// fnLorem(things[1], things[2]);
// fnLorem(things[0], something.pet);

// Mengecheck apakah suatu nilai itu merupakan NaN (Not a Number)
// isNaN();

// const x = 2 * {}; // NaN
// console.log(isNaN(x));

// if (isNaN(x)) {
//   console.log("x : NaN");
// } else {
//   console.log("x : bukan NaN");
// }

// i = 5
// for (var i = 1; i < 5; i++) {
//   i++;
//   i + 1;
//   console.log(i);
// }

// console.log(`Nilai akhir i : ${i}`);

// const hehe = false;

// while (hehe) {
//   console.log("Masuk gan di While");
// }

// do {
//   console.log("Masuk gan di Do While");
// } while (hehe);
