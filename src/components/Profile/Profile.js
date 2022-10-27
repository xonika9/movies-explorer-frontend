import './Profile.css';
import { useState } from 'react';
import Header from '../Header/Header';
import useForm from '../../utils/useForm';

function Profile() {
  const [currentUser, setCurrentUser] = useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  });

  const [isEdited, setIsEdited] = useState(false);

  const initialFormValues = {
    name: {
      value: '',
      error: '',
      isValid: true,
    },
    email: {
      value: '',
      error: '',
      isValid: true,
    },
  };

  const { values, handleChange } = useForm(initialFormValues);

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <>
      <Header />
      <section className="profile">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        {isEdited ? (
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
                  !values.name.isValid && 'profile__input_invalid'
                }`}
                type="text"
                name="name"
                placeholder="Введите имя"
                id="profile-name"
                required
                onChange={handleChange}
                value={values.name.value}
                autoFocus
              />
            </label>
            <span
              className={`profile__input-error ${
                !values.name.isValid && 'profile__input-error_visible'
              }`}
            >
              {values.name.error}
            </span>
            <label
              htmlFor="profile-email"
              className="profile__label profile__label_no-border"
            >
              E-mail
              <input
                className={`profile__input ${
                  !values.email.isValid && 'profile__input_invalid'
                }`}
                type="email"
                name="email"
                placeholder="Введите email"
                id="profile-email"
                required
                onChange={handleChange}
                value={values.email.value}
              />
            </label>
            <span
              className={`profile__input-error ${
                !values.email.isValid && 'profile__input-error_visible'
              }`}
            >
              {values.email.error}
            </span>
          </form>
        ) : (
          <div className="profile__info">
            <div className="profile__info-item">
              <p className="profile__info-title">Имя</p>
              <p className="profile__info-value">{currentUser.name}</p>
            </div>
            <div className="profile__info-item">
              <p className="profile__info-title">E-mail</p>
              <p className="profile__info-value">{currentUser.email}</p>
            </div>
          </div>
        )}
        <button
          className="link profile__button profile__button_type_edit"
          type="button"
          onClick={() => setIsEdited(true)}
        >
          Редактировать
        </button>
        <button
          className="link profile__button profile__button_logout"
          type="button"
        >
          Выйти из аккаунта
        </button>
      </section>
    </>
  );
}

export default Profile;
