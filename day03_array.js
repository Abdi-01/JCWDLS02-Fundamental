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

console.table(namaBuah);
console.table(stockBuah);

// INPUT
// Variable data buah yg ada di atas

// PROCESS
let listBuah = '';
for (let i = 0; i < namaBuah.length; i++) {
    listBuah += `${i + 1}. Buah ${namaBuah[i]} stoknya ada ${stockBuah[i]} dan harganya Rp. ${hargaBuah[i].toLocaleString('id')};\n`
}

// OUTPUT
console.log(listBuah);

//////////////////// ARRAY FUNCTION ///////////////////
// ⏺️ namaVariableArray.length : untuk mengetahui jumlah data yang ada didalam array
// OUTPUT dari length bertipe NUMBER
console.log('Banyak data array namaBuah', namaBuah.length);
console.log('Mengakses data terakhir sebuah array', namaBuah[namaBuah.length - 1]);

// ⏺️ namaVariableArray.push(data) : digunakan untuk menambah data baru di akhir array
namaBuah.push('Melon');
stockBuah.push(7);
hargaBuah.push(6500);
console.table(namaBuah);
console.table(stockBuah);
console.table(hargaBuah);

// ⏺️ namaVariableArray.pop() : digunakan untuk menghapus data terakhir dari array
namaBuah.pop();
stockBuah.pop();
hargaBuah.pop();

// ⏺️ namaVariableArray.unshift(data) : digunakan untuk menambah data baru di awal array
namaBuah.unshift('Lemon')
stockBuah.unshift(20)
hargaBuah.unshift(3000)

// ⏺️ namaVariableArray.shift() : digunakan untuk menghapus data pertama dari array
namaBuah.shift()
stockBuah.shift()
hargaBuah.shift()

// ⏺️ namaVariable.reverse() : membalikkan urutan data array
let motor = ['Yamaha', 'Honda', 'Ducati'];
console.log('Before :', motor);
motor.reverse();
console.log('After :', motor);

// ⏺️ namaVariableArray.join("separator") : menggabungkan semua data array menjadi data string
console.log(motor.join()); // Ducati,Honda,Yamaha
console.log(motor.join(' ')); // Ducati Honda Yamaha
console.log(motor.join(' / ')); // Ducati / Honda / Yamaha

// String --> Array
// namaVariableString.split('Separator');
let greeting = 'Hello';
console.log('Before :', greeting);
console.log('After :', greeting.split());