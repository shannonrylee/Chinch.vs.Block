const chinchilla = document.querySelector("#chinchilla");
const block = document.querySelector("#block");
const score = document.querySelector("#scoreboard");

function breakNeck() {
  chinchilla.classList.remove("animate");
}
function jump() {
  if (chinchilla.classList != "animate") chinchilla.classList.add("animate");
  setTimeout(breakNeck, 500);
}

var check = setInterval(function () {
  score.innerText++;
  const chinchillaTop = parseInt(
    window.getComputedStyle(chinchilla).getPropertyValue("top")
  );
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 0) {
    block.style.display = "none";
  } else {
    block.style.display = "";
  }
  if (blockLeft < 20 && blockLeft > 0 && chinchillaTop > 130) {
    alert("You got a score of: " + score.innerText + "\nPlay Again");
    location.reload();
  }
}, 100);
