import React from "react";
import styles from "./tab.module.scss";

const Tab = ({title, link}) => {
  	return (
    	<a href={link} target="_blank">
            <button className={styles.toolBtn}>
                {title}
            </button>
        </a>
  	)
};

export default Tab;