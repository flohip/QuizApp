export function bookmarkEventlistener() {
  const bookmarkList = document.querySelectorAll('[data-js-bookmark]');
  bookmarkList.forEach(bm => {
    const bookmark = bm.querySelector('[data-js="bookmarkIcon"');
    const bookmarkToggled = bm.querySelector('[data-js="bookmarkIconToggled"');
    bookmark.addEventListener('click', () => {
      bookmarkToggled.classList.toggle('Card_bookmark_icon_bookmarked');
    });
  });
}
