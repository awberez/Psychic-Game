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
    $("#guessesMade").addClass("filler");
    $("#guessesMade").text("(none)");
    computerChoice = randomLetter();
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
            		$("#guessWins").removeClass("filler");
            	}
            	resetGame();
            	break;
        	default:
            	userGuess = userGuess - 1;
            	if (userGuess != 0) {
            		$("#guessesLeft").text("Current Guesses (" + userGuess + " remaining):");
            		if (userGuess == 8) {
            			$("#guessesMade").text(String.fromCharCode(event.keyCode));
            			$("#guessesMade").removeClass("filler");
            		}
            		else {
            			$("#guessesMade").append(", " + String.fromCharCode(event.keyCode));
            		}
            	}
            	else {
            		userLoss = userLoss + 1;
            		$("#losses").text(userLoss);
            		resetGame();
            	}
            	break;
        }
    });
});