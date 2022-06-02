// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(`Kereta No. ${i} Genap`)
//     } else {
//         console.log(`Kereta No. ${i} Ganjil`)
//     }
// }

// for (let val = 1; val <= 150; val++) {
//     if (val % 5 == 0 && val % 3 == 0) {
//         console.log("BizzBuzz =>", val)
//     } else if (val % 3 == 0) {
//         console.log("Bizz =>", val)
//     } else if (val % 5 == 0) {
//         console.log("Buzz =>", val)
//     }
// }


let limit = 5;

// Garis Vertikal
let str = '';

for (let i = 1; i <= limit; i++) {
    str += '*\n';
}

// 1. str = '' + '*\n'
// 2. str = '*\n' + '*\n'
// 3. str = '*\n*\n' + '*\n'
// 4. str = '*\n*\n*\n' + '*\n'
// 5. str = '*\n*\n*\n*\n' + '*\n'

// END LOOP = *\n*\n*\n*\n*\n
console.log(str);

// Persegi
let persegi = '';

for (let i = 1; i <= limit; i++) {
    // 1. Loop menyusun karakter secara horizontal
    for (let j = 1; j <= limit; j++) {
        // j=1 ---> persegi = '*****\n' + '*'
        // j=2 ---> persegi = '*****\n*' + '*'
        // j=3 ---> persegi = '*****\n**' + '*'
        // j=4 ---> persegi = '*****\n***' + '*'
        // j=5 ---> persegi = '*****\n****' + '*'
        persegi += '* ';

        // END LOOP : persegi = '*****'
    }
    // i=1 ----> persegi = '*****'
    // i=2 ----> persegi = '*****\n*****'
    persegi += '\n';
    // i=1 ----> persegi = '*****\n'
    // i=2 ----> persegi = '*****\n*****\n'
}

console.log(persegi);

// SEGITIGA RATA KIRI
let segitigaLeft = '';

for (let i = 1; i <= limit; i++) {
    for (let j = 1; j <= i; j++) {
        // j=1 -- i=1 ---> segitigaLeft = '' + '* '
        // j=1 -- i=2 ---> segitigaLeft = '* \n' + '* '
        // j=2 -- i=2 ---> segitigaLeft = '* \n* ' + '* '
        segitigaLeft += '* ';
    }

    // i=1 ----> segitigaLeft='* '
    // i=2 ----> segitigaLeft='* \n* * '
    segitigaLeft += '\n'
    // i=1 ----> segitigaLeft='* \n'
    // i=2 ----> segitigaLeft='* \n* * \n'
}

console.log(segitigaLeft);


// SEGITIGA RATA KANAN
let segitigaRight = '';

for (let i = 1; i <= limit; i++) {
    for (let j = 1; j <= limit; j++) {
        // j=1 -- i=1 ---> segitigaRight = '' + '* '
        // j = 1 <= 4 --> TRUE
        // j = 2 <= 4 --> TRUE
        // j = 3 <= 4 --> TRUE
        // j = 4 <= 4 --> TRUE
        // j=1 -- i=2 ---> segitigaRight = '' + '* '
        // j = 1 <= 3 --> TRUE
        if (j <= limit - i) {
            // j=1 --> segitigaRight = '' + '@ '
            // j=2 --> segitigaRight = '@ ' + '@ '
            // j=3 --> segitigaRight = '@ @ ' + '@ '
            // j=4 --> segitigaRight = '@ @ @ ' + '@ '
            segitigaRight += '@ ';
        } else {
            segitigaRight += ' #';
        }
    }
    //  i =1 -->  segitigaRight = '@ @ @ @  #'
    segitigaRight += '\n';
    //  i =1 -->  segitigaRight = '@ @ @ @  #\n'
}

console.log(segitigaRight);