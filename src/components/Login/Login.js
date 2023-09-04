import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Login() {
  return <AuthForm title="Рады видеть!" buttonText="Войти" linkDescription="Ещё не зарегистрированы?" linkText="Регистрация" linkUrl="/sign-up" />;
}

export default Login;
