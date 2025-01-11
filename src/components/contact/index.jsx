import styles from "./contact.module.scss";
import { socials } from "../../config/connect";
import pothos from "../../assets/pothos.svg";
import DownloadResumeBtn from "../buttons/downloadResume";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h3>Contact</h3>
      <div className={styles.contactLinks}>
        <p>send me a message</p>
        <p>find me on LinkedIn</p>
      </div>
      <div className={styles.siteLinks}>
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
            >
              <Icon />
            </a>
          );
        })}
      </div>
      <DownloadResumeBtn color={"green"} />
      <img className={styles.pothosImg} src={pothos} alt="pothos art" />
      <p className={styles.copyright}>made by Austen P. Turner, 2024</p>
    </section>
  );
}
