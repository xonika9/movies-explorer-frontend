import './SavedMovies.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MovieCard from '../../images/movie-card.png';

function Main() {
  return (
    <>
      <Header />
      <main className="saved-movies">
        <section className="search-form">
          <form className="search-form__container" name="search-form">
            <div className="search-form__input-group">
              <div className="search-icon"></div>
              <input
                className="search-form__input"
                type="text"
                name="search"
                placeholder="Фильм"
                required
                autoFocus
              />
              <button
                className="button search-form__search-button"
                type="submit"
              />
              <div className="vertical-line"></div>
              <div className="filter">
                <label className="button filter__label" htmlFor="shorts">
                  <input
                    className="filter__checkbox"
                    type="checkbox"
                    name="shorts"
                    id="shorts"
                  />
                  <span className="filter__tumbler" />
                  <span className="filter__text">Короткометражки</span>
                </label>
              </div>
            </div>
          </form>
        </section>
        <section className="elements">
          <ul className="cards">
            <li className="card">
              <img
                className="card__image"
                src={MovieCard}
                alt="Обложка фильма"
              />
              <div className="card__caption">
                <div className="card__header">
                  <h2 className="card__title">33 слова о дизайне</h2>
                  <button
                    className="card__like card__like_active"
                    type="button"
                  />
                </div>
                <p className="card__subtitle">1ч 47м</p>
              </div>
            </li>
            <li className="card">
              <img
                className="card__image"
                src={MovieCard}
                alt="Обложка фильма"
              />
              <div className="card__caption">
                <div className="card__header">
                  <h2 className="card__title">33 слова о дизайне</h2>
                  <button
                    className="card__like card__like_active"
                    type="button"
                  />
                </div>
                <p className="card__subtitle">1ч 47м</p>
              </div>
            </li>
            <li className="card">
              <img
                className="card__image"
                src={MovieCard}
                alt="Обложка фильма"
              />
              <div className="card__caption">
                <div className="card__header">
                  <h2 className="card__title ">33 слова о дизайне</h2>
                  <button
                    className="card__like card__like_active"
                    type="button"
                  />
                </div>
                <p className="card__subtitle">1ч 47м</p>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;
