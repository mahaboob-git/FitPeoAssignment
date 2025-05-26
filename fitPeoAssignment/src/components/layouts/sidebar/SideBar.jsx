import React from "react";
import styles from "./SideBar.module.css";
import { MenuButton } from "../../ui/menuButton/MenuButton";
import { generalBtn, toolsBtn } from "../../../data/menuBtnData";
import { IoSettingsSharp } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
export const SideBar = () => {
  return (
    <>
      {/* responsive menu icon */}
      <div className={styles.resMenuIconContainer}>
        <HiMenu size={30} />
      </div>
    <div className={styles.mainContainer}>
      <div className={styles.firstSec}>
        {/* Heading text */}
        <p className={styles.headingMain}>
          Health<span className={styles.headingSub}>care.</span>
        </p>
        {/* General buttons section */}
        <div>
          <p className={styles.menuHeading}>General</p>
          {generalBtn.map(({ id, icon, label, active }) => (
            <MenuButton icon={icon} lable={label} active={active} key={id} />
          ))}
        </div>
        {/* tools button section */}
        <div>
          <p className={styles.menuHeading}>Tools</p>
          {toolsBtn.map(({ id, icon, label, active }) => (
            <MenuButton icon={icon} lable={label} active={active} key={id} />
          ))}
        </div>
      </div>
      {/* settings button */}
      <MenuButton icon={IoSettingsSharp} lable="Settings" active={false} />
    </div>
    </>
  );
};
