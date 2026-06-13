// =======================
// 当前积分
// =======================

let score = 0;


// =======================
// AI语音朗读
// =======================

function speak(text){

    let speech = new SpeechSynthesisUtterance();

    speech.text = text;

    speech.lang = "zh-CN";

    speech.rate = 0.8;

    speech.pitch = 1;

    speech.volume = 1;

    speechSynthesis.speak(speech);

}



// =======================
// 增加积分
// =======================

function addScore(points){

    score += points;

    document.getElementById("score").innerHTML = score;

    showMessage("⭐ +" + points);

    applause();

    unlockMedal();

}



// =======================
// 掌声音效
// =======================

function applause(){

    let audio = new Audio(
        "https://www.soundjay.com/human/applause-8.mp3"
    );

    audio.play();

}



// =======================
// 弹出提示
// =======================

function showMessage(text){

    let msg = document.createElement("div");

    msg.innerHTML = text;

    msg.style.position = "fixed";

    msg.style.top = "40%";

    msg.style.left = "50%";

    msg.style.transform = "translate(-50%,-50%)";

    msg.style.padding = "30px";

    msg.style.background = "#ffeb3b";

    msg.style.fontSize = "40px";

    msg.style.borderRadius = "30px";

    msg.style.zIndex = 9999;

    document.body.appendChild(msg);

    setTimeout(() => {

        msg.remove();

    },2000);

}



// =======================
// 判断题
// =======================

function checkAnswer(correct){

    if(correct){

        showMessage("✔ 回答正确");

        addScore(10);

    }

    else{

        showMessage("❌ 再想一想");

    }

}



// =======================
// 奖章系统
// =======================

function unlockMedal(){

    if(score>=10){

        showMessage("🥉 四季小能手");

    }

    if(score>=30){

        showMessage("🥈 识字小达人");

    }

    if(score>=60){

        showMessage("🥇 四季探索家");

        fireworks();

    }

}



// =======================
// 烟花特效
// =======================

function fireworks(){

    for(let i=0;i<40;i++){

        let star = document.createElement("div");

        star.innerHTML = "✨";

        star.style.position="fixed";

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        star.style.fontSize="50px";

        star.style.zIndex=9999;

        document.body.appendChild(star);

        setTimeout(()=>{

            star.remove();

        },3000);

    }

}



// =======================
// 幸运转盘
// =======================

function luckyWheel(){

    let items=[

        "春天",

        "夏天",

        "秋天",

        "冬天",

        "春",

        "夏",

        "秋",

        "冬",

        "草芽尖尖",

        "荷叶圆圆"

    ];

    let randomIndex =

        Math.floor(Math.random()*items.length);

    showMessage(

        "🎡 抽到了：" +

        items[randomIndex]

    );

}



// =======================
// 页面切换动画
// =======================

function nextPage(){

    window.scrollTo({

        top:window.innerHeight,

        behavior:"smooth"

    });

}



// =======================
// 拖拽游戏
// =======================

let selected="";

function selectItem(name){

    selected=name;

}


function dropAnswer(answer){

    if(selected===answer){

        showMessage("🎉 配对成功");

        addScore(10);

    }

    else{

        showMessage("❌ 再试一次");

    }

}



// =======================
// 闯关成功
// =======================

function passLevel(){

    showMessage("🏆 闯关成功");

    fireworks();

    applause();

}



// =======================
// 飘花效果
// =======================

function createFlower(){

    let flower=document.createElement("div");

    flower.innerHTML="🌸";

    flower.style.position="fixed";

    flower.style.left=Math.random()*100+"%";

    flower.style.top="-50px";

    flower.style.fontSize="30px";

    flower.style.zIndex=-1;

    document.body.appendChild(flower);

    let timer=setInterval(()=>{

        flower.style.top=

            flower.offsetTop+3+"px";

    },20);

    setTimeout(()=>{

        clearInterval(timer);

        flower.remove();

    },10000);

}



setInterval(createFlower,1000);




// =======================
// 落叶效果
// =======================

function createLeaf(){

    let leaf=document.createElement("div");

    leaf.innerHTML="🍂";

    leaf.style.position="fixed";

    leaf.style.left=Math.random()*100+"%";

    leaf.style.top="-50px";

    leaf.style.fontSize="30px";

    leaf.style.zIndex=-1;

    document.body.appendChild(leaf);

    let timer=setInterval(()=>{

        leaf.style.top=

            leaf.offsetTop+2+"px";

    },20);

    setTimeout(()=>{

        clearInterval(timer);

        leaf.remove();

    },12000);

}



setInterval(createLeaf,1800);




// =======================
// 雪花效果
// =======================

function createSnow(){

    let snow=document.createElement("div");

    snow.innerHTML="❄";

    snow.style.position="fixed";

    snow.style.left=Math.random()*100+"%";

    snow.style.top="-30px";

    snow.style.fontSize="25px";

    snow.style.zIndex=-1;

    document.body.appendChild(snow);

    let timer=setInterval(()=>{

        snow.style.top=

            snow.offsetTop+2+"px";

    },20);

    setTimeout(()=>{

        clearInterval(timer);

        snow.remove();

    },10000);

}



setInterval(createSnow,1200);



// =======================
// 欢迎动画
// =======================

window.onload=function(){

    showMessage(

        "🌸 欢迎来到《四季》互动课堂 🌸"

    );

}