import './Register.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useForm from '../../utils/useForm';
import AuthForm from '../AuthForm/AuthForm';

function Register({
  onRegister,
  registerError,
  setRegisterError,
  isFormLoading,
}) {
  const initialFormValues = {
    name: '',
    email: '',
    password: '',
  };
  const { values, errors, handleChange, isFormValid } =
    useForm(initialFormValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };
  const handleInputChange = (e) => {
    handleChange(e);
    setRegisterError('');
  };
  useEffect(() => {
    setRegisterError('');
  }, [setRegisterError]);
  return (
    <section className="register">
      <Link to="/" className="logo header__logo" />
      <h1 className="register__heading">Добро пожаловать!</h1>
      <AuthForm
        name="register"
        submitText="Зарегистрироваться"
        onSubmit={handleSubmit}
        isValid={isFormValid}
        isLoading={isFormLoading}
      >
        <label htmlFor="register-name" className="auth-form__label">
          Имя
        </label>
        <input
          className={`auth-form__input ${
            errors.name && 'auth-form__input_invalid'
          }`}
          type="text"
          name="name"
          placeholder="Введите имя"
          id="register-name"
          onChange={handleInputChange}
          value={values.name}
          autoComplete={'off'}
          disabled={isFormLoading}
          pattern="^[A-Za-zА-Яа-я-\s]+$"
          autoFocus
          required
        />
        <span
          className={`auth-form__input-error ${
            errors.name && 'auth-form__input-error_visible'
          }`}
        >
          {errors.name}
        </span>
        <label htmlFor="register-email" className="auth-form__label">
          E-mail
        </label>
        <input
          className={`auth-form__input ${
            errors.email && 'auth-form__input_invalid'
          }`}
          type="email"
          name="email"
          placeholder="Введите email"
          id="register-email"
          onChange={handleInputChange}
          value={values.email}
          autoComplete={'off'}
          disabled={isFormLoading}
          pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]+\.[A-Za-z]{2,}$"
          required
        />
        <span
          className={`auth-form__input-error ${
            errors.email && 'auth-form__input-error_visible'
          }`}
        >
          {errors.email}
        </span>
        <label htmlFor="register-password" className="auth-form__label">
          Пароль
        </label>
        <input
          className={`auth-form__input ${
            errors.password && 'auth-form__input_invalid'
          }`}
          type="password"
          name="password"
          placeholder="Введите пароль"
          id="register-password"
          required
          onChange={handleInputChange}
          value={values.password}
          autoComplete={'off'}
          disabled={isFormLoading}
        />
        <span
          className={`auth-form__input-error ${
            errors.password && 'auth-form__input-error_visible'
          }`}
        >
          {errors.password}
        </span>
        {registerError && (
          <span className="auth-form__submit-error">{registerError}</span>
        )}
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
