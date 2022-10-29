/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let palo = ["♣", "♠", "♥", "♦"];
  let numero = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "🃏",
    "👸",
    "🤴"
  ];

  let pinta = Math.floor(Math.random() * palo.length);
  let nu = Math.floor(Math.random() * numero.length);
  console.log(palo[pinta] + " " + numero[nu]);

  let carta = document.getElementsByClassName("palo");
  carta[0].innerHTML = palo[pinta];
  carta[1].innerHTML = palo[pinta];

  document.querySelector(".num").innerHTML = numero[nu];
};
