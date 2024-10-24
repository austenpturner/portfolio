import PropTypes from "prop-types";
import Button from "../button";
import useToggleSlide from "../../hooks/useToggleSlide";
import { useContext } from "react";
import { UIContext } from "../../context/uiContext";
import "./styles.scss";

export default function Slide({ direction, content, className, button }) {
  const { state } = useContext(UIContext);
  const handleToggleSlide = useToggleSlide();
  const Component = content;

  function getContext() {
    switch (direction) {
      case "left":
        return state.leftSlideVisible;
      case "bottom":
        return state.bottomSlideVisible;
      case "right":
        return state.rightSlideVisible;
      default:
        break;
    }
  }

  return (
    <div className={className} data-visible={getContext() ? true : false}>
      <Component />
      <Button
        type={button.type}
        icon={<button.icon />}
        handleAction={() => handleToggleSlide(button.actionDirection)}
      />
    </div>
  );
}

Slide.propTypes = {
  direction: PropTypes.string.isRequired,
  content: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  button: PropTypes.shape({
    type: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    actionDirection: PropTypes.string.isRequired,
  }).isRequired,
};
