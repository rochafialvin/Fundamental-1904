////////////////
// Syntax Array
////////////////

// Membuat array yang menyimpan tiga value
// var things = ["books", "pen", "clock"];
// Menampilkan array things dalam bentuk table
// console.table(things);
// Membuat array yang menyimpan empat value
// var random = [23, "Michael", true, 3.14];
// Menampilkan array random dalam bentuk table
// console.table(random);

//////////////
// Access Data
//////////////

// Index dapat dikatakan sebagai sistem penomoran data pada array yang dimulai dari nol

// Mengakses data pada array things index ke satu
// console.log("things 0 : " + things[1]);
// Mengakses data pada array random index ke nol
// console.log("random 0 " + random[0]);
// Mengakses data pada array random index ke satu
// console.log("random 1 " + random[1]);

///////////////
// Change Data
///////////////

// Membuat array dengan tiga value
// var things = ["books", "pen", "clock"];
// Menampilkan array dalam bentuk table pada console
// console.table(things);
// Mengganti value pada index ke nol
// things[0] = "paper";
// Mengganti value pada index ke dua
// things[2] = "shoes";
// Menampilkan array things dalam bentuk table
// console.table(things);

///////////////////
// Create New Index
///////////////////

// Membuat array dengan tiga value
// var things = ["books", "pen", "clock"];
// Menambahkan data baru yang sekaligus membuat index baru
// things[3] = "shoes";
// Menampilkan array things dalam bentuk table
// console.table(things);
// Menambahkan data baru yang sekaligus membuat index baru
// things[5] = "glass";
// Menampilkan array things dalam bentuk table
// console.log(things);
// Menampilkan value pada index ke empat, yang mana adalah undefiend
// console.log(things[4]);

///////////////////
// Length of Array
///////////////////

// Menampilkan jumlah index pada arrah things menggunakan property length
// console.log(`Length dari array things : ${things.length}`);

////////////////////////////////////////////////
// PUSH : Menambahkan value pada index terakhir
// POP : Menghapus value pada index terakhir
///////////////////////////////////////////////

// var things = ["book", "pen", "clock"]

// Menambah data "jacket" pada index terakhir
// ["book", "pen", "clock", "Jacket"]
// things.push("jacket")

// Menambah data "apple" dan "banana" pada index terakhir
// ["book", "pen", "clock", "Jacket", "apple", "banana"]
// things.push("apple", "banana")

// Menambah data "pencil", 3, dan true pada index terakhir
// ["book", "pen", "clock", "Jacket", "apple", "banana", "pencil", 3, true]
// things.push("pencil", 3, true)

// Menampilkan array things dalam bentuk table
// console.table(things)

// Mengeluarkan satu value ( true ) yang ada pada index terakhir array things
// ["book", "pen", "clock", "Jacket", "apple", "banana", "pencil", 3]
// things.pop()
// Mengeluarkan satu value ( 3 ) yang ada pada index terakhir array things
// ["book", "pen", "clock", "Jacket", "apple", "banana", "pencil"]
// things.pop()

// Menampilkan array things dalam bentuk table
// console.table(things)

////////////////////////////////////////////////
// UNSHIFT : Menambahkan value pada index pertama
// SHIFT : Menghapus value pada index pertama
///////////////////////////////////////////////

// Membuat array yang menyimpan tiga value
// var things = ["book", "pen", "clock"]

// Menambah data "jacket" pada index awal
// ["Jacket", "book", "pen", "clock"]
// things.unshift("jacket")

// Menambah data "apple" dan "banana" pada index awal
// ["apple", "banana", "Jacket", "book", "pen", "clock"]
// things.unshift("apple", "banana")

// Menambah data "pencil", 3, dan true pada index awal
// ["pencil", 3, true, "apple", "banana", "Jacket", "book", "pen", "clock"]
// things.unshift("pencil", 3, true)

// Menampilkan array things dalam bentuk table
// console.table(things)

// Mengeluarkan satu value ( pencil ) yang ada pada index awal array things
// [3, true, "apple", "banana", "Jacket", "book", "pen", "clock"]
// things.shift()

// Mengeluarkan satu value ( 3 ) yang ada pada index awal array things
// [true, "apple", "banana", "Jacket", "book", "pen", "clock"]
// things.shift()

// console.log(things)

//////////////////////////////////////////
// SPLICE : Menghapus dan Menambahkan data
//////////////////////////////////////////

/*

    Syntax

    array.splice(index, amount, new data)

    index : index awal dimulainya operasi (menghapus / menambah)
    amount : jumlah data yang ingin dihapus mulai dari 'index'
    new data : data baru yang akan ditambahkan ke array

*/

/////////////////////////
// Case : Menghapus data
/////////////////////////

// Membuat array yang menyimpan empat value
// var things = ["book", "pen", "clock", "paper"];
// Dimulai dari index 1 , hapus 2 buah value
// things.splice(1, 2);
// Dimulai dari index 1 , hapus hingga data terakhir
// things.splice(1);
// Menampilkan array things dalam bentuk table
// console.table(things);

// Membuat array yang menyimpan empat value
// things = ["book", "pen", "clock", "paper"];
// Dimulai dari index 0 , hapus 3 buah value
// things.splice(0, 3);
// Menampilkan array things dalam bentuk table
// console.table(things);

// Membuat array yang menyimpan empat value
// things = ["book", "pen", "clock", "paper"];
// Dimulai dari index 1 , hapus 1 buah value
// things.splice(1, 1);
// Menampilkan array things dalam bentuk table
// console.table(things);

/////////////////////////
// Case : Menambah data
/////////////////////////

