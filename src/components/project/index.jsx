import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import LiveSiteBtn from "../buttons/liveSiteBtn";
import styles from "./project.module.scss";

export default function Project({ content }) {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      className={`${styles.project} ${isVisible ? "visible" : "hidden"}`}
      ref={elementRef}
    >
      <div className={styles.descriptionContainer}>
        <h4>{content.title}</h4>
        <p>{content.description}</p>
      </div>
      <img
        className={`${styles.desktopImg} ${
          content.id % 2 === 0 && styles.alternateDesktop
        }`}
        src={content.desktopImage}
        alt="project image"
      />
      <img
        className={`${styles.iPadImg} ${
          content.id % 2 === 0 && styles.alternateiPad
        }`}
        src={content.iPadImage}
        alt="project image"
      />
      <LiveSiteBtn color={"light"} link={content.link} name={content.title} />
    </div>
  );
}
