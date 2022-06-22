class Product {
    constructor(_sku, _name, _img, _category, _stock, _price) {
        this.sku = _sku;
        this.name = _name;
        this.img = _img;
        this.category = _category;
        this.stock = _stock;
        this.price = _price;
    }
}

class FnB extends Product {
    constructor(_sku, _name, _img, _category, _stock, _price, _expDate) {
        super(_sku, _name, _img, _category, _stock, _price);
        this.expDate = _expDate;
    }
}

class Cart extends Product {
    constructor(_sku, _name, _img, _price, _qty) {
        super(_sku, _img, _name, null, null, _price)
        this.qty = _qty;
        this.subTotal = _price * _qty;
        this.selected = false;
    }
}

let dbProduct = [
    new Product("SKU-01-123456", "Topi", "https://cdn1-production-images-kly.akamaized.net/wRIF7UgcnVNjJOh-vVZwOtxTgdk=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2754021/original/029823500_1552891993-foto_HL_topi.jpg", "General", 20, 35000),
    new FnB("SKU-02-654321", "Telur", "https://asset.kompas.com/crops/WYVtX9H9wYlXZDwLmMqHiw2ZJc4=/0x7:740x500/750x500/data/photo/2020/11/13/5fae4aae98da3.jpg", "FnB", 20, 35000, "2022-06-20"),
    new FnB("SKU-03-321456", "Kentang", "https://image-cdn.medkomtek.com/AqKL90eISrf_GbhYtRAuAi9Simc=/640x640/smart/klikdokter-media-buckets/medias/2302888/original/079980300_1547360960-Makan-Kentang-Mentah-ini-Bahayanya-By-success863-Shutterstock.jpg", "FnB", 20, 35000, "2022-07-20"),
    new Product("SKU-04-135642", "Jacket", "https://media.gq.com/photos/616f1e50af7badb1a03350cd/master/w_2000,h_1333,c_limit/Landing-Leathers-A-2-bomber-jacket.jpg", "General", 20, 35000)
];

let dbCart = [];

let count = 4;

const handleSubmit = () => {
    // 1. Mengambil data
    count += 1;
    let form = document.getElementById("form-product")
    let sku = `SKU-${count < 10 ? `0${count}` : count}-${Math.round(Math.random() * 1000000)}`;
    let name = form.elements[0].value;
    let img = form.elements[1].value;
    let category = form.elements[2].value;
    let stock = form.elements[3].value;
    let price = form.elements[4].value;
    let expDate = form.elements[5].value;

    console.log()
    // 2. Proteksi
    if (img == "" || name == "" || category == "null" || stock == "" || price == "") {
        alert("Isi semua data dengan benar")
    } else {
        // 3. Data disimpan kedalam dbProduct
        if (category == "General") {
            dbProduct.push(new Product(sku, name, img, category, parseInt(stock), parseInt(price)))
        } else if (category == "FnB") {
            dbProduct.push(new FnB(sku, name, img, category, parseInt(stock), parseInt(price), expDate))
        }
        // 4. Reset ulang input element
        form.elements[0].value = "";
        form.elements[1].value = "";
        form.elements[2].value = null;
        form.elements[3].value = "";
        form.elements[4].value = "";
        form.elements[5].value = null;
        document.getElementById("expDate").disabled = true;
    }

    printProduct();
}

const printProduct = (data = dbProduct, sku) => {
    document.getElementById("display").innerHTML = data.map((val, idx) => {
        if (sku == val.sku) {
            return `<tr>
            <td>${idx + 1}</td>
            <td>${val.sku}</td>
            <td><img src="${val.img}" width="75px"></td>
            <td><input type="text" id="new-name" value="${val.name}"/></td>
            <td>${val.category}</td>
            <td><input type="number" id="new-stock" value="${val.stock}"/></td>
            <td><input type="number" id="new-price" value="${val.price}"/></td>
            <td>${val.expDate ? val.expDate : "-"}</td>
            <td><button  type="button" onclick="handleSave('${val.sku}')">Save</button>
                <button type="button" onclick="handleCancel()">Cancel</button>
            </td>
        </tr>`
        } else {
            return `<tr>
            <td>${idx + 1}</td>
            <td>${val.sku}</td>
            <td><img src="${val.img}" width="75px"></td>
            <td>${val.name}</td>
            <td>${val.category}</td>
            <td>${val.stock.toLocaleString()}</td>
            <td>IDR. ${val.price.toLocaleString('id')}</td>
            <td>${val.expDate ? val.expDate : "-"}</td>
            <td><button  type="button"  onclick="handleEdit('${val.sku}')">Edit</button>
                <button type="button" onclick="handleDelete('${val.sku}')">Delete</button>
                <button type="button" onclick="handleBuy('${val.sku}')">Beli</button>
            </td>
        </tr>`}
    }).join("");
}

