const readline=require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

// const r2 = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// })  // 왜 안될까 왜?!!!!

console.log("숫자만 입력하세요");
r1.on('line',(line)=>{


    operand=parseInt(line);
    
    console.log(`입력하신 숫자의 형은?${typeof(line)}임`)
    gugudan(operand);
    r1.close();

})

// r2.on('line',(a)=>{
    
//     operator=parseInt(a);
//     console.log(operator);
//     r2.close
// })



function gugudan(operend) {
    
    if((operend>=1)&&(operend<=9)){
        for(let i =1;i<10;i++){
            
            console.log(`${operend} X ${i} =${operend*i}`);
            
        }
      }
    else{
            console.log("1에서 9까지의 숫자만 입력하셈 ㅋ 약오르징? 메롱메롱");
            console.log("잼민잼민잼민 잼민펀치");
            console.log("엘레레레레레ㅔㄹ");
        }   

}
// function calculator(operator){



// }














