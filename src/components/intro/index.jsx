import styles from "./intro.module.scss";
// import Nav from "../nav";
import pothos from "../../assets/pothos.svg";

export default function Intro() {
  return (
    <section className={styles.intro} id="intro">
      {/* <Nav /> */}
      <div className={styles.header}>
        <h1>Austen Turner</h1>
        <h2>Frontend Developer</h2>
      </div>
      <img src={pothos} alt="plant vine art" aria-hidden={true} />
    </section>
  );
}
