import PropTypes from "prop-types";
import Button from "../button";
import { useContext } from "react";
import { UIContext } from "../../context/uiContext";
import "./styles.scss";

export default function Slide({ direction, content, className, button }) {
  const { state, uiDispatch } = useContext(UIContext);
  const Component = content;

  const isActiveSlide = state.activeSlideDirection === direction;

  const handleToggleSlide = () => {
    if (isActiveSlide) {
      uiDispatch({ type: "CLOSE_SLIDES" });
    } else {
      uiDispatch({ type: "SET_ACTIVE_SLIDE", payload: direction });
    }
  };

  const offScreenClass =
    state.activeSlideDirection && !isActiveSlide
      ? `slide-offscreen-${state.activeSlideDirection}`
      : "";

  return (
    <div
      className={`${className} ${
        isActiveSlide ? "active-slide" : ""
      } ${offScreenClass}`}
      data-visible={isActiveSlide}
    >
      <Component />
      <Button
        type={button.type}
        icon={<button.icon />}
        handleAction={handleToggleSlide}
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
