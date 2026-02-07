const words = [
    // Technology
    { word: "PROGRAMMING", category: "Technology" },
    { word: "COMPUTER", category: "Technology" },
    { word: "INTERNET", category: "Technology" },
    { word: "ALGORITHM", category: "Technology" },
    { word: "DATABASE", category: "Technology" },
    { word: "ENCRYPTION", category: "Technology" },
    { word: "FIREWALL", category: "Technology" },
    { word: "KEYBOARD", category: "Technology" },
    { word: "MONITOR", category: "Technology" },
    { word: "SOFTWARE", category: "Technology" },
    { word: "HARDWARE", category: "Technology" },
    { word: "NETWORK", category: "Technology" },
    { word: "PROTOCOL", category: "Technology" },
    { word: "SERVER", category: "Technology" },
    { word: "BROWSER", category: "Technology" },
    { word: "PASSWORD", category: "Technology" },
    { word: "USB", category: "Technology" },
    { word: "BLUETOOTH", category: "Technology" },
    { word: "WIFI", category: "Technology" },
    { word: "SMARTPHONE", category: "Technology" },
    
    // Animals
    { word: "ELEPHANT", category: "Animals" },
    { word: "OCTOPUS", category: "Animals" },
    { word: "BUTTERFLY", category: "Animals" },
    { word: "GIRAFFE", category: "Animals" },
    { word: "PENGUIN", category: "Animals" },
    { word: "KANGAROO", category: "Animals" },
    { word: "DOLPHIN", category: "Animals" },
    { word: "CHEETAH", category: "Animals" },
    { word: "FLAMINGO", category: "Animals" },
    { word: "HIPPOPOTAMUS", category: "Animals" },
    { word: "RHINOCEROS", category: "Animals" },
    { word: "TIGER", category: "Animals" },
    { word: "ZEBRA", category: "Animals" },
    { word: "KOALA", category: "Animals" },
    { word: "ARMADILLO", category: "Animals" },
    { word: "JAGUAR", category: "Animals" },
    { word: "LEOPARD", category: "Animals" },
    { word: "ORANGUTAN", category: "Animals" },
    { word: "PORCUPINE", category: "Animals" },
    { word: "RACCOON", category: "Animals" },
    
    // Music
    { word: "GUITAR", category: "Music" },
    { word: "PIANO", category: "Music" },
    { word: "VIOLIN", category: "Music" },
    { word: "DRUMS", category: "Music" },
    { word: "TRUMPET", category: "Music" },
    { word: "SAXOPHONE", category: "Music" },
    { word: "CLARINET", category: "Music" },
    { word: "FLUTE", category: "Music" },
    { word: "SYMPHONY", category: "Music" },
    { word: "MELODY", category: "Music" },
    { word: "HARMONY", category: "Music" },
    { word: "RHYTHM", category: "Music" },
    { word: "CHORUS", category: "Music" },
    { word: "CONDUCTOR", category: "Music" },
    { word: "ORCHESTRA", category: "Music" },
    { word: "BALLET", category: "Music" },
    { word: "OPERA", category: "Music" },
    { word: "JAZZ", category: "Music" },
    { word: "BLUES", category: "Music" },
    { word: "ROCK", category: "Music" },
    
    // Geography
    { word: "MOUNTAIN", category: "Geography" },
    { word: "OCEAN", category: "Geography" },
    { word: "DESERT", category: "Geography" },
    { word: "FOREST", category: "Geography" },
    { word: "VALLEY", category: "Geography" },
    { word: "CANYON", category: "Geography" },
    { word: "GLACIER", category: "Geography" },
    { word: "VOLCANO", category: "Geography" },
    { word: "ISLAND", category: "Geography" },
    { word: "PENINSULA", category: "Geography" },
    { word: "CONTINENT", category: "Geography" },
    { word: "EQUATOR", category: "Geography" },
    { word: "MERIDIAN", category: "Geography" },
    { word: "ARCHIPELAGO", category: "Geography" },
    { word: "DELTA", category: "Geography" },
    { word: "FJORD", category: "Geography" },
    { word: "PLATEAU", category: "Geography" },
    { word: "TUNDRA", category: "Geography" },
    { word: "SAVANNA", category: "Geography" },
    { word: "RAINFOREST", category: "Geography" },
    
    // Food
    { word: "CHOCOLATE", category: "Food" },
    { word: "PIZZA", category: "Food" },
    { word: "SUSHI", category: "Food" },
    { word: "PASTA", category: "Food" },
    { word: "BURGER", category: "Food" },
    { word: "TACO", category: "Food" },
    { word: "CROISSANT", category: "Food" },
    { word: "WAFFLE", category: "Food" },
    { word: "SANDWICH", category: "Food" },
    { word: "NOODLE", category: "Food" },
    { word: "CURRY", category: "Food" },
    { word: "STIRFRY", category: "Food" },
    { word: "OMELETTE", category: "Food" },
    { word: "PANCAKE", category: "Food" },
    { word: "DONUT", category: "Food" },
    { word: "ICECREAM", category: "Food" },
    { word: "CHEESECAKE", category: "Food" },
    { word: "BROCOLLI", category: "Food" },
    { word: "STRAWBERRY", category: "Food" },
    { word: "PINEAPPLE", category: "Food" },
    
    // History
    { word: "PYRAMID", category: "History" },
    { word: "DINOSAUR", category: "History" },
    { word: "COLOSSEUM", category: "History" },
    { word: "CASTLE", category: "History" },
    { word: "CAVALRY", category: "History" },
    { word: "EMPIRE", category: "History" },
    { word: "REVOLUTION", category: "History" },
    { word: "RENAISSANCE", category: "History" },
    { word: "INDUSTRIAL", category: "History" },
    { word: "MEDIEVAL", category: "History" },
    { word: "ANCIENT", category: "History" },
    { word: "ARCHAEOLOGY", category: "History" },
    { word: "ARTIFACT", category: "History" },
    { word: "MONARCHY", category: "History" },
    { word: "PHARAOH", category: "History" },
    { word: "KNIGHT", category: "History" },
    { word: "VIKING", category: "History" },
    { word: "PIRATE", category: "History" },
    { word: "EXPLORER", category: "History" },
    { word: "TREASURE", category: "History" },
    
    // Space
    { word: "ASTRONAUT", category: "Space" },
    { word: "GALAXY", category: "Space" },
    { word: "NEBULA", category: "Space" },
    { word: "COMET", category: "Space" },
    { word: "ASTEROID", category: "Space" },
    { word: "PLANET", category: "Space" },
    { word: "SATELLITE", category: "Space" },
    { word: "ORBIT", category: "Space" },
    { word: "ROCKET", category: "Space" },
    { word: "TELESCOPE", category: "Space" },
    { word: "CONSTELLATION", category: "Space" },
    { word: "BLACKHOLE", category: "Space" },
    { word: "SUPERNOVA", category: "Space" },
    { word: "QUASAR", category: "Space" },
    { word: "PULSAR", category: "Space" },
    { word: "ECLIPSE", category: "Space" },
    { word: "GRAVITY", category: "Space" },
    { word: "ATMOSPHERE", category: "Space" },
    { word: "CRATER", category: "Space" },
    { word: "METEOR", category: "Space" },
    
    // Art
    { word: "PAINTING", category: "Art" },
    { word: "SCULPTURE", category: "Art" },
    { word: "DRAWING", category: "Art" },
    { word: "PORTRAIT", category: "Art" },
    { word: "LANDSCAPE", category: "Art" },
    { word: "WATERCOLOR", category: "Art" },
    { word: "OILPAINTING", category: "Art" },
    { word: "SKETCH", category: "Art" },
    { word: "MURAL", category: "Art" },
    { word: "MOSAIC", category: "Art" },
    { word: "COLLAGE", category: "Art" },
    { word: "PRINTMAKING", category: "Art" },
    { word: "PHOTOGRAPHY", category: "Art" },
    { word: "GALLERY", category: "Art" },
    { word: "EXHIBITION", category: "Art" },
    { word: "MASTERPIECE", category: "Art" },
    { word: "BRUSH", category: "Art" },
    { word: "PALETTE", category: "Art" },
    { word: "CANVAS", category: "Art" },
    { word: "STATUE", category: "Art" },
    
    // Sports
    { word: "BASKETBALL", category: "Sports" },
    { word: "FOOTBALL", category: "Sports" },
    { word: "TENNIS", category: "Sports" },
    { word: "SWIMMING", category: "Sports" },
    { word: "VOLLEYBALL", category: "Sports" },
    { word: "HOCKEY", category: "Sports" },
    { word: "CRICKET", category: "Sports" },
    { word: "BASEBALL", category: "Sports" },
    { word: "RUGBY", category: "Sports" },
    { word: "GOLF", category: "Sports" },
    { word: "BOXING", category: "Sports" },
    { word: "MARTIALARTS", category: "Sports" },
    { word: "GYMNASTICS", category: "Sports" },
    { word: "CYCLING", category: "Sports" },
    { word: "RUNNING", category: "Sports" },
    { word: "WRESTLING", category: "Sports" },
    { word: "SURFING", category: "Sports" },
    { word: "SKIING", category: "Sports" },
    { word: "SNOWBOARDING", category: "Sports" },
    { word: "CLIMBING", category: "Sports" },
    
    // Nature
    { word: "BUTTERFLY", category: "Nature" },
    { word: "RAINDROP", category: "Nature" },
    { word: "SUNFLOWER", category: "Nature" },
    { word: "WATERFALL", category: "Nature" },
    { word: "HURRICANE", category: "Nature" },
    { word: "TORNADO", category: "Nature" },
    { word: "EARTHQUAKE", category: "Nature" },
    { word: "AVALANCHE", category: "Nature" },
    { word: "TSUNAMI", category: "Nature" },
    { word: "FORESTFIRE", category: "Nature" },
    { word: "LIGHTNING", category: "Nature" },
    { word: "THUNDER", category: "Nature" },
    { word: "SNOWFLAKE", category: "Nature" },
    { word: "ICEBERG", category: "Nature" },
    { word: "STARFISH", category: "Nature" },
    { word: "CORAL", category: "Nature" },
    { word: "MUSHROOM", category: "Nature" },
    { word: "CACTUS", category: "Nature" },
    { word: "RIVER", category: "Nature" },
    { word: "MEADOW", category: "Nature" },
    
    // Weather
    { word: "RAINDROP", category: "Weather" },
    { word: "SUNSHINE", category: "Weather" },
    { word: "CLOUD", category: "Weather" },
    { word: "THUNDERSTORM", category: "Weather" },
    { word: "SNOWFLAKE", category: "Weather" },
    { word: "HAIL", category: "Weather" },
    { word: "FOG", category: "Weather" },
    { word: "BREEZE", category: "Weather" },
    { word: "GALE", category: "Weather" },
    { word: "HURRICANE", category: "Weather" },
    { word: "TORNADO", category: "Weather" },
    { word: "BLIZZARD", category: "Weather" },
    { word: "DROUGHT", category: "Weather" },
    { word: "FLOOD", category: "Weather" },
    { word: "HEATWAVE", category: "Weather" },
    { word: "ICESTORM", category: "Weather" },
    { word: "SLEET", category: "Weather" },
    { word: "SMOG", category: "Weather" },
    { word: "SUNSET", category: "Weather" },
    { word: "SUNRISE", category: "Weather" },
    
    // Plants
    { word: "SUNFLOWER", category: "Plants" },
    { word: "OAKTREE", category: "Plants" },
    { word: "ROSE", category: "Plants" },
    { word: "DAISY", category: "Plants" },
    { word: "TULIP", category: "Plants" },
    { word: "MAPLE", category: "Plants" },
    { word: "PINE", category: "Plants" },
    { word: "BAMBOO", category: "Plants" },
    { word: "CACTUS", category: "Plants" },
    { word: "FERN", category: "Plants" },
    { word: "MOSS", category: "Plants" },
    { word: "IVY", category: "Plants" },
    { word: "ORCHID", category: "Plants" },
    { word: "LILY", category: "Plants" },
    { word: "DAFFODIL", category: "Plants" },
    { word: "POPPY", category: "Plants" },
    { word: "VIOLET", category: "Plants" },
    { word: "HYACINTH", category: "Plants" },
    { word: "LAVENDER", category: "Plants" },
    { word: "PANSY", category: "Plants" },
    
    // Movies
    { word: "CINEMA", category: "Movies" },
    { word: "DIRECTOR", category: "Movies" },
    { word: "ACTOR", category: "Movies" },
    { word: "ACTRESS", category: "Movies" },
    { word: "SCREENPLAY", category: "Movies" },
    { word: "PRODUCER", category: "Movies" },
    { word: "CAMERA", category: "Movies" },
    { word: "EDITING", category: "Movies" },
    { word: "SOUNDTRACK", category: "Movies" },
    { word: "SEQUEL", category: "Movies" },
    { word: "PREQUEL", category: "Movies" },
    { word: "FRANCHISE", category: "Movies" },
    { word: "BLOCKBUSTER", category: "Movies" },
    { word: "INDIE", category: "Movies" },
    { word: "DOCUMENTARY", category: "Movies" },
    { word: "ANIMATION", category: "Movies" },
    { word: "SUBTITLE", category: "Movies" },
    { word: "CREDITS", category: "Movies" },
    { word: "TRAILER", category: "Movies" },
    { word: "PREMIERE", category: "Movies" },
    
    // Books
    { word: "NOVEL", category: "Books" },
    { word: "AUTHOR", category: "Books" },
    { word: "CHAPTER", category: "Books" },
    { word: "PAGE", category: "Books" },
    { word: "COVER", category: "Books" },
    { word: "LIBRARY", category: "Books" },
    { word: "BOOKSHELF", category: "Books" },
    { word: "FICTION", category: "Books" },
    { word: "NONFICTION", category: "Books" },
    { word: "MYSTERY", category: "Books" },
    { word: "ROMANCE", category: "Books" },
    { word: "SCIENCE", category: "Books" },
    { word: "FANTASY", category: "Books" },
    { word: "BIOGRAPHY", category: "Books" },
    { word: "AUTOBIOGRAPHY", category: "Books" },
    { word: "POETRY", category: "Books" },
    { word: "DRAMA", category: "Books" },
    { word: "COMIC", category: "Books" },
    { word: "GRAPHICNOVEL", category: "Books" },
    { word: "ENCYCLOPEDIA", category: "Books" },
    
    // Sports
    { word: "BASKETBALL", category: "Sports" },
    { word: "FOOTBALL", category: "Sports" },
    { word: "TENNIS", category: "Sports" },
    { word: "SWIMMING", category: "Sports" },
    { word: "VOLLEYBALL", category: "Sports" },
    { word: "HOCKEY", category: "Sports" },
    { word: "CRICKET", category: "Sports" },
    { word: "BASEBALL", category: "Sports" },
    { word: "RUGBY", category: "Sports" },
    { word: "GOLF", category: "Sports" },
    { word: "BOXING", category: "Sports" },
    { word: "MARTIALARTS", category: "Sports" },
    { word: "GYMNASTICS", category: "Sports" },
    { word: "CYCLING", category: "Sports" },
    { word: "RUNNING", category: "Sports" },
    { word: "WRESTLING", category: "Sports" },
    { word: "SURFING", category: "Sports" },
    { word: "SKIING", category: "Sports" },
    { word: "SNOWBOARDING", category: "Sports" },
    { word: "CLIMBING", category: "Sports" },
    
    // Vehicles
    { word: "AUTOMOBILE", category: "Vehicles" },
    { word: "BICYCLE", category: "Vehicles" },
    { word: "MOTORCYCLE", category: "Vehicles" },
    { word: "AIRPLANE", category: "Vehicles" },
    { word: "HELICOPTER", category: "Vehicles" },
    { word: "BOAT", category: "Vehicles" },
    { word: "SUBWAY", category: "Vehicles" },
    { word: "TRAIN", category: "Vehicles" },
    { word: "TRACTOR", category: "Vehicles" },
    { word: "AMBULANCE", category: "Vehicles" },
    { word: "FIRETRUCK", category: "Vehicles" },
    { word: "POLICECAR", category: "Vehicles" },
    { word: "BUS", category: "Vehicles" },
    { word: "TRUCK", category: "Vehicles" },
    { word: "VAN", category: "Vehicles" },
    { word: "SCOOTER", category: "Vehicles" },
    { word: "SKATEBOARD", category: "Vehicles" },
    { word: "ROLLERSKATES", category: "Vehicles" },
    { word: "YACHT", category: "Vehicles" },
    { word: "SPACESHIP", category: "Vehicles" },
    
    // Clothing
    { word: "SHIRT", category: "Clothing" },
    { word: "PANTS", category: "Clothing" },
    { word: "JACKET", category: "Clothing" },
    { word: "DRESS", category: "Clothing" },
    { word: "SKIRT", category: "Clothing" },
    { word: "TIE", category: "Clothing" },
    { word: "SCARF", category: "Clothing" },
    { word: "GLOVES", category: "Clothing" },
    { word: "SOCKS", category: "Clothing" },
    { word: "SHOES", category: "Clothing" },
    { word: "BOOTS", category: "Clothing" },
    { word: "SANDALS", category: "Clothing" },
    { word: "HAT", category: "Clothing" },
    { word: "CAP", category: "Clothing" },
    { word: "BELT", category: "Clothing" },
    { word: "BLOUSE", category: "Clothing" },
    { word: "SWEATER", category: "Clothing" },
    { word: "JEANS", category: "Clothing" },
    { word: "SHORTS", category: "Clothing" },
    { word: "SUIT", category: "Clothing" },
    
    // Furniture
    { word: "CHAIR", category: "Furniture" },
    { word: "TABLE", category: "Furniture" },
    { word: "SOFA", category: "Furniture" },
    { word: "BED", category: "Furniture" },
    { word: "DESK", category: "Furniture" },
    { word: "CABINET", category: "Furniture" },
    { word: "WARDROBE", category: "Furniture" },
    { word: "SHELF", category: "Furniture" },
    { word: "LAMP", category: "Furniture" },
    { word: "MIRROR", category: "Furniture" },
    { word: "RUG", category: "Furniture" },
    { word: "CURTAIN", category: "Furniture" },
    { word: "CUSHION", category: "Furniture" },
    { word: "DRAWER", category: "Furniture" },
    { word: "FRAME", category: "Furniture" },
    { word: "HUTCH", category: "Furniture" },
    { word: "OTTOMAN", category: "Furniture" },
    { word: "CREDENZA", category: "Furniture" },
    { word: "BOOKCASE", category: "Furniture" },
    { word: "NIGHTSTAND", category: "Furniture" },
    
    // Kitchen
    { word: "REFERIGERATOR", category: "Kitchen" },
    { word: "MICROWAVE", category: "Kitchen" },
    { word: "OVEN", category: "Kitchen" },
    { word: "STOVE", category: "Kitchen" },
    { word: "DISHWASHER", category: "Kitchen" },
    { word: "SINK", category: "Kitchen" },
    { word: "TOASTER", category: "Kitchen" },
    { word: "BLENDER", category: "Kitchen" },
    { word: "MIXER", category: "Kitchen" },
    { word: "COFFEE", category: "Kitchen" },
    { word: "KETTLE", category: "Kitchen" },
    { word: "CUPBOARD", category: "Kitchen" },
    { word: "COUNTER", category: "Kitchen" },
    { word: "CUTLERY", category: "Kitchen" },
    { word: "CROCKERY", category: "Kitchen" },
    { word: "FRYPAN", category: "Kitchen" },
    { word: "SAUCEPAN", category: "Kitchen" },
    { word: "COLANDER", category: "Kitchen" },
    { word: "GRATER", category: "Kitchen" },
    { word: "WHISK", category: "Kitchen" }
];

