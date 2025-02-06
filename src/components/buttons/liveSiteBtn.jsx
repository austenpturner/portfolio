import { IoArrowRedoSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import styles from "./buttons.module.scss";

export default function LiveSiteBtn({ color, link, name }) {
  return (
    <button className={styles.liveSiteBtn} tabIndex={-1}>
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

LiveSiteBtn.propTypes = {
  color: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
};
