import './Portfolio.css';

function Portfolio() {
  return (
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
  );
}

export default Portfolio;
