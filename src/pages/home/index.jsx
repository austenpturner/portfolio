import Intro from "../../components/intro";
import About from "../../components/about";
import "./styles.scss";
import Overlay from "../../components/overlay";

export default function HomePage() {
  return (
    <div className="home-page">
      <Overlay />
      <Intro />
      {/* <About /> */}
    </div>
  );
}
