import { useContext } from "react";
import Portfolio from "../portfolio";
import styles from "./slideBottom.module.scss";
import { UIContext } from "../../context/uiContext";
import Button from "../button";
import { FaArrowAltCircleDown } from "react-icons/fa";
import useToggleSlide from "../../hooks/useToggleSlide";

export default function SlideBottom() {
  const { state } = useContext(UIContext);
  const handleToggleSlide = useToggleSlide();

  return (
    <div
      className={styles.bottomSlide}
      data-visible={state.bottomSlideVisible ? true : false}
    >
      <Portfolio />
      <Button
        type="closeBottom"
        icon={<FaArrowAltCircleDown />}
        handleAction={() => handleToggleSlide("BOTTOM")}
      />
    </div>
  );
}
