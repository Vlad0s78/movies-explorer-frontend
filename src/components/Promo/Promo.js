import logoPromo from "../../images/promo-logo.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <div className="promo__container">
          <div>
            <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
            <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          </div>
          <div>
            <img className="promo__logo" src={logoPromo} alt="Логотип планеты" />
          </div>
        </div>
        <a className="promo__link" href="#about-project">
          <div className="promo__button button" type="button">
            Узнать больше
          </div>
        </a>
      </div>
    </section>
  );
}

export default Promo;
