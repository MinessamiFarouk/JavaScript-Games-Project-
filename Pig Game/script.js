"use strict";

const playerEl0 = document.querySelector(".player--0");
const playerEl1 = document.querySelector(".player--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const resetTheGame = function () {
  diceEl.classList.add("hidden");
  document.getElementById("score--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;
  document.getElementById("name--0").textContent = "Player One";
  document.getElementById("name--1").textContent = "Player Two";

  playerEl0.classList.add("player--active");
  playerEl0.classList.remove("player--winner");
  playerEl1.classList.remove("player--winner");
  playerEl1.classList.remove("player--active");
};

resetTheGame();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerEl0.classList.toggle("player--active");
  playerEl1.classList.toggle("player--active");
};

const rollingDices = () => {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `./img/dice-${dice}.png`;
    diceEl.classList.remove("hidden");

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

const holdingDices = () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      let name = document.getElementById(`name--${activePlayer}`).textContent;
      document.getElementById(
        `name--${activePlayer}`
      ).textContent = `${name} win the game.`;
      diceEl.classList.add("hidden");
      playing = false;
    } else {
      switchPlayer();
    }
  }
};

btnRoll.addEventListener("click", rollingDices);
btnHold.addEventListener("click", holdingDices);
btnNew.addEventListener("click", resetTheGame);
