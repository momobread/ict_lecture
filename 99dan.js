
// const dan = 2;
// const su = 1;
let oddSumResult = 0;
let tmp = 0;
let factorialResult=1;
const readline = require("readline");



const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});


for (let operand = 2; operand < 10; operand++) {    
    console.log(`${operand}단`); 
    for (let mulNum = 1; mulNum < 10; mulNum++) {   
        console.log(`${operand}X${mulNum}=${mulNum * operand}`);
        
    }
    console.log(`\n`); //보기 편리하기 위해 띄어쓰기 해줌
}


for (let oddNum = 1; oddNum <= 100; oddNum += 2) {
    oddSumResult += oddNum;
}
console.log(`1부터 100까지의 합은 : ${oddSumResult}입니다.`);

console.log(`양수를입력하세요`);
r1.on('line', (positiveNumber) => {
    tmp = positiveNumber;
    if(positiveNumber>0){ //양수일때만 실행가능
    for (; tmp >0; tmp--) {
        factorialResult*=tmp; 
    }
    console.log(factorialResult);
}else{
    console.log(`양수만 입력하세요`);
}
r1.close();
});




















