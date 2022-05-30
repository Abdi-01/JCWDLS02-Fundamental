// 1️⃣ String : data berupa huruf atau character
let namaToko = "Sport Apparel 'SCBD' \"Pusat\""; // double quote
let nama_toko = 'Sport Apparel \'Antasari\' \nDepok'; // single quote
let namatoko = `Sport Apparel 'Sudirman'
"Jakarta Pusat"`; // backthick

console.log(namaToko);
console.log(nama_toko);
console.log(namatoko);

let telp_toko = "(021)-543265";
console.log(namaToko + ' ' + telp_toko);
console.log(`Edo, ${namatoko}, 
${telp_toko}`);


////// FUNGSI PADA TIPE DATA STRING //////
let greeting = "Hello, Purwadhika Student";

// typeof : memeriksa tipe data
console.log('⚠️ Output dari typeof ==>', typeof greeting);
console.log('⚠️ Output dari typeof ==>', typeof "Hello bos");

// string.length : menghitung panjang data
console.log('⚠️ Output dari string.length ==>', greeting.length);

// string.toLowerCase() : merubah semua huruf menjadi huruf kecil
console.log('⚠️ Output dari string.toLowerCase() ==>', greeting.toLowerCase());
// string.toUpperCase() : merubah semua huruf menjadi huruf besar
console.log('⚠️ Output dari string.toUpperCase() ==>', greeting.toUpperCase());

// string.includes() : memastikan sebuah character ada pada variable
console.log('⚠️ Output dari string.includes(\'character_yg_dicari\') ==>', greeting.includes("Edo"));

