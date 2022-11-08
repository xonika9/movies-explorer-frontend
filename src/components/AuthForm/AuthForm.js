import './AuthForm.css';

function AuthForm({ name, submitText, children, onSubmit, isValid, isLoading}) {
  return (
    <form
      className="auth-form"
      name={`${name}-form`}
      onSubmit={onSubmit}
      noValidate
    >
      {children}
      <button
        className={`button auth-form__submit-button ${
          (!isValid || isLoading) && 'auth-form__submit-button_disabled'
        }`}
        type="submit"
        disabled={!isValid || isLoading}
        aria-label={submitText}
      >
        {isLoading ? 'Сохранение...': submitText}
      </button>
    </form>
  );
}

export default AuthForm;
