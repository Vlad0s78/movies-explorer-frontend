import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import InputField from "../InputField/InputField";

function AuthForm(props) {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/sign-up";

  return (
    <section className="auth">
      <div className="auth__container">
        <Link to="/" className="auth__link-logo link">
          <img src={logo} alt="Логотип проекта" />
        </Link>
        <h1 className="auth__title">{props.title}</h1>
        <form className="auth__form" onSubmit={props.onSubmit}>
          <div className="auth__form-container">
            {isSignUpPage && <InputField label="Имя" type="text" id="name" placeholder="Виталий" autocomplete="off" required />}
            <InputField label="E-mail" type="email" id="email" placeholder="pochta@yandex.ru" autocomplete="off" required />
            <InputField label="Пароль" type="password" id="password" placeholder="••••••••••••••" autocomplete="off" required error={isSignUpPage && "Что-то пошло не так..."} />
          </div>
          <div className="auth__form-container-link">
            <button className="auth__button button" type="submit">
              {props.buttonText}
            </button>
            <div className="auth__container-link">
              <p className="auth__link-text">{props.linkDescription}</p>
              <Link to={props.linkUrl} replace className="auth__link link">
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
