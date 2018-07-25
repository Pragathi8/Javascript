const jQuery = require("jquery");
import {getMovieDetails} from './Collection/controller';
import {retriveFromJson,removeDetails} from './Collection/service';
import {popularMoviesList} from './Popular/controller';
import {searchResult} from './Search/controller';

let globalPopularList = [];
export { globalPopularList };

document.getElementById("popupId").addEventListener('click', searchResult);
function eventListener(){
    jQuery(document).on("click", ".favorite", function () {
        let movieId = this.name;
        console.log(movieId);
        getMovieDetails(movieId);
        retriveFromJson();
    })
    jQuery(document).on("click", ".delete", function () {
        let movieId = this.name;
        removeDetails(movieId);
        retriveFromJson();
    })
}

jQuery(document).ready(function () {
    popularMoviesList();
    retriveFromJson();
    eventListener();
})


