import { retriveFromJson} from './Collection/service';
import popularMoviesList from './Popular/controller';
import {eventListener} from './Collection/controller';
import searchResult from './Search/controller';
const jQuery = require('jquery');

const globalPopularList = [];
export default globalPopularList;

document.getElementById('popupId').addEventListener('click', searchResult);
jQuery(document).ready(() => {
  popularMoviesList();
  retriveFromJson();
  eventListener();
});


