"use strict";
let secretNumber= Math.trunc(Math.random()*6);
let  score = 20;
let highscore = 0;
// console.log(document.querySelector(".guess").value =5);
// document.querySelector('.message').textContent="Too High Continue Guessing";
// document.querySelector('.score').textContent='12'; 
// document.querySelector('.highscore').textContent=19;
// document.querySelector('.message').textContent='Too Low Continue Guessing';

// document.querySelector('.number').textContent=secretNumber;

// EventListener 

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
 
};

document.querySelector('.check').addEventListener('click',function(){

let guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

if (!guess){
    
    document.querySelector('.message').textContent="No number!";
}
else if(guess === secretNumber){
    document.querySelector('.message').textContent='You won!';
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('body').style.backgroundColor="#60b347";
    if (score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent=highscore;
    }
}
else if(guess < secretNumber){
    if (score>1){
    document.querySelector('.message').textContent='Too Low!';
    score--;
    document.querySelector('.score').textContent=score
    }else{
        document.querySelector('.message').textContent='You lost the game';
        document.querySelector('.score').textContent=0;
        document.querySelector('body').style.backgroundColor='#ff0000';
    }
}
else if(guess > secretNumber){
    if (score>1){
    document.querySelector('.message').textContent='Too High!';
    score--;
    document.querySelector('.score').textContent=score
    }else{
    document.querySelector('.message').textContent='You lost the game';
    document.querySelector('.score').textContent=0;
    document.querySelector('body').style.backgroundColor='#ff0000';
    }
}

});

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.message').textContent='Start Guessing';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score=20;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#000';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
})
