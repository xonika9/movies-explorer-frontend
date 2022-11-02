import { useState, useCallback } from 'react';
import isEmail from 'validator/lib/isEmail';

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const handleChange = (e) => {
    const { name, value, validationMessage } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setCustomErrors(name, value, validationMessage);
    setIsFormValid(e.target.closest('form').checkValidity());
  };
  const setCustomErrors = (name, value, validationMessage) => {
    switch (name) {
      case 'name':
        if (value.length === 0) {
          setErrors((prevState) => ({
            ...prevState,
            name: 'Поле Имя должно быть заполнено',
          }));
        } else if (value.length < 2) {
          setErrors((prevState) => ({
            ...prevState,
            name: 'Длина поля Имя должна быть не меньше 2 символов',
          }));
        } else if (value.length > 30) {
          setErrors((prevState) => ({
            ...prevState,
            name: 'Длина поля Имя должна быть не больше 30 символов',
          }));
        } else if (!new RegExp(/[A-Za-zА-Яа-я-\s]+$/).test(value)) {
          setErrors((prevState) => ({
            ...prevState,
            name: 'Поле Имя должно содержать латиницу, кирилицу, пробел или дефис',
          }));
        } else {
          setDefaultErrors(name, validationMessage);
        }
        break;

      case 'email':
        if (value.length === 0) {
          setErrors((prevState) => ({
            ...prevState,
            email: 'Поле E-mail должно быть заполнено',
          }));
        } else if (!isEmail(value)) {
          setErrors((prevState) => ({
            ...prevState,
            email: 'Введен некорректный E-mail',
          }));
        } else {
          setDefaultErrors(name, validationMessage);
        }
        break;

      case 'password':
        if (value.length === 0) {
          setErrors((prevState) => ({
            ...prevState,
            password: 'Поле Пароль должно быть заполнено',
          }));
        } else {
          setDefaultErrors(name, validationMessage);
        }
        break;

      default:
        setDefaultErrors(name, validationMessage);
        break;
    }
  };
  const setDefaultErrors = (name, validationMessage) => {
    setErrors((prevState) => ({
      ...prevState,
      [name]: validationMessage,
    }));
  };
  const resetForm = useCallback(
    (NewValues = {}, newIsFormValid = false) => {
      setValues(NewValues);
      setErrors({});
      setIsFormValid(newIsFormValid);
    },
    [setValues, setIsFormValid],
  );

  return { values, errors, handleChange, isFormValid, resetForm };
}
