import { IoArrowRedoSharp } from "react-icons/io5";
import styles from "./buttons.module.scss";

export default function DownloadResumeBtn({ color }) {
  return (
    <button className={`${styles.downloadResume} ${styles[color]}`}>
      <IoArrowRedoSharp />
      <p>download resume</p>
    </button>
  );
}
