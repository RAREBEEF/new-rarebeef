import React from "react";
import styles from "./Tutorial.module.scss";

const Tutorial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles["header"]}>
          Tutorial&nbsp;<span className={styles.page}>(1 / 2)</span>
        </h1>
        <section className={styles.content}>content</section>
        <section className={styles.footer}>footer</section>
      </div>
    </div>
  );
};

export default Tutorial;
