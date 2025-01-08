import styles from "./intro.module.scss";
import Nav from "../nav";
import pothos from "../../assets/pothos.svg";

export default function Intro() {
  return (
    <div className={styles.intro}>
      <Nav />
      <div className={styles.header}>
        <h1>Austen Turner</h1>
        <h2>Frontend Developer</h2>
      </div>
      <img src={pothos} alt="pothos art" />
    </div>
  );
}
