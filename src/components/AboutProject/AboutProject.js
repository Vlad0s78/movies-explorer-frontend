import HeadingBlock from "../HeadingBlock/HeadingBlock";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project__container">
        <HeadingBlock headerText="О проекте" />
        <div className="about-project__text">
          <div className="about-project__info-text">
            <p className="about-project__title">Дипломный проект включал 5 этапов</p>
            <p className="about-project__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__info-text">
            <p className="about-project__title">На выполнение диплома ушло 5 недель</p>
            <p className="about-project__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__duration">
          <div className="about-project__short-duration">1 неделя</div>
          <div className="about-project__long-duration">4 недели</div>
        </div>

        <div className="about-project__technology">
          <div className="about-project__backend-tech">Back-end</div>
          <div className="about-project__frontend-tech">Front-end</div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
