const chinchilla = document.querySelector("#chinchilla");
const block = document.querySelector(".block");
const score = document.querySelector("#scoreboard");
let start = document.querySelector("#start");
let audio = document.querySelector("#audio");

game.style.display = "none";
score.style.display = "none";

function startGame() {
  start.style.display = "none";
  game.style.display = "";
  score.style.display = "";

  start();
}
function breakNeck() {
  chinchilla.classList.remove("animate");
}
function jump() {
  if (chinchilla.classList != "animate") chinchilla.classList.add("animate");
  setTimeout(breakNeck, 500);
}

var check = setInterval(function () {
  score.innerText++;
  var chinchillaTop = parseInt(
    window.getComputedStyle(chinchilla).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 0) {
    block.style.display = "none";
  } else {
    block.style.display = "";
  }
  if (blockLeft < 20 && blockLeft > 0 && chinchillaTop >= 130) {
    alert("You got a score of: " + score.innerText + "!");
    location.reload();
  }
}, 100);
