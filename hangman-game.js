/**************************************************************************/
// Global Variables
globalWordList = ['abruptly',	'absurd',	'abyss',	'affix',	'askew',	'avenue',	'awkward',	'axiom',	'azure',	'bagpipes',	'bandwagon',	'banjo',	'bayou',	'beekeeper',	'bikini',	'blitz',	'blizzard',	'boggle',	'bookworm',	'boxcar',	'boxful',	'buckaroo',	'buffalo',	'buffoon',	'buxom',	'buzzard',	'buzzing',	'buzzwords',	'caliph',	'cobweb',	'cockiness',	'croquet',	'crypt',	'curacao',	'cycle',	'daiquiri',	'dirndl',	'disavow',	'dizzying',	'duplex',	'dwarves',	'embezzle',	'equip',	'espionage',	'euouae',	'exodus',	'faking',	'fishhook',	'fixable',	'fjord',	'flapjack',	'flopping',	'fluffiness',	'flyby',	'foxglove',	'frazzled',	'frizzled',	'fuchsia',	'funny',	'gabby',	'galaxy',	'galvanize',	'gazebo',	'giaour',	'gizmo',	'glowworm',	'glyph',	'gnarly',	'gnostic',	'gossip',	'grogginess',	'haiku',	'haphazard',	'hyphen',	'iatrogenic',	'icebox',	'injury',	'ivory',	'ivy',	'jackpot',	'jaundice',	'jawbreaker',	'jaywalk',	'jazziest',	'jazzy',	'jelly',	'jigsaw',	'jinx',	'jiujitsu',	'jockey',	'jogging',	'joking',	'jovial',	'joyful',	'juicy',	'jukebox',	'jumbo',	'kayak',	'kazoo',	'keyhole',	'khaki',	'kilobyte',	'kiosk',	'kitsch',	'kiwifruit',	'klutz',	'knapsack',	'larynx',	'lengths',	'lucky',	'luxury',	'lymph',	'marquis',	'matrix',	'megahertz',	'microwave',	'mnemonic',	'mystify',	'naphtha',	'nightclub',	'nowadays',	'numbskull',	'nymph',	'onyx',	'ovary',	'oxidize',	'oxygen',	'pajama',	'peekaboo',	'phlegm',	'pixel',	'pizazz',	'pneumonia',	'polka',	'pshaw',	'psyche',	'puppy',	'puzzling',	'quartz',	'queue',	'quips',	'quixotic',	'quiz',	'quizzes',	'quorum',	'razzmatazz',	'rhubarb',	'rhythm',	'rickshaw',	'schnapps',	'scratch',	'shiv',	'snazzy',	'sphinx',	'spritz',	'squawk',	'staff',	'strength',	'strengths',	'stretch',	'stronghold',	'stymied',	'subway',	'swivel',	'syndrome',	'thriftless',	'thumbscrew',	'topaz',	'transcript',	'transgress',	'transplant',	'triphthong',	'twelfth',	'twelfths',	'unknown',	'unworthy',	'unzip',	'uptown',	'vaporize',	'vixen',	'vodka',	'voodoo',	'vortex',	'voyeurism',	'walkway',	'waltz',	'wave',	'wavy',	'waxy',	'wellspring',	'wheezy',	'whiskey',	'whizzing',	'whomever',	'wimpy',	'witchcraft',	'wizard',	'woozy',	'wristwatch',	'wyvern',	'xylophone',	'yachtsman',	'yippee',	'yoked',	'youthful',	'yummy',	'zephyr',	'zigzag',	'zigzagging',	'zilch',	'zipper',	'zodiac',	'zombie']
gameRunning = false;
gamePrompt = ""; // The current prompt, taking into account the guesses and the answer
gameAnswer = ""; // The answer being guessed
gameGuessed = []; // This is going to be an array of 26 spaces representing the 26 letters of the English alphabet

/**************************************************************************/
// Functions callable from the HTMLl pages

