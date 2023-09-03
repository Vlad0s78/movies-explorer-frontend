import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h5 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h5>
      <div className="footer__container">
        <p className="footer__copyright">© 2023</p>
        <nav className="footer__navigation">
          <ul className="footer__navigation-links">
            <li>
              <Link className="footer__navigation-link link" to="https://practicum.yandex.ru/" target="_blank">
                Яндекс.Практикум
              </Link>
            </li>
            <li>
              <Link className="footer__navigation-link link" to="https://github.com/Vlad0s78" target="_blank">
                Github
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
