import {addToJsonServer} from './service';
import {globalPopularList} from '../first';

export function getMovieDetails(movieId) {
    console.log(movieId);
    console.log("length:" + globalPopularList.length);
    for (let i in globalPopularList) {
        let global = globalPopularList[i];
        for (let movie in global) {
            if (global[movie].id == movieId) {
                let title = global[movie].title;
                let image = global[movie].poster_path;
                let desc = global[movie].overview;
                let relDate = global[movie].release_date;
                addToJsonServer(movieId, title, image, desc, relDate);
                break;
            }
        }
    }
}

