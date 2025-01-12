import { useContext, useEffect } from "react";
import DownloadResumeBtn from "../buttons/downloadResume";
import HamburgerBtn from "../hamburger";
import styles from "./nav.module.scss";
import { UIContext } from "../../context/uiContext";
import useWindowResize from "../../hooks/useWindowResize";
import useSmoothScroll from "../../hooks/useSmoothScroll";

export default function Nav() {
  const { state, uiDispatch } = useContext(UIContext);
  const { width } = useWindowResize();
  const smoothScrollTo = useSmoothScroll();

  function handleToggleMobileNav(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);

    smoothScrollTo(targetId, 1000);

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
            <a
              href="#about"
              onClick={handleToggleMobileNav}
              className="nav-link"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={handleToggleMobileNav}
              className="nav-link"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleToggleMobileNav}
              className="nav-link"
            >
              Contact
            </a>
          </li>
        </ul>
        <DownloadResumeBtn color={width >= 1024 ? "green" : "light"} />
      </nav>
    </>
  );
}
