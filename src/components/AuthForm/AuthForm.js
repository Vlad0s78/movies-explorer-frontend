import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import InputField from "../InputField/InputField";

function AuthForm({ onSubmit, onChange, errors, isValid, values, errorGlobalMessage, resetErrorGlobalMessage, ...props }) {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/signup";

  const cleanupOnUnmount = () => {
    resetErrorGlobalMessage();
  };

  useEffect(() => {
    return cleanupOnUnmount;
  }, []);

  return (
    <section className="auth">
      <div className="auth__container">
        <Link to="/" className="auth__link-logo link">
          <img src={logo} alt="Логотип проекта" />
        </Link>
        <h1 className="auth__title">{props.title}</h1>
        <form className="auth__form" onSubmit={onSubmit}>
          <div className="auth__form-container">
            {isSignUpPage && (
              <InputField
                label="Имя"
                type="text"
                id="name"
                name="name"
                pattern="[A-Za-zА-Яа-яЁё\s\-]+"
                placeholder="Имя"
                autoComplete="off"
                minLength="2"
                maxLength="40"
                onChange={onChange}
                required
                error={errors.name}
                value={values.name || ""}
              />
            )}
            <InputField
              label="E-mail"
              type="email"
              id="email"
              name="email"
              pattern="^[a-zA-Z0-9+_.\-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}$"
              placeholder="pochta@yandex.ru"
              autoComplete="off"
              minLength="4"
              maxLength="40"
              required
              onChange={onChange}
              error={errors.email}
              value={values.email || ""}
            />
            <InputField
              label="Пароль"
              type="password"
              id="password"
              name="password"
              placeholder="••••••••••••••"
              autoComplete="off"
              minLength="6"
              maxLength="20"
              required
              onChange={onChange}
              error={errors.password}
              value={values.password || ""}
            />
          </div>
          <div className="auth__form-container-link">
            <span className="auth__error">{errorGlobalMessage}</span>
            <button className={`auth__button button ${!isValid ? "auth__button_disabled" : ""}`} type="submit" disabled={!isValid}>
              {props.buttonText}
            </button>
            <div className="auth__container-link">
              <p className="auth__link-text">{props.linkDescription}</p>
              <Link to={props.linkUrl} replace onClick={resetErrorGlobalMessage} className="auth__link link">
                {props.linkText}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AuthForm;
