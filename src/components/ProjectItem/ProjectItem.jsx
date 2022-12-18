import styles from "./ProjectItem.scss";

const ProjectItem = ({ project }) => {
  return (
    <li className="project__item">
      <a href="#" className="project__link">
        <img
          className="project__img"
          src={project.img}
          alt={project.title}
        ></img>
        <h2 className="title project__img-title">{project.title}</h2>
      </a>
    </li>
  );
};

export default ProjectItem;
