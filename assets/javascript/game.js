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
    $("#guessesLeft").text("Current Guesses (" + userGuess + " remaining):");
    $("#guessesMade").text("(none)");
}

var computerChoice = randomLetter();

$(document).keyup(function(e) {
        switch (e.which) {
        	case computerChoice:
          		userWin = userWin + 1;
            	$("#wins").text(userWin);
            	if ($("#wins").attr("value") == 1) {
            		$("#guessWins").append(", " + String.fromCharCode(event.keyCode));
            	}
            	else {
            		$("#wins").attr("value", 1);
            		$("#guessWins").text(String.fromCharCode(event.keyCode));
            	}
            	resetGame();
            	computerChoice = randomLetter();
            	break;
        	default:
            	userGuess = userGuess - 1;
            	if (userGuess != 0) {
            		if (userGuess == 1) {
            			$("#guessesLeft").text("Current Guesses (" + userGuess + " remaining):");
            		}
            		else {
            			$("#guessesLeft").text("Current Guesses (" + userGuess + " remaining):");
            		}
            		if (userGuess == 8) {
            			$("#guessesMade").text(String.fromCharCode(event.keyCode));
            		}
            		else {
            			$("#guessesMade").append(", " + String.fromCharCode(event.keyCode));
            		}
            	}
            	else {
            		userLoss = userLoss + 1;
            		$("#losses").text(userLoss);
            		resetGame();
            		computerChoice = randomLetter();
            	}
            	break;
        }
    });

});