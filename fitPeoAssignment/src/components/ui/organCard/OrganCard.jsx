import React from "react";
import styles from "./OrganCard.module.css";
export const OrganCard = ({ Image, progressBarColor, heading, subHeading }) => {
  return (
    <div className={styles.mainContainer}>
      {/* top section */}
      <div className={styles.topSec}>
        <img src={Image} className={styles.organImg}/>
        <p className={styles.heading}>{heading}</p>
      </div>
      {/* bottom section */}
      <div className={styles.btmSec}>
        <p className={styles.subHeading}>{subHeading}</p>
        {/* progress bar */}
        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{ backgroundColor: progressBarColor }}
          />
        </div>
      </div>
    </div>
  );
};
