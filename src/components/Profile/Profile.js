import './Profile.css';
import { useState, useContext, useEffect } from 'react';
import Header from '../Header/Header';
import useForm from '../../utils/useForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function Profile({
  loggedIn,
  onSignout,
  onUpdateUser,
  isInfoTooltipOpen,
  updateUserError,
  handleInfoTooltipClose,
  isFormLoading,
}) {
  const currentUser = useContext(CurrentUserContext);
  const initialFormValues = {
    name: currentUser?.name,
    email: currentUser?.email,
  };
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const { values, errors, handleChange, isFormValid } =
    useForm(initialFormValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ name: values.name, email: values.email });
  };
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleInfoTooltipClose();
    }
  };
  useEffect(() => {
    setIsSubmitDisabled(
      !isFormValid ||
        (values.name === currentUser.name &&
          values.email === currentUser.email) ||
        isFormLoading,
    );
  }, [currentUser, isFormValid, values, isFormLoading]);
  return (
    <>
      <Header page={'profile'} loggedIn={loggedIn} />
      <InfoTooltip
        errorMessage={updateUserError}
        isInfoTooltipOpen={isInfoTooltipOpen}
        onClose={handleInfoTooltipClose}
        onOverlay={handleOverlayClick}
      />
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser?.name}!`}</h1>
        <form
          className="profile__form"
          name="profile-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <label htmlFor="profile-name" className="profile__label">
            Имя
            <input
              className={`profile__input ${
                errors.name && 'profile__input_invalid'
              }`}
              type="text"
              name="name"
              id="profile-name"
              placeholder="Введите имя"
              minLength="2"
              maxLength="30"
              onChange={handleChange}
              value={values.name}
              autoComplete={'off'}
              disabled={isFormLoading}
              pattern="^[A-Za-zА-Яа-я-\s]+$"
              required
            />
          </label>
          <span
            className={`profile__input-error ${
              errors.name && 'profile__input-error_visible'
            }`}
          >
            {errors.name}
          </span>
          <label
            htmlFor="profile-email"
            className="profile__label profile__label_no-border"
          >
            E-mail
            <input
              className={`profile__input ${
                errors.email && 'profile__input_invalid'
              }`}
              type="email"
              name="email"
              id="profile-email"
              placeholder="Введите email"
              onChange={handleChange}
              value={values.email}
              autoComplete={'off'}
              disabled={isFormLoading}
              pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]+\.[A-Za-z]{2,}$"
              required
            />
          </label>
          <span
            className={`profile__input-error ${
              errors.email && 'profile__input-error_visible'
            }`}
          >
            {errors.email}
          </span>
          <button
            className={`link profile__button profile__button_type_submit ${
              isSubmitDisabled && 'profile__button_disabled'
            }`}
            type="submit"
            disabled={isSubmitDisabled}
            aria-label={'Редактировать'}
          >
            {isFormLoading ? 'Сохранение...' : 'Редактировать'}
          </button>
        </form>
        <button
          className="link profile__button profile__button_logout"
          type="button"
          aria-label={'Выйти из аккаунта'}
          onClick={onSignout}
        >
          Выйти из аккаунта
        </button>
      </section>
    </>
  );
}

export default Profile;
