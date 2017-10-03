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
		$(".letter-button").removeAttr("disabled");
		userGuess = 9;
		lettersGuessed = []
    	$("#guessesLeft").text("Current Guesses (" + userGuess + " remaining)");
    	$("#guessesMade").addClass("filler");
    	$("#guessesMade").text("(none)");
    	computerChoice = randomLetter();
	}

    $(".btn-link").on("click", function() {
    	$("#mobileKeyboard").html('<div class="container"><div class="row"><div class="col-sm-4 col-sm-offset-4"><div class="panel panel-default"><div id="keyboard" class="panel-body keyboard-panel"></div></div></div></div></div>');
    	var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    	for(i=0; i<letters.length; i++){
	        var letterBtn = $("<button>");
	        $(letterBtn).addClass("letter-button letter");
	        $(letterBtn).attr("data-letter", i + 65);
	        $(letterBtn).text(letters[i]);
	        $("#keyboard").append(letterBtn);
      	}
      	location.href = "#";
		location.href = "#mobileKeyboard";
    });

    $("#mobileKeyboard").on("click", ".letter-button", function() {
    	$(this).attr("disabled", "disabled")
		var e = new Event("keyup");
		e.keyCode = $(this).attr("data-letter")
		e.which = e.keyCode;
		document.dispatchEvent(e);
    });

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





















