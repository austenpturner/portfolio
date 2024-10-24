import TopNav from "../topNav";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <p>header</p>
      <TopNav />
    </div>
  );
}
