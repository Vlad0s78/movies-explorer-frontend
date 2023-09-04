import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <article className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__links">
        <li className="portfolio__links-item">
          <Link className="portfolio__link link" to="https://github.com/Vlad0s78/how-to-learn" target="_blank">
            Статичный сайт
            <span className="portfolio__link-arrow">↗</span>
          </Link>
        </li>
        <li className="portfolio__links-item">
          <Link className="portfolio__link link" to="https://vlad0s78.github.io/russian-travel/" target="_blank">
            Адаптивный сайт
            <span className="portfolio__link-arrow">↗</span>
          </Link>
        </li>
        <li className="portfolio__links-item">
          <Link className="portfolio__link link" to="https://vladislove.students.nomoreparties.co" target="_blank">
            Одностраничное приложение
            <span className="portfolio__link-arrow">↗</span>
          </Link>
        </li>
      </ul>
    </article>
  );
}

export default Portfolio;
