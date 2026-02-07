const words = [
    { word: "PROGRAMMING", category: "Technology" },
    { word: "ELEPHANT", category: "Animals" },
    { word: "GUITAR", category: "Music" },
    { word: "MOUNTAIN", category: "Geography" },
    { word: "CHOCOLATE", category: "Food" },
    { word: "PYRAMID", category: "History" },
    { word: "ASTRONAUT", category: "Space" },
    { word: "PAINTING", category: "Art" },
    { word: "BASKETBALL", category: "Sports" },
    { word: "BUTTERFLY", category: "Nature" },
    { word: "COMPUTER", category: "Technology" },
    { word: "OCTOPUS", category: "Animals" },
    { word: "RAINDROP", category: "Weather" },
    { word: "SUNFLOWER", category: "Plants" },
    { word: "DINOSAUR", category: "History" }
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
