import fetchDetails from '../Popular/service';
export default function() {
  const searchMovie = document.getElementById('searchMovie').value;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=b93f81fd0b7c110be2ee1cbeab848d12&query=${searchMovie}`;
  const container = document.getElementsByClassName('modal-body')[0];
  fetchDetails(url, container);
}
