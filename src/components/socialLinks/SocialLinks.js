import React from "react";
import GitHubSVG from "../svgs/GitHubSVG";
import MailSVG from "../svgs/MailSVG";
import LinkedInSVG from "../svgs/LinkedInSVG";
import InstaSVG from "../svgs/InstaSVG";
import CodePenSVG from "../svgs/CodePenSVG";
import styles from "./socialLinks.module.scss";

const SocialLinks = () => {
  	return (
    	<div className={styles.socialLinks}>
			<a href="mailto:austenpturner@msn.com" rel="noreferrer" target="_blank">
				<MailSVG /> 
			</a>
			<a href="https://www.linkedin.com/in/austenpturner/" rel="noreferrer" target="_blank">
				<LinkedInSVG />
			</a>
			<a href="https://github.com/austenpturner" rel="noreferrer" target="_blank">
				<GitHubSVG />
			</a>
			<a href="https://codepen.io/austenpturner" rel="noreferrer" target="_blank">
				<CodePenSVG />
			</a>
			<a href="https://www.instagram.com/austenpturner/" rel="noreferrer" target="_blank">
				<InstaSVG />
			</a>
    	</div>
  	)
};

export default SocialLinks;