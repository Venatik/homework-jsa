let hangmanCities = ["Kumanovo", "Prilep", "Skopje"];
let hangmanFootballTeams = ["Liverpool", "Real Madrid", "Arsenal"];
let hangmanBookSeries = ["The Stormlight Archive", "The Wheel of Time", "The Dark Tower"];
let hangmanMovies = ["The Shawshank Redemption", "The Godfather", "The Dark Knight"];
const categories = [hangmanCities, hangmanFootballTeams, hangmanBookSeries, hangmanMovies];
let canvas = document.getElementById("covece");
let ctx = canvas.getContext("2d");

let lives = 6;
document.getElementById("lives").textContent = `Remaining Lives: ${lives}`;

const letters = document.querySelectorAll(".btnLetter");

function selectWord(categories) {
    let categoryIndex = Math.floor(Math.random() * categories.length);
    let word = categories[categoryIndex][Math.floor(Math.random() * categories[categoryIndex].length)];
    let categoryName = getCategoryName(categoryIndex);

    return { word, categoryName };
}

function getCategoryName(index) {
    switch (index) {
        case 0: return "Cities";
        case 1: return "Football Teams";
        case 2: return "Book Series";
        case 3: return "Movies";
        default: return "";
    }
}

let selectedWord = selectWord(categories);

function updatePlaceholder() {
    const chosenCategoryParagraph = document.getElementById("chosenCategory");
    let underscores = "";

    for (let i = 0; i < selectedWord.word.length; i++) {
        underscores += selectedWord.word[i] === " " ? " " : "_";
    }

    chosenCategoryParagraph.textContent = `The chosen category is ${selectedWord.categoryName} and the word is: ${underscores}`;
}

updatePlaceholder();

let guesses = Array(selectedWord.word.length).fill("_");
for (let i = 0; i < selectedWord.word.length; i++) {
    if (selectedWord.word[i] === " ") {
        guesses[i] = " ";
    }
}

function updateUI() {
    const chosenCategoryParagraph = document.getElementById("chosenCategory");
    chosenCategoryParagraph.textContent = `The chosen category is ${selectedWord.categoryName} and the word is: ${guesses.join("")}`;
}

function handleGuess(letter, button) {
    let correctGuess = false;

    for (let i = 0; i < selectedWord.word.length; i++) {
        if (selectedWord.word[i].toLowerCase() === letter.toLowerCase()) {
            guesses[i] = letter;
            correctGuess = true;
        }
    }

    if (!correctGuess) {
        lives--;
        drawLives();
        button.disabled = true;
        button.style.backgroundColor = "gray";
        document.getElementById("lives").textContent = `Remaining Lives: ${lives}`;
    }

    if (guesses.join("").toLowerCase() === selectedWord.word.toLowerCase()) {
        document.getElementById("winLose").textContent = "You Win!";
        endGame();
    }

    if (lives === 0) {
        document.getElementById("winLose").textContent = "You Lose!";
        endGame();
    }

    updateUI();
}

function endGame() {
    document.querySelectorAll(".btnLetter").forEach(button => {
        button.disabled = true;
    });
}

function requestHint() {
    const hints = {
        "Kumanovo": "The city Stefan is from",
        "Prilep": "The 4th largest city in Macedonia",
        "Skopje": "The capital of Macedonia",
        "Liverpool": "CURRENTLY first place in the Premier League",
        "Real Madrid": "The best football team in the world",
        "Arsenal": "Used to be a good Premier League team",
        "The Stormlight Archive": "Brandon Sanderson's largest book series",
        "The Wheel of Time": "Started by Robert Jordan, finished by Brandon Sanderson",
        "The Dark Tower": "Stephen King's magnum opus",
        "The Shawshank Redemption": "Adaptation of Stephen King's novella",
        "The Godfather": "Don Vito Corleone",
        "The Dark Knight": "The best Batman movie"
    };
    if (selectedWord && selectedWord.word && hints && hints[selectedWord.word]) {
        let hint = hints[selectedWord.word];
        document.getElementById("hangmanHint").textContent = hint;
    } else {
        alert('Hint or selected word is not defined');
    }
}

function newGame() {
    lives = 6;
    drawLives();
    selectedWord = selectWord(categories);
    guesses = Array(selectedWord.word.length).fill("_");
    for (let i = 0; i < selectedWord.word.length; i++) {
        if (selectedWord.word[i] === " ") {
            guesses[i] = " ";
        }
    }

    document.getElementById("lives").textContent = `Remaining Lives: ${lives}`;
    document.getElementById("winLose").textContent = "";
    document.getElementById("hangmanHint").textContent = "";
    document.querySelectorAll(".btnLetter").forEach(button => {
        button.disabled = false;
        button.style.backgroundColor = "";
    });

    updateUI();
}

function drawLives() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';

    if (lives < 6) {
        ctx.arc(100, 50, 25, 0, Math.PI * 2, true);
    }

    if (lives < 5) {
        ctx.moveTo(100, 75);
        ctx.lineTo(100, 125);
    }

    if (lives < 4) {
        ctx.moveTo(100, 85);
        ctx.lineTo(60, 105);
    }

    if (lives < 3) {
        ctx.moveTo(100, 85);
        ctx.lineTo(140, 105);
    }

    if (lives < 2) {
        ctx.moveTo(100, 125);
        ctx.lineTo(60, 165);
    }

    if (lives < 1) {
        ctx.moveTo(100, 125);
        ctx.lineTo(140, 165);
    }

    ctx.stroke();
}

document.getElementById("btnHint").addEventListener("click", requestHint);
document.getElementById("btnNewGame").addEventListener("click", newGame);
document.querySelectorAll(".btnLetter").forEach(button => {
    button.addEventListener("click", function () {
        handleGuess(this.textContent, this);
    });
});