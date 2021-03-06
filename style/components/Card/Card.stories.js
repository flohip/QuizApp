// import DefaultHtml from "./Card.default.html";

export default {
  title: 'Components/Card',
};

// export const Default = () => DefaultHtml;

export const Card = () =>
  /*html*/
  `
<article class="Card">
  <img src="/../../../img/Bookmark_unmarked.png" alt="bookmark logo">
  <h2 class="Card_title">QUESTION:</h2>
  <div class="Card_content">
    <p class="Card_question">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo eum ea
      totam! Iure obcaecati odit soluta sint quidem similique, ipsam debitis nihil
      sit iusto, cum aliquid neque placeat quibusdam.
    </p>
    <button class="Card_show">SHOW ANSWER</button>
    <div class="Card_tags">
      <div class="Card_tag1">#animal</div>
      <div class="Card_tag2">#nature</div>
      <div class="Card_tag3">#africa</div>
      <div class="Card_tag4">#wildlife</div>
    </div>
  </div>
</article>

`;
