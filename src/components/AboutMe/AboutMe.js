import { Link } from "react-router-dom";
import HeadingBlock from "../HeadingBlock/HeadingBlock";
import studentPhoto from "../../images/my-photo.jpg";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="about-me">
      <HeadingBlock headerText="Студент" />
      <div className="about-me__container">
        <div className="about-me__description">
          <h4 className="about-me__name">Владислав</h4>
          <p className="about-me__info">Фронтенд-разработчик, 26 лет</p>
          <p className="about-me__text">
            Я родился на Дальнем Востоке в городе Комсомольск-на-Амуре, сейчас проживаю в Санкт-Петербурге. Учусь в Таможенной академии на факультете Таможенное дело. В свободное время занимаюсь
            плаванием, играю в Сквош, пишу свой первый проект. С самого детства я с компьютерами на "Ты". Первое время увлекался веб разработкой, но с 2014 года перешел на 3D моделирование, получалось
            даже заработать на фрилансе. Сейчас закончил курс по веб-разработке, планирую дописать свой проект, и в дальнейшем устроиться на постоянную работу.
          </p>
          <Link className="about-me__github-link link" to={"https://github.com/Vlad0s78"} target="_blank">
            Github
          </Link>
        </div>
        <img className="about-me__photo" alt="Фотография студента" src={studentPhoto} />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
