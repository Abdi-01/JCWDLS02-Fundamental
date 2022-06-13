// CLASSS OBJECT at JAVASCRIPT
/**
 * class className{
 *      constructor(arg1, arg2...){
 *          this.propertyName = arg1;
 *          this.propertyName = arg2;
 *      }
 * 
 *      method=()=>{
 *          // code 
 *      }
 * }
 * */

class Manusia {
    constructor(_name, _born, _gender) {
        this.name = _name;
        this.born = _born;
        this.gender = _gender;
    }

    getAge = () => {
        let thisYear = new Date().getFullYear();
        let age = thisYear - parseInt(this.born.split("-")[2]);
        return age;
    }

    getIntroduce = () => {
        return `My name is ${this.name}, I born at ${this.born}, my age ${this.getAge()} years old`
    }
}

let dataPenduduk = [];

// dataPenduduk.push({ name: "Reva", bornYear: "11-11-1996", gender: "P" });
dataPenduduk.push(new Manusia("Renold", "10-10-1998", "L"));
dataPenduduk.push(new Manusia("Reva", "11-11-1996", "P"));
// console.log(dataPenduduk[0]);
// console.log(dataPenduduk[0].getAge());
// console.log(dataPenduduk[0].getIntroduce());

console.log(dataPenduduk);
let list = dataPenduduk.map((val, idx) => {
    return `${idx + 1}. ${val.getIntroduce()}`
})

console.log(list.join('\n'));

// INHERITANCE ===> pewarisan data dari class utama agar dapat digunakan oleh class turunan
// Class Turunan
class Pekerjaan extends Manusia {
    constructor(_name, _born, _gender, _job, _salary) {
        super(_name, _born, _gender);
        this.job = _job;
        this.salary = _salary;
        this.age = this.getAge();
    }
}

class Jabatan extends Pekerjaan {
    constructor(_name, _born, _gender, _job, _salary, _jabatan) {
        super(_name, _born, _gender, _job, _salary);
        this.jabatan = _jabatan;
    }
}

let dataEmploye = [
    new Pekerjaan("Arnold", "08-07-1992", "Male", "Chef", 25000000)
];

console.log(dataEmploye);