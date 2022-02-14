const toggleAnswerButton = document.querySelector(".Card_show");
const answerText = document.querySelector(".Card_answer");

toggleAnswerButton.addEventListener("click", () => {
  answerText.classList.toggle("Card_show-answer");
  console.log("Button was clicked.");
});
