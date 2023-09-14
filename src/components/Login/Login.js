import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useFormWithValidation } from "../../hooks/useForm";

function Login({ onLogin, errorGlobalMessage, resetErrorGlobalMessage }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  return (
    <AuthForm
      title="Рады видеть!"
      buttonText="Войти"
      linkDescription="Ещё не зарегистрированы?"
      linkText="Регистрация"
      linkUrl="/signup"
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

export default Login;
