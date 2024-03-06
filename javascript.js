console.log("Welcome to Tic Tac Toe");

let music = new Audio("Resources/music.mp3");
let audioTurn = new Audio("Resources/ting.mp3");
let gameover = new Audio("Resources/gameover.mp3");
let isgameover = false;
let boxtext = document.getElementsByClassName("boxtext");
let wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn = "X";

// function for change the turn

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// function for check for win

let checkWin = () => {
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(`.info`).innerText =
        boxtext[e[0]].innerText + "won";
      isgameover = true;
      document
        .querySelector(`.imgbox`)
        .getElementsByTagName("img")[0].style.width = "200px";
      boxtext[e[0]].classList.add("bigwork");
      boxtext[e[1]].classList.add("bigwork");
      boxtext[e[2]].classList.add("bigwork");
      gameover.play();
    }
  });
};

// Game function

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(`.boxtext`);
  element.addEventListener(`click`, () => {
    if (boxtext.innerText === ``) {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// functon for reset
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(`.boxtext`);
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(`.imgbox`).getElementsByTagName("img")[0].style.width =
    "0px";
  wins.forEach((e) => {
    boxtext[e[0]].classList.remove("bigwork");
    boxtext[e[1]].classList.remove("bigwork");
    boxtext[e[2]].classList.remove("bigwork");
  });
});
