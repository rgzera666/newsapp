// fetch
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function () {
  const inputKeyword = document.querySelector('.input-keyword');
  fetch('https://newsapi.org/v2/everything?apiKey=c84f80ad95d0472f9c49c7ec87d0b91c&q=' + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => {
      const news = response.Search;
      let cards = '';
      news.forEach((m) => (cards += showCards(m)));
      const newsContainer = document.querySelector('.news-app');
      newsContainer.innerHTML = cards;
    });
});

function showCards(m) {
  return `<div class="row">
    <div class="col-md-4 my-4">
    <div class="card">
      <img src="${m.urlToImage}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.Author} - ${m.publishedAt}</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    </div>
  </div>`;
}
