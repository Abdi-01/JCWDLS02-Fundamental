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


let dbProduct = [];
let count = 0;

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

const printProduct = () => {
    document.getElementById("display").innerHTML = dbProduct.map((val, idx) => {
        return `<tr>
            <td>${idx + 1}</td>
            <td>${val.sku}</td>
            <td><img src="${val.img}" width="75px"></td>
            <td>${val.name}</td>
            <td>${val.category}</td>
            <td>${val.stock.toLocaleString()}</td>
            <td>IDR. ${val.price.toLocaleString('id')}</td>
            <td>${val.expDate ? val.expDate : "-"}</td>
            <td><button  type="button" onclick="">Edit</button>
                <button type="button" onclick="">Delete</button>
            </td>
        </tr>`
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