import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <>
      <Header page={'movies'} loggedIn={true} />
      <main className="movies">
        <SearchForm />
        <MoviesCardList />
        <button className="button cards__more" type="button">
          Ещё
        </button>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
