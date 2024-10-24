import Header from "../../components/header";
import Slide from "../../components/slide";
import { slides } from "../../config/slides";
import "./styles.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />
      {slides.map((slide) => {
        return (
          <Slide
            key={slide.id}
            direction={slide.direction}
            className={slide.className}
            content={slide.content}
            button={slide.button}
          />
        );
      })}
    </div>
  );
}
