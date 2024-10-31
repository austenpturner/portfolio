import styles from "./about.module.scss";
import { skills } from "../../config/skills";
import Button from "../button";
import { MdOutlineFileDownload } from "react-icons/md";

export default function About() {
  return (
    <div className={styles.about}>
      <h3 className={styles.header}>About.</h3>
      <div className={styles.content}>
        <div className={styles.introContainer}>
          <p>{`I use React, SCSS, and responsive designs to create intuitive and enticing applications. A website should be easy to navigate and enjoyable to use. While I have experience with CSS frameworks, I like to implement Sass mixins, CSS layouts, and animated transitions to create reusable components with custom styles.`}</p>
          <p>
            {`After attending a coding bootcamp through University of Washington, I worked as a Frontend Developer for TitanFlow and Inscope AI. I've continued to sharpen my skills through continually building projects, learning new technologies, and using tools like Frontend Mentor to practice my skills and stay connected to other developers.`}
          </p>
          <p>{`My other experience includes:`}</p>
          <ul>
            <li>{`utilizing Figma to bring clients vision to their webpage`}</li>
            <li>{`implementing Firebase paired with Redux to create user authentication`}</li>
            <li>{`applying Contentful to provide an easy way for clients to update their website content`}</li>
          </ul>
        </div>
        <div className={styles.resumeContainer}>
          <Button
            text="Download Resume"
            type="resume"
            icon={<MdOutlineFileDownload />}
          />
        </div>
        <div className={styles.skillsContainer}>
          <h4>Skills:</h4>
          <ul>
            {skills.map((skill) => {
              return (
                <li key={skill.id}>
                  {<skill.icon />}
                  <span>{skill.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
