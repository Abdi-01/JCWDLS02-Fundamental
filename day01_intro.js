// Variable : Penampung data pada program
/**
 * Susunan penulisan variable ===> keywordVariable namaVariable = valueVariable;
 * 
 * keywordVariable : var, let, const
 * 
 * namaVariable : harus diawali dengan huruf atau symbol "_" / symbol "$"
 * 
 * valueVariable : berdasarkan tipe data ==> string, number, boolean, array, object
 * */ 

// Keyword var : Redeclare, Reassign
var data; // deklarasi variable
var nama = "Aldo"; // deklarasi variable : tahap awal ketika kita membuat variable
var nama = "Edo"; // Redeclare ✅
nama = "Aku adalah Edo"; // Reassign ✅
data = "Belajar Programming";

console.log(nama); // console.log(nilai_yg_ingin_ditampilkan)
console.log(data); 
console.log("Aku Aldo");

// Keyword let : Non-Redeclare, Reassign
let age = 25;
// let age = 30; // Redeclare ❌
age = 30; // Reassign ✅

console.log(age);

// Keyword const : Non-Redeclare, Non-Reassign
const PI = 3.14;
// const PI = 22/7; // Redeclare ❌
// PI = 22/7; // Reassign ❌

console.log(PI);