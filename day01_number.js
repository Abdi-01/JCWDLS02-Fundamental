// 2️⃣ Number : berkaitan dengan data angka

let jarak = 1500; // Nilai INTEGER/INT
let berat = 80.5; // Nilai FLOAT/Desimal

// Arithmetic operator : +, -, *, /, %
let jumlahJarak = jarak + 1000;
let penguranganJarak = jarak - 1000;
console.log("Penjumlahan =>", jumlahJarak);
console.log("Pengurangan =>", penguranganJarak);

// Increment
jarak++; // 1501
console.log(jarak)
jarak++; // 1502
console.log(jarak)
jarak++; // 1503
console.log(jarak)

jarak += 2; // jarak = jarak + 2; // 1505
console.log(jarak)
jarak += 2; // jarak = jarak + 2; // 1507
console.log(jarak)


// Decrement
jarak--;
console.log(jarak)
jarak--;
console.log(jarak)
jarak--;
console.log(jarak)

jarak -= 2;
console.log(jarak)
jarak -= 2;
console.log(jarak)


///////// Math Object ////////
const PI_CIRCLE = Math.PI;
console.log("Math.PI =>", Math.PI);

console.log("Math.abs()", Math.abs(-25.5)); // nilai absolute positif
console.log("Math.abs()", Math.abs(25.5) * -1); // nilai absolute negatif
console.log("Math.abs()", -Math.abs(25.5)); // nilai absolute negatif

// Pembulatan
console.log("Math.round()", Math.round(2.5)); // pembulatan ke nilai terdekat
console.log("Math.ceil()", Math.ceil(2.1)); // pembulatan ke atas
console.log("Math.floor()", Math.floor(2.2)); // pembulatan ke bawah

// Pangkat
console.log("Math.pow()", Math.pow(4, 2)); // pangkat
console.log("Math.sqrt()", Math.sqrt(4)); // angkar pangkat 2
console.log("Math.cbrt()", Math.cbrt(8)); // angkar pangkat 3

console.log("Math.min()",Math.min(-1, -50, 0, 4, 5, -100));
console.log("Math.max()",Math.max(-1, -50, 0, 4, 5, -100));

console.log("Math.random()", Math.random()); // membuat nilai random 0.xx s/d 1.0