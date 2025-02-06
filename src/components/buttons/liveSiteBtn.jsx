import { IoArrowRedoSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import styles from "./buttons.module.scss";

export default function LiveSiteBtn({ color, link, name }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={`go to ${name}`}
      className={`${styles.liveSiteBtn} ${styles[color]}`}
    >
      <IoArrowRedoSharp />
      <p>go to live site</p>
    </a>
  );
}

LiveSiteBtn.propTypes = {
  color: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
};
