// const numbers = [23, 47, 13, 3, 9, 240];
// const numbersCopy = numbers;

// const asc = (a, b) => {
//   return a - b;
// };

// const dsc = (a, b) => {
//   return b - a;
// };

// const result = numbersCopy.sort(asc);
// console.log(numbers);
// console.log(result);

// const fullName = "Draken";
// const copyName = "Draken";

// console.log(fullName === copyName);

// const things = ["pen", "clock"];
// const copyThings = ["pen", "clock"];

// console.log(things === copyThings);

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    readingStatus: true,
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    readingStatus: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    readingStatus: false,
  },
];

// library.forEach((book) => {
//   // book = {title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", readingStatus: false}
//   if (book.readingStatus) {
//     console.log(`Sudah membaca '${book.title}' by ${book.author}`);
//   } else {
//     // Kamu masih harus membaca 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins
//     console.log(`Kamu masih harus membaca '${book.title}' by ${book.author}`);
//   }
// });

// Sudah membaca 'Bill Gate' by The Road Ahead
// Sudah membaca 'Steve Jobs' by Walter Isaacson
// Kamu masih harus membaca 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins

const students = [
  {
    name: "John",
    age: 44,
  },
  {
    name: "John",
    age: 43,
  },
  {
    name: "Jordy",
    age: 23,
  },
  {
    name: "Baron",
    age: 24,
  },
];

/*
  return < 0 , a didepan b
  return > 0 , b didepan a

*/

students.sort((a, b) => {
  // a = { name: "John", age: 44 }
  // b = { name: "John", age: 43 }
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return a.age - b.age;
  }
});

console.table(students);

students.sort((a, b) => {
  // a = { name: "John", age: 44 }
  // b = { name: "John", age: 43 }
  if (a.name > b.name) {
    return -1;
  } else if (a.name < b.name) {
    return 1;
  } else {
    return b.age - a.age;
  }
});

console.table(students);

// ascending
// [ {}, {}, {}]

// descending
// [ {}, {}, {}]
