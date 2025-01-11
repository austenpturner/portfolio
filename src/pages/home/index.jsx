import Intro from "../../components/intro";
import About from "../../components/about";
import "./styles.scss";
import Overlay from "../../components/overlay";
import Portfolio from "../../components/portfolio";
import Contact from "../../components/contact";
import useSmoothScroll from "../../hooks/useSmoothScroll";

export default function HomePage() {
  useSmoothScroll();
  return (
    <div className="home-page">
      <Overlay />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
