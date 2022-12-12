"use strict";

let randomNumber = () => Math.trunc(Math.random() * 20 + 1);

let winner = randomNumber();
let score = 20;
let highscore = 0;

let displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

let displayGlobalMessage = (message) => {
  document.querySelector(".globalMessage").textContent = message;
};

let changeBackGround = (color) => {
  document.querySelector("body").style.backgroundColor = color;
};

document.querySelector(".check").addEventListener("click", (e) => {
  e.preventDefault();
  let guess = Number(document.querySelector(".guess").value);

  if (!guess || guess < 1 || guess > 20) {
    displayMessage("Please Enter Number Between 1 and 20");
    return;
  }

  if (winner === guess) {
    displayGlobalMessage("Suuuuuuuuuu!!!!!");
    document.querySelector(".number").textContent = guess;
    displayMessage("Your wenning the game.");
    changeBackGround("green");

    document.querySelector(".check").disabled = true;

    if (guess > highscore) {
      highscore = guess;
      document.querySelector(".highscore").textContent = highscore;
    }
    return;
  }

  if (winner !== guess) {
    if (score > 1) {
      score--;
      displayMessage(winner > guess ? "go up." : "go down.");
      document.querySelector(".score").textContent = score;
    } else {
      changeBackGround("red");
      displayGlobalMessage("!!!!!!lllLoooooossser!!!!!!");
      displayMessage("You Lost The Game");
      document.querySelector(".check").disabled = true;
    }
  }
});

document.querySelector(".again").addEventListener("click", (e) => {
  e.preventDefault();
  score = 20;
  winner = randomNumber();
  changeBackGround("#222");
  displayGlobalMessage("Guess My Number!");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;

  document.querySelector(".check").disabled = false;

  return;
});
