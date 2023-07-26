let star ="*"
let star2 ="**"
let spaceBlank ="   "
let spaceBlank2 =""
let space ="  "
let mspace = "    "
let starBlank=""
// 12345
let result=""

//     
//      *
//    *   *
//  *       *
//*  *  *  *  *
//  *       *
//    *   *
//      *

for(let i=1;i<=5;i++){
    result+=space;
}
result+="*"
console.log(result);

for(let i=1;i<=3;i++){
    result="  "
    if(i==3){
        for(let j=1;j<=5;j++){
            result+=space;
            result +=star;
        
        }
    }
    else if(i<3){
    for(let j=1;j<=4-i;j++){
        result+=space
    }
    result+="*"
    
    result+=spaceBlank;

    result+="*"

    for(let j=4-i;j>=0;j--){
        result+=space
    }
    
    spaceBlank+=mspace;

}

    console.log(result);
}



console.log("--------------------------------")
console.log("--------------------------------")

result=""
spaceBlank ="   "

for(let i=1;i<=5;i++){
    result+=space;
}
result+="*"
console.log(result);

for(let i=1;i<=3;i++){
    result="  "
    if(i==3){
        break;
    }
    else if(i<3){
    for(let j=1;j<=4-i;j++){
        result+=space
    }
    result+="*"
    
    result+=spaceBlank;

    result+="*"

    for(let j=4-i;j>=0;j--){
        result+=space
    }
    
    spaceBlank+=mspace;

}

    console.log(result);
}
   

console.log("=================================")
result=""
spaceBlank ="   "



for(let i=1;i<=3;i++){
    result="  "


    if(i==3){
        break;
    }
    else if(i<3){

        result+="*"

        for(let j=1;j<4-i;j++){
            result+=space
        }
        
        result+="*"

    result+=spaceBlank;


    for(let j=4-i;j>=0;j--){
        result+=space
    }
    
    spaceBlank+=mspace;

}
    result+=space
    console.log(result);
}


for(let i=1;i<=5;i++){
    result+=space;
}
result+="*"
console.log(result);





//for(let i = 1 ; i<=6;i++){
    
// for(let j = 6 ;j-i<=0;j--){
    
        
//     oneLineResult+=space;

// }
// oneLineResult+=leftToRightUpArrow;


// }