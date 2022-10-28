import './AboutMe.css';
import Photo from '../../images/my-photo.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="section__heading about-me__heading">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Алексей</h3>
          <p className="about-me__profession">Фронтенд-разработчик, 27 лет</p>
          <p className="about-me__paragraph">
            Я родился в Иркутске, закончил факультет менеджмента БГУ. Я люблю
            слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. После
            того, как прошёл курс по веб-разработке, нашел новую работу в
            продуктовой компании и переехал в Москву.
          </p>
          <a
            className="link about-me__link"
            href="https://github.com/xonika9"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </a>
        </div>
        <img className="about-me__photo" src={Photo} alt="Мое фото" />
      </div>
    </section>
  );
}

export default AboutMe;
