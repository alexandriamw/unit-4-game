// computer generates random number between 19 - 120
function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeScore(stone) {
  if (stone === "diamond") {
    totalScore = totalScore + diamondValue;
  }

  if (stone === "emerald") {
    totalScore = totalScore + emeraldValue;
  }

  if (stone === "lapis") {
    totalScore = totalScore + lapisValue;
  }

  if (stone === "redstone") {
    totalScore = totalScore + redstoneValue;
  }

  totalScoreEl.textContent = totalScore;

  if (randomNumber === totalScore) {
    result (true);
  } else if (totalScore > randomNumber) {
    result (false);
  }
}

function result(won) {
  if (won) {
    wins++;
    winsEl.textContent = wins;
  } else {
    losses++;
    lossesEl.textContent = losses;
  }

  reset();
}

function reset() {
  randomNumber = randomIntFromInterval(19, 120);
  randomNumberEl.textContent = randomNumber;
  diamondValue = randomIntFromInterval(1, 12);
  emeraldValue = randomIntFromInterval(1, 12);
  lapisValue = randomIntFromInterval(1, 12);
  redstoneValue = randomIntFromInterval(1, 12);
  totalScore = 0;
  totalScoreEl.textContent = totalScore;
}

// random number is displayed in random number id
let randomNumber = randomIntFromInterval(19, 120);
let randomNumberEl = document.getElementById("random-number");
randomNumberEl.textContent = randomNumber;

// each crystal generates a random number between 1 - 12
let diamondValue = randomIntFromInterval(1, 12);
let emeraldValue = randomIntFromInterval(1, 12);
let lapisValue = randomIntFromInterval(1, 12);
let redstoneValue = randomIntFromInterval(1, 12);

// record wins and losses
let wins = 0;
let winsEl = document.getElementById("wins");
winsEl.textContent = wins;

let losses = 0;
let lossesEl = document.getElementById("losses");
lossesEl.textContent = losses;

// total score starts at zero
let totalScore = 0;
let totalScoreEl = document.getElementById("total-score");
totalScoreEl.textContent = totalScore;

// computer waits for user to click on a crystal
document.querySelectorAll(".crystal").forEach(function (node) {
  node.addEventListener("click", function (event) {
    let stone = event.target.id;
    changeScore(stone);
  });
})

// reset: new random number displayed, new random numbers for crystals, total score back to zero
