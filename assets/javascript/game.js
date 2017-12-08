document.onkeyup = function(e) {

	document.getElementById("intro").innerHTML = "";
    document.getElementById("logo").style.visibility = "visible";

	var answers = ["SOJOURNER", "DUBOIS", "DOUGLASS", "TUBMAN", "WHEATLEY"];

	answerCurrent = answers[Math.floor(Math.random() * answers.length)];
	console.log(answerCurrent);

	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
	
	// var isLetter = document.onkeyup(/^[a-zA-Z]/);
	// console.log(isLetter);


	var wins = 0;

	//give the user a fair number of guesses
	var numGuessRemain = 12;

	//define empty string for letters already guessed
	var lettersGuessed = "";

	//fill an array with answers[i] of blanks where the user's guess will "build"
	var userGuessArray = [];



	// // RANDOMLY PICK A BAND IN BAND ARRAY
	// // AND PUT IN VARIABLE;

	
	// var Band = BandArray[Math.floor(Math.random() * BandArray.length)];

	// console.log(Band);

	//  RANDOM FUNCTION THAT PICKS BAND;

	// FILL USERGUESSARRAY WITH NUM OF LETTERS IN BAND.LENGTH
	// (how to fill empty space???)

	// for (i = 0; i < Band.length; i++) {
	// 	userGuessArray[i] = "_"
	// };
	// console.log(userGuessArray);

	// var userGuess = e.key.toLowerCase();

	// function checkInput(userGuess, alphabet) {
	// 	for (i = 0; i < alphabet.length; i++) {
	// 		if (alphabet[i] === userGuess) {
	// 			return true;
	// 		} else {
	// 			return false;
	// 		}
	// 	}
	// }

	// function guessInArray(userGuess, Band) {
	// 	for (i = 0; i < Band.length; i++) {
	// 		if (Band[i] === userGuess) {
	// 			PRINT USERGUESS IN USERGUESSARRAY
	// 		}
	// 	}
	// }

}