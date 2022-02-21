export function answerButtonEventlistener() {
  const cardQuestionList = document.querySelectorAll(
    '[data-js="cardQuestion"]'
  );
  cardQuestionList.forEach(card => {
    const showAnswerButton = card.querySelector(
      '[data-js="toggleAnswerButton"]'
    );
    const showAnswerText = card.querySelector('[data-js="showHiddenAnswer"]');
    showAnswerButton.addEventListener('click', () => {
      showAnswerText.classList.toggle('Card_answer-show');
    });
  });
}
