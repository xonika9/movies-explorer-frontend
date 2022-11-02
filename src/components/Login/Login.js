import './Login.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useForm from '../../utils/useForm';
import AuthForm from '../AuthForm/AuthForm';

function Login({ onLogin, loginError, setLoginError, isFormLoading }) {
  const initialFormValues = {
    email: '',
    password: '',
  };
  const { values, errors, handleChange, isFormValid } =
    useForm(initialFormValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email: values.email, password: values.password });
  };
  const handleInputChange = (e) => {
    handleChange(e);
    setLoginError('');
  };
  useEffect(() => {
    setLoginError('');
  }, [setLoginError]);
  return (
    <section className="login">
      <Link to="/" className="logo header__logo" />
      <h1 className="login__heading">Рады видеть!</h1>
      <AuthForm
        name="login"
        submitText="Войти"
        onSubmit={handleSubmit}
        isValid={isFormValid}
        isLoading={isFormLoading}
      >
        <label htmlFor="login-email" className="auth-form__label">
          E-mail
        </label>
        <input
          className={`auth-form__input ${
            errors.email && 'auth-form__input_invalid'
          }`}
          type="email"
          name="email"
          placeholder="Введите email"
          id="login-email"
          onChange={handleInputChange}
          value={values.email}
          autoComplete={'off'}
          disabled={isFormLoading}
          pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]+\.[A-Za-z]{2,}$"
          autoFocus
          required
        />
        <span
          className={`auth-form__input-error ${
            errors.email && 'auth-form__input-error_visible'
          }`}
        >
          {errors.email}
        </span>
        <label htmlFor="login-password" className="auth-form__label">
          Пароль
        </label>
        <input
          className={`auth-form__input ${
            errors.password && 'auth-form__input_invalid'
          }`}
          type="password"
          name="password"
          placeholder="Введите пароль"
          id="login-password"
          onChange={handleInputChange}
          value={values.password}
          autoComplete={'off'}
          disabled={isFormLoading}
          required
        />
        <span
          className={`auth-form__input-error ${
            errors.password && 'auth-form__input-error_visible'
          }`}
        >
          {errors.password}
        </span>
        {loginError && (
          <span className="auth-form__submit-error">{loginError}</span>
        )}
      </AuthForm>
      <p className="sign-message">
        Ещё не зарегистрированы?{' '}
        <Link to="/signup" className="link login__link">
          Регистрация
        </Link>
      </p>
    </section>
  );
}

export default Login;
