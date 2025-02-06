import { IoArrowRedoSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import styles from "./buttons.module.scss";
import resume from "../../assets/resume.pdf";

export default function DownloadResumeBtn({ color, tabIndex }) {
  return (
    <button className={styles.downloadResume} tabIndex={-1}>
      <a
        aria-label="download resume"
        href={resume}
        target="_blank"
        rel="noreferrer"
        download={`AustenTurnerResume.pdf`}
        className={styles[color]}
        tabIndex={tabIndex}
      >
        <IoArrowRedoSharp />
        <p>download resume</p>
      </a>
    </button>
  );
}

DownloadResumeBtn.propTypes = {
  color: PropTypes.string,
  tabIndex: PropTypes.number,
};
