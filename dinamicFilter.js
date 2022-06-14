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
const fungsiDinamicFilter = (objFilter, data = dataProduct) => {
   let result = [];
    data.forEach((val, idx) => {
        // 3. Mengetahui properti dari data yang ingin difilter
        let dataKeys = Object.keys(val); // []
        let filterKey = Object.keys(objFilter); // []
        let filterCheck = [];
        dataKeys.forEach((value) => {
            // Mememriksa, apakah properti dari dataKey ada didalam filterKey
            if(filterKey.includes(value)){
                // jika, ada, dicocokkan datanya
                if (val[value] == objFilter[value]) {
                    filterCheck.push(true);
                } else {
                    filterCheck.push(false);
                }
            }
        })
        if (!filterCheck.includes(false)) {
            result.push(val)
        }
    })

    return result;
}

console.log('Output fungsiDinamicFilter==>', fungsiDinamicFilter({ id: 15, brand:"Vans" }));