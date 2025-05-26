import React from "react";
import styles from "./DashboardRightContainer.module.css";
import user from "../../../assets/user.png";
import teeth from "../../../assets/teeth.png";
import { FaPlus } from "react-icons/fa6";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import { ScheduleCard } from "../../ui/scheduleCard/ScheduleCard";
export const DashboardRightContainer = () => {
  return (
    <div className={styles.mainContainer}>
      {/* top container user and icon */}
      <div className={styles.topContainer}>
        <img src={user} className={styles.userIconContainer} />
        <div className={styles.iconContainer}>
          <FaPlus size={18} color="var(--white)" />
        </div>
      </div>
      {/* calender section */}
      <div>
        {/* top section */}
        <div className={styles.topSec}>
          <p className={styles.heading}>October 2021</p>
          {/* iocn section */}
          <div>
            <RiArrowLeftFill size={20} color="var(--blue)" />
            <RiArrowRightFill size={20} color="var(--blue)" />
          </div>
        </div>
        {/* calendar section */}
        <div className={styles.calendarMainContainer}>
          {/* mon */}
          <div className={styles.dayContainer}>
            <p className={styles.day}>Mon</p>
            <p className={styles.date}>25</p>
            <p className={styles.time}>10:00</p>
            <p className={styles.time}>11:00</p>
            <p className={styles.time}>12:00</p>
          </div>
          {/* tues */}
          <div
            className={`${styles.dayContainer} ${styles.highlightedDayContainer}`}
          >
            <p className={styles.day}>Tues</p>
            <p className={styles.date}>26</p>
            <p className={styles.time}>8:00</p>
            <p className={`${styles.time} ${styles.blueHighlightTime}`}>9:00</p>
            <p className={styles.time}>10:00</p>
          </div>
          {/* wed */}
          <div className={styles.dayContainer}>
            <p className={styles.day}>Wed</p>
            <p className={styles.date}>27</p>
            <p className={styles.time}>12:00</p>
            <p className={styles.time}>--</p>
            <p className={styles.time}>13:00</p>
          </div>
          {/* thurs */}
          <div className={styles.dayContainer}>
            <p className={styles.day}>Thurs</p>
            <p className={styles.date}>28</p>
            <p className={styles.time}>10:00</p>
            <p className={`${styles.time} ${styles.lightBlueHighlightTime}`}>
              11:00
            </p>
            <p className={styles.time}>--</p>
          </div>
          {/* fri */}
          <div className={styles.dayContainer}>
            <p className={styles.day}>Fri</p>
            <p className={styles.date}>29</p>
            <p className={styles.time}>--</p>
            <p className={styles.time}>14:00</p>
            <p className={styles.time}>16:00</p>
          </div>
          {/* sat */}
          <div className={styles.dayContainer}>
            <p className={styles.day}>Sat</p>
            <p className={styles.date}>30</p>
            <p className={`${styles.time} ${styles.lightBlueHighlightTime}`}>
              12:00
            </p>
            <p className={styles.time}>14:00</p>
            <p className={styles.time}>15:00</p>
          </div>
          {/* sun */}
          <div className={styles.dayContainer}>
            <p className={`${styles.day} ${styles.disabled}`}>Sun</p>
            <p className={`${styles.date} ${styles.disabled}`}>31</p>
            <p className={`${styles.time} ${styles.lightBlueHighlightTime}`}>
              9:00
            </p>
            <p className={`${styles.time} ${styles.disabled}`}>10:00</p>
            <p className={`${styles.time} ${styles.disabled}`}>11:00</p>
          </div>
        </div>
        <div className={styles.appointmentSec}>
          <ScheduleCard
            heading="Dentist"
            subHeading1="09:00-11:00"
            Image="🦷"
            bgColor="var(--blue)"
            subHeading2="Dr. Cameron Williamson"
          />
          <ScheduleCard
            heading="Physiotherapy Appointment"
            subHeading1="11:00-12:00"
            Image="💪🏻"
            bgColor="var(--lightBlue)"
            subHeading2="Dr. Kevin Djones"
            txtColor="var(--blue)"
          />
        </div>
        {/* bottom section */}
        <div>
          <p className={`${styles.heading} ${styles.heading2}`}>
            The Upcomming Schedule
          </p>
          <p className={styles.subHeading}>On Thursday</p>
          <div className={styles.appointmentSec}>
            <ScheduleCard
              heading="Health checkup complete"
              subHeading1="11:00 AM"
              Image="💉"
              bgColor="var(--lightBlue)"
              txtColor="var(--blue)"
              
            />
            <ScheduleCard
              heading="Ophthalmologist"
              subHeading1="14:00 PM"
              Image="👁️"
              bgColor="var(--lightBlue)"             
              txtColor="var(--blue)"
            />
          </div>
          <p className={styles.subHeading}>On Saturday</p>
          <div className={styles.appointmentSec}>
            <ScheduleCard
              heading="Cardiologist"
              subHeading1="12:00 AM"
              Image="❤️"
              bgColor="var(--lightBlue)"
              txtColor="var(--blue)"
              
            />
            <ScheduleCard
              heading="Neurologist"
              subHeading1="16:00 PM"
              Image="👨🏻‍⚕️"
              bgColor="var(--lightBlue)"             
              txtColor="var(--blue)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
