import { IoArrowRedoSharp } from "react-icons/io5";
import styles from "./buttons.module.scss";
import resume from "../../assets/resume.pdf";

export default function DownloadResumeBtn({ color }) {
  return (
    <button className={styles.downloadResume}>
      <a
        aria-label="download resume"
        href={resume}
        target="_blank"
        rel="noreferrer"
        download={`AustenTurnerResume.pdf`}
        className={styles[color]}
      >
        <IoArrowRedoSharp />
        <p>download resume</p>
      </a>
    </button>
  );
}
