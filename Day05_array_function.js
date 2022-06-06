// ARRAY FUNCTION

// namaVariableArray.forEach(cbfn) : untuk melooping data array dan tidak bisa menghasilkan return
let data = [["Baju", 15, 25000],
["Celana", 10, 30000]];

let list = '';
// for (let i = 0; i < data.length; i++) {
//     list += `${i + 1}. ${data[i]}\n`;
// }

// Cara 1
// const cetak = (value, index) => {
//     list += `${index + 1}. ${value}\n`;
// }

// data.forEach(cetak);

// Cara 2
data.forEach(function (value, index) {
    list += `${index }. ${value[0]}\n`
})

console.log(list)