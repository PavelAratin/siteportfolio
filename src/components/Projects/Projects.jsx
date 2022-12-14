import './Projects.scss';

const Projects = () => {
  return (
    <section className="project">
      <div className="container">
        <h2 className="title project__title">Мои работы</h2>
        <ul className="project__list">
          <li className="project__item">
            <a href="#" className="project__link">
              <img
                className="project__img"
                src="images/project1.jpg"
                alt="Первый проет Магазин игр на Реакт"
              ></img>
              <h2 className="title project__img-title">
                Магазин игр на REACT JS
              </h2>
            </a>
          </li>
          <li className="project__item">
            <a href="#" className="project__link">
              <img
                className="project__img"
                src="images/project2.jpg"
                alt="Приложение страны на Реакт"
              ></img>
              <h2 className="title project__img-title">
                Приложение страны REACT JS
              </h2>
            </a>
          </li>
          <li className="project__item">
            <a href="#" className="project__link">
              <img
                className="project__img"
                src="images/project3.jpg"
                alt="Дашборд на Реакт"
              ></img>
              <h2 className="title project__img-title">Дашборд REACT JS</h2>
            </a>
          </li>
          <li className="project__item">
            <a href="#" className="project__link">
              <img
                className="project__img"
                src="images/project4.jpg"
                alt="Интернет магазин Самокатов"
              ></img>
              <h2 className="title project__img-title">
                Интернет магазин Самокатов
              </h2>
            </a>
          </li>
          <li className="project__item">
            <a href="#" className="project__link">
              <img
                className="project__img"
                src="images/project5.jpg"
                alt="Лендинг BLANCHARD"
              ></img>
              <h2 className="title project__img-title">Лендинг BLANCHARD</h2>
            </a>
          </li>
          <li className="project__item">
            <a href="#" className="project__link">
              <img
                className="project__img"
                src="images/project6.jpg"
                alt="Интернет магазин мебели"
              ></img>
              <h2 className="title project__img-title">
                Интернет магазин мебели
              </h2>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
