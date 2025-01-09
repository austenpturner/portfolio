import { useContext, useEffect } from "react";
import DownloadResumeBtn from "../buttons/downloadResume";
import HamburgerBtn from "../hamburger";
import styles from "./nav.module.scss";
import { UIContext } from "../../context/uiContext";
import useWindowResize from "../../hooks/useWindowResize";

export default function Nav() {
  const { state, uiDispatch } = useContext(UIContext);
  const { width } = useWindowResize();

  function handleToggleMobileNav() {
    uiDispatch({ type: "TOGGLE_MOBILE_NAV", payload: !state.mobileNavOpen });
    uiDispatch({ type: "TOGGLE_OVERLAY", payload: !state.overlayVisible });
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
      <nav data-visible={state.mobileNavOpen}>
        <ul>
          <li>
            <a href="" onClick={handleToggleMobileNav}>
              About
            </a>
          </li>
          <li>
            <a href="" onClick={handleToggleMobileNav}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="" onClick={handleToggleMobileNav}>
              Contact
            </a>
          </li>
        </ul>
        <DownloadResumeBtn color={"light"} />
      </nav>
    </>
  );
}
