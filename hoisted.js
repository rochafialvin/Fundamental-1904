// Hoisting : proses menarik semua statement deklarasi ke bagian paling atas
// console.log(firstName);
// var firstName = "Takemichi";

// leaf();
// var leaf = function () {
//   console.log("hello");
// };

// sayHello();
// function sayHello() {
//   console.log("hello");
// }

///////////

/*
  var firstName
  var leaf // undefined
  function sayHello() {
    console.log("hello");
  }

  console.log(firstName) // undefined
  leaf() // leaf is not a function
  sayHello()
};

*/

var days = ["sun", "mon", "tue"];

var [x, y, z] = ["sun", "mon", "tue"];

// var x = days[0];
// var y = days[1];
// var z = days[2];

console.log(x);
console.log(y);
console.log(z);
console.log(a);
