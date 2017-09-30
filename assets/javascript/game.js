$(function(){

	var userWin = 0
	var userLoss = 0
	var userGuess = 9
	var computerChoice = randomLetter();
	var lettersGuessed = []

	function randomLetter() {
  		min = Math.ceil(65);
  		max = Math.floor(90);
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function userLetters(arr, val) {
  		return arr.some(function(arrVal) {
    	return val === arrVal;
  		});
	}

	function resetGame() {
		userGuess = 9;
		lettersGuessed = []
    	$("#guessesLeft").text("Current Guesses (" + userGuess + " remaining)");
    	$("#guessesMade").addClass("filler");
    	$("#guessesMade").text("(none)");
    	computerChoice = randomLetter();
	}

	$(document).keyup(function(e) {
		var userChoice = String.fromCharCode(event.keyCode);
        if (event.keyCode >= 65 && event.keyCode <= 90 && userLetters(lettersGuessed, event.keyCode) == false) {
	        lettersGuessed.push(event.keyCode);
	        switch (e.which) {
	        	case computerChoice:
	          		userWin++;
	            	$("#wins").text(userWin);
	            	if (userWin == 1) {
	            		$("#guessWins").text(userChoice);
	            		$("#guessWins").removeClass("filler");
	            	}
	            	else {
	            		$("#guessWins").append(", " + userChoice);
	            	}
	            	resetGame();
	            	break;
	        	default:
	            	userGuess--;
	            	if (userGuess != 0) {
	            		$("#guessesLeft").text("Current Guesses (" + userGuess + " remaining)");
	            		if (userGuess == 8) {
	            			$("#guessesMade").text(userChoice);
	            			$("#guessesMade").removeClass("filler");
	            		}
	            		else {
	            			$("#guessesMade").append(", " + userChoice);
	            		}
	            	}
	            	else {
	            		userLoss++;
	            		$("#losses").text(userLoss);
	            		resetGame();
	            	}
	            	break;
	        }
    	}
    });
});