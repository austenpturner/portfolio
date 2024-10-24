import Header from "../../components/header";
import BottomSlide from "../../components/slideBottom";
import LeftSlide from "../../components/slideLeft";
import RightSlide from "../../components/slideRight";
import "./styles.scss";

export default function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <LeftSlide />
      <BottomSlide />
      <RightSlide />
    </div>
  );
}
