// FUNCTION
/**
 * 1. Function : sekumpulan program, yang digunakan untuk menyelesaikan tugas tertentu
 *               dan umumnya digunakan berkali-kali.
 * 2. Function bersifat reusable
 * 3. Built-in Function : fungsi bawaan dari javascript (console.log, alert, prompt,confirm,Boolean,parseInt)
 * 4. User-defined Function : funtion yang kita buat sendiri
 *              a. Menggunakan keyword function
 *              b. Nama function
 *              c. Parameter/argument : agar function dapat menerima data dari luar scope function
 *                            i. Di define didalam ()
 *                           ii. Boleh ada, boleh tidak
 *                          iii. Jika argument lebih dari 1, maka harus dipisah dengan ','.
*/

/**
 * DECLARATIVE FUNCTION
 * 
 * keywordFunction namaFunction(argument){
 *          // task
 * }
 * 
 */

// INPUT
let angkaA = 200;
let angkaB = 25;

// PROCESS
// deklarasi function / membuat function
function penjumlahan() {
    let hasil = angkaA + angkaB;
    return hasil;
}

function pengurangan(nilaiA, nilaiB) {
    let hasil = nilaiA - nilaiB;
    return hasil;
}

// Memanggil function
// penjumlahan;

// Menjalankan function
// penjumlahan();

// OUTPUT
console.log(penjumlahan());
console.log(pengurangan(50, 25));
console.log(pengurangan(10, 15));
console.log(pengurangan(20, 105));

/**
 * FUNCTION EXPRESSION
 * 
 * keywordVariable namaVariable = keywordFunction(argument){
 *      // task
 * }
 * 
*/

var pembagian = function (nilaiA, nilaiB) {
    let hasil = nilaiA / nilaiB;
    return hasil;
}


console.log("Pembagian", pembagian(12, 5));

/**
 * ARROW FUNCTION
 * 
 * keywordVariable namaVariable = (argument) => {
 *      // task
 * }
 *  
 * */

const perkalian = (nilaiA, nilaiB) => {
    let hasil = nilaiA * nilaiB;
    return hasil;
}

console.log("Perkalian", perkalian(5, 6));


// FUNCTION didalam FUNCTION

// let hasil = [
//     [2, 3],
//     [4, 5]
// ]

// const ganjilGenap = (callback, data) => {
//     let output = [];
//     for (let i = 0; i < data.length; i++) {
//         let nilai = callback(data[i][0], data[i][1]);
//         if (nilai % 2 == 0) {
//             output.push('Genap');
//         } else {
//             output.push('Ganjil');
//         }
//     }

//     return output
// }

// console.log(ganjilGenap(function (nilaiA, nilaiB) {
//     let hasil = nilaiA + nilaiB;
//     return hasil;
// }));

let dataBarang = [
    ["Baju", 15, 7500],
    ["Celana", 10, 3500]
];

console.log(dataBarang[1][0], dataBarang[1][1], dataBarang[1][2]);