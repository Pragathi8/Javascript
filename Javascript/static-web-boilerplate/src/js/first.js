const jQuery = require("jquery");

let globalPopularList = [];
let globalSearchList = [];

document.getElementById("popupId").addEventListener('click', searchResult);
function searchResult() {
    const searchMovie = document.getElementById("searchMovie").value;
    const url = "https://api.themoviedb.org/3/search/movie?api_key=b93f81fd0b7c110be2ee1cbeab848d12&query=" + searchMovie;
    var popup = "";
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let movies = data.results;
            console.log(movies);
            globalPopularList.push(movies);
            movies.map(function (movie) {
                var desc=movie.overview;
                var description=desc.substring(0,150);
                popup += `<div class="card mb-4 searchMovie">
              <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Card image cap" id="popup-img">
              <span class='right'>
                <button type="button" class="favorite" name="${movie.id}"><i class='fas fa-bookmark'></i></button>
                <button type="button" class="favorite" name="${movie.id}"><i class='fas fa-heart'></i></button>
            </span>
              <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">${description}...</p>
                <p class="card-text"><small class="text-muted" style="float:right">More Info</small></p>
              </div>
            </div>`;
            })
            document.getElementsByClassName("modal-body")[0].innerHTML=popup;
            // document.getElementById("popup-body").innerHTML = popup;
        })
        console.log("searchresults:"+globalSearchList);
}

function loadPage() {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=b93f81fd0b7c110be2ee1cbeab848d12&language=en-US&page=1";
    var popular = "";
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let movies = data.results;
            globalPopularList.push(movies);
            movies.map(function (movie) {
                var desc=movie.overview;
                var description=desc.substring(0,150);
                popular += `<div class="card mb-4 listOfPop">
                <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Card image cap" id="popup-img">
                <span class='right'>
                  <button type="button" class="favorite" name="${movie.id}" ><i class='fas fa-bookmark'></i></button>
                  <button type="button" class="favorite" name="${movie.id}" ><i class='fas fa-heart'></i></button>
              </span>
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">${description}....</p>
              <p class="card-text"><small class="text-muted" style="float:right">${movie.release_date}</small></p>
            </div>
          </div>`;
            })
            document.getElementsByClassName("container-2")[0].innerHTML = popular;

        })
    console.log(globalPopularList);
}
function removeDetails(movieId){
    console.log(movieId);
    fetch('http://localhost:3000/action/'+movieId, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        }
    })
}

function getMovieDetails(movieId) {
    console.log(movieId);
    console.log("length:"+globalPopularList.length);
    for (var i in globalPopularList) {
        var global = globalPopularList[i];
        for (var movie in global) {
            if (global[movie].id == movieId) {
                var title = global[movie].title;
                var image = global[movie].poster_path;
                var desc = global[movie].overview;
                var relDate = global[movie].release_date;
            }
            else {
                continue;
            }
        }
    }
    console.log("title" + title);
    fetch('http://localhost:3000/action', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            "id": movieId,
            "title": title,
            "poster_path": image,
            "overview": desc,
            "release_date": relDate
        })
    })
}

function addToCollections(){
    const url="http://localhost:3000/action";
    var collection = "";
    fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        let movies = data;
        console.log(data);
        movies.map(function (movie) {
            var desc=movie.overview;
            var description=desc.substring(0,150);
            collection += `<div class="card mb-4 listOfPop">
                <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Card image cap" id="popup-img">
                <span class='right'>
                  <button type="button" class="delete" name="${movie.id}" ><i class="fas fa-trash"></i></button>
              </span>
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">${description}...</p>
              <p class="card-text"><small class="text-muted" style="float:right">${movie.release_date}</small></p>
            </div>
          </div>`;
            })
            document.getElementsByClassName("container-3")[0].innerHTML = collection;
        })
}

function eventListener() {
    jQuery(document).on("click", ".favorite, .favoriteSearch", function () {
        var movieId = this.name;
        console.log(movieId);
        getMovieDetails(movieId);
        addToCollections();
    })
    jQuery(document).on("click",".delete",function(){
        var movieId=this.name;
        removeDetails(movieId);
        addToCollections();
    })
}

jQuery(document).ready(function () {
    loadPage();
    addToCollections();
    eventListener();
})

