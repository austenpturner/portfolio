import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import navItems from "../../content/navigation";
import GitHubIcon from "../image_files/GitHubIcon";
import OutlookIcon from "../image_files/OutlookIcon";
import CodePenIcon from "../image_files/CodePenIcon";
import LinkedInIcon from "../image_files/LinkedInIcon";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <ul className={styles.footerLinks}>
        {navItems.map(({link, title}, index) => {
          return (
            <li key={index}>
                <AnchorLink to={link} title={title}/>
            </li>
          )
        })}
      </ul>
      <ul className={styles.socialLinks}>
        <li>
          <a href="https://github.com/austenpturner" rel="noreferrer" target="_blank">
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a href="mailto:austenpturner@msn.com" rel="noreferrer" target="_blank">
            <OutlookIcon />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/austenpturner" rel="noreferrer" target="_blank">
            <CodePenIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/austenpturner/" rel="noreferrer" target="_blank">
            <LinkedInIcon />
          </a>
        </li>
      </ul>
      <p>&copy; 2020 Austen Turner</p>
    </footer>
  )
};

export default Footer;