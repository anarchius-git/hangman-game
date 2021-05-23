/**************************************************************************/
// Global Variables
globalWordList = ['abruptly',	'absurd',	'abyss',	'affix',	'askew',	'avenue',	'awkward',	'axiom',	'azure',	'bagpipes',	'bandwagon',	'banjo',	'bayou',	'beekeeper',	'bikini',	'blitz',	'blizzard',	'boggle',	'bookworm',	'boxcar',	'boxful',	'buckaroo',	'buffalo',	'buffoon',	'buxom',	'buzzard',	'buzzing',	'buzzwords',	'caliph',	'cobweb',	'cockiness',	'croquet',	'crypt',	'curacao',	'cycle',	'daiquiri',	'dirndl',	'disavow',	'dizzying',	'duplex',	'dwarves',	'embezzle',	'equip',	'espionage',	'euouae',	'exodus',	'faking',	'fishhook',	'fixable',	'fjord',	'flapjack',	'flopping',	'fluffiness',	'flyby',	'foxglove',	'frazzled',	'frizzled',	'fuchsia',	'funny',	'gabby',	'galaxy',	'galvanize',	'gazebo',	'giaour',	'gizmo',	'glowworm',	'glyph',	'gnarly',	'gnostic',	'gossip',	'grogginess',	'haiku',	'haphazard',	'hyphen',	'iatrogenic',	'icebox',	'injury',	'ivory',	'ivy',	'jackpot',	'jaundice',	'jawbreaker',	'jaywalk',	'jazziest',	'jazzy',	'jelly',	'jigsaw',	'jinx',	'jiujitsu',	'jockey',	'jogging',	'joking',	'jovial',	'joyful',	'juicy',	'jukebox',	'jumbo',	'kayak',	'kazoo',	'keyhole',	'khaki',	'kilobyte',	'kiosk',	'kitsch',	'kiwifruit',	'klutz',	'knapsack',	'larynx',	'lengths',	'lucky',	'luxury',	'lymph',	'marquis',	'matrix',	'megahertz',	'microwave',	'mnemonic',	'mystify',	'naphtha',	'nightclub',	'nowadays',	'numbskull',	'nymph',	'onyx',	'ovary',	'oxidize',	'oxygen',	'pajama',	'peekaboo',	'phlegm',	'pixel',	'pizazz',	'pneumonia',	'polka',	'pshaw',	'psyche',	'puppy',	'puzzling',	'quartz',	'queue',	'quips',	'quixotic',	'quiz',	'quizzes',	'quorum',	'razzmatazz',	'rhubarb',	'rhythm',	'rickshaw',	'schnapps',	'scratch',	'shiv',	'snazzy',	'sphinx',	'spritz',	'squawk',	'staff',	'strength',	'strengths',	'stretch',	'stronghold',	'stymied',	'subway',	'swivel',	'syndrome',	'thriftless',	'thumbscrew',	'topaz',	'transcript',	'transgress',	'transplant',	'triphthong',	'twelfth',	'twelfths',	'unknown',	'unworthy',	'unzip',	'uptown',	'vaporize',	'vixen',	'vodka',	'voodoo',	'vortex',	'voyeurism',	'walkway',	'waltz',	'wave',	'wavy',	'waxy',	'wellspring',	'wheezy',	'whiskey',	'whizzing',	'whomever',	'wimpy',	'witchcraft',	'wizard',	'woozy',	'wristwatch',	'wyvern',	'xylophone',	'yachtsman',	'yippee',	'yoked',	'youthful',	'yummy',	'zephyr',	'zigzag',	'zigzagging',	'zilch',	'zipper',	'zodiac',	'zombie'];
globalPhraseList = ["AN EYE FOR AN EYE AND A TOOTH FOR A TOOTH",	"CLOSE COVER BEFORE STRIKING",	"STAGE-STRUCK",	"BIGGER AND BETTER",	"CLINICALLY TESTED",	"MOST LIKELY TO SUCCEED",	"THE WHOLE BALL OF WAX",	"DYED-IN-THE-WOOL",	"RANK AND FILE",	"ACTIONS SPEAK LOUDER THAN WORDS",	"WISH YOU WERE HERE",	"NOTHING VENTURED NOTHING GAINED",	"TAKE A CHANCE",	"BATTING A THOUSAND",	"VICTIM OF CIRCUMSTANCE",	"PUT THAT IN YOUR PIPE AND SMOKE IT",	"THE WAY TO A MAN'S HEART IS THROUGH HIS STOMACH",	"HANDLE WITH CARE",	"DISCIPLINARY ACTION",	"TO BE CONTINUED",	"STRAIGHTEN UP AND FLY RIGHT",	"CUT TO THE QUICK",	"SHORT-TEMPERED",	"TONIGHT'S THE NIGHT",	"A SIGHT FOR SORE EYES",	"PUTTING THE CART BEFORE THE HORSE",	"STILL WATER RUNS DEEP",	"BIRDS OF A FEATHER FLOCK TOGETHER",	"LEVEL-HEADED",	"REMEMBER THE ALAMO",	"SLIP INTO SOMETHING MORE COMFORTABLE",	"ALL YOU CAN EAT",	"ONE SIZE FITS ALL",	"MILLION-DOLLAR SMILE",	"HISTORY IN THE MAKING",	"RISE AND SHINE",	"OUT OF THE ORDINARY",	"HEARTFELT THANKS",	"SUDDEN DEATH OVERTIME",	"ONE HAND WASHES THE OTHER",	"PAR FOR THE COURSE",	"ANTS IN YOUR PANTS",	"COME HELL OR HIGH WATER",	"BITE THE BULLET",	"KEEP OUT OF REACH OF CHILDREN",	"FAIR AND SQUARE",	"FINDERS KEEPERS",	"A MARRIAGE MADE IN HEAVEN",	"KNOCK KNOCK WHO'S THERE",	"THE BEST OF BOTH WORLDS",	"GRASPING AT STRAWS",	"ALL SYSTEMS GO",	"PUT YOUR BEST FOOT FORWARD",	"WINE AND DINE",	"AT THE STROKE OF MIDNIGHT",	"YOU ONLY LIVE ONCE",	"GOING IN THE OPPOSITE DIRECTION",	"GETTING AWAY WITH MURDER",	"JUMP FOR JOY",	"NARROW-MINDED",	"GOING BY THE BOOK",	"ROME WASN'T BUILT IN A DAY",	"SO CLEAN YOU COULD EAT OFF THE FLOOR",	"DOUBLE EXPOSURE",	"SINGING A DIFFERENT TUNE",	"COME AND GET IT",	"A STEP IN THE RIGHT DIRECTION",	"MATTER-OF-FACT",	"READY AIM FIRE",	"FROM SOUP TO NUTS",	"QUICK RECOVERY",	"SOUNDS FISHY TO ME",	"MOVING RIGHT ALONG",	"WIPE THAT SMILE OFF YOUR FACE",	"SAVED BY THE BELL",	"BEYOND COMPREHENSION",	"GETTING THERE IS HALF THE FUN",	"LOCK STOCK AND BARREL",	"COAST TO COAST",	"STANDARD OF LIVING",	"MONEY IN THE BANK",	"TAKEN TO THE CLEANERS",	"BEFORE AND AFTER",	"PUSSYFOOTING AROUND",	"UP THE CREEK WITHOUT A PADDLE",	"DRIVE A HARD BARGAIN",	"ACCORDING TO HOYLE",	"THE REAL MC COY",	"BEATING YOUR HEAD AGAINST A WALL",	"DON'T FLATTER YOURSELF",	"WHAT YOU SEE IS WHAT YOU GET",	"HELP WANTED",	"LET BYGONES BE BYGONES",	"LAST BUT NOT LEAST",	"SPLIT PERSONALITY",	"THE MORNING AFTER",	"ALL DECKED OUT IN YOUR SUNDAY BEST",	"IT RUNS IN THE FAMILY",	"NO COMMENT",	"DOWN THE BACKSTRETCH",	"FANCY MEETING YOU HERE",	"EVERY SECOND COUNTS",	"LUCK OF THE DRAW",	"THERE'S MORE WHERE THAT CAME FROM",	"DON'T MAKE A MOUNTAIN OUT OF A MOLEHILL",	"YOUR GOOSE IS COOKED",	"YOU TOOK THE WORDS RIGHT OUT OF MY MOUTH",	"ANIMAL VEGETABLE OR MINERAL",	"BUSINESS AS USUAL",	"SCUTTLEBUTT",	"YOU HAVE THE RIGHT TO REMAIN SILENT",	"PUTTING TWO AND TWO TOGETHER",	"LEAVE WELL ENOUGH ALONE",	"BURNING THE MIDNIGHT OIL",	"CHECK YOUR LOCAL LISTINGS",	"DON'T LET THE BEDBUGS BITE",	"SIDE BY SIDE",	"CATCH-AS-CATCH-CAN",	"GENERATION GAP",	"KEEP UP THE GOOD WORK",	"DINNER IS SERVED",	"FIGMENT OF YOUR IMAGINATION",	"NO PARKING",	"MASCULINE AND FEMININE",	"SWORN TO SECRECY",	"GENTLEMAN'S AGREEMENT",	"SPEED CHECKED BY RADAR",	"IN MORE WAYS THAN ONE",	"FAMOUS LAST WORDS",	"MAKING A FEDERAL CASE OUT OF IT",	"ZERO POPULATION GROWTH",	"PLEASE PRINT CLEARLY",	"STAY TUNED",	"CAN'T LIVE WITHOUT IT",	"THE PATTER OF LITTLE FEET",	"SOUTHERN HOSPITALITY",	"NOTHING TO WRITE HOME ABOUT",	"GOODY GOODY GUMDROPS",	"YOU MUST BE READING MY MIND",	"READY OR NOT HERE I COME",	"HAIR-RAISING EXPERIENCE",	"PUTTING WORDS IN MY MOUTH",	"OVERNIGHT SUCCESS",	"WAS IT SOMETHING I SAID",	"DUE TO CIRCUMSTANCES BEYOND MY CONTROL",	"NOTHING TO SNEEZE AT",	"BLESSED EVENT",	"STANDING UP FOR YOUR RIGHTS",	"HIT THE NAIL ON THE HEAD",	"LET THE CAT OUT OF THE BAG",	"CASE DISMISSED",	"WORDS OF WISDOM",	"WHAT YOU DON'T KNOW WON'T HURT YOU",	"SPLIT MY SIDES LAUGHING",	"BEHIND CLOSED DOORS",	"CRYSTAL CLEAR",	"BEING IN THE RIGHT PLACE AT THE RIGHT TIME",	"OFF THE TOP OF MY HEAD",	"WILD-GOOSE CHASE",	"NOW YOU SEE IT NOW YOU DON'T",	"TELL ME EXACTLY WHAT HAPPENED",	"IDENTITY CRISIS",	"YOU'RE MAKING ME NERVOUS",	"HAVING THE TIME OF MY LIFE",	"A CHIP OFF THE OLD BLOCK",	"THE HAPPIEST DAY OF MY LIFE",	"ROOM TEMPERATURE",	"CONVENIENTLY LOCATED",	"SPLIT SECOND",	"IT WAS FUN WHILE IT LASTED",	"SENSE OF HUMOR",	"GETTING OFF TO A GOOD START",	"FIT TO BE TIED",	"IT COULDN'T HAPPEN TO A NICER PERSON",	"DELUSIONS OF GRANDEUR",	"TELL IT TO THE MARINES",	"WATCHING YOUR WAISTLINE",	"ONE TO A CUSTOMER",	"I'LL BE THERE WITH BELLS ON",	"GET IT OFF YOUR CHEST",	"JUMP ON THE BANDWAGON",	"ROOM AND BOARD",	"MONEY DOESN'T GROW ON TREES",	"BACK TO THE DRAWING BOARD",	"STRAIGHT FROM THE HORSE'S MOUTH",	"SPEAK NOW OR FOREVER HOLD YOUR PEACE",	"THE LUCK OF THE IRISH",	"NINE TIMES OUT OF TEN",	"SPRING FEVER",	"AN UNEXPECTED PLEASURE",	"SAY UNCLE",	"UNDER CONSTRUCTION",	"MAKING A SPECTACLE OF YOURSELF",	"THREE-RING CIRCUS",	"BEATING AROUND THE BUSH",	"RUNNING OUT OF TIME",	"THINK BEFORE YOU SPEAK",	"POP THE QUESTION",	"CUT OFF YOUR NOSE TO SPITE YOUR FACE",	"OUT TO LUNCH",	"IF LOOKS COULD KILL",	"NEITHER HERE NOR THERE",	"SWEPT OFF MY FEET",	"LIKE FATHER LIKE SON",	"BONE OF CONTENTION",	"MILES PER GALLON",	"EATS LIKE A BIRD",	"POETIC JUSTICE",	"IN ONE EAR AND OUT THE OTHER",	"GOING AGAINST THE GRAIN",	"THERE'S SAFETY IN NUMBERS",	"PURCHASING POWER",	"YOU DON'T KNOW WHAT YOU'RE MISSING",	"SEARCHING HIGH AND LOW",	"THE BRAINS OF THE OPERATION",	"NOT JUST ANOTHER PRETTY FACE",	"GROWING OLD GRACEFULLY",	"SAY PLEASE",	"AS THE CROW FLIES",	"NOT A MOMENT TOO SOON",	"JUST WHAT THE DOCTOR ORDERED",	"AT THE TONE THE TIME WILL BE",	"LOOKS CAN BE DECEIVING",	"NEVER MIND",	"WILD HORSES COULDN'T DRAG ME",	"BARKING UP THE WRONG TREE",	"WORKS LIKE A CHARM",	"STRICTLY ON THE UP AND UP",	"OODLES OF MONEY",	"PICK A CARD ANY CARD",	"HAVEN'T WE MET SOMEPLACE BEFORE",	"ALL TALK AND NO ACTION",	"MOVING AT A SNAIL'S PACE",	"VOID WHERE PROHIBITED BY LAW",	"KEEPING UP WITH THE JONESES",	"SOLID AS A ROCK",	"YOU CAN'T FOOL MOTHER NATURE",	"CLEAN AS A WHISTLE",	"OLDIES BUT GOODIES",	"ON A SILVER PLATTER",	"THERE'S MORE TO THIS THAN MEETS THE EYE",	"BUSY AS A BEE",	"GETTING THE MESSAGE ACROSS",	"TICKLED PINK",	"GOING OFF THE DEEP END",	"FROM TOP TO BOTTOM",	"SOONER OR LATER",	"ADDING INSULT TO INJURY",	"BOUND AND DETERMINED",	"HUMAN NATURE",	"BRINGING HOME THE BACON",	"KEEP A STIFF UPPER LIP",	"CHANCE OF A LIFETIME",	"BRINGING HOME THE BACON",	"DON'T BE A STRANGER",	"TWO WRONGS DON'T MAKE A RIGHT",	"GETTING MORE THAN YOU BARGAINED FOR",	"HELP YOURSELF",	"THUNDERSTRUCK",	"GETTING YOUR FOOT IN THE DOOR",	"DON'T LOOK NOW BUT",	"A PASSING FANCY",	"TAKE IT OR LEAVE IT",	"ROBBING THE CRADLE",	"FLATTERY WILL GET YOU NOWHERE",	"DUE PROCESS OF LAW",	"PLAYING SECOND FIDDLE",	"WHAT'S HOT AND WHAT'S NOT",	"OUT OF COMMISSION",	"EXTRA EXTRA READ ALL ABOUT IT",	"CLEAR AS A BELL",	"A FAMILY TRADITION",	"LEAVES NOTHING TO THE IMAGINATION",	"PRETTY PLEASE WITH SUGAR ON TOP",	"GOING FROM BAD TO WORSE",	"HOLY MACKEREL",	"SUCCESS OR FAILURE",	"FLEX YOUR MUSCLES",	"BLEARY-EYED",	"HAVE YOU FLIPPED YOUR LID",	"MAKING OUT LIKE A BANDIT",	"I SMELL A RAT",	"I'LL NEVER SAY NEVER AGAIN",	"IT'S SO QUIET YOU CAN HEAR A PIN DROP",	"CONSENSUS OF OPINION",	"AT MY WIT'S END",	"I CAN'T HEAR MYSELF THINK",	"AND BABY MAKES THREE",	"THAT'S THE OLDEST TRICK IN THE BOOK",	"YOU NEVER KNOW UNLESS YOU TRY",	"PRESSED FOR TIME",	"I REST MY CASE",	"FLYING BY THE SEAT OF YOUR PANTS",	"YOU'RE PUTTING ME ON",	"HIGH STANDARDS",	"ONCE MORE WITH FEELING",	"AS AMERICAN AS APPLE PIE",	"SECOND TO NONE",	"STARK RAVING MAD",	"FUNNY YOU SHOULD ASK",	"IS THERE A DOCTOR IN THE HOUSE",	"TAKE THE PLUNGE",	"I CAN'T EAT ANOTHER BITE",	"RULE OF THUMB",	"PLEASE DON'T FEED THE ANIMALS",	"A NIGHT TO REMEMBER",	"NAUGHTY BUT NICE",	"THE HONEYMOON IS OVER",	"TOTAL RECALL",	"LIKE A KID IN A CANDY STORE",	"WHY DID THE CHICKEN CROSS THE ROAD",	"OPENING NIGHT JITTERS",	"NIPPED IN THE BUD",	"DAMNED IF YOU DO AND DAMNED IF YOU DON'T",	"OUT OF REACH",	"PIE IN THE SKY",	"DON'T BE A WET BLANKET",	"IT'S ALL THE SAME TO ME",	"CASH IN YOUR CHIPS",	"TO BORROW AN OLD CLICHE",	"IN THE PUBLIC DOMAIN",	"THAT'S THE BEAUTY OF IT",	"BACK TO SQUARE ONE",	"ACTING ON IMPULSE",	"DON'T BITE THE HAND THAT FEEDS YOU",	"A DREAM COME TRUE",	"CAN YOU TOP THAT",	"BY WORD OF MOUTH",	"RACKING MY BRAINS",	"TRAVEL FAR AND WIDE",	"IT SLIPPED MY MIND",	"THE FLIP SIDE OF THE COIN",	"A BOLT FROM THE BLUE",	"LET YOUR CONSCIENCE BE YOUR GUIDE",	"MAY I HAVE A RECEIPT PLEASE",	"KNOCK 'EM DEAD",	"THE WAVE OF THE FUTURE",	"BURSTING WITH ENERGY",	"POLLY WANT A CRACKER",	"YOU SHOULD BE ASHAMED OF YOURSELF",	"OUT OF STEP",	"SAVING THE BEST FOR LAST",	"MAD AS A HATTER",	"ARE YOU THINKING WHAT I'M THINKING",	"I FEEL LIKE A NEW MAN",	"SPARE ME THE DETAILS",	"YOU MADE YOUR BED NOW LIE IN IT",	"UNDER A SPELL",	"MONEY'S NO OBJECT",	"I COULDN'T HAVE SAID BETTER MYSELF",	"WATER AND OIL DON'T MIX",	"KNEE-DEEP IN SNOW",	"YOU'RE ONLY YOUNG ONCE",	"OFFICE POLITICS",	"HIDDEN FROM VIEW",	"WHAT ARE YOUR SYMPTOMS",	"TALKING A MILE A MINUTE",	"LET'S GET DOWN TO BUSINESS",	"SUGAR-COATED",	"DON'T MAKE SNAP JUDGMENTS",	"ALL THINGS COME TO HIM WHO WAITS",	"OUT OF BREATH",	"BETTER THAN EVER",	"HAVE A CHILLING EFFECT",	"COUNT ON ME",	"CUT OFF WITHOUT A PENNY",	"DON'T SAY SOMETHING YOU'LL REGRET",	"SLICE OF LIFE",	"TURNING THE WORLD UPSIDE DOWN",	"HERE THERE AND EVERYWHERE",	"FOLLOW IN HIS FATHER'S FOOTSTEPS",	"UP TO NO GOOD"];
globalThingList = ["CONSTRUCTIVE CRITICISM",	"BIRTH CERTIFICATE",	"FALSE EYELASHES",	"VITAL STATISTICS",	"MULLIGAN STEW",	"NIELSEN RATINGS",	"DAILY HOROSCOPE",	"REGISTERED LETTER",	"SWISS BANK ACCOUNT",	"TIDDLYWINKS",	"GARLIC BREAD",	"MYSTERY NOVEL",	"BUBBLE BATH",	"ELECTRIC LIGHT BULB",	"EVICTION NOTICE",	"SOUTHERN-FRIED CHICKEN",	"SALT AND PEPPER",	"SYMPATHY CARD",	"JIGSAW PUZZLE",	"JAPANESE KIMONO",	"ELECTRIC BLANKET",	"VENDING MACHINE",	"COUNTERFEIT MONEY",	"COOKIES CAKES AND PIES",	"HORSERADISH",	"TABLE OF CONTENTS",	"BACON AND EGGS",	"MASON-DIXON LINE",	"BACHELOR'S BUTTON",	"IDAHO POTATOES",	"LITTLE WHITE LIE",	"GINGER ALE",	"WOLF WHISTLE",	"FIRST NAME",	"ASTROLOGICAL FORECAST",	"SLEEPWALKING",	"SLEDGE HAMMER",	"ROTARY CLUB",	"SCHOOL OF FISH",	"MENTAL TELEPATHY",	"CHOCOLATE CHIP COOKIES",	"FALSE TEETH",	"CORNED BEEF AND CABBAGE",	"AIRLINE TICKET",	"MARRIAGE LICENSE",	"SWISS STEAK",	"GRIZZLY BEAR",	"VOCAL CORDS",	"RAILROAD TRACKS",	"WRIT OF HABEAS CORPUS",	"LEMON CHIFFON PIE",	"ESCAPE HATCH",	"SHORT STORY",	"COUNTRY-AND-WESTERN MUSIC",	"SPARE TIRE",	"RULES AND REGULATIONS",	"CONTINENTAL BREAKFAST",	"STATE FLOWER",	"PHONOGRAPH RECORD",	"HOME-COOKED MEAL",	"RACQUETBALL",	"GRAPEFRUIT SECTIONS",	"EXTENSION CORD",	"ZEBRA STRIPES",	"BOTTLENECK",	"VISITING HOURS",	"POT ROAST",	"CAT GOT YOUR TONGUE",	"NAVY-BEAN SOUP",	"NEEDLEPOINT",	"JUGGLING ACT",	"CINNAMON TOAST",	"FRUIT COCKTAIL",	"FOREIGN AID",	"MEDAL OF HONOR",	"MEXICAN JUMPING BEANS",	"ALLIGATOR",	"SUNDAY NEWSPAPER",	"DIAL TONE",	"WALDORF SALAD",	"SHIRTTAIL",	"STRAWBERRY JAM",	"CHERRY PIE",	"FRANKFURTERS AND SAUERKRAUT",	"RHINESTONE",	"HUMAN RIGHTS",	"SITTING ON TOP OF A GOLD MINE",	"FEDERAL RESERVE SYSTEM",	"BUTTERMILK BISCUITS",	"ELECTRIC SHOCK",	"PHYSICAL EXAMINATION",	"TONGUE TWISTER",	"RUSH-HOUR TRAFFIC",	"EGGS SUNNY-SIDE UP",	"WARNING SIGNAL",	"APPLES AND ORANGES",	"BACKWARD GLANCE",	"TRENCH COAT",	"CREAM OF MUSHROOM SOUP",	"DADDY LONGLEGS",	"BICARBONATE OF SODA",	"PRIME RIB",	"BUCKING BRONCO",	"OATMEAL COOKIES",	"FIRE ESCAPE",	"ARTIFICIAL TURF",	"GUMBALL MACHINE",	"DIVINITY FUDGE",	"SCREWDRIVER",	"DINNER RESERVATIONS",	"SELF-ADDRESSED-STAMPED ENVELOPE",	"LASAGNA",	"BUSINESS TRIP",	"NEW YEAR'S RESOLUTION",	"RED LIGHT",	"LONG-STEMMED ROSES",	"CREDIT CARDS",	"FILET MIGNON",	"ANGEL FOOD CAKE",	"SOCCER BALL",	"COMPUTER SOFTWARE",	"MEAT AND POTATOES",	"LEMON MERINGUE PIE",	"DOLLARS AND CENTS",	"DEVIL'S FOOD CAKE",	"MOUNTAIN LION",	"MORSE CODE",	"SMALL CRAFT WARNING",	"RETURN ADDRESS",	"THE NATIONAL ANTHEM",	"TEAM OF HORSES",	"PEANUT BUTTER AND JELLY SANDWICH",	"EXTENSION PHONE",	"THEME SONG",	"WEDDING GOWN",	"ACADEMY AWARD NOMINATION",	"HEART-WARMING STORY",	"PEER PRESSURE",	"FOUR-POSTER BED",	"OPERATING TABLE",	"MUSICAL CHAIRS",	"SPEED LIMIT",	"SWEAT SHIRT",	"CHOCOLATE PUDDING",	"PEACE OFFERING",	"LITTLE LEAGUE BASEBALL",	"WET PAINT",	"BAR OF SOAP",	"INDEX FINGER",	"FEDERAL DEPOSIT INSURANCE CORPORATION",	"MINUTE STEAK",	"CLUB SANDWICH",	"SWIMMING TRUNKS",	"CATERPILLAR",	"MEAT BALL SANDWICH",	"IDIOSYNCRASY",	"TICKET STUB",	"RICE PUDDING",	"POTBELLY STOVE",	"POPCORN POPPER",	"NATURAL RESOURCE",	"TABLE TENNIS",	"ROLLS-ROYCE",	"LOBSTER TAIL",	"MOTHER'S MAIDEN NAME",	"COVER CHARGE",	"OCEAN LINER",	"VITAMINS AND MINERALS",	"STETHOSCOPE",	"SEVERANCE PAY",	"COLONY OF ANTS",	"CONSOLATION PRIZE",	"WINDSHIELD WIPERS",	"TEARS OF JOY",	"KEY RING",	"PURCHASE ORDER NUMBER",	"HIGH-PITCHED VOICE",	"STICK OF DYNAMITE",	"MORRIS THE CAT",	"MOZZARELLA CHEESE",	"SUNKEN TREASURE",	"SIDE EFFECTS",	"STRETCH LIMOUSINE",	"RACK OF LAMB",	"HOURGLASS FIGURE",	"A PECK ON THE CHEEK",	"HAILSTONES THE SIZE OF GOLF BALLS",	"CIVIL DEFENSE",	"MISSISSIPPI RIVER",	"SOUR GRAPES",	"THE LIBERTY BELL",	"RUBBER BAND",	"INTERNATIONAL DATE LINE",	"WEATHER VANE",	"IRISH COFFEE",	"ADVERTISING AGENCY",	"QUICKSAND",	"LIE DETECTOR",	"MATCH POINT",	"GUILTY CONSCIENCE",	"LETTERS TO THE EDITOR",	"A PIZZA TO GO WITH EVERYTHING ON IT",	"NEST EGG",	"EXPERIMENT",	"FOOT-LONG HOT DOG",	"LONG-DRAWN-OUT PROCEDURE",	"CONFERENCE CALL",	"OSTRICH FEATHERS",	"CLASS RING",	"SCULPTURE",	"EDITORIAL PAGE",	"CANDELABRA",	"ELEVATOR SHOES",	"BRASS DOOR KNOCKER",	"FRONTAL SYSTEM",	"STOLEN PROPERTY",	"ORDER BLANK",	"ARCTIC CIRCLE",	"BEAUTY BRAINS AND TALENT",	"ROLLING STONE MAGAZINE",	"TIME-HONORED CUSTOM",	"THE ROAR OF THE LION",	"LIFE'S SIMPLE PLEASURES",	"RECOMMENDED DAILY ALLOWANCE",	"PERSONALIZED LICENSE PLATES",	"CHILDREN'S LULLABY",	"RECREATIONAL VEHICLE",	"LOWEST COMMON DENOMINATOR",	"PERFECT ATTENDANCE",	"DETECTIVE AGENCY",	"THUMB-SUCKING",	"MOUTH-TO-MOUTH RESUSCITATION",	"STEAMSHIP",	"BITE-SIZE PIECES",	"FRONT PAGE NEWS",	"SATELLITE DISH",	"RUBBING ALCOHOL",	"UNACCEPTABLE BEHAVIOR",	"SUBWAY TOKEN",	"SCENTIFIC RESEARCH",	"AIRCRAFT CARRIER",	"SKINTIGHT BLUE JEANS",	"BALL-POINT PEN",	"EMPLOYMENT AGENCY",	"PLATE GLASS WINDOW",	"FOREIGN CURRENCY",	"SKI SEASON",	"DRUGS MOST COMMONLY DISPENSED BY DOCTORS",	"STORMY RELATIONSHIP",	"PRIVATE PLANE",	"PROOF OF PURCHASE",	"MASHED POTATOES AND GRAVY",	"JET AIRCRAFT",	"DECAFFINATED COFFEE",	"CHOCOLATE MOUSSE",	"THIMBLE",	"QUESTION-AND-ANSWER PERIOD",	"HURRICANE WARNING",	"CABLE TELEVISION",	"OWNER'S MANUAL",	"JOGGING SHOES",	"OIL CHANGE AND TUNE-UP"];
globalPlaceList = ["SEAFOOD RESTAURANT",	"THE PEOPLE'S REPUBLIC OF CHINA",	"PHILADELPHIA PENNSYLVANIA",	"MASONIC TEMPLE",	"PROVIDENCE RHODE ISLAND",	"DETROIT MICHIGAN",	"BARGAIN BASEMENT",	"GULF OF MEXICO",	"BOWLING ALLEY",	"NEW ORLEANS LOUISIANA",	"DUBLIN IRELAND",	"NEW ENGLAND STATES",	"NIAGARA FALLS",	"THE PAINTED DESERT",	"INDIAN RESERVATION",	"HOLY ROMAN EMPIRE",	"WESTERN HEMISPHERE",	"LIMA PERU",	"LAKE SUPERIOR",	"NORTH AMERICA",	"LINCOLN NEBRASKA",	"NASHVILLE TENNESSEE",	"FLEA MARKET",	"MADISON SQUARE GARDEN",	"SAN JUAN PUERTO RICO",	"CLEVELAND OHIO",	"BOSTON MASSACHUSETTS",	"MEMPHIS TENNESSEE",	"MILWAUKEE WISCONSIN",	"SEA OF GALILEE",	"MINNEAPOLIS-ST PAUL",	"SALT LAKE CITY UTAH",	"EIGHTEEN-HOLE GOLF COURSE",	"HOT SPRINGS ARKANSAS",	"DENVER COLORADO",	"METROPOLITAN MUSEUM OF ART",	"PEARL HARBOR",	"FORT KNOX",	"PIZZA PARLOR",	"ORLANDO FLORIDA",	"KEY WEST FLORIDA",	"WICHITA KANSAS",	"BOTANICAL GARDEN",	"CONSTRUCTION SITE",	"CARMEL CALIFORNIA",	"BUFFALO NEW YORK",	"BARCELONA SPAIN",	"HOLLYWOOD FLORIDA",	"FISHERMAN'S WHARF",	"MISSION CONTROL CENTER",	"FIVE-AND-TEN-CENT STORE",	"JFK INTERNATIONAL AIRPORT",	"SWAMPLAND IN FLORIDA",	"GAS STATION",	"MOVIE THEATER",	"EMERGENCY EXIT",	"WISHING WELL",	"THIRD WORLD COUNTRIES",	"BILLINGS MONTANA",	"AMERICAN STOCK EXCHANGE",	"HOUSING DEVELOPMENT",	"CAIRO EGYPT",	"TOKYO JAPAN",	"MICHIGAN STATE UNIVERSITY",	"IVY LEAGUE COLLEGE"];
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

