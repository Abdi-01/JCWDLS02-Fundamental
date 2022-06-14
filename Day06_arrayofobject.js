// ARRAY OF OBJECT

/**
 * 1. Merupakan struktur data yang biasa digunakan untuk output dari database
 * 2. Juga digunakan untuk data JSON 
 * 3. Struktur penulisan : 
 *          let arrOfObject = [
 *              {
 *                  id:1,
 *                  name:'Jacket',
 *                  brand : 'DnD',
 *                  price : 250000,
 *                  stock : [
 *                              {
 *                                   type:"L",
 *                                   qty:12
 *                              },
 *                              {
 *                                   type:"XL",
 *                                   qty:22
 *                              }
 *                          ]
 *              }
 * 
 *          ]
 */

let dataProduct = [
    {
        id: 1,
        name: 'Jacket',
        brand: 'DnD',
        price: 750000,
        stock: [
            {
                type: "L",
                qty: 14
            },
            {
                type: "XL",
                qty: 20
            }
        ]
    },
    {
        id: 2,
        name: 'Shoes',
        brand: 'VANS',
        price: 325000,
        stock: [
            {
                type: "40",
                qty: 7
            },
            {
                type: "41",
                qty: 17
            },
            {
                type: "42",
                qty: 8
            }
        ]
    },
    {
        id: 15,
        name: 'Hat',
        brand: 'Volcom',
        price: 325000,
        stock: [
            {
                type: "Black",
                qty: 26
            },
            {
                type: "White",
                qty: 17
            }
        ]
    }
];

// Buat fungsi untuk mencari product berdasarkan id yang diinputkan
/**
 * input : fungsiFilter(id_product) ==> fungsiFilter(2);
 * output : [{
        id: 2,
        name: 'Shoes',
        brand: 'VANS',
        price: 325000,
        stock: [
            {
                type: "40",
                qty: 7
            },
            {
                type: "41",
                qty: 17
            },
            {
                type: "42",
                qty: 8
            }
        ]
    }]
 * */


// Step Algorithm :
/**
 * 1. Membuat penampung penyimpanan data hasil filter ==> Array [];
 * 2. Memeriksa setiap data satu per satu dari variable dataProduct ==> Looping / array function
 * 3. Membuat kondisi jika properti id dari dataProduct yang diakses melalui looping
 *    sama dengan argument yg diinputkan, maka kita simpan kedalam variable penampung datanya ==> if ==> equal ==> array.push
 * 4. Mengeluarkan variable penampung filter dari fungsi ==> return
 * * */
const fungsiFilter = (id_arg) => {
    let result = [];

    for (let index = 0; index < dataProduct.length; index++) {
        if (dataProduct[index].id == id_arg) {
            result.push(dataProduct[index])
        }
    }

    return result

}
console.log('Output fungsiFilter :', fungsiFilter(15));
// Buat dinamis fungsi untuk mencari product
/**
 * input : fungsiDinamicFilter(object_filter) ==> fungsiDinamicFilter({name:'Shoes',brand:'VANS'});
 * output : [{
        id: 2,
        name: 'Shoes',
        brand: 'VANS',
        price: 325000,
        stock: [
            {
                type: "40",
                qty: 7
            },
            {
                type: "41",
                qty: 17
            },
            {
                type: "42",
                qty: 8
            }
        ]
    }]
 * */

const fungsiDinamicFilter = (objFilter, data = dataProduct) => {
    // 1. Menyiapkan penampung data hasil filter ==> variable penampung ==> array
    let result = [];
    // 2. Mengakses data yang disimpan pada variable dataProduct satu per satu ==> looping
    data.forEach((val, idx) => {
        // 3. Mengetahui properti dari data yang ingin difilter
        let dataKeys = Object.keys(val); // []
        let filterKey = Object.keys(objFilter); // []
        // 4. Mencocokkan data dari dataProduct dengan objFilter ==> semua data harus true
        let filterCheck = [];
        dataKeys.forEach((value) => {
            // mencocokkan satu per satu property dari dataKeys dengan filterKey
            filterKey.forEach((valueFilter) => {
                // Memastikan property sama
                if (value == valueFilter) {
                    // Memastikan data dari properti tersebut sama
                    if (val[value] == objFilter[valueFilter]) {
                        filterCheck.push(true);
                    } else {
                        filterCheck.push(false);
                    }
                }
            })
        })

        // 5. Jika semuanya true maka akan dimasukkan ke penampung data filter
        if (!filterCheck.includes(false)) {
            result.push(val)
        }
    })

    return result;
}


console.log('Output fungsiDinamicFilter==>', fungsiDinamicFilter({ price: 325000 }));