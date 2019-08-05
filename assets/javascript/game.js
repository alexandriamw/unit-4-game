// computer generates random number between 19 - 120
function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// random number is displayed in random number class

// each crystal generates a random number between 1 - 12

// total score starts at zero

// computer waits for user to click on a crystal
document.querySelectorAll(".crystal").forEach(function (node) {
  node.addEventListener("click", function () {});
})

// the value of crystal that is clicked on is added to total score

// if the total score is equal to the random number, you win
// win counter goes up by 1

// if the total score is greater than the random number, you lose
// lose counter goes up by 1

// reset: new random number displayed, new random numbers for crystals, total score back to zero