import React, { useState } from "react";
import Layout from "../components/layout/layout";
import styles from "../components/layout/layout.module.scss";

// Intro section imports:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// About section imports:
import aboutContent from "../content/about";
import AboutImage from "../components/image_files/Me.js";
import Tile from "../components/tile/Tile";

// Portfolio section imports:
import portfolioContent from "../content/portfolio";
import { FaCaretUp } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaGithubSquare } from "react-icons/fa";
import Carousel from "../components/carousel/Carousel";

// Contact section imports:
import contactInfo from "../content/contact";

const IndexPage = () => {
  const [selectedItem, setSelectedItem] = useState(false);

  function handleShowMoreInfo(event) {
    const id = event.target.parentElement.id;
    if (id === selectedItem) {
      setSelectedItem(false);
    } else {
      setSelectedItem(id);
    }
  };

  return (
    <Layout>
      <section className={styles.intro} id="intro">
        <h1>Hi, I'm Austen.</h1>
        <h2>A Full Stack Web Developer</h2>
        <FontAwesomeIcon icon={faChevronDown} className={styles.bounce}/>
      </section>
      <section className={styles.about} id="about">
        <h2>About Me</h2>
        <AboutImage />
        {aboutContent.paragraphs.map((para, index) => {
          return (
            <p key={index}>{para}</p>
          )
        })}
        <h3>A few tools and technologies I've been working with lately include:</h3>
        <div className={styles.toolsContainer}>
          {aboutContent.tools.map((props, index) => {
            return (
              <Tile key={index} {...props}></Tile>
            )
          })}
        </div>
      </section>
      <section className={styles.portfolio} id="portfolio">
        <h2>Portfolio</h2>
        <div className={styles.projectContainer}>
          {portfolioContent.map((project, index) => {
            return (
              <div key={index} className={styles.project} id={index}>
                <h3>{project.name}</h3>
                <div className={styles.mobileImgContainer}>
                  {React.createElement(project.mobileImg)}
                </div>
                {project.deployed.link !== "" && (
                  <a href={project.deployed.link} target="_blank" rel="noreferrer">
                    <FiExternalLink />
                  </a>
                )}
                {project.github.link !== "" && (
                  <a href={project.github.link} target="_blank" rel="noreferrer">
                    <FaGithubSquare />
                  </a>
                )}
                <p className={styles.infoBtn} onClick={handleShowMoreInfo}>
                  More info
                  <FaCaretUp />
                </p>
                <div 
                  className={index === parseInt(selectedItem) ? styles.moreInfoContainer : `${styles.hide} ${styles.moreInfoContainer}`}
                >
                  <p>{project.description}</p>
                  
                  <ul>
                    <h3>Tools & Technologies:</h3>
                    {project.tools.map((tool, index) => {
                        return (
                            <li key={index}>{tool}</li>
                        )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
        <Carousel projects={portfolioContent} className={styles.carousel}/>
      </section>
      <section className={styles.contact} id="contact">
        <h2>Contact</h2>
        <h3>{contactInfo.subHeading}</h3>
        <p>{contactInfo.info}</p>
        <p>
          Email me at 
          <a href={contactInfo.emailLink} target="_blank" rel="noreferrer">{contactInfo.email}</a>
        </p>
        <p>
          Connect with me on
          <a href={contactInfo.linkedinLink} target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
        <p>
          View more of my work on
          <a href={contactInfo.githubLink} target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </section>
    </Layout>
  )
}

export default IndexPage
