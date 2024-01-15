import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, I'm Amisha Jha</h1>
        <p className={styles.description}>
          
          a versatile and results-driven software developer with a strong foundation in C, C++, Java, JavaScript, React, Node.js, SQL, and Next.js.
        </p>
        <a href="https://drive.google.com/drive/folders/1tzXTm9t-t9vbVsIu3_YL2JjCLxrYrDlL" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/me.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
