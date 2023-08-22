import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <button type="button" className="navigation__button-nav button" onClick={toggleMenu}></button>
            <nav className={`navigation ${isMenuOpen ? "navigation_active" : ""}`}>
                <button className="navigation__button-close button" onClick={toggleMenu}></button>
                <ul className="navigation__container-link">
                    {(!isAuth && isMenuOpen) && (
                        <li className="navigation__item">
                            <Link to="/" replace className="navigation__link link">Главная</Link>
                        </li>
                    )}
                    <li className="navigation__item">
                        <Link to="/movies" replace className={`navigation__link ${location.pathname === '/movies' ? 'navigation__link_active' : ''} link`}>Фильмы</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/saved-movies" replace className={`navigation__link ${location.pathname === '/saved-movies' ? 'navigation__link_active' : ''} link`}>Сохранённые фильмы</Link>
                    </li>
                </ul>
                <Link to="/profile" replace className="navigation__link link">
                    <div className="navigation__container-profile">
                        <p className="navigation__link-account">Аккаунт</p>
                        <button type="button" className="navigation__button-profile"></button>
                    </div>
                </Link>
            </nav>
            <div className={`navigation__overlay ${isMenuOpen ? 'navigation__overlay_active' : ''}`} onClick={toggleMenu}></div>
        </>
    );
    
}

export default Navigation;
