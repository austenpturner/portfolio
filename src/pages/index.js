import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Layout from "../components/layout/layout";
import styles from "../components/layout/layout.module.scss";
// Intro section imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// About section imports
import aboutContent from "../content/about";
import AboutImage from "../components/image_files/Me.js";
import Tile from "../components/tile/Tile";
// Portfolio section imports
import portfolioContent from "../content/portfolio";
import Project from "../components/project/Project";

const IndexPage = () => {
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
        <Carousel>
          {portfolioContent.map((props, index) => {
            return (
              <Project key={index} {...props} />
            )
          })}
        </Carousel>
      </section>
      <section className={styles.contact} id="contact">
        <h2>Contact</h2>
      </section>
    </Layout>
  )
}

export default IndexPage
