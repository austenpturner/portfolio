import styles from "./portfolio.module.scss";
import { projects } from "../../config/projects.js";
import Project from "../project";

export default function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <h3>Portfolio</h3>
      {projects.map((project) => {
        return <Project key={project.id} content={project} />;
      })}
    </div>
  );
}
