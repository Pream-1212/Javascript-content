const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which language runs in a web browser?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: "JavaScript"
    },
    {
        question: "2 + 2 = ?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;
let quizHistory = [];
const landingPage = document.getElementById("landing-page");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");
const timeEl = document.getElementById("time");
const startBtn = document.getElementById("startBtn");

startBtn.onclick = () => {
    landingPage.style.display = "none";
    quizContainer.style.display = "block";
    startQuiz();
};

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizHistory = [];
    resultEl.textContent = "";
    retryBtn.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    startTimer();
    let currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(option, currentQuestion.answer);
        optionsEl.appendChild(button);
    });
}

function resetState() {
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    clearInterval(timer);
    timeLeft = 10;
    timeEl.textContent = timeLeft;
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            lockOptions();
        }
    }, 1000);
}

function selectAnswer(selected, correct) {
    clearInterval(timer);
    const buttons = optionsEl.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) btn.style.background = "lightgreen";
        if (btn.textContent === selected && selected !== correct) btn.style.background = "salmon";
    });
    if (selected === correct) score++;
    quizHistory.push({ question: quizData[currentQuestionIndex].question, selected, correct });
    nextBtn.style.display = "inline-block";
}

function lockOptions() {
    const buttons = optionsEl.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);
    nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
};

function showResults() {
    clearInterval(timer);
    questionEl.textContent = `You scored ${score} out of ${quizData.length}`;
    optionsEl.innerHTML = "";
    resultEl.innerHTML = "<strong>Quiz History:</strong><br>" + quizHistory.map(h => 
        `${h.question}<br> Your answer: ${h.selected} | Correct: ${h.correct}<br><br>`
    ).join("");
    nextBtn.style.display = "none";
    retryBtn.style.display = "inline-block";
}

retryBtn.onclick = startQuiz;

startQuiz();


