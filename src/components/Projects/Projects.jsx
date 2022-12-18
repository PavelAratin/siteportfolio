import { useState, useEffect } from "react";
import ProjectItem from "../ProjectItem/ProjectItem";
import "./Projects.scss";

const Projects = () => {
  const [projetcs, setProjects] = useState([]);
  useEffect(() => {
    fetch("./dataBase.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.log("Запрос не выполнился", err);
      });
  }, []);
  return (
    <section className="project">
      <div className="container">
        <h2 className="title project__title">Мои работы</h2>
        <ul className="project__list">
          {projetcs.map((project) => (
            <ProjectItem key={project.title} project={project}></ProjectItem>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
