import React, { useState } from "react";
import Project from "../project/Project";
import {FaArrowRight} from "react-icons/fa";
import {FaArrowLeft} from "react-icons/fa";
import styles from "./carousel.module.scss";

const Carousel = ({projects}) => {
    const [current, setCurrent] = useState(0);
    const length = projects.length;

    const slideRight = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if(!Array.isArray(projects) || projects.length <= 0) {
        return null;
    };

  	return (
    	<div className={styles.carousel}>
            <FaArrowLeft className={styles.arrow} onClick={slideLeft} />
            <FaArrowRight className={styles.arrow} onClick={slideRight} />
            {projects.map((props, index) => {
                return (
                    <div className={index === current ? styles.active : styles.hidden} key={index}>
                        {index === current && (
                            <Project {...props} />
                        )}
                    </div>
                )
            })}
        </div>
  	)
};

export default Carousel;