function pageLoaded(){
	// This is the function when the page is loaded
	gameRunning = false;
	gameFinished = false;
	gamePrompt = "";
	gameAnswer = "";
	gameGuessed = [];
	guessMissCount = 0;
	for(var i = 0; i < 26; i++){
		// Add a false value to the fact that none of the letters have been guessed
		gameGuessed.push(false);
	}
	refreshPage();
}

function toggleGame(varGameType){
	// This is called by the html page to start a new puzzle or end the existing game.
	switch(varGameType){
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

function showAlert(){
	//$("#haha").removeClass("hide")
	$("#lost-alert").fadeIn();
	$("#won-alert").fadeIn();
	//$("#haha").alert();
}

/**************************************************************************/
// Core Functions

function getRandomPrompt(promptType){
	// This gets a random value as the orompt from the existing prompt set
	var promptArray;
	switch(promptType){
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
	var strPrompt =  promptArray[rndNum - 1]; // bring it to 0 base again
	return strPrompt.toUpperCase();
}

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

function processGuess(){
	// Process a guess
	var guessedChar = $(this).data("guessed-char");
	var guessedCharCode = guessedChar.charCodeAt(0);
	gameGuessed[guessedCharCode - 65] = true;

	// This section tests if there is a hit in the word; and if there is no hit, updates guessMissCount
	var letterFound = false;
	for(var i = 0; i < gameAnswer.length; i++){
		if(guessedCharCode == gameAnswer.charCodeAt(i)){
			letterFound = true;
			break;
		}
	}
	if(!letterFound){
		guessMissCount++;
	}
	if(guessMissCount == guessMissMax){
		gameFinished = true;
		// Do something intersting in the UI
		$("#btn-end-new-game").text("Start New Game");
		$("#lost-alert").fadeIn();
		revealSpeed = 500;
	}

	maskAnswer();
	checkForWin();
	refreshPage();

	if(gameFinished){
		revealAnswer();
	}
}

function checkForWin(){
	// This function checks whether the game has been won. Will be checked after every Guess is processed
	var gameWon = true;
	for(var i = 0; i < gamePrompt.length; i++){
		if(gamePrompt.charAt(i) == "?"){
			gameWon = false;
		}
	}

	if(gameWon){
		gameFinished = true;
		// Do something interesting in the UI showing the user won the game
		$("#btn-end-new-game").text("Start New Game");
		$("#won-alert").fadeIn();
		revealSpeed = 10;
		revealAnswer();
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

function redrawGuessButtons(){
	// This function refreshes the guessed buttons
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
		if(gameFinished){
			// Every button is disabled
			$(btnElem).prop("disabled", true);
		}
		$(btnElem).addClass(classString);
		$(btnElem).html(String.fromCharCode(65 + i));
		$(btnElem).data("guessed-char",(String.fromCharCode(65 + i)));
		$(btnElem).on("click", processGuess);
		$(guessButtons).append(btnElem);
	}
}

function redrawGuessBoard(){
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

function redrawMissBoard(){
	// This function updates the hangman status, depending on the number guessMissCount and guessMissMax
	// First, make everyone unlit
	var divHangmanMiss = document.getElementById("hangman-misses");
	$(divHangmanMiss).empty();
	for(var i=0; i < guessMissMax; i++){
		var errorDiv = document.createElement("div");
		$(errorDiv).addClass("col-md-1 hangman-sol no-gutter");
		if(i < guessMissCount){
			$(errorDiv).addClass("lit-sol");
		}
		$(errorDiv).attr("id","sol-" +(i + 1));
		$(errorDiv).html("&osol;");
		$(divHangmanMiss).append(errorDiv);
	}
}

function revealAnswer(){
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
	(function showAnswer(elem){
		elem.fadeIn(revealSpeed,function(){
		  $(this).next().length && showAnswer($(this).next());
		});
	  })( $(".tile-parent:first") );
}
