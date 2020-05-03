window.addEventListener('load', init);

//global values
let time = 5;
let score = 0;
let isPlaying;

//DOM elements

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#Score');
const timeDisplay = document.querySelector('#Time-left');
const msg = document.querySelector('#message');
const secounds = document.querySelector('#secounds');

const words = [
    'sound',
    'wanted',
    'busted',
    'java',
    'python',
    'project',
    'summer',
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];


// initialize game
function init() {
    //load word from array
    showWord(words);
    //start matching game
    wordInput.addEventListener('input', startMatch);

    //call countdown every secound
    setInterval(countdown, 1000);

    //check game status
    setInterval(checkStatus, 50);

}
//start match
function startMatch() {

    if (matchWords()) {
        isPlaying = true;
        // time 6 cuz 1 sec for page load
        time = 6;
        showWord(words);
        wordInput.value = '';
        score++;

    }
    //if score is -1 show 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }

}

//match the cuurent word with input
function matchWords() {
    if (currentWord.innerHTML === wordInput.value) {
        msg.innerHTML = 'Correct!'
        return true;
    } else {
        msg.innerHTML = '';
        return false;
    }
}

//picking random word
function showWord(words) {
    //generation random index to pic random words from array
    const randIndex = Math.floor(Math.random() * words.length);
    //output random word
    currentWord.innerHTML = words[randIndex];
}
//countdown timer
function countdown() {
    //time is not run out!
    if (time > 0) {
        time--;
    } else if (time === 0) {
        //game over
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
}
//check game status 
function checkStatus() {
    if (!isPlaying && time === 0) {
        msg.innerHTML = "Game Over !!!";
        score = -1;
    }
}