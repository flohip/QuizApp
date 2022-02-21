import { answerButtonEventlistener } from './scripts/answer_button_events.js';
import { bookmarkEventlistener } from './scripts/bookmark_events.js';
import { areatextEventlistener } from './scripts/textarea_counter_events.js';

answerButtonEventlistener();
bookmarkEventlistener();
areatextEventlistener();

const toggleList = document.querySelectorAll('[data-toggle]');

toggleList.forEach(link => {
  console.log(link);
  // link.classList.toggle('Hidden_content');
  link.addEventListener('click', () => {
    if (link.textContent === 'Home') {
      const activeSections = document.querySelectorAll(
        '[data-js="sectionQuestion"]'
      );
      toggleHiddenContent(activeSections);
    } else if (link.textContent === 'Bookmarked Questions') {
      const activeSections = document.querySelectorAll(
        '[data-js="sectionBookmarked"]'
      );
      toggleHiddenContent(activeSections);
    } else if (link.textContent === 'Create Questions') {
      const activeSections = document.querySelectorAll(
        '[data-js="sectionCreateQuestion"]'
      );
      toggleHiddenContent(activeSections);
    } else if (link.textContent === 'Your Profile') {
      const activeSections = document.querySelectorAll(
        '[data-js="sectionProfile"]'
      );
      toggleHiddenContent(activeSections);
    }
  });
});

function toggleHiddenContent(input) {
  input.forEach(entry => {
    entry.classList.toggle('Hidden_content');
  });
}
