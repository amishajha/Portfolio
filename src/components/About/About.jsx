import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/photo.jpg")}
          alt="Me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I'm a passionate frontend developer with a focus on creating dynamic and responsive web applications. My expertise lies in utilizing cutting-edge technologies to deliver seamless user experiences
              </p>
            </div>
          </li>
          
          <li className={styles.aboutItem}>
          
            <div className={styles.aboutItemText}>
              <h3>Android Developer</h3>
              <p>
              Dedicated and skilled Android Developer with  experience in designing, developing, testing, and maintaining robust mobile applications.
             
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
