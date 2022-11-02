import './MoviesCard.css';
import { useEffect, useState } from 'react';
import { convertTime } from '../../utils/convertTime';
import { urlRegExp } from '../../utils/UrlRegExp';

function MoviesCard({
  movie,
  isSavedMoviesPage,
  savedMovies,
  handleSave,
  handleDelete,
}) {
  const [savedMovie, setSavedMovie] = useState(null);
  const trailerLink = urlRegExp.test(movie.trailerLink)
    ? movie.trailerLink
    : 'https://www.youtube.com';
  useEffect(() => {
    if (!isSavedMoviesPage) {
      setSavedMovie(savedMovies.find((item) => item.movieId === movie.id));
    }
  }, [movie.id, savedMovies, isSavedMoviesPage]);
  const toggleSave = (e) => {
    e.preventDefault();
    savedMovie
      ? handleDelete(savedMovie._id)
      : handleSave({
          country: movie.country || 'no country',
          director: movie.director || 'no director',
          duration: movie.duration || 0,
          year: movie.year || 0,
          description: movie.description || 'no description',
          image: 'https://api.nomoreparties.co/' + movie.image.url,
          trailerLink,
          thumbnail:
            'https://api.nomoreparties.co/' + movie.image.formats.thumbnail.url,
          movieId: movie.id,
          nameRU: movie.nameRU || 'no name',
          nameEN: movie.nameEN || 'no name',
        });
  };
  const toggleDelete = (e) => {
    e.preventDefault();
    handleDelete(movie._id);
  };
  return (
    <a
      className="link card"
      href={trailerLink}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="card__image"
        src={
          isSavedMoviesPage
            ? movie.image
            : 'https://api.nomoreparties.co/' + movie.image.url
        }
        alt={movie.nameRU}
      />
      <div className="card__caption">
        <div className="card__header">
          <h2 className="card__title">{movie.nameRU}</h2>
          {isSavedMoviesPage ? (
            <button
              className="card__like card__like_active"
              type="button"
              onClick={toggleDelete}
            />
          ) : (
            <button
              className={`card__like ${savedMovie && 'card__like_active'}`}
              type="button"
              onClick={toggleSave}
            ></button>
          )}
        </div>
        <p className="card__subtitle">{convertTime(movie.duration)}</p>
      </div>
    </a>
  );
}

export default MoviesCard;
