import React, { useState, useEffect } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import navItems from "../../content/navigation";
import styles, {toggle1, toggle2, toggle3, burgerLine, slideUp, slideDown} from "./header.module.scss";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  // debounce function & mark scroll event at passive 
  // creates smooth CSS transition on page scroll
  // source: https://css-tricks.com/styling-based-on-scroll-position/
  useEffect(() => {
    const debounce = (fn) => {
      let frame;
      return (...params) => {
        if (frame) { 
          cancelAnimationFrame(frame);
        };
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      } 
    };

    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
    };

    document.addEventListener('scroll', debounce(storeScroll), { passive: true });

    storeScroll();
  }, []);

  function handleNavSlide() {
    setNavOpen(!navOpen);
  };

  return (
    <div className={styles.headerContainer}>
      <header>
        <AnchorLink to="/#intro" title="Austen Turner" className={styles.logo}/>
        <nav>
        <ul>
          {navItems.map(({link, title}, index) => {
            console.log(title);
            if (title === "Resume") {
              return (
                <li key={index}>
                  <a href={link} target="_blank" rel="noreferrer noopener">{title}</a>
                </li>
              )
            } else {
              return (
                <li key={index}>
                  <AnchorLink to={link} title={title}/>
                </li>
              )
            }
          })}
        </ul>
        <div className={styles.burger} onClick={handleNavSlide}>
          <div className={navOpen ? toggle1 : burgerLine}></div>
          <div className={navOpen ? toggle2 : burgerLine}></div>
          <div className={navOpen ? toggle3 : burgerLine}></div>
        </div>
        </nav>
      </header>
      <div id={styles.navSlider} className={navOpen ? slideDown : slideUp}>
        <ul>
          {navItems.map(({link, title}, index) => {
            return (
              <li key={index} onClick={() => setNavOpen(false)}>
                <AnchorLink to={link} title={title} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
};

export default Header;