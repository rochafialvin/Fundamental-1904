// Theory
// Dua kendaraan yang akan bertemu, dapat dihitung waktunya dengan menjumlahkan kecepatan dari keduanya
// Lalu kemudian cari tahu dengan total kecepatan yang dimiliki, berapa waktu yang dibutuhkan untuk menempuh jarak tertentu

// A                    120 km                     B
// VA -> 60                                 40 <- VB
// VC -> 100

// 60 + 40 = 100 km/h
// Dengan kecepatan 100 km/h. Berapa waktu yang dibutuhkan untuk menempuh jarak 120 km
// 120 / 100 = 1.2 jam
// 1.2 * 60 = 72 menit -> 1 jam 12 menit
// 9:00 ==> 10:12

// waktu bertemu (jam) : 9 + Math.floor(72 / 60) = 10
// waktu bertemu (menit) : 0 + (72 % 50) = 12

// Jarak
// var distance = 120
// Kecepatan A
// var velocityA = 60
// Kecepatan B
// var velocityB = 40
// Waktu mulai kendaraan berjalan
// var startTimeHour = 9
// var startTimeMinute = 0

// Total kecepatan
// var totalVelocity = velocityA + velocityB
// Waktu yang dibutuhkan untuk bertemu (jam)
// 120 / 100 = 1.2 jam
// var needTimeHour = distance / totalVelocity
// Waktu yang dibutuhkan untuk bertemu (menit)
// 1.2 * 60 = 72 menit :  60 menit + 12 menit
// var needTimeMinute = needTimeHour * 60

// Waktu bertemu (jam)
// waktu bertemu (jam) : 9 + Math.floor(72 / 60) = 10
// var meetTimeHour = startTimeHour + Math.floor(needTimeMinute / 60)
// Waktu bertemu (minute)
// waktu bertemu (menit) : 0 + (72 % 60) = 12
// var meetTimeMinute = startTimeMinute + (needTimeMinute % 60)

// console.log(`Akan bertemu pada pukul ${meetTimeHour} : ${meetTimeMinute}`)


////////////////////////////////////////////////////////

var x = 4, y = 3, z = 2
var calculation = (x + y * z) / (x * y)
var w = Math.pow(calculation, z)
console.log(w)