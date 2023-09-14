import React from "react";
import headerLogo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn }) {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <header className={`header ${isLandingPage ? "header_landing" : ""}`}>
      <div className="header__container">
        <Link className="header__logo-link link" to="/">
          <img src={headerLogo} alt="Логотип проекта" className="header__logo" />
        </Link>
        {isLoggedIn ? (
          <Navigation isLoggedIn={isLoggedIn} />
        ) : (
          <div className="header__auth-container">
            <Link to="signup" replace className="header__link-signup link">
              Регистрация
            </Link>
            <Link to="signin" replace>
              <button className="header__link-signin button">Войти</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
