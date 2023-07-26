let hometown = "Daegu";
const name = "sieun";

const readline = require("readline");
const music = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

let endLecture = true;
let loadPackback = true;
let getOutofSchool = true;
let airpot = true;
let tired = 1;
// tired의 종류에눈 0,1,2가 있습니다.
let sick = true;

let timeToMove = true;
let food = true;
let endEat = false;
let wantMove = 0;
let time = "morning";
//time의종류에는 morning,launch,dinner,sleep이 있습니다
let hungry = 0;
let stress = "fine";
//stress는 fine,soso,Max가 있습니다
let noPassion = true;
let wash = false;
let doingSmartPhone =false;
let playThePiano= "";
//피아노치는 모드는 easy,hard,hell이 있습니다.
let takeaCoffee = 0;
//0은 안마심 1은디카페인 2는 그냥카페인 3은 고카페인
let dryhair = false;
let cosmetics = 0
//0 = 화장품안꺼냄(=집어넣기) ,1 = 기초화장 끝 , 2= 전체화장 끝 
let goToCloset=0;
let lazy = 0
//0 안귀찮음(f), 1 귀찮음(t)
let specialDay = true;
let clothes = 0;
//모드 1 :편한룩 ,모드2 : 청순룩  ,모드3 : 모던룩 , 모드4 : 스트릿룩
let pants = false;
let pantsShape = 0;
//1. 연청 ,2.진청, 3.검은반바지,4. 청반바지
let pantsShapeDetail = "";

let skirt = false;
let skirtShape = 0;
//1.쉬폰 2.숏 3.롱 
let skirtShapeDetail = "";

let slacks = false;
let slacksShapeDetail=0;
//1.검정슬랙스 2.쥐색슬랙스 3.베이지색슬랙스
let slacksColor = "";
 //1.검정색 2.쥐색 3.베이지색
let cagopants  =false;
let cagoPan
let cagoPantsColor=0;
//1.카키 , 2.검정, 3.그레이

let topClothes = "";
//다음날이 되었으니 초기화해야할것을 생각해야함
//
    stress="fine";
//a.(moring)
//1.아침이 되엇는데 계속 졸리다면
    //좀 더 누워있는다
        //몽롱하다면
            //고카페인을 먹는다
                //커피를 다마셨다면
                    //일상을 보내러 갈것이다    
        //덜 몽롱하다면
            //카누를 먹을 것이다
                //커피를 다마셨다면
                    //일상을 보내러 갈것이다
//아침이 되었는데 견딜만한 졸림이라면
    // 커피를 먹고 일상을 보내러 갈 것이다
    if((time=="morning")&&(tired==1)){
        console.log("좀더누워있기");
        if(tired==1){
            takeaCoffee=3;
            //고카페인
            endEat=true;
                if(endEat==true){
                    console.log("씻으러간다");
                    wash = true;
                }
        }
    }
    else if((time=="morning")&&(tired==0)){
        takeaCoffee=2;
        //걍카페인
        console.log("씻으러간다");
        wash = true;
    }

//2.다 씻었다면 
    //머리를말리고 앞머리 뽕을 한다
    //화장품을 꺼낸다
        //앞머리 뽕 하는 중이고 화장품을 꺼냈다면
            //스킨바르기
            //썬크림 바르기
            //팩트바르기
            //눈썹을 그린다
            //기초화장이 끝났습니다
                //전체화장하기 귀찮다면?
                    //화장이 끝났습니다
        //기초화장이 끝났다면
            //아이섀도우를 바른다
            //아이라인을 그린다
            //립을 바른다
            //특별한 날인지 생각해본다
                //특별한 날이라면
                    //마스카라를 한다
                    //글리터를 한다
                    //전체화장이 끝났습니다.
                //특별한 날이 아니라면
                    // 전체 화장이 끝났습니다
                    
        //전체화장이 끝났다면
            //앞머리 뽕을 푼다


if(wash== true){
    console.log("위잉위잉 드라이중 🌪️")
    dryhair =true;
    console.log("화장품을 꺼내야징 💅");
    cosmetics= 1;
    if(cosmetics==1){ //기초화장
        console.log("스킨바르는중");
        console.log("팩트바르기");
        console.log("눈썹그리기");
        console.log("기초화장이 끝났습니다 🔔");
        cosmetics=2;
            if(lazy ==1){ // lazy는 입력창으로 입력을 받을꺼임
                console.log("화장이 끝났습니다 🔔🔔🔔");
                cosmetics=0;
            }
        }
    if(cosmetics==2){ //전체화장
        console.log("아이섀도우 합니다");
        console.log("아이라인 그리기");
        console.log("립을 바르기");
        console.log("특별한 날인지 생각해보기");
            if(specialDay){
                console.log("마스카라를 한다");
                console.log("글리터를한다");
                console.log("화장이 끝났습니다 🔔🔔🔔");
                cosmetics=0;
            }else if(specialDay==false){
                console.log("화장이 끝났습니다 🔔🔔🔔");
                cosmetics=0;
            }
    }
    
    if(cosmetics==0){ //전체화장이 끝남
        console.log("앞머리 뽕을 푼다😊");
    }
}

