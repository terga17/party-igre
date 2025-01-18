const truthQuestions = [
  "What is your biggest fear?",
  "What is your most embarrassing moment?",
  "What is the biggest lie you have ever told?",
  "What is your biggest regret?",
  "What is the most childish thing you still do?",
];

const dareQuestions = [
  "Do 20 pushups.",
  "Sing a song loudly.",
  "Dance without music for 1 minute.",
  "Let someone tickle you for 30 seconds.",
  "Do your best impression of a celebrity.",
];

function chooseGameType() {
  document.querySelector(".truth-or-dare-choose-type").style.display = "none";
  document.querySelector(".truth-or-dare-selection").style.display = "block";
}

function startGame(choice) {
  const truth = document.querySelector(".truth");
  const dare = document.querySelector(".dare");

  if (choice === "truth") {
    dare.style.display = "none";
    truth.style.width = "100%";
  } else {
    truth.style.display = "none";
    dare.style.width = "100%";
  }

  setTimeout(() => {
    document.querySelector(".truth-or-dare-selection").style.display = "none";
    const questionDisplay = document.querySelector(".question-display");
    const questionField = document.querySelector(".question-field");
    const questionText = document.querySelector(".question-text");

    questionDisplay.style.display = "flex";

    if (choice === "truth") {
      const randomIndex = Math.floor(Math.random() * truthQuestions.length);
      questionText.textContent = truthQuestions[randomIndex];
      questionField.classList.add("truth");
      questionField.classList.remove("dare");
    } else {
      const randomIndex = Math.floor(Math.random() * dareQuestions.length);
      questionText.textContent = dareQuestions[randomIndex];
      questionField.classList.add("dare");
      questionField.classList.remove("truth");
    }
  }, 500);
}

function resetGame() {
  document.querySelector(".question-display").style.display = "none";
  document.querySelector(".truth-or-dare-selection").style.display = "block";
  document.querySelector(".truth").style.display = "flex";
  document.querySelector(".dare").style.display = "flex";
  document.querySelector(".truth").style.width = "50%";
  document.querySelector(".dare").style.width = "50%";
}
