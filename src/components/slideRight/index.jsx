import { useContext } from "react";
import Contact from "../contact";
import styles from "./slideRight.module.scss";
import { UIContext } from "../../context/uiContext";
import Button from "../button";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import useToggleSlide from "../../hooks/useToggleSlide";

export default function SlideRight() {
  const { state } = useContext(UIContext);
  const handleToggleSlide = useToggleSlide();

  return (
    <div
      className={styles.rightSlide}
      data-visible={state.rightSlideVisible ? true : false}
    >
      <Contact />
      <Button
        type="closeRight"
        icon={<FaArrowAltCircleLeft />}
        handleAction={() => handleToggleSlide("RIGHT")}
      />
    </div>
  );
}
