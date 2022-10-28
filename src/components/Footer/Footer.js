import './Footer.css';

function Footer() {
  return (
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
  );
}

export default Footer;
