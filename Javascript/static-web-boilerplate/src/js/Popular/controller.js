import fetchDetails from './service';

export default function () {
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=b93f81fd0b7c110be2ee1cbeab848d12&language=en-US&page=1';
  const container = document.getElementsByClassName('container-2')[0];
  fetchDetails(url, container);
}
