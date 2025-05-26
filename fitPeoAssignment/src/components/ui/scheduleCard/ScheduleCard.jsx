import React from "react";
import styles from "./ScheduleCard.module.css";

export const ScheduleCard = ({
  bgColor,
  Image,
  heading,
  subHeading1,
  subHeading2,
  txtColor,
}) => {
  return (
    <div style={{ backgroundColor: bgColor}} className={styles.mainContainer}>
      {/* top sec */}
      <div className={styles.topSec}>
        <p className={styles.heading} style={{color:txtColor}}>{heading}</p>
        <p className={styles.img}>{Image}</p>
      </div>
      <p className={styles.subHeading} style={{color:txtColor}}>{subHeading1}</p>
      <p className={styles.subHeading} style={{color:txtColor}}>{subHeading2}</p>
    </div>
  );
};
