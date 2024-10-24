import { useContext } from "react";
import Portfolio from "../portfolio";
import styles from "./slideBottom.module.scss";
import { UIContext } from "../../context/uiContext";
import Button from "../button";

export default function SlideBottom() {
  const { state, uiDispatch } = useContext(UIContext);

  function handleToggleSlide(direction) {
    uiDispatch({ type: `OPEN_${direction}_SLIDE` });
  }

  return (
    <div
      className={styles.bottomSlide}
      data-visible={state.bottomSlideVisible ? true : false}
    >
      <Portfolio />
      <Button
        type="close"
        text="CLOSE"
        handleAction={() => handleToggleSlide("BOTTOM")}
      />
    </div>
  );
}
