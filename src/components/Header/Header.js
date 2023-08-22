import React from "react";
import headerLogo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ isAuth = false }) {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <header className={`header ${isLandingPage ? "header__landing" : ""}`}>
      <div className="header__container">
        <Link className="header__logo-link link" to="/">
          <img src={headerLogo} alt="Логотип проекта" className="header__logo" />
        </Link>
        {isAuth && <Navigation />}
        {!isAuth && (
          <div className="header__auth-container">
            <Link to="sign-up" replace className="header__link-signup link">
              Регистрация
            </Link>
            <Link to="sign-in" replace>
              <button className="header__link-signin button">Войти</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
