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

    operand1 = parseInt(line[0]);
    operand2 = parseInt(line[4]);
    operator = line[2].trim();

    // console.log(typeof(operand1))
    // console.log(typeof(operand2))
    // console.log(typeof(operator))
    console.log((line[0]))
    console.log((line[1]))
    console.log((line[2]))              //아니 위에서 다듬었잖아 하....
    console.log((line[3]))
    console.log((line[4]))
    caulatorCheck(operand1,operand2,operator);
    r1.close();
    
})

//차라리 리스트 3개써서 받을까?? 개고민이네-> 여러줄 입력받기 그걸로
    //list1  operand1   3|  |   |   | ...
    //list2  operand2   1| 2|   |   | ...
    //list3  operator   *|  |   |   | ...
// 이렇게 하면 숫자 제한없이 받을수있을듯

// operand1="10"
// operand2="18"
// operator="+"

//https://ko.javascript.info/async-await 여기 참조했음
async function caulatorCheck(operand1,operand2,operator){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("완료"),3000)});


    await promise;
    // console.log(result);

    // operand1 = parseInt(operand1);
    // operand2 = parseInt(operand2);
    // operator = operator.trim();

    
    console.log(`${operand1},${operand2},${operator}`); // 왜 안나오는가?


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