import React from "react";
import styles from "./DashboardMainContainer.module.css";
import { FiSearch } from "react-icons/fi";
import { BiSolidBell } from "react-icons/bi";
import { IoChevronDownOutline,IoArrowForwardSharp } from "react-icons/io5";
import body from "../../../assets/body.png";
import { FaSearchPlus } from "react-icons/fa";
import { MdOutline360 } from "react-icons/md";
import heart from "../../../assets/heart.png";
import leg from "../../../assets/leg.png";
import { OrganCard } from "../../ui/organCard/OrganCard";
import lungs from "../../../assets/lungs.png";
import bone from "../../../assets/bone.png";
import teeth from "../../../assets/teeth.png";
import { ActivitySection } from "../../ui/activitySection/ActivitySection";


export const DashboardMainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      {/* searchBar main section */}
      <div className={styles.searchBarMainContainer}>
        <div className={styles.searchIconAndInput}>
          <FiSearch size={22} className={styles.searchIcon} />
          <input placeholder="Search" className={styles.inputField} />
        </div>
        {/* notification section */}
        <BiSolidBell size={22} className={styles.bellIcon} />
      </div>

      {/* dashboard middle section */}
      <div className={styles.dashboardMiddleContainer}>
        {/* top container */}
        <div className={styles.topContainer}>
          {/* heading txt */}
          <p className={styles.mainHeadingTxt}>Dashboard</p>
          {/* right sec */}
          <div className={styles.rightSec}>
            <p className={styles.subTxt}>This Week</p>
            <IoChevronDownOutline size={12} className={styles.chevIcon} />
          </div>
        </div>
        {/* middle container */}
        <div className={styles.middleContainer}>
          {/* left section */}
          <div className={styles.leftSec}>
            <div className={styles.imgContainer}>
              <img src={body} className={styles.bodyImg} />
              <FaSearchPlus size={20} className={styles.bodySearchIcon} />
              <div className={styles.rotationIconContainer}>
                <div className={styles.line} />
                <MdOutline360 size={20} className={styles.rotationIcon} />
                <div className={styles.line} />
              </div>
              {/* heart section */}
              <div className={styles.organSec}>
                <div className={styles.scanner} />
                <div className={styles.organContent}>
                  <img src={heart} className={styles.organImg} />
                  <p className={styles.organTxt}>Healthly Heart</p>
                </div>
              </div>
              {/* leg section */}
              <div className={styles.legOrganSec}>
                <div className={styles.scanner} />
                <div
                  className={`${styles.organContent} ${styles.legOrganContent}`}
                >
                  <img src={leg} className={styles.organImg} />
                  <p className={`${styles.organTxt} ${styles.legOrganTxt}`}>
                    Healthly Leg
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* right section */}
          <div>
            <OrganCard
              Image={lungs}
              heading="Lungs"
              subHeading="Date: 26 okt 2021"
              progressBarColor="var(--brown)"
            />
            <OrganCard
              Image={teeth}
              heading="Teeth"
              subHeading="Date: 26 okt 2021"
              progressBarColor="var(--green)"
            />
            <OrganCard
              Image={bone}
              heading="Bone"
              subHeading="Date: 26 okt 2021"
              progressBarColor="var(--orange)"
            />
            <div className={styles.detailsSec}>
             <p className={styles.subTxt}>Details</p>
                <IoArrowForwardSharp size={12} className={styles.chevIcon}/>
            </div>
          </div>
        </div>
      </div>

      {/* activity section */}
      <ActivitySection/>
    </div>
  );
};
