import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <button
        type="button"
        aria-label="Назад"
        className="link not-found__link"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </div>
  );
}

export default NotFound;
