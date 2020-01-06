// console.log("Up and running!");

let cardOne = "queen";
let cardTwo = "king";

console.log("User flipped " + cardOne);

// let cardThree;
// let cardFour;

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
// let cardOne;

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log(cardsInPlay);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
	} else {
		alert("Sorry, try again.")
	}
}
