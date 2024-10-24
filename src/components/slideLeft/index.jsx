import { useContext } from "react";
import About from "../about";
import styles from "./slideLeft.module.scss";
import { UIContext } from "../../context/uiContext";
import Button from "../button";

export default function SlideLeft() {
  const { state, uiDispatch } = useContext(UIContext);

  function handleToggleSlide(direction) {
    uiDispatch({ type: `OPEN_${direction}_SLIDE` });
  }

  return (
    <div
      className={styles.leftSlide}
      data-visible={state.leftSlideVisible ? true : false}
    >
      <About />
      <Button
        type="close"
        text="CLOSE"
        handleAction={() => handleToggleSlide("LEFT")}
      />
    </div>
  );
}