//3.머리를다 말렸고, 화장이 끝났다면
    //옷장을 고르러 옷장으로 간다
        //옷장에 도착했다면
            //어떤 옷을 입을지 생각을 한다
                
                //편안한 옷을 입고싶다면
                    //바지를 선택하러 간다
                    //바지 색깔을 고민해본다
                        //연청을 입고 싶다면
                            //밝은 계열의 티를 입는다                
                        //진청을 입고 싶다면
                            //검정색 계열의 티를 입는다
                        //검은반바지를 입고싶다면 
                            //크롭계열의 티를 입는다
                        //청반바지를 입고 싶다면
                            //흰색 티를 입는다

                //청순한 옷을 입고싶다면
                    //치마 종류를 생각해본다
                        //치마 스타일을 고민해본다
                            //쉬폰치마를 입고싶다면
                                //흰색 블라우스를 입는다
                            //숏스커트를 입고싶다면
                                //검정 크롭티를 입는다
                            //롱스커트를 입고싶다면
                                    //오픈숄더를 입는다

                //모던한 룩을 입고 싶다면
                    //어떤색깔의 슬랙스를 입을지 생각해본다
                        //검정색슬랙스를 입고싶다면
                            //검정색 크롭티를 입는다
                        //쥐색슬랙스를 입고싶다면
                            //흰색 크롭티를 입는다
                        //베이지색슬랙스를 입고싶다면
                            //흰색블라우스를 입는다

                //스트릿룩을 입고 싶다면
                    //어떤색깔의 카고바지를 입을지 생각해본다
                        //카키색깔을 입고 싶다면
                            //흰색 크롭티를 입는다
                        //검정색깔을 입고 싶다면
                            //검정색 민소매를 입는다
                        //그레이색깔을 입고 싶다면
                            // 검정색 크롭티를 입는다
    //옷입기가 끝났지롱

if((wash == true)&&(cosmetics==0)){
    console.log("옷장으로 이동합니다 🚪");
    goToCloset == 1;
    console.log("무슨옷을 입는게 좋을까?") 
    //여기서 입력을 받을것이다
        if(clothes ==1){
            console.log("오늘은 편안한 옷을 입어야겠다");
            console.log("바지를 입어야겠다!");
            pants=true;
            console.log("무슨색깔을 입징??");
            //종류를 선택하게 해서 pantschape에 집어넣는다
                if(pants){
                    if(pantsShape == 1){
                        pantsShapeDetail ="연청"
                        console.log(`${pantsShapeDetail}을 입어야겠군👖`);
                        topClothes="밝은계열티";
                        console.log(`위에는 ${topClothes} 입어야지`);
                        console.log("옷입기 끝~💃");
                        }
                    else if(pantsShape==2){
                        pantsShapeDetail ="진청"
                        console.log(`${pantsShapeDetail}을 입어야겠군👖`);
                        topClothes="검정티";
                        console.log(`위에는 ${topClothes} 입어야지`);
                        console.log("옷입기 끝~💃");
                        }
                    else if(3){
                        pantsShapeDetail ="검은반바지"
                        console.log(`${pantsShapeDetail}을 입어야겠군👖`);
                        topClothes="크롭티";
                        console.log(`위에는 ${topClothes} 입어야지`);
                        console.log("옷입기 끝~💃");
                        }
                    else if(4){
                        pantsShapeDetail ="청반바지"
                        console.log(`${pantsShapeDetail}을 입어야겠군👖`);
                        topClothes="흰색티";
                        console.log(`위에는 ${topClothes} 입어야지`);
                        console.log("옷입기 끝~💃");
                        }
                    }
                }
        else if(clothes==2){
            console.log("오늘은 청순한 옷을 입어야겠다");
            console.log("치마를 입어야겠다!");
            skirt=true;
            console.log("무슨치마를 입징??");
            //종류를 선택하게 해서 skirtchape에 집어넣는다
                if(skirt){
                    if(skirtShape==1){
                        skirtShapeDetail ="쉬폰치마"
                        console.log(`${skirtShapeDetail}을 입어야겠군👗`);
                        topClothes="흰색블라우스";
                        console.log(`위에는 ${topClothes} 입어야지`);
                        console.log("옷입기 끝~💃");
                    }else if(skirtShape==2){
                        skirtShapeDetail ="숏스커트"
                        console.log(`${skirtShapeDetail}을 입어야겠군👗`);
                        topClothes="검정크롭티";
                        console.log(`위에는 ${topClothes} 입어야지`);
                        console.log("옷입기 끝~💃");
                    }else if(skirtShape==3){
                        skirtShapeDetail ="롱스커트"
                        console.log(`${skirtShapeDetail}을 입어야겠군👗`);
                        topClothes="오픈숄더";
                        console.log(`위에는 ${topClothes} 입어야지`);
                        console.log("옷입기 끝~💃");
                    }
                }   
            }
        else if(clothes==3){
            console.log("모던한 룩을 입어야겠다");
            console.log("슬랙스를 입어야겠다!");
            slacks=true;
            console.log("무슨 슬랙스를 입징??");
            //종류를 선택하게 해서 slackschape에 집어넣는다
                if(slacks){
                    if(slacksShapeDetail==1){
                        slacksColor = "검정색"
                        console.log(`${slacksColor}+슬랙스를 입어야겠군`);
                        topClothes="검정색 크롭티";
                        console.log(`위에는 ${topClothes} 입어야지`);
                        console.log("옷입기 끝~ 💃");
                    }else if(slacksShapeDetail==2){
                        slacksColor = "쥐색"
                        console.log(`${slacksColor}+슬랙스를 입어야겠군`)
                        topClothes="흰색크롭티"
                        console.log(`위에는 ${topClothes} 입어야지`)
                        console.log("옷입기 끝~ 💃");                
                    }else if(slacksShapeDetail==3){
                        slacksColor="베이지색"
                        console.log(`${slacksColor}+슬랙스를 입어야겠군`)
                        topClothes = "흰색블라우스"
                        console.log(`$위에는${topClothes}입어야징`)
                        console.log("옷입기 끝~ 💃");               
                    }    
                }
        else if(clothes==4){
            c
        }




        }
        else if(clothes==4){

        }
}



