import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <section className="notfound">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__subtitle">Страница не найдена</p>
        <Link className="notfound__back-link link" to={-1}>
          Назад
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
