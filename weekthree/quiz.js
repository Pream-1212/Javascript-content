const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript",
  },
  { question: "2 + 2 = ?", options: ["3", "4", "5", "6"], answer: "4" },
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "HyperText and links Markup Language",
      "None of the above",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "Which is a JavaScript framework?",
    options: ["Django", "Flask", "React", "Ruby on Rails"],
    answer: "React",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "What is the boiling point of water?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answer: "100°C",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    answer: "Harper Lee",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Pb", "Fe"],
    answer: "Au",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
    answer: "Mitochondria",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Pepper", "Onion"],
    answer: "Avocado",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    answer: "Diamond",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    answer: "Leonardo da Vinci",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 50;
let quizHistory = [];

const landingPage = document.getElementById("landing-page");
const quizContainer = document.querySelector(".quiz-container");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");
const retryBtn = document.getElementById("retryBtn");
const timeEl = document.getElementById("time");
const startBtn = document.getElementById("startBtn");

// Start button click
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

  currentQuestion.options.forEach((option) => {
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
  timeLeft = 50;
  timeEl.textContent = timeLeft;
}

function startTimer() {
  timeEl.textContent = timeLeft;
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
  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.style.background = "lightgreen";
    if (btn.textContent === selected && selected !== correct)
      btn.style.background = "salmon";
  });
  if (selected === correct) score++;
  quizHistory.push({
    question: quizData[currentQuestionIndex].question,
    selected,
    correct,
  });
  nextBtn.style.display = "inline-block";
}

function lockOptions() {
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = true));
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
  resultEl.innerHTML =
    "<strong>Quiz History:</strong><br>" +
    quizHistory
      .map(
        (h) =>
          `${h.question}<br> Your answer: ${h.selected} | Correct: ${h.correct}<br><br>`
      )
      .join("");
  nextBtn.style.display = "none";
  retryBtn.style.display = "inline-block";
}

retryBtn.onclick = startQuiz;
