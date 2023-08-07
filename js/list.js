let list = [];
let tmp = 0;
let notNumber = "";
let isSameNumber =false;
let isStringNumber =false;
const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

console.log(`랜덤한 숫자를 원하는 만큼 입력하세요!`);
r1.on('line', (line) => {

    //숫자를 입력받을때 한자리일수도 있고 두자리일수도 있는데
    //아스키코드 값에의해 1~9의 값은 원값은 48~57인데 문자열 1로 나온다
    //그래서 받은 숫자를 Number(문자열을 숫자로 변환)로 숫자로 바꿔줘야 한다
    list = line.split(' ').map((number)=>Number(number));//map으로 반복해서 새배열 만듦
    

    //두수끼리 비교해서 큰수를 자꾸 오른쪽으로 밀어 마지막인데스에 남길꺼임
    for(let i =0;i<list.length;i++){
        
        if(isNaN(list[i])){
            notNumber = list[i]
            list[i]=null;
            
        }

        if(list[i] == null){
            console.log("숫자만 입력하세요 😡")
            isStringNumber = true;
            break;
        }
        
        if(list[i]>list[i+1]){
            
            tmp = list[i+1];
            list[i+1]=list[i];
            list[i]=tmp;
            
        }else if(list[i]==list[i+1]){
            console.log(`같은수는 입력하지 마세요`)
            isSameNumber =true
            break;
            
        }
    }
    if((isSameNumber)||(isStringNumber)){
        console.log(`다시 입력하세요`)
    }else{

        console.log(`가장 큰 값은 ${list[list.length-1]}`);
    }
    r1.close();
});