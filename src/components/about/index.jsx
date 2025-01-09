import me from "../../assets/me.jpg";
import pothos from "../../assets/pothos.svg";
import styles from "./about.module.scss";
import { about } from "../../config/about";

export default function Intro() {
  return (
    <div className={styles.about}>
      <img className={styles.profilePic} src={me} alt="me" />
      <div className={styles.content}>
        <h3>About</h3>
        <p>{about.aboutPara}</p>
      </div>
      <img className={styles.pothosPic} src={pothos} alt="pothos art" />
    </div>
  );
}
