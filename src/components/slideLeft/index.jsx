import { useContext } from "react";
import About from "../about";
import styles from "./slideLeft.module.scss";
import { UIContext } from "../../context/uiContext";
import Button from "../button";
import { FaArrowAltCircleRight } from "react-icons/fa";
import useToggleSlide from "../../hooks/useToggleSlide";

export default function SlideLeft() {
  const { state } = useContext(UIContext);
  const handleToggleSlide = useToggleSlide();

  return (
    <div
      className={styles.leftSlide}
      data-visible={state.leftSlideVisible ? true : false}
    >
      <About />
      <Button
        type="closeLeft"
        icon={<FaArrowAltCircleRight />}
        handleAction={() => handleToggleSlide("LEFT")}
      />
    </div>
  );
}
