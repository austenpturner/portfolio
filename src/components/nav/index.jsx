import { useContext, useEffect, useRef } from "react";
import DownloadResumeBtn from "../buttons/downloadResume";
import HamburgerBtn from "../hamburger";
import styles from "./nav.module.scss";
import { UIContext } from "../../context/uiContext";
import useWindowResize from "../../hooks/useWindowResize";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import useFocusTrap from "../../hooks/useFocusTrap";
import { navItems } from "../../config/nav";

export default function Nav() {
  const { state, uiDispatch } = useContext(UIContext);
  const { width } = useWindowResize();
  const smoothScrollTo = useSmoothScroll();
  const navRef = useRef(null);

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
  }, [width, uiDispatch]);

  useFocusTrap(width, state.mobileNavOpen, navRef, () => {
    uiDispatch({ type: "TOGGLE_MOBILE_NAV", payload: false });
    uiDispatch({ type: "TOGGLE_OVERLAY", payload: false });
  });

  console.log(state.mobileNavOpen);

  return (
    <>
      <HamburgerBtn />
      <nav
        ref={navRef}
        data-visible={state.mobileNavOpen}
        className={styles.mainNav}
        aria-hidden={width > 1023 ? false : !state.mobileNavOpen}
      >
        <ul>
          {navItems.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={item.url}
                  onClick={handleToggleMobileNav}
                  className="nav-link"
                  tabIndex={width < 1024 && !state.mobileNavOpen ? -1 : 0}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
        <DownloadResumeBtn
          color={width >= 1024 ? "green" : "light"}
          tabIndex={width < 1024 && !state.mobileNavOpen ? -1 : 0}
        />
      </nav>
    </>
  );
}