const handleDate = () => {
    console.log(document.getElementById("category").value)
    console.log(document.getElementById("expDate"))
    if (document.getElementById("category").value == "FnB") {
        document.getElementById("expDate").disabled = false;
    } else {
        document.getElementById("expDate").disabled = true;
    }

}

const handleDelete = (sku) => {
    // Cara 1
    // let index = 0;
    // console.log(sku)
    // dbProduct.forEach((val, idx) => {
    //     if (val.sku == sku) {
    //         index = idx
    //     }
    // })

    // Cara 2
    let index = dbProduct.findIndex((val) => val.sku == sku); // output : number
    dbProduct.splice(index, 1);
    printProduct()
}

const handleEdit = (sku) => {
    printProduct(dbProduct, sku);
}

const handleCancel = () => {
    printProduct();
}

const handleSave = (sku) => {
    // 1. Mencarai alamat index dari data yang akan diperbarui
    let idx = dbProduct.findIndex((val) => val.sku == sku); // 

    // 2. Mengambil value dari form input
    let name = document.getElementById("new-name").value;
    let stock = parseInt(document.getElementById("new-stock").value);
    let price = parseInt(document.getElementById("new-price").value);

    // 3. Menyimpan data kedalam dbProduct
    // Reassign
    // dbProduct[idx].name = name;
    // dbProduct[idx].stock = stock;
    // dbProduct[idx].price = price;

    // Concatination dan spread operator
    console.log("before", dbProduct[idx])
    dbProduct[idx] = { ...dbProduct[idx], name, stock, price }
    console.log("after", dbProduct[idx])

    // 4. Menampilkan data ulang
    printProduct();
}
///////////////// FITUR FILTER /////////////////////

const handleFilter = () => {
    let form = document.getElementById('filter');
    let dataFilter = {
        sku: form.elements[0].value,
        name: form.elements[1].value,
        category: form.elements[2].value,
        price: form.elements[3].value
    }
    console.log(dataFilter);
    let newArr = [];
    dbProduct.forEach((value, idx) => {
        let dataProp = Object.keys(value); // untuk mengambil properti dari value
        let filterProp = Object.keys(dataFilter);
        let filterCheck = [];
        dataProp.forEach((prop) => {
            if (filterProp.includes(prop)) {
                if (dataFilter[prop] && dataFilter[prop] != "null") {
                    if (prop == "sku" || prop == "name") {
                        filterCheck.push(value[prop].includes(dataFilter[prop]));
                    } else {
                        filterCheck.push(value[prop] == dataFilter[prop]);
                    }
                }
            }
        })
        console.log(filterCheck)
        if (!filterCheck.includes(false)) {
            newArr.push(value)
        }
    })

    console.log(newArr)

    // Menampilkan data kedalam html
    printProduct(newArr);
}

const handleReset = () => {
    let form = document.getElementById('filter');
    form.elements[0].value = null;
    form.elements[1].value = null;
    form.elements[2].value = null;
    form.elements[3].value = null;

    printProduct();
}

printProduct();

////////////////////////// Buy /////////////////////////////
const printKeranjang = () => {
    console.log(dbCart)
    let htmlElement = dbCart.map((val, index) => {
        // total += val.subTotal;
        return `
        <tr>
            <td><input type='checkbox' id="check-${val.sku}" onclick="handleCheck('${val.sku}')"/></td>
            <td>${val.sku}</td>
            <td><img src="${val.img}" width="75px"></td>
            <td>${val.name}</td>
            <td>IDR. ${val.price.toLocaleString()}</td>
            <td>
            <button type="button" onclick="handleDec('${val.sku}')">-</button>
            ${val.qty.toLocaleString()} 
            <button type="button" onclick="handleInc('${val.sku}')">+</button>
            </td>
            <td>IDR. ${val.subTotal.toLocaleString()}</td>
            <td>
            <button type="button" onclick="handleCartDelete('${val.sku}')">Delete</button>
            </td>
        </tr>
        `
    })

    document.getElementById("cart-list").innerHTML = htmlElement.join("");
}

