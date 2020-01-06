// console.log("Up and running!");

// let cardOne = "queen";
// let cardTwo = "king";

// console.log("User flipped " + cardOne);

// let cardThree;
// let cardFour;

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

// cardsInPlay.push(cardOne);
// cardsInPlay.push(cardTwo);

// console.log(cardsInPlay);

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!")
	} else {
		console.log("Sorry, try again.")
	}	
}

function flipCard(cardID) {
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	// if (cardsInPlay.length === 2) {}
		checkForMatch();
	}

flipCard(0);
flipCard(2);

// let cardOne;

// cardsInPlay.push(cardOne);
// cardsInPlay.push(cardTwo);

// console.log(cardsInPlay);

// if (cardsInPlay.length === 2) {
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
// 		alert("You found a match!")
// 	} else {
// 		alert("Sorry, try again.")
// 	}
// }