let currentWord = '';
let guessedLetters = [];
let wrongGuesses = 0;
let score = 0;
const maxGuesses = 6;

const wordDisplay = document.getElementById('word-display');
const lettersContainer = document.getElementById('letters');
const messageEl = document.getElementById('message');
const guessesLeftEl = document.getElementById('guesses-left');
const categoryEl = document.getElementById('category');
const scoreEl = document.getElementById('score');
const newGameBtn = document.getElementById('new-game');

// Load saved score from localStorage if available
const savedScore = localStorage.getItem('hangmanScore');
if (savedScore) {
    score = parseInt(savedScore, 10);
    scoreEl.textContent = score;
}

function initGame() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex].word;
    guessedLetters = [];
    wrongGuesses = 0;
    
    categoryEl.textContent = words[randomIndex].category;
    guessesLeftEl.textContent = maxGuesses;
    messageEl.textContent = '';
    messageEl.className = 'message';
    
    updateWordDisplay();
    createLetterButtons();
    resetHangman();
}

function updateWordDisplay() {
    const display = currentWord
        .split('')
        .map(letter => guessedLetters.includes(letter) ? letter : '_')
        .join(' ');
    wordDisplay.textContent = display;
    
    if (!display.includes('_')) {
        endGame(true);
    }
}

