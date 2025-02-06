import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "./buttons.module.scss";

export default function GitHubRepoBtn({ color, link, name }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={`go to GitHub repository for ${name}`}
      className={`${styles.githubRepoBtn} ${styles[color]}`}
    >
      <FaGithub />
      <p>code repo</p>
    </a>
  );
}

GitHubRepoBtn.propTypes = {
  color: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
};
