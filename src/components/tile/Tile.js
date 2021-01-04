import React from "react";
import styles from "./tile.module.scss";

const Tab = ({title, link}) => {
  	return (
    	<a href={link} target="_blank" rel="noreferrer">
            <button className={styles.toolBtn}>
                {title}
            </button>
        </a>
  	)
};

export default Tab;