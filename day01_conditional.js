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
let usia = 16;

if (usia >= 17){
    console.log(`Verifikasi usia ${nama} berhasil ✅, periksa email ${email} anda.`)
}