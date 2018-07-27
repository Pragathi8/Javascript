export default function (movies) {
  let collection = '';
  movies.map((movie) => {
    const desc = movie.overview;
    const description = desc.substring(0, 150);
    collection += `<div class="card mb-4 listOfPop">
        <img class="card-img-top" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Card image cap" class="popup-img">
        <span class='right'>
          <button type="button" class="delete" name="${movie.id}" style="float:right"><i class="fas fa-trash"></i></button>
      </span>
    <div class="card-body">
      <h5 class="card-title">${movie.title}</h5>
      <p class="card-text">${description}...</p>
      <p class="card-text"><small class="text-muted" style="float:right">${movie.release_date}</small></p>
    </div>
  </div>`;
    return collection;
  });
  return collection;
}
