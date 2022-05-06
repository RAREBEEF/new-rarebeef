import classNames from "classnames";
import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Nav from "../components/Nav";
import Toolbar from "../components/Toolbar";
import styles from "./Profile.module.scss";
const Profile = () => {
  const ProfileRef = useRef<any>(null);
  const [copyAlert, setCopyAlert] = useState<string>("");
  const onCopyClick = useCallback(() => {
    console.log(window);
    navigator.clipboard
      .writeText("drrobot409@gmail.com")
      .then(() => {
        setCopyAlert("복사됨");
      })
      .catch((error) => {
        console.log(error);
        setCopyAlert("복사 실패");
      });
  }, []);

  return (
    <div ref={ProfileRef} className={styles.container}>
      <Nav />
      <Toolbar ProfileRef={ProfileRef} />
      <div className={styles.content}>
        <h1 className={styles.title}>About me</h1>
        <section className={styles.section}>
          <h2 className={styles.header}>Name</h2>
          <span>RAREBEEF</span>
        </section>
        <section className={styles.section}>
          <h2 className={styles.header}>Birth date</h2>
          <span>98/10/06</span>
        </section>
        <section className={styles.section}>
          <h2 className={styles.header}>Skills</h2>
          <ul>
            <li>
              <h3>Front-end</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>SCSS</li>
                <li>REDUX</li>
                <li>REACT-THREE</li>
              </ul>
            </li>
            <li>
              <h3>Design</h3>
              <ul>
                <li>Illustrator</li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()}. RAREBEEF All Rights Reserved.
      </footer>
    </div>
  );
};

export default Profile;
