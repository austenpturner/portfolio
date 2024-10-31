import { useContext } from "react";
import Button from "../button";
import { UIContext } from "../../context/uiContext";
import "./styles.scss";
import { slideButtons } from "../../config/slideButtons";

export default function Header() {
  const { state, uiDispatch } = useContext(UIContext);

  const headerOffScreenClass = state.activeSlideDirection
    ? `header-slide-${state.activeSlideDirection}`
    : "";

  return (
    <div className={`header ${headerOffScreenClass}`}>
      <div className="header-container">
        <h1>Austen Turner</h1>
        <h2>Front End Developer</h2>
      </div>
      {slideButtons.map((button) => {
        return (
          <Button
            key={button.id}
            type={button.direction}
            text={button.content}
            icon={<button.icon />}
            handleAction={() =>
              uiDispatch({
                type: "SET_ACTIVE_SLIDE",
                payload: button.direction,
              })
            }
          />
        );
      })}
    </div>
  );
}
