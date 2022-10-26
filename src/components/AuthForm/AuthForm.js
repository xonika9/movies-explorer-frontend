import './AuthForm.css';

function AuthForm({ name, submitText, children, onSubmit, isValid }) {
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
          !isValid && 'auth-form__submit-button_disabled'
        }`}
        type="submit"
        disabled={!isValid}
        aria-label={submitText}
      >
        {submitText}
      </button>
    </form>
  );
}

export default AuthForm;
