import styles from "./contact.module.scss";
import { contact, socials } from "../../config/connect";
import pothos from "../../assets/pothos.svg";
import DownloadResumeBtn from "../buttons/downloadResume";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

export default function Contact() {
  const { isVisible, elementRef } = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <section className={styles.contact} id="contact">
      <h3>Contact</h3>
      <div className={styles.contactLinks}>
        {contact.map((type) => {
          return (
            <a
              key={type.id}
              href={type.link}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              {type.text}
            </a>
          );
        })}
      </div>
      <div
        className={`${styles.siteLinks} ${isVisible ? "visible" : "hidden"}`}
        ref={elementRef}
      >
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`go to Austen's ${social.name}`}
            >
              <Icon />
            </a>
          );
        })}
      </div>
      <DownloadResumeBtn color={"green"} />
      <img
        className={styles.pothosImg}
        src={pothos}
        alt="plant vine art"
        aria-hidden={true}
      />
      <p className={styles.copyright}>made by Austen P. Turner, 2024</p>
    </section>
  );
}
