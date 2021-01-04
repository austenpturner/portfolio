import React from "react";
import styles from "./project.module.scss";

const Project = ({name, description, github, deployed, tools, featuredImg, supportingImgs}) => {
  	return (
    	<div className={styles.projectContainer}>
            <div className={styles.row}>
                {React.createElement(featuredImg)}
                <div className={styles.column}>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href={deployed.link} target="_blank" rel="noreferrer">{deployed.text}</a>
                    <a href={github.link} target="_blank" rel="noreferrer">{github.text}</a>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <h3>Tools & Technologies Used:</h3>
                    <ul>
                        {tools.map((tool, index) => {
                            return (
                                <li key={index}>{tool}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className={styles.imgContainer}>
                    {supportingImgs.map((img, index) => {
                        return (
                            <span key={index}>
                                {React.createElement(img)}
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
  	)
};

export default Project;