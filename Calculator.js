let list=[];
let operand1 =0;
let operand2 =0;
let operator ="";
let result =0;


console.log("+-*/ 중 하나와 연산하실 숫자 두개를 입력하세요");

const readline =  require("readline");
const r1 = readline.createInterface({
    input : process.stdin,
    output:process.stdout,
});



r1.on('line',(line)=>{
    
    list = line.split(' ').map((el)=>el.trim());
    //
    //.map((number)=>Number(number))

    // operand1 = parseInt(line[0]);
    // operand2 = parseInt(line[2]);
    // operator = line[1].trim();

    // console.log(typeof(operand1))
    // console.log(typeof(operand2))
    // console.log(typeof(operator))
    console.log((line[0]))
    console.log((line[1]))
    console.log((line[2]))              //아니 위에서 다듬었잖아 하....
    console.log((line[3]))
    console.log((line[4]))
    caulatorCheck(line[0],line[2],line[4])
    
    r1.close();
    
})

// operand1="10"
// operand2="18"
// operator="+"

function caulatorCheck(operand1,operand2,operator){
    
    // operand1 = parseInt(operand1);
    // operand2 = parseInt(operand2);
    // operator = operator.trim();

    
    // console.log(`${operand1},${operand2},${operator}`); // 왜 안나오는가?


    if((operator==="*")||(operator==="-")
    ||(operator==="/")||(operator==="+"))
        {
            if(Number(operand1)&&Number(operand2))
            {
                if(operator=="+"){
                    console.log(sumCalculator(operand1,operand2));
                }
                else if(operator=="-"){
                    console.log(subCalculator(operand1,operand2));
                    
                }else if(operator=="*"){
                    console.log(mulCalculator(operand1,operand2));
                }else if(operator=="/"){
                    console.log(divCalculator(operand1,operand2));
                }
            }
            else{
                console.log("피연산될 숫자를 제대로 입력하세요")
            }    
        }
        else{
            console.log("제시한 연산자만 입력하세요")
            console.log(operand1)
            console.log(operator)
            console.log(operand2)
    }
    return 0;
}


function sumCalculator(operand1,operand2){
    let result=0;
    result = operand1+operand2
    // return operand1 + operand2; 자바는 이렇게 되는데 ㅜㅜㅜ 
    console.log("야호")
    return result
}
function subCalculator(operand1,operand2){
    return operand1 - operand2;
}
function mulCalculator(operand1,operand2){
    return operand1 * operand2;
}
function divCalculator(operand1,operand2){
    return operand1 / operand2;
}