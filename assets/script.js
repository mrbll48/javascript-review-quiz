
var startButtonEl = document.querySelector('#start-quiz');
var timerEl = document.querySelector('#timer');
var initialSubmitBtn = document.getElementById('initial-submit');
var inputName = document.getElementById('initial');
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
var endTitle = document.getElementById('end-title');
var initial = document.getElementById('initial');
var initialSubmit = document.getElementById('initial-submit');
var endScreen = document.getElementById('end-screen');
startButtonEl.textContent = 'Start Quiz';
var timeLeft = 75;
var questionIndex = 0;
var timeInterval;
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
];

// function starts quiz. removes home screen and shows first question and answer choices.
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

// function shows each successive question as answers are chosen. 
function displayNextQuestion() {
    var currentQuestion = questions[questionIndex];
    question.textContent = currentQuestion.question
    ans1.textContent = currentQuestion.ans1; 
    ans2.textContent = currentQuestion.ans2;
    ans3.textContent = currentQuestion.ans3;
    ans4.textContent = currentQuestion.ans4;
    if (questionIndex === 3) {
        endQuiz()
    }
}

// function starts timer when called. 
function timer() {
    timeInterval = setInterval(function () {
    if (timeLeft > 0) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
    } else {
        endQuiz();
    }
}, 1000)
}

// stops quiz and timer, shows end screen where score and initials can be recored. 
function endQuiz() {
    clearInterval(timeInterval);
    gameScreen.classList.add('hidden');
    btn1.classList.add('hidden');
    btn2.classList.add('hidden');
    btn3.classList.add('hidden');
    btn4.classList.add('hidden');
   
    endTitle.classList.remove('hidden');
    initial.classList.remove('hidden');
    initialSubmit.classList.remove('hidden');
    endScreen.classList.remove('hidden');  
    renderMessage();
}

// function checks to see if correct answer was clicked, pops up either corect or incorrect based on answer choice. 
function checkAns(event) {
    console.log(event.target.textContent)
    var responseMessage = document.getElementById('response-message');

    if (event.target.textContent === questions[questionIndex]['correct']) {
        responseMessage.textContent = 'Correct';
        questionIndex++;
        displayNextQuestion();
    } else {
        responseMessage.textContent = 'Incorrect';
        timeLeft -= 10;
        questionIndex++;
        displayNextQuestion();
    }
    responseMessage.classList.remove('hidden');
}

// event listener to start quiz on button click, calls timer function and start quiz function. 
startButtonEl.addEventListener('click', function() {
    timer();
    startQuiz();
});

// event listeners added to answer choices, calls check answer function
ans1.addEventListener('click', checkAns)
ans2.addEventListener('click', checkAns)
ans3.addEventListener('click', checkAns)
ans4.addEventListener('click', checkAns)

function submitInitials() {
    var initialInput = inputName.value;
    var localScores = JSON.parse(localStorage.getItem('high-scores')) || [];
    console.log(localScores);
    console.log(initialInput);

}

// function will record score and initials in local storage, as well as pop up a message when called. 
function renderMessage() {
    var endMessage = JSON.parse(localStorage.getItem("highScore"))
    var name = document.getElementById('initial').value;
    highScore.push({name,timeLeft});
    localStorage.setItem('highScore', JSON.stringify(highscores));
}

initialSubmitBtn.addEventListener('click', submitInitials);