//b.luanch(점심)

//2. 만약 강의가 끝났다면
//     나는 짐을 쌀것이다
//         짐을 다 쌋다면
//             담배를 피러 갈것이다
//         짐을 덜 쌋다면
//             짐을 쌀것이다        
// 강의가 안끝났다면 
//     그냥 앉아서 기다릴 것이다
if(endLecture){
    console.log("짐을 쌀것이다");
    if(loadPackback)
        {
            console.log("담배를 필것이다");
            
        }
    else{
        console.log("짐을 쌀것이다");
    } 
}

else if (endLecture = false){
    console.log("그냥 앉아서 기다릴 것이다");
}

// 2.학교 밖을 나왔는데 걸어가기가 귀찮다면
//     에어팟을 착용하고 생각없이 집으로갈것이다
//         에어팟을 착용했다면
//             노래를 선택할것이다
//                 힙합이 듣고싶다면
//                     릴러말즈,코쿤,기리보이 노래를 들을 것이다
//                 발라드가 듣고싶다면
//                     스텔라장 노래를들을 것이다
//                 아이돌 노래가 듣고싶다면
//                     최신에 나온 노래를 들을 것이다
//                 팝송이 듣고싶다면
//                     겁나 신나는 노래를 들을 것이다
// 학교 밖을 나왔는데 아프다면
//     택시를 타고 집에 갈것이다.



if(getOutofSchool){
    console.log("에어팟을 착용하고 생각없이집으로 갈것이다")
    if(airpot){
        console.log("노래를 선택할 것이다");

        console.log("노래를 입력하세요");

        music.prompt();
        music.on("line",(input)=>{
            solution(input);
            music.close();
        }).on("close",function(){
            process.exit();
        });

        // let music = parseInt(prompt("원하는 장르의 번호를 입력하세요 1.힙합 2.발라드 3.아이돌 4.팝송 "));

            if(music == 1){
                console.log("릴러말즈 재생");
            }
            else if(music == 2){
                console.log("스텔라장 재생");
            }
            else if(music == 3){
                console.log("최신 아이돌 노래 재생");
            }
            else if(music==4){
                console.log("최신에 나온 노래를 들을 것이다");
            }
            else{1
                console.log("랜덤재생을 할것이다");
            }
        }
    else if(아픔){
        console.log("택시를 타고 집에 갈것이다");
    }
}


// 3.집에 도착했는데 피곤하다면
//     잠을 잘것이다
//         잠을 다 잤다면
//             밥을 먹을것이다
//                 밥을 다먹었다면
//                     할일을 하러 갈것이다


