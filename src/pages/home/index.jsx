import { useContext } from "react";
import { UIContext } from "../../context/uiContext";
import BottomSlide from "../../components/slideBottom";
import LeftSlide from "../../components/slideLeft";
import RightSlide from "../../components/slideRight";
import "./styles.scss";

export default function HomePage() {
  const { uiDispatch } = useContext(UIContext);

  function handleToggleSlide(direction) {
    uiDispatch({ type: `OPEN_${direction}_SLIDE` });
  }

  return (
    <div className="home-page">
      <div className="header-container">
        <h1>Austen Turner</h1>
        <h2>Front End Developer</h2>
      </div>
      <button
        className="leftBtn slideBtn"
        onClick={() => handleToggleSlide("LEFT")}
      >
        About
      </button>
      <button
        className="bottomBtn slideBtn"
        onClick={() => handleToggleSlide("BOTTOM")}
      >
        Portfolio
      </button>
      <button
        className="rightBtn slideBtn"
        onClick={() => handleToggleSlide("RIGHT")}
      >
        Contact
      </button>
      <LeftSlide />
      <BottomSlide />
      <RightSlide />
    </div>
  );
}
