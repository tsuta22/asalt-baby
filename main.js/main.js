
const initialHP = 100;

let currentHP = initialHP;

function resetHP(){
    currentHP = initialHP;
};


const attackBtn = document.getElementById('attack-btn');

const result = document.getElementById('result');

let hpBar = document.getElementById('hp-bar'); 


// attack-btnクリック時
attackBtn.addEventListener('click',function(){
    // 1から10の間でランダムなダメージを算出
    let damage = Math.floor(Math.random() * 10) + 1;

    // 現在のhpからダメージを引いたものをcurrentHPに代入
    currentHP -= damage;

    // HPゲージを示すwidthはcurrentHPの数値になる
    hpBar.style.width = `${currentHP}%`;


    // // 血の画像
    // const blood1 = document.getElementById('blood-1');
    // const blood2 = document.getElementById('blood-2');
    // const blood3 = document.getElementById('blood-3');
    // let bloodVariety = [blood1,blood2,blood3];

    // // 血の画像をランダムに選ぶ
    // const randomIndex = Math.floor(Math.random() * bloodVariety.length);
    // const randomBlood = bloodVariety[randomIndex];

    // randomBlood.style.display = 'block';

    // //ランダムで選ばれた画像にclass(show)を付与
    // randomBlood.classList.add('show'); 

    // // 0.5s後にclass(show)を外す
    // setTimeout(function(){
    //     randomBlood.classList.remove('show');
    // }, 500);


    //HPゲージの色変化
    if(currentHP <= 70 && currentHP > 40 ){
        hpBar.style.backgroundColor = 'orange';
    } else if(currentHP <= 40 && currentHP > 15){
        hpBar.style.backgroundColor = 'yellow';
    } else if(currentHP <= 15 ){
        hpBar.style.backgroundColor = 'red';
    };


    // currentHPが0以下になった時
    if(currentHP <= 0){
        currentHP = 0;
        hpBar.style.width = `0%`;

        // attack-btnを無効にする
        document.getElementById('attack-btn').disabled = true;

        // 結果画面を表示する
        result.style.display = 'block';

    };

});



// 
const startBtn = document.getElementById('start-btn');
const battleFaze = document.getElementById('battle-faze')

startBtn.addEventListener('click',function(){
    document.getElementById('top').style.display = 'none';
    battleFaze.style.display = 'flex';
});


// 
const returnTop = document.getElementById('return-top');

returnTop.addEventListener('click',function(){
    result.style.display = 'none';
    battleFaze.style.display = 'none';
    resetHP();  
    document.getElementById('top').style.display = 'block';
});