function pageLoaded(){
	// This is the function when the page is loaded
	gameRunning = false;
	gamePrompt = "";
	gameAnswer = "";
	gameGuessed = [];
	for(var i = 0; i < 26; i++){
		// Add a false value to the fact that none of the letters have been guessed
		gameGuessed.push(false);
	}
	refreshPage();
}

function toggleGame(varGameType){
	// This is called by the html page to start a new puzzle
	if(varGameType == 0){
		// Stop the running game
		gameRunning = false;
		gamePrompt = "";
		gameAnswer = "";
	}
	if(varGameType == 1){
		// Start a New Word Game
		gameRunning = true;
		gameAnswer = getRandomPrompt(1);
		console.log(gameAnswer); // DEBUG delete this after testing.
	}
	if(varGameType == 2){
		// Start new Phrase Game
		alert("Phrases are not ready yet!");
	}
	refreshPage();
}

function testSomething(){
	// test something
}

/**************************************************************************/
// Core Functions

function maskAnswer(){
	// This function masks the answer using the guesses as the mask
	var strMasked = "";
	for(var i = 0; i < gameAnswer.length; i++){
		//console.log(gameAnswer.charCodeAt(i))
		var charCode = gameAnswer.charCodeAt(i) - 64; // A = 1 etc.
		if((charCode > 0) && (charCode <= 27)){
			// The character is an alphabet. Now check if that character has been guessed
			if(!gameGuessed[charCode - 1]){
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

function getRandomPrompt(promptType){
	// This gets a random value as the orompt from the existing prompt set
	if(promptType == 1){
		// Pick from the Global Word List
		var rndNum = getRandomValue(1, globalWordList.length + 1);
		var strPrompt =  globalWordList[rndNum - 1]; // bring it to 0 base again
		return strPrompt.toUpperCase();
	}
}

function getRandomValue(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/**************************************************************************/
// UI Update Functions

function refreshPage(){
	// Considering the global variables, refresh the page
	// First show the right controls
	if(gameRunning){
		$("#pick-game-controls").hide();
		$("#play-game-controls").show();
		refreshGuessButtons();
	} else {
		$("#pick-game-controls").show();
		$("#play-game-controls").hide();
	}
	// Draw the Board after making sure that the mask is correctly applied
	maskAnswer();
	drawBoard();
}

function refreshGuessButtons(){
	// This function refreshes the guessed board
	var guessButtons = document.getElementById("guess-buttons");
	$(guessButtons).empty();
	for(var i = 0; i < 26; i++){
		// Each letter of the alphabet
		var btnElem = document.createElement("button");
		var classString;
		if(gameGuessed[i]){
			// Letter has been guessed
			classString = "btn btn-outline-danger btn-sm btn-spaced";
			$(btnElem).prop("disabled", true);
		} else {
			// Letter not yet guessed
			classString = "btn btn-outline-primary btn-sm btn-spaced";
		}
		$(btnElem).addClass(classString);
		$(btnElem).html(String.fromCharCode(65 + i));
		$(btnElem).data("guessed-char",(String.fromCharCode(65 + i)));
		$(btnElem).on("click", processGuess);
		$(guessButtons).append(btnElem);
	}
}

function processGuess(){
	// Process a guess
	var guessedChar = $(this).data("guessed-char");
	var guessedCharCode = guessedChar.charCodeAt(0);
	gameGuessed[guessedCharCode - 65] = true;
	// TODO: Here we are processing the UI impact of the selection, but we need to test for hits
	// if No hits, then we need to add a hangman element

	refreshPage();
	// TODO: we need to check if the masking has any more question marks
	// If no further ? then then everything is solved
}

function drawBoard(){
	// This function takes a string and draws the board
	var puzzleRow = document.getElementById("puzzle-row");
	var boardString = gamePrompt;
	$(puzzleRow).empty();
	for(var i=0; i<boardString.length; i++){
		var boardCharacter = boardString.charAt(i);
		var htmlCode = "";
		switch (boardCharacter){
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
		$(colDiv).addClass("col-sm-1").addClass("no-gutter");

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
