// let star ="*"
// let star2 ="**"
// let spaceBlank2 =""
// let starBlank=""
// // 12345




let spaceHalfBlank ="   "
let mspace = "    "
let num = 0;
let result=""
let space ="00"
let half="0"
let bottomMiddleSpace=""


console.log("숫자를 입력하세요")


const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
//     
// 입력부분입니당
r1.on('line', (line) => {
    
    
    // input = line.split(' ').map((el) => Number(el));
    num=line
    
    console.log(typeof(num));
    num=parseInt(num);
    console.log(typeof(num));
    console.log(`입력하신 숫자는${num}`);
//      *
//    *   *
//  *       *
//*  *  *  *  *
//  *       *
//    *   *
//      *

// for(let i=1;i<=5;i++){
//     result+=space;
// }
// result+="*"
// console.log(result);

// for(let i=1;i<=3;i++){
//     result="  "
//     if(i==3){
//         for(let j=1;j<=5;j++){
//             result+=space;
//             result +=star;
        
//         }
//     }
//     else if(i<3){
//     for(let j=1;j<=4-i;j++){
//         result+=space
//     }
//     result+="*"
    
//     result+=spaceBlank;

//     result+="*"

//     for(let j=4-i;j>=0;j--){
//         result+=space
//     }
    
//     spaceBlank+=mspace;

// }

//     console.log(result);
// }



console.log("--------------------------------")
console.log("--------------------------------")

// // spaceBlank ="   "

// 두개짜리


//2를변수로 받을꺼임


// 머리
for(let i=1;i<=num+1;i++){  //중간의 시작행보다 항상 한칸 더 띄워서 머리를 씌워야됨 그래서 1더함
    
    result+=space;
    if(i==num+1){
        
        result+="*" // 이 코드는 무엇인가요
        console.log(result);
    }
    console.log(`반복문 내 i입니다 ${i}   `);
    console.log(`반복문 내 num입니다 ${num}   \n`);
    console.log(`반복문 내 result입니다 ${result}   \n`);
    console.log(`반복문 내 space입니다 ${space}   \n`);
}

console.log(`반복문 종료후 result입니다 ${result}   \n`);
console.log(result);






result=""

//중간행
for(let i=1;i<=num;i++){  
    result=""
    
    for(let j=0;j<=num-i;j++){
        result+=space
    }
    result+="*"
    

    if(i==1){//첫번째 줄만 스페이스를 바로 결과에다가 기본값을 더함
        result+=spaceHalfBlank
        result+="*"
    }
    else{//나머지 줄부터는 기본 스페이스값에 누적해서 더함
    spaceHalfBlank+=mspace;
    result+=spaceHalfBlank;
    result+="*"
    }
    
   


    console.log(result);
}
   

// console.log("=================================")

// spaceHalfBlank ="   "


for(let i=1;i<=num-1;i++){   // 중간에서 꺾이는 부분을 포함하여 n행을 그렸으니, 줄어드는건 -1행부터 까지 그려야함
    result="  "  //한칸씩 늘어나면서 *을 찍으면 되기 때문에 미리 한칸 띄어놓은 값을 초기화함
    
    


    for(let j=1;j<=i;j++){
        result+=space
    }
    result+="*"
    // console.log(result);
   
    bottomMiddleSpace="   "
    for(j=1+i;j<=num-1;j++){
        bottomMiddleSpace+=mspace;
    }
    
    result+=bottomMiddleSpace;
    result+="*";
    console.log(result);

    }







    result="" //머리를 그리기 위해 result 초기화

    for(let i=1;i<=num+1;i++){  //중간의 시작행보다 항상 한칸 더 띄워서 머리를 씌워야됨 그래서 1더함
        result+=space;
    }
    result+="*"
    
    console.log(result);

    

    
// 입력뚜껑
r1.close();
}).on('close',()=>process.exit());







// let star ="*"
// let star2 ="**"
// let spaceBlank ="   "
// let spaceBlank2 =""
// let space ="  "
// let mspace = "    "
// let starBlank=""
// // 12345
// let result=""

// let num = 3;

// //     
// //      *
// //    *   *
// //  *       *
// //*  *  *  *  *
// //  *       *
// //    *   *
// //      *

// for(let i=1;i<=5;i++){
//     result+=space;
// }
// result+="*"
// console.log(result);

// for(let i=1;i<=3;i++){
//     result="  "
//     if(i==3){
//         for(let j=1;j<=5;j++){
//             result+=space;
//             result +=star;
        
//         }
//     }
//     else if(i<3){
//     for(let j=1;j<=4-i;j++){
//         result+=space
//     }
//     result+="*"
    
//     result+=spaceBlank;

//     result+="*"

//     for(let j=4-i;j>=0;j--){
//         result+=space
//     }
    
//     spaceBlank+=mspace;

// }

//     console.log(result);
// }



// console.log("--------------------------------")
// console.log("--------------------------------")

// result=""
// spaceBlank ="   "

// for(let i=1;i<=5;i++){  // 첫행
//     result+=space;
// }
// result+="*"
// console.log(result);

// for(let i=1;i<=3;i++){  //중간행
//     result="  "
//     if(i==3){       //끝행
//         break;//////
//     }
//     else if(i<3){
//     for(let j=1;j<=4-i;j++){
//         result+=space
//     }
//     result+="*"
    
//     result+=spaceBlank;

//     result+="*"

//     for(let j=4-i;j>=0;j--){
//         result+=space
//     }
    
//     spaceBlank+=mspace;

// }

//     console.log(result);
// }
   

// // console.log("=================================")
// result=""
// spaceBlank ="   "



// for(let i=1;i<=2;i++){
//     result=""


//     if(i==2){
//         break;
//     }
//     else if(i<2){
        
//         for(let j=1;j<4+i;j++){
//             result+=space
//         }
//         result+="*"

//         result+=spaceBlank;
        
//         result+="*"



//     // for(let j=4-i;j>=0;j--){
//     //     result+=space
//     // }
    
//     // spaceBlank+=mspace;

// }
//     result+=space
//     console.log(result);
// }


// for(let i=1;i<=5;i++){
//     result+=space;
// }
// result+="*"
// console.log(result);





