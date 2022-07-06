const chinchilla = document.querySelector("#chinchilla");
const block = document.querySelector("#block");
const score = document.querySelector("#scoreboard");

function jump() {
  if (chinchilla.classList != "animate") chinchilla.classList.add("animate");
  setTimeout(function () {
    chinchilla.classList.remove("animate");
  }, 500);
}
const check = setInterval(function () {
  score.innerText++;
  const chinchillaTop = parseInt(
    window.getComputedStyle(chinchilla).getPropertyValue("top")
  );
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > 0 && chinchillaTop >= 130) {
    alert("You got a score of: " + score.innerText + "\nPlay Again");
    location.reload();
  }
}, 90);
