// declareting the elements
const start_btn = document.querySelector(".start_btn");
const quiz_rules = document.querySelector(".quiz_rules");
const quit_btn = quiz_rules.querySelector(".buttons .quit");
const restart_btn = quiz_rules.querySelector(".buttons .restart");
const quiz_card = document.querySelector(".quiz_card");
const next_btn = quiz_card.querySelector(".next_button");
const options = quiz_card.querySelectorAll(".option_list .option");
const time_second = quiz_card.querySelector(".timer .second_txt");
const score_card = document.querySelector(".score_card");
const current_question = document.querySelector(".current_question");
const timer = document.querySelector(".quiz_card .timer .second_txt");

// `<span><p>${question_number + 1} </p>of<p> ${
//   questions.length
// }</p></span>`;

//* Start Button Click
start_btn.onclick = () => {
  quiz_rules.classList.add("show_quiz_rules");
};

//* Start Quit Click
quit_btn.onclick = () => {
  quiz_rules.classList.remove("show_quiz_rules");
};

//* Quiz-Start Button Click
restart_btn.onclick = () => {
  quiz_rules.classList.remove("show_quiz_rules");
  quiz_card.classList.add("show_quiz_card");
  showQuestion(0);
  startTimer();
};

let question_number = 0;

//*Next Button Click
next_btn.onclick = () => {
  if (question_number < questions.length - 1) {
    question_number++;
    showQuestion(question_number);
    clearInterval();
    startTimer();
  } else {
    score_card.classList.add("show_score_card");
    quiz_card.classList.remove("show_quiz_card");
  }
};

//*Get Questions and Options Dinamicly
const showQuestion = (question_index) => {
  const question_txt = document.querySelector(".question_txt");
  const option_list = document.querySelector(".option_list");

  let queHtml = `<span>${questions[question_index].question}</span>`;
  let optionHtml = `
    <div class="option">
      <span>${questions[question_index].options[0]}</span>
    </div>

    <div class="option">
      <span>${questions[question_index].options[1]}</span>
    </div>

    <div class="option">
      <span>${questions[question_index].options[2]}</span>
    </div>

    <div class="option">
      <span>${questions[question_index].options[3]}</span>
    </div>`;

  question_txt.innerHTML = queHtml;
  option_list.innerHTML = optionHtml;

  showCurrentQuestion();
};

const showCurrentQuestion = () => {
  let currentQuestionHTML = `
    <span><p>${questions[question_number].id} </p>of<p> 
      ${questions.length}
    </p></span>`;
  current_question.innerHTML = currentQuestionHTML;
};

//* Create a Timer
const startTimer = () => {
  let time = 20;
  const timerInterval = setInterval(() => {
    if (time <= 0) {
      clearInterval(timerInterval);
    } else {
      timer.innerHTML = time;
    }
    time -= 1;
  }, 1000);
};
