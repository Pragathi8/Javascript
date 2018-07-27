import { addToJsonServer,removeDetails,retriveFromJson } from './service';
import globalPopularList from '../first';
const jQuery = require('jquery');

export function getMovieDetails(movieId) {
  for (let i = 0; i < globalPopularList.length; i += 1) {
    const global = globalPopularList[i];
    for (let movie = 0; movie < global.length; movie += 1) {
      if (global[movie].id === parseInt(movieId, 10)) {
        const title = global[movie].title;
        const image = global[movie].poster_path;
        const desc = global[movie].overview;
        const relDate = global[movie].release_date;
        addToJsonServer(movieId, title, image, desc, relDate);
        break;
      }
    }
  }
}

export function eventListener() {
  jQuery(document).on('click', '.favorite', function () {
    const movieId = this.name;
    getMovieDetails(movieId);
    retriveFromJson();
  });
  jQuery(document).on('click', '.delete', function () {
    const movieId = this.name;
    removeDetails(movieId);
    retriveFromJson();
  });
}


