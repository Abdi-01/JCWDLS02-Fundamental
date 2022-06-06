// OBJECT : Data penampung seperti array, yang alamatnya menggunakan property.

/**
 * Array ==> berdasarkan alamat index
 * Object ==> berdasarkan alamat property
 * 
 * let variableArray = [data1, data2, data3];
 * 
 * let variableObject = {
 *      namaProperty:data,
 *      namaProduct : "Sepatu Air Jordan Low",
 *      stock:20,
 *      price:2500000,
 *      isReady:true,
 *      size:[41,42,43],
 *      totalPrice:(param)=>{
 *             // block_code
 *      },
 *      data : {
 *          prop:value
 *      } 
 * };
 * */

// Menuliskan data object
// Cara 1️⃣ : Syntax Object Literal
let aStudent = {
    class: 'JCWDLS-02',
    age: 26,
    name: 'Aldi',
    materi: ['Fundamental', 'Front-End', 'Back-End']
}

console.log(aStudent.name);
console.log(aStudent.class);
console.log(aStudent['age']);
console.log(aStudent["materi"][0]);

// Cara 2️⃣ : Syntaxt Obejct "new" keyword
let bStudent = new Object();
// let bStudent = {};

bStudent.name = 'Zidane';
bStudent.class = 'JCWDLS-04';
bStudent.age = 22;
bStudent.materi = ['DevOps', 'CI/CD'];

console.log(bStudent)

// ARRAY of OBJECT
let produk = [
    {
        name: 'Baju',
        stock: 12,
        price: 1000,
    },
    {
        name: 'Baju',
        stock: 12,
        price: 1000,
    }
]

// Object Destructuring
let specMobil = {
    name: 'Mazda 3',
    engine: '2000cc',
    country: 'japan'
}

console.log(specMobil.name);
console.log(specMobil.engine);
console.log(specMobil.country);

let { name, engine, country } = specMobil;
console.log(name);
console.log(engine);
console.log(country);



// Spread operator

// Concat data object
let dealer ={
    address:'Jl. Jend. Sudirman',
    sales:'Mr. Andrew'
}

let beliMobil = {
    ...specMobil,
    ...dealer,
    price:550000000
}

console.log(beliMobil)

// Object.keys(variableObject);
console.log(Object.keys(dealer))

// Object.values(variableObject);
console.log(Object.values(dealer))