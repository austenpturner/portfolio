import * as React from "react"
import Layout from "../components/layout/layout";
import styles from "../components/layout/layout.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const IndexPage = () => {
  return (
    <Layout>
      <section className={styles.intro} id="intro">
        <h1>Hi, I'm Austen.</h1>
        <h2>A Full Stack Web Developer</h2>
        <FontAwesomeIcon icon={faChevronDown} className={styles.bounce}/>
      </section>
      <section className={styles.about} id="about">
        <h1>About Me</h1>
      </section>
      <section className={styles.portfolio} id="portfolio">
        <h1>Portfolio</h1>
      </section>
      <section className={styles.contact} id="contact">
        <h1>Contact</h1>
      </section>
    </Layout>
  )
}

export default IndexPage
