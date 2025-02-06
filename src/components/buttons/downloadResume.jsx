import { IoArrowRedoSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import styles from "./buttons.module.scss";
import resume from "../../assets/resume.pdf";

export default function DownloadResumeBtn({ color, tabIndex }) {
  return (
    <a
      aria-label="download Austen's resume"
      href={resume}
      target="_blank"
      rel="noreferrer"
      download={`AustenTurnerResume.pdf`}
      className={`${styles.downloadResume} ${styles[color]}`}
      tabIndex={tabIndex}
    >
      <IoArrowRedoSharp />
      <p>download resume</p>
    </a>
  );
}

DownloadResumeBtn.propTypes = {
  color: PropTypes.string,
  tabIndex: PropTypes.number,
};
