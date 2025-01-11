import { useContext, useEffect } from "react";
import DownloadResumeBtn from "../buttons/downloadResume";
import HamburgerBtn from "../hamburger";
import styles from "./nav.module.scss";
import { UIContext } from "../../context/uiContext";
import useWindowResize from "../../hooks/useWindowResize";

export default function Nav() {
  const { state, uiDispatch } = useContext(UIContext);
  const { width } = useWindowResize();

  function handleToggleMobileNav(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    uiDispatch({ type: "TOGGLE_MOBILE_NAV", payload: !state.mobileNavOpen });
    uiDispatch({ type: "TOGGLE_OVERLAY", payload: false });
  }

  useEffect(() => {
    if (width >= 1024) {
      uiDispatch({ type: "TOGGLE_MOBILE_NAV", payload: false });
      uiDispatch({ type: "TOGGLE_OVERLAY", payload: false });
    }
  }, [width]);

  return (
    <>
      <HamburgerBtn />
      <nav data-visible={state.mobileNavOpen} className={styles.mainNav}>
        <ul>
          <li>
            <a href="#about" onClick={handleToggleMobileNav}>
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={handleToggleMobileNav}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleToggleMobileNav}>
              Contact
            </a>
          </li>
        </ul>
        <DownloadResumeBtn color={width >= 1024 ? "green" : "light"} />
      </nav>
    </>
  );
}
