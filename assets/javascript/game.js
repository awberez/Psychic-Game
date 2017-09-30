$(function(){

var userWin = 0
var userLoss = 0
var userGuess = 9

function randomLetter() {
  min = Math.ceil(65);
  max = Math.floor(90);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function resetGame() {
	userGuess = 9;
    $("#guessesLeft").text("Current Guesses (" + userGuess + " remaining)");
    $("#guessesMade").addClass("filler");
    $("#guessesMade").text("(none)");
    computerChoice = randomLetter();
}

var computerChoice = randomLetter();

$(document).keyup(function(e) {
		var userChoice = String.fromCharCode(event.keyCode);
        if (event.keyCode >= 65 && event.keyCode <= 90) {
	        switch (e.which) {
	        	case computerChoice:
	          		userWin = userWin + 1;
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
	            	userGuess = userGuess - 1;
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
	            		userLoss = userLoss + 1;
	            		$("#losses").text(userLoss);
	            		resetGame();
	            	}
	            	break;
	        }
    	}
    });
});