function createLetterButtons() {
    lettersContainer.innerHTML = '';
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const btn = document.createElement('button');
        btn.textContent = letter;
        btn.classList.add('letter-btn');
        btn.addEventListener('click', () => guessLetter(letter, btn));
        lettersContainer.appendChild(btn);
    }
}

function guessLetter(letter, btn) {
    if (guessedLetters.includes(letter) || wrongGuesses >= maxGuesses) return;
    
    guessedLetters.push(letter);
    btn.disabled = true;
    
    if (currentWord.includes(letter)) {
        btn.style.background = '#27ae60';
        updateWordDisplay();
    } else {
        btn.style.background = '#e74c3c';
        wrongGuesses++;
        guessesLeftEl.textContent = maxGuesses - wrongGuesses;
        showHangmanPart(wrongGuesses);
    }
    
    if (wrongGuesses >= maxGuesses) {
        endGame(false);
    }
}

function showHangmanPart(part) {
    const parts = ['head', 'body', 'left-arm', 'right-arm', 'left-leg', 'right-leg'];
    const element = document.getElementById(parts[part - 1]);
    if (element) {
        element.style.opacity = '1';
    }
}

function resetHangman() {
    const parts = ['head', 'body', 'left-arm', 'right-arm', 'left-leg', 'right-leg'];
    parts.forEach(part => {
        document.getElementById(part).style.opacity = '0';
    });
}

function endGame(won) {
    const buttons = document.querySelectorAll('.letter-btn');
    buttons.forEach(btn => btn.disabled = true);
    
    if (won) {
        messageEl.textContent = '🎉 You Won!';
        messageEl.className = 'message win';
        score += 100 - (wrongGuesses * 10);
        scoreEl.textContent = score;
        localStorage.setItem('hangmanScore', score);
    } else {
        messageEl.textContent = `💀 Game Over! Word was: ${currentWord}`;
        messageEl.className = 'message lose';
    }
    
    newGameBtn.style.display = 'inline-block';
}

newGameBtn.addEventListener('click', () => {
    newGameBtn.style.display = 'none';
    initGame();
});

// Start game
initGame();
