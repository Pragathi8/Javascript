import getMovieDetails from './Collection/controller';
import { retriveFromJson, removeDetails } from './Collection/service';
import popularMoviesList from './Popular/controller';
import searchResult from './Search/controller';

const jQuery = require('jquery');

const globalPopularList = [];
export default globalPopularList;

document.getElementById('popupId').addEventListener('click', searchResult);
function eventListener() {
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

jQuery(document).ready(() => {
  popularMoviesList();
  retriveFromJson();
  eventListener();
});
