import viewCollection from './view';

export function retriveFromJson() {
  const url = 'http://localhost:3000/action';
  let collection = '';
  fetch(url)
    .then(resp => resp.json())
    .then((data) => {
      const movies = data;
      collection += viewCollection(movies);
      document.getElementsByClassName('container-3')[0].innerHTML = collection;
    });
}

export function addToJsonServer(movieId, title, image, desc, relDate) {
  fetch('http://localhost:3000/action', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      id: movieId,
      title,
      poster_path: image,
      overview: desc,
      release_date: relDate,
    }),
  });
}

export function removeDetails(movieId) {
  fetch(`http://localhost:3000/action/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
