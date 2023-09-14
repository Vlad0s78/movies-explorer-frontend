import React, { useEffect } from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useFormWithValidation } from "../../hooks/useForm";

function Register({ onRegister, errorGlobalMessage, resetErrorGlobalMessage }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <AuthForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      linkDescription="Уже зарегистрированы?"
      linkText="Войти"
      linkUrl="/signin"
      onSubmit={handleSubmit}
      onChange={handleChange}
      errors={errors}
      isValid={isValid}
      values={values}
      errorGlobalMessage={errorGlobalMessage}
      resetErrorGlobalMessage={resetErrorGlobalMessage}
    />
  );
}

export default Register;
