import './Header.css';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function openNavMenu() {
    setIsNavOpen(true);
  }

  function closeNavMenu() {
    setIsNavOpen(false);
  }
  return (
    <header className="header">
      <Link to="/" className="logo header__logo" />
      <button className="button header__menu-button" onClick={openNavMenu} />
      <Navigation isOpened={isNavOpen} handleClose={closeNavMenu} />
      {/* <div className="header__links">
        <Link to="/signup" className="link header__link">
          Регистрация
        </Link>
        <Link to="/signin" className="link header__link button header__button">
          Войти
        </Link>
      </div> */}
    </header>
  );
}

export default Header;
