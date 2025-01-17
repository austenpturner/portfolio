import { IoArrowRedoSharp } from "react-icons/io5";
import styles from "./buttons.module.scss";

export default function LiveSiteBtn({ color, link, name }) {
  return (
    <button className={styles.liveSiteBtn}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={`go to ${name}`}
        className={styles[color]}
      >
        <IoArrowRedoSharp />
        <p>go to live site</p>
      </a>
    </button>
  );
}