// var things = ["book", "pen", "clock", "paper"];
// Dimulai dari index 1
// Hapus 0 buah value
// Tambahkan value baru yaitu "pencil" pada index 1
// things.splice(1, 0, "pencil");

// console.log(things);

// Dimulai dari index 3
// Hapus 0 buah value
// Tambahkan value baru yaitu "magazine" pada index 3 dan 1987 pada index 4
// things.splice(3, 0, "magazine", 1987);

//////////////////////////////////////
// Case : Menambah dan Menghapus data
//////////////////////////////////////

// Membuat array yang menyimpan empat value
// var things = ["book", "pen", "clock", "paper"]
// Menampilkan array things dalam bentuk table
// console.table(things)

// Dimulai dari index 1
// Hapus 2 buah value
// Tambahkan value baru yaitu "door" pada index 1
// things.splice(1, 2, "door")
// Menampilkan array things dalam bentuk table
// console.table(things)

// Dimulai dari index 1
// Hapus 2 buah value
// Tambahkan value baru yaitu "door" pada index 1
// things.splice(1, 1, "middle", "double")
// Menampilkan array things dalam bentuk table
// console.table(things)

///////////////////////////////////////////////////////////////
// Delete : Menghapus data, dan indexnya akan berisi undefined
///////////////////////////////////////////////////////////////

// Membuat array yang menyimpan empat value
// var things = ["book", "pen", "clock", "paper"];
// Menghapus value pada array things index ke 0, dan menggantikannya dengan undefiend
// delete things[0];
// Menghapus value pada array things index ke 2, dan menggantikannya dengan undefiend
// delete things[2];
// Menampilkan array things pada console
// console.log(things);

/////////////////////////////////
// SLICE : Copy value dari array
/////////////////////////////////

/*

    Syntax

    array.slice(start index, end index )

    start index : index awal dari data yang akan dicopy
    end index : index akhir dari data yang akan dicopy (tidak termasuk)

*/

// var fruits = ["apple", "banana", "cherry", "lemon", "watermelon"];

// console.table(fruits);

// copy banana dan cherry
// var banCherry = fruits.slice(1, 3);
// console.table(banCherry);

// copy banana, cherry, dan lemon
// tidak ada index ke 5 namun tetap berjalan baik
// var banCheMon = fruits.slice(2, 5);
// copy value dari index 2 hingga index terakhir
// jika tidak menyebutkan index akhir, maka akan mengcopy hingga data terakhir
// var banCheMon = fruits.slice(2);
// console.table(banCheMon);

/*

    Method yang mengubah nilai asli :
        1. push
        2. pop
        3. shift
        4. unshift
        5. splice

    Method yang tidak mengubah nilai asli (hasil operasinya disimpan ke variabel baru) :
        1. slice
        2. includes
        3. indexOf

*/

/////////////////////////////////////////////////////////////////////
// INCLUDES : Memeriksa apakah suatu array mengandung value tertentu
/////////////////////////////////////////////////////////////////////

// Membuat array yang menyimpan 6 value
// var colors = ["black", "grey", "white", "red", "green", "blue"];

// true
// var colorRed = colors.includes("red");
// console.log(colorRed);

// false
// var colPurple = colors.includes("purple");
// console.log(colPurple);

// false
// var colRedCapital = colors.includes("Red");
// console.log(colRedCapital);

///////////////////////////////////////////////////////
// INDEXOF : Mencari index dari suatu data pada array
/////////////////////////////////////////////////////

// Membuat array yang menyimpan 6 value
// var colors = ["black", "grey", "white", "red", "green", "blue"];

// 3
// var idxRed = colors.indexOf("red");
// console.log(idxRed);

// 1
// var idxGrey = colors.indexOf("grey");
// console.log(idxGrey);

// -1
// var idxPurple = colors.indexOf("purple");
// console.log(idxPurple);

//////////////////////////////////////////////////////////////////////
// SORT : Mengurutkan data pada array secara ascending (0 - 9 / a - z)
//////////////////////////////////////////////////////////////////////

// var animals = ["anoa", "dragon", "cameleon", "bird", "cat"];

// console.table(animals);

// animals.sort();

// console.table(animals);

// var numbers = [32, 11, 41, 2];

// var result = numbers.sort();

// console.table(result);

// console.table(numbers);

/////////////////////////////////////////////////
// REVERSE : Membalikkan urutan data pada array
/////////////////////////////////////////////////

// var days = ["sunday", "monday", "tuesday", "wednesday"];

// console.table(days);

// days.reverse();

// console.table(days);

/////////////////////////////////////////////////////////////////
// JOIN : Menggabungkan data pada array dengan karakter tertentu
/////////////////////////////////////////////////////////////////

// var days = ["sunday", "monday", "tuesday", "wednesday"];

// var joinDash = days.join(" - ");
// console.log(joinDash);

// var joinComma = days.join(", ");
// console.log(joinComma);

// var joinSpace = days.join(" ");
// console.log(joinSpace);

// var joinAnd = days.join(" and ");
// console.log(joinAnd);

// var joinSpace = days.join("");
// console.log(joinSpace);

/////////////////////////////////////////////////////////
// CONCAT : Menggabungkan data dari dua array atau lebih
/////////////////////////////////////////////////////////

var days = ["sunday", "monday", "tuesday", "wednesday"];
var animals = ["anoa", "dragon", "cameleon", "bird", "cat"];
var fruits = ["apple", "banana", "cherry", "lemon"];

// days + fruits
var dayFruits = days.concat(fruits);
console.log(dayFruits);

// fruits + animals
var fruitAnim = fruits.concat(animals);
console.log(fruitAnim);

// days + animals + fruits
var allOfThem = days.concat(animals, fruits);
console.table(allOfThem);
