import React from "react";
import styles from "./MenuButton.module.css";
export const MenuButton = ({ icon: Icon, lable, active }) => {
  return (
    <div
      className={`${styles.btnContainer} ${
        active ? styles.active : styles.inactive
      }`}
    >
      {
        <Icon
          className={`${styles.icon} ${
            active ? styles.active : styles.inactive
          }`}
        />
      }
      <p
        className={`${styles.lable} ${
          active ? styles.active : styles.inactive
        }`}
      >
        {lable}
      </p>
    </div>
  );
};
