var p1 = "Player 1";
var p2 = "Player 2";
var p1w = 0;
var p2w = 0;

document.querySelector("h1").style.marginBottom = "40px";
function roll() {
  var roll1 = Math.floor(Math.random() * 6) + 1;
  var roll2 = Math.floor(Math.random() * 6) + 1;
  document
    .getElementsByClassName("img1")[0]
    .setAttribute("src", "./images/dice" + roll1 + ".png");
  document
    .getElementsByClassName("img2")[0]
    .setAttribute("src", "./images/dice" + roll2 + ".png");

  if (roll1 > roll2) {
    document.querySelector("h1").innerHTML = "🚩 " + p1 + " Wins!!";
    p1w++;
  } else if (roll2 > roll1) {
    document.querySelector("h1").innerHTML = p2 + " Wins!! 🚩";
    p2w++;
  } else {
    document.querySelector("h1").innerHTML = " It's a 👔";
  }
  document.getElementById("r").innerHTML = p1w + " To " + p2w;
  document.querySelector("h1").style.marginBottom = "30px";
}

function rename() {
  p1 = prompt("Enter Player 1's Name: ");
  p2 = prompt("Enter Player 2's Name: ");
  document.getElementById("p1id").innerHTML = p1;
  document.getElementById("p2id").innerHTML = p2;
}

function reload() {
  location.reload();
}