const handleCheck = (sku) => {
    alert(document.getElementById(`check-${sku}`).checked);
}

const handleClearCart = () => {
    // 1. Mengakses setiap data product cart satu persatu-satu --> looping --> forEach
    dbCart.forEach((val, idx) => {
        // 2. Mengetahui apakah product tersebut dipilih --> getElementById --> check-sku
        console.log(val.sku, document.getElementById(`check-${val.sku}`).checked)
        // 3. Jika checkbox dari product bernilai true, kita ambil index datanya --> if(condition)
        if (document.getElementById(`check-${val.sku}`).checked) {
            // 4. kita ambil qty data product berdasarkan index, kemudian kita reassign ke stock product --> +=
            // 4a. index dari product asalnya
            let dataIdx = dbProduct.findIndex((data) => data.sku == val.sku);
            dbProduct[dataIdx].stock += val.qty;
            // 5. kita hapus data product pada cart berdasarkan index yang kita dapatkan sebelumnya --> splice
            dbCart.splice(idx, 1);
        }
        // 6. Jika checkbox bernilai false, maka product akan tetap ada
    })
    // 7. Refresh tampilan product dan juga keranjang
    printProduct();
    printKeranjang()

}

const handleBuy = (sku) => {
    // 1. Melakukan pengecekan apakah produk sudah ada didalam keranjang
    let cartIndex = dbCart.findIndex((val) => val.sku == sku);
    // 1a. Mengambil data produk yang akan dimasukkan kedalam keranjang
    let productIndex = dbProduct.findIndex((val) => val.sku == sku);
    console.log(dbProduct[productIndex]);
    // 2. Jika produk ada didalam keranjang, maka qty bertambah
    if (cartIndex >= 0) {
        dbCart[cartIndex].qty += 1;
        dbCart[cartIndex].subTotal = dbCart[cartIndex].qty * dbCart[cartIndex].price;
        // 2a. mengurangi qty dari stock produk
        dbProduct[productIndex].stock -= 1;
    } else {
        // 3. Jika tidak ada, maka menambahkan produk kedalam keranjang
        dbCart.push(new Cart(dbProduct[productIndex].sku,
            dbProduct[productIndex].img,
            dbProduct[productIndex].name,
            dbProduct[productIndex].price, 1));
        // 3a. mengurangi qty dari stock produk
        dbProduct[productIndex].stock -= 1;
    }

    // 4. Merender ulang list keranjang dan list produk
    printProduct();
    printKeranjang();

}

const handleCartDelete = (sku) => {
    // 1. Cari index dari product yang kita pilih didalam keranjang
    let cartIndex = dbCart.findIndex(val => val.sku == sku);
    // 2. Cari index dari data product asalnya
    let productIndex = dbProduct.findIndex(val => val.sku == sku);

    // 3. Mengembalikan stock produk
    dbProduct[productIndex].stock += dbCart[cartIndex].qty;

    // 4. Hapus data pada keranjang
    dbCart.splice(cartIndex, 1);

    // 5. Refresh ulang tampilan
    printProduct();
    printKeranjang();
}

const handleDec = (sku) => {
    // 1. Cari index dari product yang kita pilih didalam keranjang
    let cartIndex = dbCart.findIndex(val => val.sku == sku);
    // 2. Cari index dari data product asalnya
    let productIndex = dbProduct.findIndex(val => val.sku == sku);

    dbProduct[productIndex].stock += 1;
    dbCart[cartIndex].qty -= 1;
    dbCart[cartIndex].subTotal = dbCart[cartIndex].qty * dbCart[cartIndex].price;

    printProduct();
    printKeranjang();
}

const handleInc = (sku) => {
    // 1. Cari index dari product yang kita pilih didalam keranjang
    let cartIndex = dbCart.findIndex(val => val.sku == sku);
    // 2. Cari index dari data product asalnya
    let productIndex = dbProduct.findIndex(val => val.sku == sku);

    dbProduct[productIndex].stock -= 1;
    dbCart[cartIndex].qty += 1;
    dbCart[cartIndex].subTotal = dbCart[cartIndex].qty * dbCart[cartIndex].price;

    printProduct();
    printKeranjang();
}

