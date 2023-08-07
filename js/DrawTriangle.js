let spaceHalfBlank ="   "
let mspace = "    "
let num = 0;
let result=""
let space ="  "
let half=" "
let bottomMiddleSpace=""

const readline = require("readline");
 const r1 = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });

 console.log("숫자만 입력하세요");
 r1.on('line',(line)=>{
    // input = line.split(' ').map(el => Number(el));
    num=line;

   
    
//     
//      *
//    *   *
//  *       *
//*  *  *  *  *
//  *       *
//    *   *
//      *
// if(num<=0){
    
//     break;
// }else if(num>0){

for(let i=1;i<=num;i++){
    result+=space;              //머리
}
result+="*"                
console.log(result);

for(let i=1;i<num;i++){      //몸통
    result=""
    if(i==num-1){
        result+=space;
        result+="*"
        for(let j=1;j<num;j++){              //바닥
            result +="   *";
        }
      //  result+="*"
    }
    else if(i<num){
    for(let j=1+i;j<=num;j++){
        result+=space
    }
    result+="*"
    
    result+=spaceHalfBlank;

    result+="*"

    for(let j=num-i;j>0;j--){
        result+=space
    }
    spaceHalfBlank+=mspace;
    }

    console.log(result);
}

r1.close();

}).on('close',()=>process.exit());




