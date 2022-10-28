import './Register.css';
import { Link } from 'react-router-dom';
import useForm from '../../utils/useForm';
import AuthForm from '../AuthForm/AuthForm';

function Register() {
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
    password: {
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
    <section className="register">
      <Link to="/" className="logo header__logo" />
      <h1 className="register__heading">Добро пожаловать!</h1>
      <AuthForm
        name="register"
        submitText="Зарегистрироваться"
        onSubmit={handleSubmit}
        isValid={
          values.name.isValid &&
          values.email.isValid &&
          values.password.isValid &&
          values.name.value &&
          values.email.value &&
          values.password.value
        }
      >
        <label htmlFor="register-name" className="auth-form__label">
          Имя
        </label>
        <input
          className={`auth-form__input ${
            !values.name.isValid && 'auth-form__input_invalid'
          }`}
          type="text"
          name="name"
          placeholder="Введите имя"
          id="register-name"
          required
          onChange={handleChange}
          value={values.name.value}
          autoFocus
        />
        <span
          className={`auth-form__input-error ${
            !values.name.isValid && 'auth-form__input-error_visible'
          }`}
        >
          {values.name.error}
        </span>
        <label htmlFor="register-email" className="auth-form__label">
          E-mail
        </label>
        <input
          className={`auth-form__input ${
            !values.email.isValid && 'auth-form__input_invalid'
          }`}
          type="email"
          name="email"
          placeholder="Введите email"
          id="register-email"
          required
          onChange={handleChange}
          value={values.email.value}
        />
        <span
          className={`auth-form__input-error ${
            !values.email.isValid && 'auth-form__input-error_visible'
          }`}
        >
          {values.email.error}
        </span>
        <label htmlFor="register-password" className="auth-form__label">
          Пароль
        </label>
        <input
          className="auth-form__input"
          type="password"
          name="password"
          placeholder="Введите пароль"
          id="register-password"
          minLength="6"
          maxLength="20"
          required
          onChange={handleChange}
          value={values.password.value}
        />
        <span
          className={`auth-form__input-error ${
            !values.password.isValid && 'auth-form__input-error_visible'
          }`}
        >
          {values.password.error}
        </span>
      </AuthForm>
      <p className="sign-message">
        Уже зарегистрированы?{' '}
        <Link to="/signin" className="link login__link">
          Войти
        </Link>
      </p>
    </section>
  );
}

export default Register;
