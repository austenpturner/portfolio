import { useContext } from "react";
import { UIContext } from "../context/uiContext";

export default function useToggleSlide() {
  const { uiDispatch } = useContext(UIContext);

  function handleToggleSlide(direction) {
    uiDispatch({ type: `OPEN_${direction}_SLIDE` });
  }

  return handleToggleSlide;
}
