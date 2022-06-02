// ARRAY DATA TYPE

/**
 * Definisi : Sebuah tipe data penampung. Dikarenakan dapat menampung banyak tipe data lain.
 *            Setiap data pada array itu memiliki alamat penyimpanan berupa index yang dimulai 0;
 * Tujuan : Mempermudah pengelolaan data
 * Array tipe data object;
 * Array ---> Ditandai dengan simbol kurung siku '[data0,data1,data2...]'
*/

// Syntax Array
let namaBuah1 = 'Apel'; // ❌
let namaBuah2 = 'Jeruk'; // ❌
let namaBuah = ['Apel', 'Jeruk', 'Semangka']; // Cara 1 ✅ 
let stockBuah = Array(10, 15, 18); // Cara 2 ✅ 
let hargaBuah = []; // Cara 3 ✅ 
hargaBuah[0] = 5000;
hargaBuah[1] = 3500;
hargaBuah[2] = 7500;

// Cara mengakses data array
// namaVariable[index_akses];
console.log('Nama Buah :', namaBuah[2]);
console.log('Stock Buah :', stockBuah[2]);
console.log('Harga Buah :', hargaBuah[2]);
console.log(`Buah ${namaBuah[1]} stoknya ada ${stockBuah[1]} dan harganya Rp. ${hargaBuah[1].toLocaleString('id')}`);