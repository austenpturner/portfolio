import styles from "./contact.module.scss";
import { contact, socials } from "../../config/connect";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h3 className={styles.header}>Contact.</h3>
      <div>
        <p>{`Do you seen collaboration in our future? Let's connect!`}</p>
      </div>
      <div>
        <p>Here are ways you can reach me:</p>
        <ul>
          {contact.map((item) => {
            return (
              <li key={item.id}>
                <a target="_blank" href={item.link}>
                  {<item.icon />}
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p>Here are places you can find me:</p>
        <ul>
          {socials.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.link} target="_blank">
                  {<item.icon />}
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
