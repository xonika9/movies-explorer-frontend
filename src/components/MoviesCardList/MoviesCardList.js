import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  movies,
  savedMovies,
  isSavedMoviesPage,
  handleSaveMovie,
  handleDeleteMovie,
}) {
  const cards = movies.map((item) => {
    return (
      <li key={isSavedMoviesPage ? item._id : item.id}>
        <MoviesCard
          movie={item}
          isSavedMoviesPage={isSavedMoviesPage}
          handleDelete={handleDeleteMovie}
          handleSave={handleSaveMovie}
          savedMovies={savedMovies}
        />
      </li>
    );
  });
  return (
    <section className="elements">
      <ul className="cards">{cards}</ul>
    </section>
  );
}

export default MoviesCardList;
