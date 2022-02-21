export function areatextEventlistener() {
  const cardCreateQuestionList = document.querySelectorAll(
    '[data-js="cardCreateQuestion"]'
  );
  cardCreateQuestionList.forEach(card => {
    const areatextList = card.querySelectorAll('[data-js="inputArea"]');
    areatextList.forEach(area => {
      const areaText = area.querySelector('[data-js="textarea"]');
      const areaLog = area.querySelector('[data-js="textareaCount"]');
      const txtMaxLength = ' / 240 characters remaining';
      areaText.addEventListener('input', e => {
        areaLog.textContent = e.target.value.length + txtMaxLength;
      });
    });
  });
}
