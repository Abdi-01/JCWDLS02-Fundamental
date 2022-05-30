////////////// CONDITIONAL STATEMENT ///////////////
/**
 * Aturan : 
 * 1. Membutuhkan nilai Boolean
 * 
 * 
 * Jenis :
 * 1. IF STATEMENT : untuk 1 kondisi
 * 2. IF...ELSE STATEMENT : untuk 2 kondisi
 * 3. IF...ELSE IF...ELSE STATEMENT : untuk >= 3 kondisi
 * 4. SWITCH...CASE STATEMENT : untuk memastikan nilai berdasarkan case yang diberikan
 * */

// 1. IF STATEMENT
/**
 * Aturan Penulisan :
 * 
 * if(condition){
 *      // task
 * }
 * 
 * note : 
 * - condition : kondisi yang diinginkan, bernilai BOOLEAN (COMPARISON/LOGICAL/TRUTHLY/FALSY)
 * - task : apa yang ingin kita lakukan ketika condition terpenuhi
 */

// Example case : memverifikasi pendaftaran SIM, syaratnya usia harus lebih dari sama dengan 17 tahun
let nama = "Aldo Reinaldo";
let email = "aldo@mail.com";
let usia = 9;

if (usia >= 17) {
    console.log(`Verifikasi usia ${nama} berhasil ✅, periksa email ${email} anda.`)
}

// 2. IF...ELSE STATEMENT
/**
 * Aturan Penulisan :
 * if(condition){
 *      // task
 * }else{
 *      // task
 * }
 * 
*/

if (usia >= 17) {
    console.log(`Verifikasi usia ${nama} berhasil ✅, periksa email ${email} anda.`)
} else {
    console.log(`Verifikasi usia ${nama} gagal ❌`)
}

// 3. IF...ELSE IF...ELSE STATEMENT
/**
 * Aturan Penulisan :
 * if(condition){
 *      // task
 * }else if(condition){
 *      // task
 * }else if(condition){
 *      // task
 * }else{
 *      // task
 * }
 * 
*/

if (usia >= 17) {
    console.log(`Verifikasi usia ${nama} berhasil ✅, periksa email ${email} anda.`)
} else if (usia >= 10 && usia < 17) {
    console.log(`Verifikasi usia ${nama} gagal ❌, belum cukup umur`)
} else {
    console.log(`Masih dibawah umur`)
}

// 4. SWITCH...CASE
let profesi = "Polisi";
switch (profesi) {
    case "Coder":
        // task
        console.log("Saya membuat aplikasi");
        break; // menghentikan proses
    case "Polisi":
        //task
        console.log("Saya menertibkan lalu lintas");
        break; // menghentikan proses
    case "Dokter":
        // task
        console.log("Saya mengobati pasien");
        break; // menghentikan proses
    default:
        console.log("Gak tau ngapain");
        break; // menghentikan proses
};