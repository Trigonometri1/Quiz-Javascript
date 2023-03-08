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
const option_list = document.querySelector(".option_list");

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

  let queHtml = `<span>${questions[question_index].question}</span>`;
  let optionHtml = `
    <div class="option">${questions[question_index].options[0]}</div>

    <div class="option">${questions[question_index].options[1]}</div>

    <div class="option">${questions[question_index].options[2]}</div>

    <div class="option">${questions[question_index].options[3]}</div>`;

  question_txt.innerHTML = queHtml;
  option_list.innerHTML = optionHtml;

  //! Adding answer question function to each option element
  const options = option_list.querySelectorAll(".option");
  for (const option of options) {
    option.setAttribute("onclick", "controlSelectedOption(this)");
  }

  //! Show the number of current question
  showCurrentQuestionNumber();
};

//* Function shows the number of current question
const showCurrentQuestionNumber = () => {
  let currentQuestionHTML = `
    <span><p>${questions[question_number].id} </p>of<p> 
      ${questions.length}
    </p></span>`;
  current_question.innerHTML = currentQuestionHTML;
};

//* Initialize controlSelectedOption(this)
const controlSelectedOption = (option) => {
  let correct_answer = questions[question_number].answer;
  let option_answer = option.textContent;
  let option_list_length = option_list.children.length;

  if (option_answer == correct_answer) {
    option.classList.add("correct");
    console.log("Correct Answer");
  } else {
    option.classList.add("incorrect");
    console.log("Incorrect Answer");
  }

  for (let index = 0; index < option_list_length; index++) {
    option_list.children[index].classList.add("disabled");
  }
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
