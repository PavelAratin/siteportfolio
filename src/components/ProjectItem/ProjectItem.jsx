import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProjectItem.scss";

const ProjectItem = ({ project }) => {
  const navigate = useNavigate();
  const clickHandle = () => {
    navigate(`/projects/${project.title}`, { replace: true });
  };
  return (
    <li className="project__item">
      <div className="project__item-box" onClick={clickHandle}>
        <img
          className="project__img"
          src={project.img}
          alt={project.title}
        ></img>
        <h2 className="title project__img-title">{project.title}</h2>
      </div>
    </li>
  );
};

export default ProjectItem;
