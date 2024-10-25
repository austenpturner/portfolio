import { useContext } from "react";
import Button from "../button";
import { UIContext } from "../../context/uiContext";
import styles from "./header.module.scss";
import { slideButtons } from "../../config/slideButtons";
import useToggleSlide from "../../hooks/useToggleSlide";

export default function Header() {
  const { state } = useContext(UIContext);
  const handleToggleSlide = useToggleSlide();

  return (
    <div
      className={`${styles.header} 
      ${state.leftSlideVisible && styles.slideLeft} 
      ${state.rightSlideVisible && styles.slideRight} 
      ${state.bottomSlideVisible && styles.slideUp}`}
    >
      <div className={styles.headerContainer}>
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
            handleAction={() => handleToggleSlide(button.toggle)}
          />
        );
      })}
    </div>
  );
}
