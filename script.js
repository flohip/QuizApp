// Toggles Answer Button of the index.html
const toggleAnswerButton = document.querySelector(
  '[data-js="toggleAnswerButton"]'
);
const answerText = document.querySelector('[data-js="showHiddenAnswer"]');

// Add a Bookmark
const bookmark = document.querySelector('[data-js="bookmarkIcon"');
const bookmarkToggled = document.querySelector(
  '[data-js="bookmarkIconToggled"'
);

bookmark?.addEventListener('click', () => {
  bookmarkToggled.classList.toggle('Card_bookmark_icon_bookmarked');
  console.log('testclick');
});

//Question Textarea of the create_question.html
const questionInput = document.querySelector('[data-js="questionTextarea"]');
const questionLog = document.querySelector('[data-js="questionTextareaCount"]');
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
