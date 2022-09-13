const gameContainer = document.getElementById("game");
let card1 = null
let card2 = null
let clickable = true
let cardCount = 0


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.dataset.color = color
    newDiv.dataset.matched = false


    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(e) {
  // you can use event.target to see which element was clicked
  if (clickable === false) return
  if (e.target.matched === true) return

  if (card1 === null) {
    card1 = e.target
    card1.style.backgroundColor = card1.dataset.color
  }
  else {
    card2 = e.target
    card2.style.backgroundColor = card2.dataset.color
    clickable = false
    if (card1.dataset.color === card2.dataset.color) {
      card1.dataset.matched === true
      card2.dataset.matched === true
      card1 = null
      card2 = null
      clickable = true
      cardCount += 2
      if (cardCount === COLORS.length) {
        alert('You Win')
      }
    }
    else {
      setTimeout(
        () => {
          card1.style.backgroundColor = ''
          card2.style.backgroundColor = ''
          card1 = null
          card2 = null
          clickable = true
        }, 1000)
    }
  }









  console.log("you just clicked", e.target);



}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */