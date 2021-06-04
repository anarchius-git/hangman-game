/**************************************************************************/
// Global Variables
// Actual puzzles and words moved to hangman-list.js. Should be included in the HTML file
gameRunning = false;
gameFinished = false;
revealSpeed = 100;
gamePrompt = ""; // The current prompt, taking into account the guesses and the answer
gameAnswer = ""; // The answer being guessed
gameGuessed = []; // This is going to be an array of 26 spaces representing the 26 letters of the English alphabet
guessMissCount = 0;
guessMissMax = 8;

/**************************************************************************/
// Functions callable from the HTML pages

function pageLoaded() {
	// This is the function when the page is loaded
	gameRunning = false;
	gameFinished = false;
	gamePrompt = "";
	gameAnswer = "";
	gameGuessed = [];
	guessMissCount = 0;
	for (var i = 0; i < 26; i++) {
		// Add a false value to the fact that none of the letters have been guessed
		gameGuessed.push(false);
	}
	refreshPage();
}

function toggleGame(varGameType) {
	// This is called by the html page to start a new puzzle or end the existing game.
	switch (varGameType) {
		case 0: // End the current game. Make sure that the data is reset
			gameRunning = false;
			gameFinished = false;
			gamePrompt = "";
			gameAnswer = "";
			gameGuessed = [];
			guessMissCount = 0;
			// Clear out any visual alerts
			$(".alert").fadeOut();
			$("#btn-end-new-game").text("End Game");
			break;
		case 1:
			gameRunning = true;
			gameAnswer = getRandomPrompt(1);
			guessMissMax = 8;
			break;
		case 2:
			gameRunning = true;
			gameAnswer = getRandomPrompt(2);
			guessMissMax = 5;
			break;
		case 3:
			gameRunning = true;
			gameAnswer = getRandomPrompt(3);
			guessMissMax = 5;
			break;
		case 4:
			gameRunning = true;
			gameAnswer = getRandomPrompt(4);
			guessMissMax = 5;
			break;

	}
	//console.log(gameAnswer); // DEBUG delete this after testing.
	refreshPage();
}

function showAlert() {
	//$("#haha").removeClass("hide")
	$("#lost-alert").fadeIn();
	$("#won-alert").fadeIn();
	//$("#haha").alert();
}

/**************************************************************************/
// Core Functions

function getRandomPrompt(promptType) {
	// This gets a random value as the orompt from the existing prompt set
	var promptArray;
	switch (promptType) {
		case 1:
			promptArray = globalWordList;
			break;
		case 2:
			promptArray = globalPhraseList;
			break;
		case 3:
			promptArray = globalThingList;
			break;
		case 4:
			promptArray = globalPlaceList;
			break;
	}
	// Pick from the corresponding Global List
	var rndNum = getRandomValue(1, promptArray.length + 1);
	var strPrompt = promptArray[rndNum - 1]; // bring it to 0 base again
	return strPrompt.toUpperCase();
}

function maskAnswer() {
	// This function masks the answer using the guesses as the mask
	var strMasked = "";
	for (var i = 0; i < gameAnswer.length; i++) {
		//console.log(gameAnswer.charCodeAt(i))
		var charCode = gameAnswer.charCodeAt(i) - 64; // A = 1 etc.
		if ((charCode > 0) && (charCode <= 27)) {
			// The character is an alphabet. Now check if that character has been guessed
			if (!gameGuessed[charCode - 1]) {
				// Not guessed; so mask it
				strMasked = strMasked.concat("?");//  .charAt(i) = "?";
			} else {
				// Guessed, so just get the character as is
				strMasked = strMasked.concat(gameAnswer.charAt(i));
			}
		} else {
			// Bring the character in as is
			strMasked = strMasked.concat(gameAnswer.charAt(i));
		}
	}
	gamePrompt = strMasked;
	return strMasked;
}

function processGuess() {
	// Process a guess
	var guessedChar = $(this).data("guessed-char");
	var guessedCharCode = guessedChar.charCodeAt(0);
	gameGuessed[guessedCharCode - 65] = true;

	// This section tests if there is a hit in the word; and if there is no hit, updates guessMissCount
	var letterFound = false;
	for (var i = 0; i < gameAnswer.length; i++) {
		if (guessedCharCode == gameAnswer.charCodeAt(i)) {
			letterFound = true;
			break;
		}
	}
	if (!letterFound) {
		guessMissCount++;
	}
	if (guessMissCount == guessMissMax) {
		gameFinished = true;
		// Do something intersting in the UI
		$("#btn-end-new-game").text("Start New Game");
		$("#lost-alert").fadeIn();
		revealSpeed = 500;
	}

	maskAnswer();
	checkForWin();
	refreshPage();

	if (gameFinished) {
		revealAnswer();
	}
}

function checkForWin() {
	// This function checks whether the game has been won. Will be checked after every Guess is processed
	var gameWon = true;
	for (var i = 0; i < gamePrompt.length; i++) {
		if (gamePrompt.charAt(i) == "?") {
			gameWon = false;
		}
	}

	if (gameWon) {
		gameFinished = true;
		// Do something interesting in the UI showing the user won the game
		$("#btn-end-new-game").text("Start New Game");
		$("#won-alert").fadeIn();
		revealSpeed = 10;
		revealAnswer();
	}
}

function getRandomValue(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/**************************************************************************/
// UI Update Functions

function refreshPage() {
	// Considering the global variables, refresh the page
	// First show the right controls
	if (gameRunning) {
		$("#pick-game-controls").hide();
		$("#play-game-controls").show();
		redrawGuessButtons();
	} else {
		$("#pick-game-controls").show();
		$("#play-game-controls").hide();
	}
	// Draw the Board and Hangman after making sure that the mask is correctly applied
	maskAnswer();
	redrawGuessBoard();
	redrawMissBoard();
}

function redrawGuessButtons() {
	// This function refreshes the guessed buttons
	var guessButtons = document.getElementById("guess-buttons");
	$(guessButtons).empty();
	for (var i = 0; i < 26; i++) {
		// Each letter of the alphabet
		var btnElem = document.createElement("button");
		var classString;
		if (gameGuessed[i]) {
			// Letter has been guessed
			classString = "btn btn-outline-danger btn-sm btn-spaced";
			$(btnElem).prop("disabled", true);
		} else {
			// Letter not yet guessed
			classString = "btn btn-outline-primary btn-sm btn-spaced";
		}
		if (gameFinished) {
			// Every button is disabled
			$(btnElem).prop("disabled", true);
		}
		$(btnElem).addClass(classString);
		$(btnElem).html(String.fromCharCode(65 + i));
		$(btnElem).data("guessed-char", (String.fromCharCode(65 + i)));
		$(btnElem).on("click", processGuess);
		$(guessButtons).append(btnElem);
	}
}

function redrawGuessBoard() {
	// This function takes a string and draws the board
	var puzzleRow = document.getElementById("puzzle-row");
	var boardString = gamePrompt;
	$(puzzleRow).empty();
	for (var i = 0; i < boardString.length; i++) {
		var boardCharacter = boardString.charAt(i);
		var htmlCode = "";
		switch (boardCharacter) {
			case '?':
				htmlCode = "&block;";
				break;
			case ' ':
				htmlCode = "_";
				break;
			default:
				htmlCode = boardCharacter;
		}
		var colDiv = document.createElement("div");
		$(colDiv).addClass("col-sm-1").addClass("no-gutter").addClass("tile-parent");

		var cardDiv = document.createElement("div");
		$(cardDiv).addClass("card").addClass("tile").addClass("text-center");

		var letterH1 = document.createElement("h1");
		$(letterH1).html(htmlCode);

		// Add this to the main tree
		$(cardDiv).append(letterH1);
		$(colDiv).append(cardDiv);
		$(puzzleRow).append(colDiv);
	}
}

function redrawMissBoard() {
	// This function updates the hangman status, depending on the number guessMissCount and guessMissMax
	// First, make everyone unlit
	var divHangmanMiss = document.getElementById("hangman-misses");
	$(divHangmanMiss).empty();
	for (var i = 0; i < guessMissMax; i++) {
		var errorDiv = document.createElement("div");
		$(errorDiv).addClass("col-md-1 hangman-sol no-gutter");
		if (i < guessMissCount) {
			$(errorDiv).addClass("lit-sol");
		}
		$(errorDiv).attr("id", "sol-" + (i + 1));
		$(errorDiv).html("&osol;");
		$(divHangmanMiss).append(errorDiv);
	}
}

function revealAnswer() {
	// This is the final call to reveal the answer. Called either with the win or with the loss.
	// Hide the parent div
	$("#puzzle-row").hide();
	// Redraw the Answer
	gamePrompt = gameAnswer;
	redrawGuessBoard();
	// Hide the Cards
	$(".tile-parent").hide();
	// Show the parent Div
	$("#puzzle-row").show();

	// Display the cards, one-by-one
	// https://www.paulirish.com/2008/sequentially-chain-your-callbacks-in-jquery-two-ways/
	// Had to add in the "card-parent" class to have a set of peers so that this can work with the code below.
	(function showAnswer(elem) {
		elem.fadeIn(revealSpeed, function () {
			$(this).next().length && showAnswer($(this).next());
		});
	})($(".tile-parent:first"));
}
