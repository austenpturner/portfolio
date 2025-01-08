import me from "../../assets/me.jpg";
import styles from "./intro.module.scss";

export default function Intro() {
  return (
    <div className={styles.about}>
      <div>
        <img src={me} alt="me" />
      </div>
    </div>
  );
}
