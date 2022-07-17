const p1 = {
  score: 0,
  button: document.querySelector("#player1"),
  display: document.querySelector("#display1"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#player2"),
  display: document.querySelector("#display2"),
};
const resetScore = document.querySelector("#reset");
const pointToWin = document.querySelector("#pointWinner");

let maxScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === maxScore) {
      isGameOver = true;
      // alert("YOU WIN p1");
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", () => {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScore(p2, p1);
});

pointToWin.addEventListener("change", function () {
  maxScore = parseInt(this.value);
  reset();
});

resetScore.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
