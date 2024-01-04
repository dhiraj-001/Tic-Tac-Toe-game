console.log("Welcome to the Tic Tac Toe Game");
let music = new Audio("music.mp3");
let AudioTurn = new Audio("ting.mp3");
let Gameover = new Audio("music.m4a");
let turn = "X";
let isgameover = false;

// Mute button
function enableMute() {
  if (document.querySelector(".mute").innerText === "Mute") {
    AudioTurn.muted = true;
    Gameover.muted = true;
    document.querySelector(".mute").innerHTML = "Unmute";
  } else {
    AudioTurn.muted = false;
    Gameover.muted = false;
    document.querySelector(".mute").innerHTML = "Mute";
  }
}

//function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//Functioon to check for win

const MediaQuery = window.matchMedia("(max-width:950px)"); // Media query
const checkWin = () => {
  let boxtext = document.getElementsByClassName("BoxText");
  // For window smaller than 920px
  if (MediaQuery.matches) {
    let wins = [
      [0, 1, 2, 10, 9.5, 0],
      [3, 4, 5, 10, 29.5, 0],
      [6, 7, 8, 10, 49.5, 0],
      [0, 3, 6, -10.3, 29, 90],
      [1, 4, 7, 10, 29, 90],
      [2, 5, 8, 30, 29, 90],
      [0, 4, 8, 9, 29, 225],
      [2, 4, 6, 10, 30, 136],
    ];

    wins.forEach((e) => {
      if (
        boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
        boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
        boxtext[e[0]].innerText !== ""
      ) {
        document.querySelector(".info").innerText =
          boxtext[e[0]].innerText + "  Won";
        isgameover = true;
        document
          .querySelector(".Celebration")
          .getElementsByTagName("img")[0].style.height = "200px";
        Gameover.play();
        document.querySelector(
          ".line"
        ).style.transform = ` translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        document.querySelector(".line").style.width = "40vw";
      }
    });
  }
  // For bigger window
  else {
    let wins = [
      [0, 1, 2, 5, 5, 0],
      [3, 4, 5, 5, 15, 0],
      [6, 7, 8, 5, 25, 0],
      [0, 3, 6, -5, 15, 90],
      [1, 4, 7, 5, 15, 90],
      [2, 5, 8, 15, 15, 90],
      [0, 4, 8, 5, 15, 45],
      [2, 4, 6, 5, 15, 135],
    ];

    wins.forEach((e) => {
      if (
        boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
        boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
        boxtext[e[0]].innerText !== ""
      ) {
        document.querySelector(".info").innerText =
          boxtext[e[0]].innerText + "  Won";
        isgameover = true;
        document
          .querySelector(".Celebration")
          .getElementsByTagName("img")[0].style.height = "200px";
        Gameover.play();
        document.querySelector(
          ".line"
        ).style.transform = ` translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        document.querySelector(".line").style.width = "20vw";
      }
    });
  }
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".BoxText");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      AudioTurn.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// Add onclick listener to reset button
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".BoxText");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  Gameover.pause();
  isgameover = false;
  document.getElementsByClassName("info")[0].innerText = "";
  document
    .querySelector(".Celebration")
    .getElementsByTagName("img")[0].style.height = "0px";
  document.querySelector(".line").style.width = "0vw";
});
