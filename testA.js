let list=[];
let operand1 =0;
let operand2 =0;
let operator ="";

// operand1="10"
// operand2="18"
// operator="+"
// operator=operator.trim()


caulatorCheck(10,2,"/");


function caulatorCheck(operand1,operand2,operator){

    console.log(operand1+operand2+operator); // 왜 안나오는가?


    if((operator=="*")||(operator=="-")
    ||(operator=="/")||(operator=="+"))
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
    return operand1 + operand2;
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