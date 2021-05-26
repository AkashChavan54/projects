"use strict";

const score0E1 = document.querySelector('#score--0');
const score1E1 = document.getElementById('score--1');
const diceEl = document.querySelector(".dice")
const diceNum = document.querySelector('.number-dice')

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let addingScore=0;
let activePlayer=0;
let xRandom;
let scores=[0,0];

const restart =function(){
    diceNum.textContent ="wait!"
    document.querySelector("body").style.background="lightorange"


}

const init = function () {
    scores = [0, 0];
    addingScore = 0;
    activePlayer = 0;
  
    score0E1.textContent = 0;
    score1E1.textContent = 0;
    document.getElementById("current--0").textContent = 0;
    document.getElementById("current--1").textContent = 0;
    diceEl.classList.add("hidden"); 
    document.querySelector("body").style.background="rgb(223, 176, 184)";

    player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  


}
init();

btnRoll.addEventListener('click', function () {
    diceEl.classList.remove("hidden");
    xRandom= Math.trunc(Math.random() * 6)+1;
    diceNum.textContent = xRandom;

    if (xRandom!==1) {
        addingScore+=xRandom;
        document.getElementById(`current--${activePlayer}`).textContent=addingScore;
        
    }
    else{
        addingScore=0;
        document.getElementById(`current--${activePlayer}`).textContent=addingScore;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        if (activePlayer===0){
            activePlayer=1;
        }
        else{
            activePlayer=0;
        }

    }
}
);

btnHold.addEventListener('click', function () {
    scores[activePlayer]=parseInt(scores[activePlayer])+parseInt(addingScore);
    document.querySelector(`#score--${activePlayer}`).textContent=scores[activePlayer];
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    if (scores[activePlayer]>99){
        document.querySelector("body").style.background="lightgreen";    
        diceNum.textContent =`${activePlayer+1} won!`;
        setTimeout(restart, 2000)
        setTimeout(init, 3500)
    }
  

    addingScore=0;
   
    document.getElementById(`current--${activePlayer}`).textContent=addingScore;

    if (activePlayer===0){
        activePlayer=1;
    }
    else{
        activePlayer=0;
    }
})
btnNew.addEventListener('click', function () {
    init()
})

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hiddenmodal');
  overlay.classList.remove('hiddenmodal');
};

const closeModal = function () {
  modal.classList.add('hiddenmodal');
  overlay.classList.add('hiddenmodal');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hiddenmodal')) {
    closeModal();
  }
});
