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
