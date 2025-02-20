import me from "../../assets/me.jpg";
import pothos from "../../assets/pothos.svg";
import styles from "./about.module.scss";
import { about } from "../../config/about";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function Intro() {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.2,
  });

  return (
    <section className={styles.about} id="about">
      <img className={styles.profilePic} src={me} alt="picture of Austen" />
      <div className={styles.content}>
        <h3>About</h3>
        <p ref={elementRef} className={isVisible ? "visible" : "hidden"}>
          {about.aboutPara}
        </p>
      </div>
      <img
        className={styles.pothosPic}
        src={pothos}
        alt="plant vine art"
        aria-hidden={true}
      />
    </section>
  );
}
