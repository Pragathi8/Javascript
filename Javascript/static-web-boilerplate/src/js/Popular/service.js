import {createCards} from './view';
import {globalPopularList} from '../first';

export function fetchDetails(url, container) {
    let popular = "";
    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            let movies = data.results;
            console.log("search result:"+movies);
            globalPopularList.push(movies);
            popular+=createCards(movies);
            container.innerHTML = popular;
        })
}