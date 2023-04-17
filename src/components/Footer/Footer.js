import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__heading">xonika9 & BeatFilm</p>
      <div className="footer__container">
        <p className="footer__copyright">&copy; {year}</p>
        <ul className="footer__links">
          <li className="footer__links-item">
            <a
              className="link footer__link"
              href="https://beatfilmfestival.ru/"
              rel="noreferrer"
              target="_blank"
            >
              Beat Film Festival
            </a>
          </li>
          <li className="footer__links-item">
            <a
              className="link footer__link"
              href="https://github.com/xonika9/movies-explorer-frontend"
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
