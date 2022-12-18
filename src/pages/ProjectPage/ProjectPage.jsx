import { useParams } from "react-router-dom";
import "./ProjectPage.scss";

const ProjectPage = () => {
  const { title } = useParams();
  return (
    <div className="project">
      <div className="container">
        <h1>Project {title}</h1>
      </div>
    </div>
  );
};

export default ProjectPage;
