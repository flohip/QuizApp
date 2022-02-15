const toggleAnswerButton = document.querySelector(
  '[data-js="toggleAnswerButton"]'
);
const answerText = document.querySelector('[data-js="showHiddenAnswer"]');

toggleAnswerButton.addEventListener('click', () => {
  answerText.classList.toggle('Card_answer-show');
  console.log('Button was clicked.');
});
