import React from "react";
import styles from "./ActivitySection.module.css";
export const ActivitySection = () => {
  return (
    <div className={styles.mainContainer}>
      {/* top section */}
      <div className={styles.topSec}>
        <p className={styles.heading}>Activity</p>
        <p className={styles.subHeading}>3 appointment on this week</p>
      </div>
      {/* bottom section */}
      <div className={styles.btmSec}>
        {/* mon */}
        <div className={styles.daySec}>
          <div className={styles.mainLinesContainer}>
            {/* full gray line */}
            <div className={styles.fullGrayLine} />
            {/* half skyblue line */}
            <div className={styles.lineContainer}>
              <div className={styles.halfSkyblueLine} />
            </div>
            {/* small double gray line */}
            <div className={styles.lineContainer}>
              <div className={styles.doubleGrayLine}>
                <div className={styles.smallGrayLine} />
                <div className={styles.smallGrayLine} />
              </div>
            </div>
            {/* medium bottom gray line */}
            <div className={styles.lineContainer}>
              <div className={styles.mediumGrayLine} />
            </div>
            {/* double color full line */}
            <div className={styles.doubleColorFullLine}>
              <div
                className={`${styles.skyBlueLine} ${styles.mediumGrayLine}`}
              />
              <div className={`${styles.skyBlueLine} ${styles.blueLine}`} />
            </div>
          </div>
          <p className={styles.subHeading}>Mon</p>
        </div>
        {/* tue */}
        <div className={styles.daySec}>
          <div className={styles.mainLinesContainer}>
            {/* half blue line */}
            <div className={styles.lineContainer}>
              <div className={styles.halfBlueLine} />
            </div>
            {/* small double gray line */}
            <div className={styles.lineContainer}>
              <div className={styles.doubleGrayLine}>
                <div className={styles.smallGrayLine} />
                <div className={styles.smallGrayLine} />
              </div>
            </div>
            {/* medium bottom skyblue line */}
            <div className={styles.lineContainer}>
              <div className={styles.mediumSkyblueLine} />
            </div>
            {/* full gray line */}
            <div className={styles.fullGrayLine} />
          </div>
          <p className={styles.subHeading}>Tue</p>
        </div>
        {/* wed */}
        <div className={styles.daySec}>
          <div className={styles.mainLinesContainer}>
            {/* half gray line */}
            <div className={styles.lineContainer}>
              <div className={styles.halfGrayLine} />
            </div>
            {/* small double color line */}
            <div className={styles.lineContainer}>
              <div className={styles.doubleGrayLine}>
                <div className={styles.smallSkyblueLine} />
                <div className={styles.smallBlueLine} />
              </div>
            </div>
            {/* medium bottom blue line */}
            <div className={styles.lineContainer}>
              <div className={styles.mediumBlueLine} />
            </div>
            {/* double gray full line */}
            <div className={styles.doubleColorFullLine}>
              <div className={styles.doubleGrayFullLine} />
              <div className={styles.doubleGrayFullLine} />
            </div>
          </div>
          <p className={styles.subHeading}>Wed</p>
        </div>
        {/* thurs */}
        <div className={styles.daySec}>
          <div className={styles.mainLinesContainer}>
            {/* half skyblue line */}
            <div className={styles.lineContainer}>
              <div className={styles.halfSkyblueLine} />
            </div>
            {/* small double color line */}
            <div className={styles.lineContainer}>
              <div className={styles.doubleGrayLine}>
                <div className={styles.smallSkyblueLine} />
                <div className={styles.smallBlueLine} />
              </div>
            </div>
            {/* medium bottom gray line */}
            <div className={styles.lineContainer}>
              <div className={styles.mediumGrayLine} />
            </div>
            {/* full gray line */}
            <div className={styles.fullGrayLine} />
          </div>
          <p className={styles.subHeading}>Thurs</p>
        </div>
        {/* fri */}
        <div className={styles.daySec}>
          <div className={styles.mainLinesContainer}>
            {/* half blue line */}
            <div className={styles.lineContainer}>
              <div className={styles.halfBlueLine} />
            </div>
            {/* small double gray line */}
            <div className={styles.lineContainer}>
              <div className={styles.doubleGrayLine}>
                <div className={styles.smallGrayLine} />
                <div className={styles.smallGrayLine} />
              </div>
            </div>
            {/* medium bottom gray line */}
            <div className={styles.lineContainer}>
              <div className={styles.mediumGrayLine} />
            </div>
            {/* double color full line */}
            <div className={styles.doubleColorFullLine}>
              <div
                className={`${styles.skyBlueLine} ${styles.mediumGrayLine}`}
              />
              <div className={`${styles.skyBlueLine} ${styles.blueLine}`} />
            </div>
          </div>
          <p className={styles.subHeading}>Fri</p>
        </div>
        {/* sat */}
        <div className={styles.daySec}>
          <div className={styles.mainLinesContainer}>
             {/* half skyblue line */}
            <div className={styles.lineContainer}>
              <div className={styles.halfSkyblueLine} />
            </div>
             {/* small double gray line */}
            <div className={styles.lineContainer}>
              <div className={styles.doubleGrayLine}>
                <div className={styles.smallGrayLine} />
                <div className={styles.smallGrayLine} />
              </div>
            </div>
            {/* medium bottom blue line */}
            <div className={styles.lineContainer}>
              <div className={styles.mediumBlueLine} />
            </div>
             {/* full gray line */}
            <div className={styles.fullGrayLine} />
             {/* half gray line */}
            <div className={styles.lineContainer}>
              <div className={styles.halfGrayLine} />
            </div>
             {/* small double color line */}
            <div className={styles.lineContainer}>
              <div className={styles.doubleGrayLine}>
                <div className={styles.smallSkyblueLine} />
                <div className={styles.smallBlueLine} />
              </div>
            </div>
          </div>
          <p className={styles.subHeading}>Sat</p>
          </div>
          {/* sun */}
          <div className={styles.daySec}>
          <div className={styles.mainLinesContainer}>
             {/* medium bottom blue line */}
            <div className={styles.lineContainer}>
              <div className={styles.mediumBlueLine} />
            </div>
             {/* double gray full line */}
            <div className={styles.doubleColorFullLine}>
              <div className={styles.doubleGrayFullLine} />
              <div className={styles.doubleGrayFullLine} />
            </div>
             {/* half skyblue line */}
            <div className={styles.lineContainer}>
              <div className={styles.halfSkyblueLine} />
            </div>
              {/* small double gray line */}
            <div className={styles.lineContainer}>
              <div className={styles.doubleGrayLine}>
                <div className={styles.smallGrayLine} />
                <div className={styles.smallGrayLine} />
              </div>
            </div>
            {/* medium bottom blue line */}
            <div className={styles.lineContainer}>
              <div className={styles.mediumBlueLine} />
            </div>
          </div>
          <p className={styles.subHeading}>Sun</p>
          </div>
      </div>
    </div>
  );
};
