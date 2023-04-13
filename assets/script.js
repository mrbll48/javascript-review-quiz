
var startButtonEl = document.querySelector('#start-quiz');
var timerEl = document.querySelector('#timer');
var timeLeft = 75;
startButtonEl.textContent = 'Start Quiz'
var questionIndex = 0
var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        ans1: 'strings',
        ans2: 'booleans',
        ans3: 'alerts',
        ans4: 'numbers',
        correct: 'alerts',
    },
    {
        question: 'The condition in an if/else statement is enlcosed within ________',
        ans1: 'quotes',
        ans2: 'curley brackets',
        ans3: 'parenthesis',
        ans4: 'square brackets',
        correct: 'parenthesis',
    },
    {
        question: 'Arrays in JavaScript can be used to store:',
        ans1: 'numbers and strings',
        ans2: 'other arrays',
        ans3: 'booleans',
        ans4: 'all of the above',
        correct: 'all of the above',
    },
    {
        question: 'String values must be enclosed within _________ when assigning variables',
        ans1: 'quotes',
        ans2: 'curley brackets',
        ans3: 'parenthesis',
        ans4: 'square brackets',
        correct: 'quotes',
    },
]

var question = document.getElementById('question');
var ans1 = document.getElementById('ans1');
var ans2 = document.getElementById('ans2');
var ans3 = document.getElementById('ans3');
var ans4 = document.getElementById('ans4');

var gameScreen = document.getElementById('game-screen');
var btn1 = document.getElementById('ans1');
var btn2 = document.getElementById('ans2');
var btn3 = document.getElementById('ans3');
var btn4 = document.getElementById('ans4');

function startQuiz() {
    var homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    btn1.classList.remove('hidden');
    btn2.classList.remove('hidden');
    btn3.classList.remove('hidden');
    btn4.classList.remove('hidden');
    displayNextQuestion();
}

function displayNextQuestion() {
    var currentQuestion = questions[questionIndex];
    question.textContent = currentQuestion.question
    ans1.textContent = currentQuestion.ans1; 
    ans2.textContent = currentQuestion.ans2;
    ans3.textContent = currentQuestion.ans3;
    ans4.textContent = currentQuestion.ans4;

    for (var i = 1; i <= currentQuestion; i++) {
        currentQuestion++
    }
}

function timer() {
var timeInterval = setInterval(function () {
    if (timeLeft > 0) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
    } else if (timeLeft === 1) { 
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
    } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        endQuiz();
    }
}, 1000)
}

function endQuiz() {
    gameScreen.classList.add('hidden');
    btn1.classList.add('hidden')
    btn2.classList.add('hidden')
    btn3.classList.add('hidden')
    btn4.classList.add('hidden')

    var endTitle = document.getElementById('end-title');
    var initial = document.getElementById('initial');
    var initialSubmit = document.getElementById('initial-submit');
    endTitle.classList.remove('hidden');
    initial.classList.remove('hidden');
    initialSubmit.classList.remove('hidden');
    var endScreen = document.getElementById('end-screen');
    endScreen.classList.remove('hidden');
}

function checkAns(event) {
    console.log(event.target.textContent)
    var responseMessage = document.getElementById('response-message');

    if (event.target.textContent === questions[questionIndex]) {
        responseMessage.textContent = 'Correct';
    } else {
        responseMessage.textContent = 'Incorrect';
        timeLeft -= 10;
    }
    responseMessage.classList.remove('hidden');
}

startButtonEl.addEventListener('click', function() {
    timer();
    startQuiz();
});

ans1.addEventListener('click', checkAns)
ans2.addEventListener('click', checkAns)
ans3.addEventListener('click', checkAns)
ans4.addEventListener('click', checkAns)