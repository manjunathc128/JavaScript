'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
// score0El.textContent='5';
// console.log(score0El.textContent)
const diceEl = document.querySelector('.dice');

const btnnew =  document.querySelector('.btn--new');

const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

const symbol = document.querySelector('.hint-symbol');
// console.log(score1El)
// console.log(score1El.textContent)

// diceEl.classList.add('hidden')
// let currentscore= 0;
// let activeplayer =0;
// let score =[0, 0];
// let playing =true;
// roll dice functionality 

let playing, score, currentscore, activeplayer;

let init = function () {

    playing = true;  //local scope 
    score=[0,0];
    currentscore=0;
    activeplayer=0;

    score0El.textContent=0;
    score1El.textContent=0;

    current0El.textContent=0;
    current1El.textContent=0;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.remove('hidden')
}

init();

let switchplayer = function () {
    document.getElementById(`current--${activeplayer}`).textContent=0;
    currentscore=0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

btnroll.addEventListener('click',function(){
if (playing){
    let dice=Math.trunc(Math.random()*6)+1;
    if (dice !== 1){
        console.log(dice);
        diceEl.src=`dice-${dice}.png`;
        
        currentscore += dice
        document.getElementById(`current--${activeplayer}`) .textContent=currentscore;
    }else{
        console.log(dice);
        switchplayer()
    }    
}
}) ;
    

btnhold.addEventListener('click',function(){
    if(playing){
        score[activeplayer] += currentscore;
        document.getElementById(`score--${activeplayer}`).textContent=score[`${activeplayer}`]
        
        if (score[activeplayer] >= 30){
            playing = false;
            diceEl.classList.add('hidden')
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`player--${activeplayer}`).classList.remove('player--active');
            
            
        } else{
            switchplayer();
        };
          
    }
});

btnnew.addEventListener('click',init);

// let hint = function () {
//    document.querySelector('.hintinfo').classList.toggle('hidden');
// }
// console.log(symbol);

// for(let i=0; i < symbol.length; i++ ){
//     symbol[i].addEventListener('click',function(){
//         document.querySelector('.hintinfo').classList.toggle('hidden');
//         symbol[i].classList.toggle('hidden');
//     });
// }

symbol.addEventListener('click',function(){
    document.querySelector('.hintinfo').classList.toggle('hidden');

});






