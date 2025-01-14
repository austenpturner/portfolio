import { useEffect, useState } from "react";
import styles from "./buttons.module.scss";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTopBtn({ direction }) {
  const [showBtn, setShowBtn] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showBtn && (
      <button
        aria-label="scroll to top"
        onClick={scrollToTop}
        className={styles.scrollToTopBtn}
      >
        <IoIosArrowUp />
      </button>
    )
  );
}
