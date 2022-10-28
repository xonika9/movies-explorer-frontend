import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="about">
      <h2 className="section__heading about-project__heading">О проекте</h2>
      <div className="about-project__text">
        <div className="about-project__column">
          <h3 className="about-project__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__column">
          <h3 className="about-project__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timing">
        <div className="about-project__timing-item">
          <p className="about-project__timing-heading about-project__timing-heading_highlighted">
            1 неделя
          </p>
          <p className="about-project__timing-text">Back-end</p>
        </div>
        <div className="about-project__timing-item">
          <p className="about-project__timing-heading">4 недели</p>
          <p className="about-project__timing-text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
