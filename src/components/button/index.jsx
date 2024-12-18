import PropTypes from "prop-types";
import "./styles.scss";

export default function Button({ type, handleAction, text, icon }) {
  return (
    <button className={type} onClick={handleAction}>
      <span>{text && text}</span>
      {icon && icon}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  handleAction: PropTypes.func,
  icon: PropTypes.element,
};
