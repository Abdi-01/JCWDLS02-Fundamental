// 3️⃣ Boolean : bernilai benar ==> TRUE atau salah ==> FALSE
let benar = true;
let salah = false;

// Comparison Operator : >, <, >=, <=, ==, ===, !=
let nilaiA = 20;
let nilaiB = 15;

console.log(`Comparison nilaiA(${nilaiA}) > nilaiB(${nilaiB}) :`, nilaiA > nilaiB); //true
console.log(`Comparison nilaiA(${nilaiA}) < nilaiB(${nilaiB}) :`, nilaiA < nilaiB); //false
console.log(`Comparison nilaiA(${nilaiA}) >= nilaiB(${nilaiB}) :`, nilaiA >= nilaiB); //true
console.log(`Comparison nilaiA(${nilaiA}) <= nilaiB(${nilaiB}) :`, nilaiA <= nilaiB); //false
console.log(`Comparison nilaiA(${nilaiA}) == nilaiB(${nilaiB}) :`, nilaiA == nilaiB); //false
console.log(`Comparison nilaiA(${nilaiA}) == 20) :`, nilaiA == 20); //true
console.log(`Comparison nilaiA(${nilaiA}) == 20) :`, nilaiA == "20"); // true
console.log(`Comparison nilaiA(${nilaiA}) === 20) :`, nilaiA === "20"); // false
console.log(`Comparison nilaiA(${nilaiA}) != nilaiB(${nilaiB}) :`, nilaiA != nilaiB); //true


// Logical Operator : AND (&&), OR(||), NOT (!)

// AND : Akan menghasilkan nilai TRUE selama kedua nilai bernilai TRUE
console.log("Logical AND :", true && true); // true
console.log("Logical AND :", true && false); // false
console.log("Logical AND :", false && true); // false
console.log("Logical AND :", false && false); // false
console.log("Logical AND :", nilaiA > nilaiB && nilaiB > nilaiA); // true && flase ==> false 

// OR : Selama ada yang bernilai TRUE maka hasilnya adalah TRUE
console.log("Logical OR :", true || true); // true
console.log("Logical OR :", true || false); // true
console.log("Logical OR :", false || true); // true
console.log("Logical OR :", false || false); // false

// NOT : membalik logika
console.log("Logical NOT :", !true); // false
console.log("Logical NOT :", !false); // true
console.log("Logical :", false || !false); // true