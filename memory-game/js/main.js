let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: 	"images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"

},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//cards that count towards score, reset after every winning round
let cardsInPlay = [];

//cards that have been clicked
let flippedCards = [];

//set score to 0
let score = 0;


// cardsInPlay.push(cardOne);
// cardsInPlay.push(cardTwo);
// console.log(cardsInPlay);


function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		//increase score with every match
		score++;
		alert("You found a match! Your score is now " + score + ".");
		document.getElementById("points").textContent = score;
		//add another row of shuffled cards with every win
		createNewRow();
	} else {
		alert("Sorry, try again. Your score is still " + score + ".");	
	//clear cardsInPlay back to empty array
	cardsInPlay = [];
}

// function flipCard() {
let flipCard = function () {
	let cardID = this.getAttribute('data-id');
	flippedCards.push(cards[cardID]);
	console.log(flippedCards.length);
	cardsInPlay.push(cards[cardID].rank);
	this.setAttribute('src', cards[cardID].cardImage);
	this.setAttribute('class', 'flipped');
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
    	let cardElement = document.createElement('img');
    	cardElement.setAttribute('src', "images/back.png");
    	cardElement.setAttribute('data-id', i);
    	cardElement.addEventListener('click', flipCard);
    	document.getElementById('game-board').appendChild(cardElement);
	}
}

//a bit repetitive but it works, would like to eventually make this cleaner
function createNewRow() {
	let shuffledCards = shuffle(cards);
	for (let i = 0; i < shuffledCards.length; i++) {
    	let cardElement = document.createElement('img');
    	cardElement.setAttribute('src', "images/back.png");
    	cardElement.setAttribute('data-id', i);
    	cardElement.setAttribute('class', 'recent');
    	cardElement.addEventListener('click', flipCard);
    	document.getElementById('game-board').appendChild(cardElement);
    }
}

function hideInstructions() {
  let x = document.getElementById("pre-board");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  return array;
}

createBoard();

//modal functions
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("instructions");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// /* Background/Text Color Toggle */
// let mode = document.querySelector("color-mode");
// let darkMode = false;

// mode.addEventListener("click", function() {
// 	if(darkMode = true) {
// 		document.body.style.background = "white";
// 		document.body.style.color = "black";
// 		//reset boolean to false
// 		darkMode = false;
// 	} else {
// 		document.body.style.background = "black";
// 		document.body.style.color = "white";
// 		darkMode = true;
// 	}
// }  

