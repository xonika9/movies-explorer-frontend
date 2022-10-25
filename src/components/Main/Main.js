import './Main.css';
import { Link } from 'react-router-dom';
import PromoImage from '../../images/promo-image.png';
import Photo from '../../images/my-photo.jpg';

function Main() {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo header__logo" />
        <div className="header__links">
          <Link to="/signup" className="link header__link">
            Регистрация
          </Link>
          <Link
            to="/signin"
            className="link header__link button header__button"
          >
            Войти
          </Link>
        </div>
      </header>

      <main className="main">
        <section className="promo">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <img className="promo__image" src={PromoImage} alt="Узоры" />
        </section>

        <section className="about-project" id="about">
          <h2 className="section__heading about-project__heading">О проекте</h2>
          <div className="about-project__text">
            <div className="about-project__column">
              <h3 className="about-project__title">
                Дипломный проект включал 5 этапов
              </h3>
              <p className="about-project__paragraph">
                Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки.
              </p>
            </div>
            <div className="about-project__column">
              <h3 className="about-project__title">
                На выполнение диплома ушло 5 недель
              </h3>
              <p className="about-project__paragraph">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                соблюдать, чтобы успешно защититься.
              </p>
            </div>
          </div>
          <div className="about-project__timing">
            <div className="about-project__timing-item">
              <p className="about-project__timing-heading about-project__timing-heading_highlighted">
                1 неделя
              </p>
              <p className="about-project__timing-text">Back-end</p>
            </div>
            <div className="about-project__timing-item">
              <p className="about-project__timing-heading">4 недели</p>
              <p className="about-project__timing-text">Front-end</p>
            </div>
          </div>
        </section>

        <section className="techs">
          <h2 className="section__heading techs__heading">Технологии</h2>
          <h3 className="techs__title">7 технологий</h3>
          <p className="techs__subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="techs__list">
            <li className="techs__list-item">HTML</li>
            <li className="techs__list-item">CSS</li>
            <li className="techs__list-item">JS</li>
            <li className="techs__list-item">React</li>
            <li className="techs__list-item">Git</li>
            <li className="techs__list-item">Express.js</li>
            <li className="techs__list-item">mongoDB</li>
          </ul>
        </section>

        <section className="about-me">
          <h2 className="section__heading about-me__heading">Студент</h2>
          <div className="about-me__container">
            <div className="about-me__info">
              <h3 className="about-me__name">Алексей</h3>
              <p className="about-me__profession">
                Фронтенд-разработчик, 27 лет
              </p>
              <p className="about-me__paragraph">
                Я родился в Иркутске, закончил факультет менеджмента БГУ. Я
                люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал
                кодить. После того, как прошёл курс по веб-разработке, нашел
                новую работу в продуктовой компании и переехал в Москву.
              </p>
              <a
                className="link about-me__link"
                href="https://github.com/xonika9"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>
            </div>
            <img className="about-me__photo" src={Photo} alt="Мое фото" />
          </div>
        </section>

        <section className="portfolio">
          <h2 className="portfolio__heading">Портфолио</h2>
          <ul className="portfolio__links">
            <li className="portfolio__links-item">
              <a
                className="link portfolio__link"
                href="https://xonika9.github.io/how-to-learn/index.html"
                rel="noreferrer"
                target="_blank"
              >
                Статичный сайт
                <span className="portfolio__arrow">↗</span>
              </a>
            </li>
            <li className="portfolio__links-item">
              <a
                className="link portfolio__link"
                href="https://xonika9.github.io/russian-travel/index.html"
                rel="noreferrer"
                target="_blank"
              >
                Адаптивный сайт
                <span className="portfolio__arrow">↗</span>
              </a>
            </li>
            <li className="portfolio__links-item">
              <a
                className="link portfolio__link"
                href="https://xonika9.github.io/mesto-react"
                rel="noreferrer"
                target="_blank"
              >
                Одностраничное приложение
                <span className="portfolio__arrow">↗</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__heading">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__container">
          <p className="footer__copyright">© 2022</p>
          <ul className="footer__links">
            <li className="footer__links-item">
              <a
                className="link footer__link"
                href="https://practicum.yandex.ru"
                rel="noreferrer"
                target="_blank"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__links-item">
              <a
                className="link footer__link"
                href="https://github.com"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Main;
