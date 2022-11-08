import './SavedMovies.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterByKeyword, filterByDuration } from '../../utils/filters';

function SavedMovies({ savedMovies, loggedIn, handleDeleteMovie, isError }) {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const handleSearch = (searchQuery) => {
    setSearchedMovies(filterByKeyword(savedMovies, searchQuery));
  };
  const handleCheckBox = () => {
    setIsFilterActive((prevState) => !prevState);
  };
  useEffect(() => {
    setSearchedMovies(savedMovies);
  }, [savedMovies]);
  useEffect(() => {
    if (isFilterActive) {
      setFilteredMovies(filterByDuration(searchedMovies));
    } else {
      setFilteredMovies(searchedMovies);
    }
  }, [isFilterActive, searchedMovies]);
  return (
    <>
      <Header page={'saved-movies'} loggedIn={loggedIn} />
      <main className="saved-movies">
        <SearchForm
          name={'saved-movies'}
          handleSearch={handleSearch}
          isChecked={isFilterActive}
          handleCheckBox={handleCheckBox}
        />
        {isError && (
          <p className="movies__error-message">
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз.
          </p>
        )}
        {!isError && filteredMovies.length === 0 && (
          <p className="movies__error-message">Ничего не найдено</p>
        )}
        {!isError && filteredMovies.length > 0 && (
          <MoviesCardList
            movies={filteredMovies}
            isSavedMoviesPage={true}
            handleDeleteMovie={handleDeleteMovie}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
