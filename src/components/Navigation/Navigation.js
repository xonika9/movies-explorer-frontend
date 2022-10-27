import './Navigation.css';
import { NavLink, Link } from 'react-router-dom';

function Navigation({ isOpened, handleClose }) {
  return (
    <div className={`navigation ${isOpened ? 'navigation_is-opened' : ''}`}>
      <div className="navigation__menu">
        <button
          className="button navigation__close navigation__hidden"
          onClick={handleClose}
        />
        <ul className="navigation__links">
          <li>
            <NavLink
              end
              to="/"
              className="link navigation__link navigation__hidden"
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="link navigation__link">
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink to="/saved-movies" className="link navigation__link">
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <Link to="/profile" className="button navigation__profile-link">
          Аккаунт <span className="navigation__profile-icon" />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
