// Toggles Answer Button of the index.html
const toggleAnswerButton = document.querySelector(
  '[data-js="toggleAnswerButton"]'
);
const answerText = document.querySelector('[data-js="showHiddenAnswer"]');

//Question Textarea of the create_question.html
let questionInput = document.querySelector('[data-js="questionTextarea"]');
let questionLog = document.querySelector('[data-js="questionTextareaCount"]');
const txtMaxLength = ' / 240 characters remaining';

//Answer Textarea of the create_question.html
const answerInput = document.querySelector('[data-js="answerTextarea"]');
const answerLog = document.getElementById('Answer_textarea_count');

// Toggles Answer Button of the index.html
toggleAnswerButton?.addEventListener('click', () => {
  answerText.classList.toggle('Card_answer-show');
});

//Question Textarea of the create_question.html
questionInput?.addEventListener('input', e => {
  questionLog.textContent = e.target.value.length + txtMaxLength;
});

//Answer Textarea of the create_question.html
answerInput?.addEventListener('input', e => {
  answerLog.textContent = e.target.value.length + txtMaxLength;
});
