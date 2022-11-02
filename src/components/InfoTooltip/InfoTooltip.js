import './InfoTooltip.css';
import successIcon from '../../images/success-icon.svg';
import errorIcon from '../../images/error-icon.svg';

function InfoTooltip({ errorMessage, isInfoTooltipOpen, onClose, onOverlay }) {
  return (
    <div
      className={`infotooltip ${isInfoTooltipOpen && 'infotooltip_is-opened'}`}
      onClick={onOverlay}
    >
      <div className="infotooltip__content">
        <button
          className="infotooltip__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
        {errorMessage ? (
          <>
            <img
              className="infotooltip__icon"
              src={errorIcon}
              alt={'Данные не изменены'}
            />
            <h2 className="infotooltip__title">{errorMessage}</h2>
          </>
        ) : (
          <>
            <img
              className="infotooltip__icon"
              src={successIcon}
              alt={'Данные изменены'}
            />
            <h2 className="infotooltip__title">Данные профиля изменены!</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default InfoTooltip;
