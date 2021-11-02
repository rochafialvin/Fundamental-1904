// Hoisting : proses menarik semua statement deklarasi ke bagian paling atas
console.log(firstName);
var firstName = "Takemichi";

leaf();
var leaf = function () {
  console.log("hello");
};

sayHello();
function sayHello() {
  console.log("hello");
}

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
