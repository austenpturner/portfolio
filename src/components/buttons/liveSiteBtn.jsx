import { IoArrowRedoSharp } from "react-icons/io5";
import styles from "./buttons.module.scss";

export default function LiveSiteBtn({ color }) {
  return (
    <button className={`${styles.liveSiteBtn} ${styles[color]}`}>
      <IoArrowRedoSharp />
      <p>go to live site</p>
    </button>
  );
}
