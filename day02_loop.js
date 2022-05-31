////////////////////// LOOP STATEMENT //////////////////
// LOOP

/**
 * A. WHILE LOOP : digunakan ketika akhir dari looping tidak pasti
 * 
 * 
 * while(condition/boolean){
 *      // task
 * }
 * 
*/

// Example :
let nilai = 1;

while(nilai<=10){
    console.log(nilai);
    nilai++;
}

/**
 * B. DO...WHILE LOOP
 * 
 * 
 * do{
 *      // task
 * }while(condition/boolean)
 * 
 * */ 

let count =1;

do{
    console.log(`Bus No. ${count}`)
    count++;
}while(count <=10)

/**
 * C. FOR LOOP : digunakan ketika kita sudah tau pasti batas loopingnya
 * 
 * for(statement_1;statement_2;statement_3){
 *      // task
 * }
 * 
 * statement_1 : variable yg mendefinisikan nilai awal dari batas looping kita
 * statement_2 : condition untuk memeriksa variable pada statement_1 sesuai dengan batas looping yg kita berikan
 * statement_3 : berisi perintah increment/decrement terhadap statement_1
 * */ 

for(let i=0;i< 10;i++){
    console.log(`Count ${i}`);
}