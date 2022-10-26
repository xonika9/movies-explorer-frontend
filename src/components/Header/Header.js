import './Header.css';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo header__logo" />
      <div className="header__links">
        <Link to="/signup" className="link header__link">
          Регистрация
        </Link>
        <Link to="/signin" className="link header__link button header__button">
          Войти
        </Link>
      </div>
    </header>
  );
}

export default Header;
