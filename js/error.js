let list=[];
let operand1 =1;
let operand2 =2;
let operator ="*";



const readline =  require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output:process.stdout,
});

console.log("+-*/ 중 하나와 연산하실 숫자 두개를 입력하세요");


r1.on('line',(line)=>{
    
    list = line.split(' ');
    //.map((number)=>Number(number))

    operand1 = parseInt(line[0]);
    operator = line[1];
    operand2 = parseInt(line[2]);

    // console.log(typeof(operand1))
    // console.log(typeof(operator))
    // console.log(typeof(operand2))
    
    r1.on('close');
    
})
r1.close();