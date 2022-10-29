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

  let pinta = Math.floor(Math.random() * 4);
  let nu = Math.floor(Math.random() * 13);
  console.log(palo[pinta] + "" + numero[nu]);
};
