import styles from "./Profile.module.scss";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Header from "../components/Header";
import { ProfilePropType } from "../types";
import Skill from "../components/Skill";

const Profile: React.FC<ProfilePropType> = ({ setTitle }) => {
  const [age, setAge] = useState<number>(0);

  useEffect(() => {
    setTitle("About RAREBEEF");

    const date = new Date();
    setAge(
      date.getMonth() < 10 || (date.getMonth() === 10 && date.getDate() < 6)
        ? date.getFullYear() - 1998
        : date.getFullYear() - 1997
    );
  }, [setTitle]);

  return (
    <div className={styles.container}>
      <Header
        title={["About", "me"]}
        subTitle={["Junior Developer"]}
        classes={["Profile"]}
      />

      <div className={styles.content}>
        <section className={styles.section} id="name">
          <h4 className={styles.header}>Name</h4>
          <span className={styles.text}>소고기는레어</span>
        </section>
        <section className={styles.section} id="birth-date">
          <h4 className={styles.header}>Birth date</h4>
          <span className={styles.text}>
            1998년 10월 6일&nbsp;&nbsp;[{age}살]
          </span>
        </section>
        <section className={styles.section}>
          <h4 className={styles.header}>Skills</h4>
          <ul>
            <li>
              <h5 className={styles["sub-header"]}>Front-end</h5>
              <ul className={styles["skills__front-end"]}>
                <Skill skill="HTML" />
                <Skill skill="CSS" />
                <Skill skill="JavaScript" />
                <Skill skill="TypeScript" />
                <Skill skill="React" />
                <Skill skill="Sass" />
                <Skill skill="Redux" />
                <Skill skill="Three.js" />
                <Skill skill="Firebase" />
                <Skill skill="Netlify" />
              </ul>
            </li>
            <li>
              <h5 className={styles["sub-header"]}>Design</h5>
              <ul className={styles["skills__design"]}>
                <Skill skill="Illustrator" />
                <Skill skill="Blender" />
              </ul>
            </li>
          </ul>
        </section>
        <section className={classNames(styles.section, styles.plan)}>
          <h4 className={styles.header}>Future plans</h4>
          <ol>
            <li id={"first-plan"} className={styles["sub-header"]}>
              1. React Native
            </li>
            <li id={"second-plan"} className={styles["sub-header"]}>
              2. React VR
            </li>
          </ol>
        </section>
      </div>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()}. RAREBEEF All Rights Reserved.
      </footer>
    </div>
  );
};

export default Profile;
