import createCards from './view';
import globalPopularList from '../first';

export default function (url, container) {
  const newContainer = container;
  let popular = '';
  fetch(url)
    .then(resp => resp.json())
    .then((data) => {
      const movies = data.results;
      globalPopularList.push(movies);
      popular += createCards(movies);
      newContainer.innerHTML = popular;
    });
}
