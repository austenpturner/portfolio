import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import navItems from "../../content/navigation";
import SocialLinks from "../socialLinks/SocialLinks";
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
			<div>
				<SocialLinks />
			</div>
      		<p>&copy; 2020 Austen Turner</p>
    	</footer>
  	)
};

export default Footer;