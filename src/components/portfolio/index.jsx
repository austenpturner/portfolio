import styles from "./portfolio.module.scss";
import { projects } from "../../config/projects.js";
import Project from "../project";

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <h3>Portfolio</h3>
      {projects.map((project) => {
        return <Project key={project.id} content={project} />;
      })}
    </section>
  );
}
