import { logDOM } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectPage.scss";

const ProjectPage = () => {
  const [currentProjects, setCurrentProjects] = useState([]);
  const { title } = useParams();
  useEffect(() => {
    fetch("../dataBase.json")
      .then((res) => res.json())
      .then((data) => {
        setCurrentProjects(data.filter((item) => item.title === title));
      });
  }, []);
  return (
    <div className="current-project">
      <div className="container">
        {currentProjects.map((currentProject) => {
          return (
            <div
              key={currentProject.title}
              className="current-project__wrapper"
            >
              <div className="current-project__left">
                <img
                  className="current-project__img"
                  src={"../" + currentProject.img}
                  alt={currentProject.title}
                ></img>
              </div>
              <div className="current-project__right">
                <h3 className="title current-project__title">
                  {currentProject.title}
                </h3>
                <div className="current-project-stack">
                  <p className="current-project-stack__title">
                    Используемые технологии:
                  </p>
                  <p className="current-project-stack__description">
                    {currentProject.stack}
                  </p>
                </div>
                <div className="current-project__links">
                  <a className="current-project__link" href={currentProject.urlVercel} target="_blank">Web-страничка проекта</a>
                  <a className="current-project__link" href={currentProject.urlGithub} target="_blank">Репозиторий проекта</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectPage;
