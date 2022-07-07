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
  startGame();
}
function breakNeck() {
  chinchilla.classList.remove("animate");
}
function jump() {
  if (chinchilla.classList != "animate") chinchilla.classList.add("animate");
  setTimeout(breakNeck, 500);
}

let check = setInterval(function () {
  score.innerText++;
  let chinchillaTop = parseInt(
    window.getComputedStyle(chinchilla).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (blockLeft < 20 && blockLeft > 0 && chinchillaTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("You got a score of: " + score.innerText + "!");
    location.reload();
  }
}, 100);
