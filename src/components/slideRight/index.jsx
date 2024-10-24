import { useContext } from "react";
import Contact from "../contact";
import styles from "./slideRight.module.scss";
import { UIContext } from "../../context/uiContext";
import Button from "../button";

export default function SlideRight() {
  const { state, uiDispatch } = useContext(UIContext);

  function handleToggleSlide(direction) {
    uiDispatch({ type: `OPEN_${direction}_SLIDE` });
  }

  return (
    <div
      className={styles.rightSlide}
      data-visible={state.rightSlideVisible ? true : false}
    >
      <Contact />
      <Button
        type="close"
        text="CLOSE"
        handleAction={() => handleToggleSlide("RIGHT")}
      />
    </div>
  );
}
