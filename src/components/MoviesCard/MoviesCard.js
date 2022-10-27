import './MoviesCard.css';
import MovieCard from '../../images/movie-card.png';

function MoviesCard() {
  return (
    <li className="card">
      <img className="card__image" src={MovieCard} alt="Обложка фильма" />
      <div className="card__caption">
        <div className="card__header">
          <h2 className="card__title">33 слова о дизайне</h2>
          <button className="card__like card__like_active" type="button" />
        </div>
        <p className="card__subtitle">1ч 47м</p>
      </div>
    </li>
  );
}

export default MoviesCard;
