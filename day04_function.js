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