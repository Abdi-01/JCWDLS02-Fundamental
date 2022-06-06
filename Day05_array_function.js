// ARRAY FUNCTION

// namaVariableArray.forEach(cbfn) : untuk melooping data array dan tidak bisa menghasilkan return
let data = [
    ["Baju", 15, 25000],
    ["Celana", 10, 30000]
];

// let list = '';
// for (let i = 0; i < data.length; i++) {
//     list += `${i + 1}. ${data[i]}\n`;
// }

// Cara 1
// const cetak = (value, index) => {
//     list += `${index + 1}. ${value}\n`;
// }

// data.forEach(cetak);

// Cara 2

// console.log(list)

// namaVariableArray.map(cbfn) : untuk melooping data array dan dapat menghasilkan data array baru
console.table(data)
// let list = data.map((value, index) => {
//     return `${index + 1}. ${value[0]}`
// })
// console.table(list)

// data.forEach(function (value, index) {
//     list += `${index}. ${value[0]}\n`
// })

let list = '';ki
const duplicateForEach = (dataArray, callbackFn) => {
    for (let index = 0; index < dataArray.length; index++) {
        callbackFn(dataArray[index], index);
    }
}

duplicateForEach(data, function (value, index) {
    list += `${index + 1}. ${value[0]}\n`;
});

console.log(list);