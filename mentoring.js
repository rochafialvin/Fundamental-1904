////////////////////
// PYRAMID TRIANGLE
////////////////////

// 'ssss*\nsss***\nss*****\ns*******\n*********'

// 1. s  s  s  s  *
// 2. s  s  s  *  *  *
// 3. s  s  *  *  *  *  *
// 4. s  *  *  *  *  *  *  *
// 5. *  *  *  *  *  *  *  *  *

// rows                 : 5
// posisi baris ( i )   : 1 2 3 4 5
// jumlah spasi ( j )   : 4 3 2 1 0 ( rows - i )
// jumlah bintang ( k ) : 1 3 5 7 9

// rows : 5
// ( i ) ( form ) ( * ) ==> (i - 1) * 2 + 1
//   1    0 1 0     1
//   2    1 1 1     3
//   3    2 1 2     5
//   4    3 1 3     7
//   5    4 1 4     9
//   6    5 1 5     11

// Contoh saat baris ke lima ( i = 5)
// i = 5
// 1 sisi : (i - 1)         = 4
// 2 sisi : ( i - 1) * 2    = 8
// total : ( i - 1) * 2 + 1 = 9

// var stars = "";
// var rows = 5;
// (i - 1) * 2 + 1

// stars = 'ssss*\nsss***\nss*****\ns*******\n*********'
// i = 5
// rows = 5

// for (var i = 1; i <= rows; i++) {
// loop untuk menambahkan spasi
// for (var j = 1; j <= rows - 1; j++) {
// stars += "   ";
// }

// loop untuk menambahkan bintang
// for (var k = 1; k <= (i - 1) * 2 + 1; k++) {
// stars += " * ";
// }

// stars += "\n";
// }

// console.log(stars);

///////////////////////////////////////
// SORT DESCENDING ( 9 - 0 ) ( z - a )
///////////////////////////////////////

// var names = ["Alex", "Elena", "Chaplin", "Bernard", "Dany"];

// console.log(names);

// names.sort();

// console.log(names);

// names.reverse();

// console.log(names);
