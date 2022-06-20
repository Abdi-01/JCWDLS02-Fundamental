// SYNCRONOUS dan ASYNCRONOUS

// SYNCRONOUS : Proses eksekusi program pada javascript yang dilakukan berurutan sesuai urutan baris program
// console.log("1. Hello");
// console.log("2. Javascript");
// console.log("3. Programmer");

// ASYNCRONOUS  : Akan memproses program tidak berdasarkan urutan penulisan program
// console.log('1. Hello Dev'); // Sync
// setTimeout(() => console.log('2. You code javascript ?'), 3000); // Async
// console.log('3. Hello Bos'); // Sync

// Callback
// const url = 'https://downloader.com/img.jpg'
// const notif = () => {
//     console.log('Download Complete ✅');
// }

// const download = (url, callback) => {
//     console.log(`Downloading from ${url}...`);

//     callback();
// }

// download(url, notif);

// Promise 
// const url = 'https://downloader.com/img.jpg'
let progress = 100
const download = new Promise((resolve, reject) => {
    if (progress == 100) {
        resolve('Download Complete ✅')
    } else {
        reject('Download Failed ❌')
    }
})

// Pola 1
// download.then((result, error) => {
//     if (error) {
//         console.log(error)
//     }
//     console.log(result)
// })

// Pola 2
download.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})