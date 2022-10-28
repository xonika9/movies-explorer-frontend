import { useState } from 'react';

export default function useForm(inputValues) {
  const [values, setValues] = useState(inputValues);

  function handleChange(evt) {
    const {
      name,
      value,
      validity: { valid },
      validationMessage,
    } = evt.target;

    setValues((prevState) => ({
      ...prevState,
      [name]: { value, isValid: valid, error: validationMessage },
    }));
  }
  return { values, setValues, handleChange };
}
