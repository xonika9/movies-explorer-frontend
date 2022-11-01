import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="elements">
      <ul className="cards">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
    </section>
  );
}

export default MoviesCardList;
