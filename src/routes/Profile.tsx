import styles from "./Profile.module.scss";
import htmlIcon from "../images/skills/html5-brands.svg";
import cssIcon from "../images/skills/css3-alt-brands.svg";
import jsIcon from "../images/skills/js-brands.svg";
import tsIcon from "../images/skills/ts-brands.svg";
import reactIcon from "../images/skills/react-brands.svg";
import sassIcon from "../images/skills/sass-brands.svg";
import reduxIcon from "../images/skills/redux-brands.svg";
import threeIcon from "../images/skills/three-brands.svg";
import aiIcon from "../images/skills/ai-brands.svg";
import blenderIcon from "../images/skills/blender-brands.svg";
import React, { useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Header from "../components/Header";

const Profile = () => {
  const [showInfoWindow, setShowInfoWindow] = useState<boolean>(false);
  const [infoText, setInfoText] = useState<string>("");
  const infoWindowRef = useRef<any>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const currentRef = infoWindowRef.current;
    if (!!currentRef) {
      const x = e.clientX;
      const y = e.clientY;
      currentRef.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, []);

  const onMouseEnter = useCallback((e: any) => {
    setShowInfoWindow(true);
    if (e.target.id === "name") {
      setInfoText("본명 : 송의영");
    } else if (e.target.id === "birth-date") {
      const date = new Date();
      const age =
        date.getMonth() < 10 || (date.getMonth() === 10 && date.getDate() < 6)
          ? date.getFullYear() - 1998
          : date.getFullYear() - 1997;
      setInfoText(`${age}살`);
    } else if (!!e.target.alt) {
      setInfoText(e.target.alt);
    }
  }, []);

  const onMouseLeave = useCallback((e: any) => {
    setShowInfoWindow(false);
    setInfoText("");
  }, []);

  useEffect(() => {
    const skills = document.querySelectorAll(`.${styles["skill"]}`);

    skills.forEach((skill: any) => {
      skill.addEventListener(
        "mousemove",
        (e: React.MouseEvent<HTMLUListElement>) => {
          const position = skill.getBoundingClientRect();
          const x = (e.clientX - position.left - position.width / 2) * 0.3;
          const y = (e.clientY - position.top - position.height / 2) * 0.3;

          skill.children[0].style.transform = `translate(${x}px, ${y}px)`;
          skill.children[0].style.transition = `all 0s`;
        }
      );
      skill.addEventListener("mouseout", () => {
        skill.children[0].style.transform = `translate(0px, 0px)`;
        skill.children[0].style.transition = `all 0.5s`;
      });
    });
  }, []);

  return (
    <div className={styles.container} onMouseMove={onMouseMove}>
      <Header title={["About", "me"]} subTitle={["Junior Developer"]} />
      <div
        ref={infoWindowRef}
        className={classNames(
          styles["info-window"],
          showInfoWindow && styles.active
        )}
      >
        <span className={styles["info-text"]}>{infoText}</span>
      </div>
      <div className={styles.content}>
        {/* <h1 className={styles.title}>About me</h1> */}
        <section
          className={styles.section}
          id="name"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <h2 className={styles.header}>Name</h2>
          <span className={styles.text}>소고기는레어</span>
        </section>
        <section
          className={styles.section}
          id="birth-date"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <h2 className={styles.header}>Birth date</h2>
          <span className={styles.text}>98/10/06</span>
        </section>
        <section className={styles.section}>
          <h2 className={styles.header}>Skills</h2>
          <ul>
            <li>
              <h3 className={styles["sub-header"]}>Front-end</h3>
              <ul className={styles["skills__front-end"]}>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={htmlIcon}
                    alt="HTML5"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  />
                </li>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={cssIcon}
                    alt="CSS3"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  />
                </li>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={jsIcon}
                    alt="JavaScript"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  />
                </li>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={tsIcon}
                    alt="TypeScript"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  />
                </li>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={reactIcon}
                    alt="React"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  />
                </li>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={sassIcon}
                    alt="Sass"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  />
                </li>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={reduxIcon}
                    alt="Redux"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  />
                </li>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={threeIcon}
                    alt="Three.js"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  />
                </li>
              </ul>
            </li>
            <li>
              <h3 className={styles["sub-header"]}>Design</h3>
              <ul className={styles["skills__design"]}>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={aiIcon}
                    alt="Illustrator"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  />
                </li>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={blenderIcon}
                    alt="Blender"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  />
                </li>
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