if(tired==1){
    console.log("잠을 잘 것이다");
    tired =2;
    if(tired ==2){
        console.log("밥먹기");
        tired =3;    
    }
    if(tired ==3){
        console.log("할일 하기");
    }
    hungry =1;
}


// 4.집에 도착했는데 안피곤하다면
//     그냥 누워 있을것이다
//         누워있는데 이제 움직일때가 됬다 싶으면
//             냉장고를 열어볼 것이다
//                 냉장고를 열어보았는데 먹을 것이 없다면
//                     시켜먹거나 스킵 할 것이다

//                 냉장고를 열어보았는데 먹을 것이 있다면
//                     바로 밥먹을 것이다
//                         밥을 다 먹엇다면
//                             할일을 하러 갈것이다

if(tired=0){
    console.log("그냥 누워있을것이다");
    
    if(timeToMove){
        console.loe("냉장고를연다");
        if(food=false){
            console.log("시켜먹거나 스킵 할 것이다")
        }else if (food = true){
            endEat = true;
            if(endEat = true){
                console.log("할일을 하러 간다!")
            }
        }
    }
    time == "dinner";
    hungry =1;
}

//  5.       누워있었는데도 움직이기 싫으면
//             더 누워 있을 것이다
//                 그러다가 졸리다면
//                     잠을 잘것이다
//                 안졸리고 피로가 풀렸다 싶으면
//                     밥을 먹을 것이다
//                         밥을 다 먹었다면
//                             할일을 하러 갈것이다

else if((tired == 1 )&& (wantMove==0)){
    console.log("더 누워있기");
    if(tired ==1){
        console.log("잠을잔다");
        tired = 0;
    }else if (tired ==0 ){
        endEat = true;
            if(endEat = true){
                console.log("할일을 하러 간다!")
            }
    }
    time = "dinner";
    hungry =1;
}

// 6.저녁시간이 되어 배가 고프다면
//     간단하게 무언가를 먹을 것이다
//         무언가를 다 먹고 할일을 해야 하는데 스트레스 받는다면
//             운동을 할것이다
//         무언가를 다먹고 할일을 해야하는데 바로 할만 하다면
//             바로 할일을 하러 갈것이다
// 저녁시간이 되었는데 배가 안고프다면
    //     그냥 쉴것이다
if((time == "dinner") && (hungry ==1)){
    console.log("무언가를 먹는다");
        if(stress = "MAX"){
            console.log("운동을한다")
        }else if (stress= "soso"){
            console.log("바로 할일을 하러간다")
        }
    }
    
else if ((time == "dinner") && (hungry ==0)){
    console.log("그냥 쉰다");
}

// 7.잘 시간이 되었다면
//     씻으러 갈것이다
//         씻기가 귀찮다면
//             그냥 멍때릴 것이다
//         씻기가 안 귀찮담녀
//             바로 씻으러 갈것이다
if(time == "sleep"){
    console.log("씻으러가자");
        if(noPassion){
            console.log("멍때리기");
        }else if(noPassion ==false){
            wash = true;
        }
        
    // 8.잘 시간이 덜 되었다면
    //     휴대폰 하거나 피아노 칠 것이다
    //         피아노를 쳤는데도 스트레스가 덜 풀렸다면
    //             조온나 여려운 곡을 치면서 분노를 피아노로 표출할 것이다
    //         만족할 정도로 피아노를 쳤다면
    //             씻으러 갈거이다
}else if (time == "yet"){
    playThePiano = "easy";
    doingSmartPhone=true;
    if(stress=="soso"){
        playThePiano = "Hell";
        console.log("분노표출하기");
    }
    else if(stress=="fine"){
        wahs = true;
    }
}


// 9.자려고 누웠는데 잠이 아주아주 잘온다면
//     바로 기절해서 잘것이다

// 자려고 누웠는데 잠이 안온다면
//     인생에 대해 생각해보거나 오늘 하루를 뭐 어떤일이 있었는지 생각해 볼것이다
//         그래도 잠이 안오면
//             하고 싶은거 하거나 밀린 일을 처리할 것이다
//                 그러다가 잠이오면
//                     기절해서 잘것이다

//         그러다가 잠이 오면
//             기절해서 잘것이다

time = "sleep";
tired = 1;

if((time=="sleep")&&(tired==2)){
    console.log("기절중");
    tired=0;
}
else if ((time=="sleep")&&(tired==1)){
    console.log("인생에 대해 생각하기");
    if(tired!==2){
        console.log("자유시간이당~~");
        console.log("밀린일을하자");
        tired=2;
        if(tired==2){
            console.log("기절중");
            tired=0;
        }
    }
}


time ="morning";
endEat=false;














