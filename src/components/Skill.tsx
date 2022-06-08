import { SkillPropType } from "../types";
import styles from "./Skill.module.scss";
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import blender from "../images/skills/blender-brands.svg";
import three from "../images/skills/three-brands.svg";
import react from "../images/skills/react-brands.svg";
import redux from "../images/skills/redux-brands.svg";
import typescript from "../images/skills/ts-brands.svg";
import javascript from "../images/skills/js-brands.svg";
import firebase from "../images/skills/firebase-brands.svg";
import sass from "../images/skills/sass-brands.svg";
import html from "../images/skills/html5-brands.svg";
import netlify from "../images/skills/netlify-brands.svg";
import css from "../images/skills/css3-alt-brands.svg";
import ai from "../images/skills/ai-brands.svg";

const Skill: React.FC<SkillPropType> = ({ skill }) => {
  const [showInfoWindow, setShowInfoWindow] = useState<boolean>(false);
  const [infoText, setInfoText] = useState<string>("");
  const infoWindowRef = useRef<any>(null);

  const onMouseEnter = (e: any): void => {
    if (!e.target.alt) {
      return;
    }

    setShowInfoWindow(true);
    setInfoText(e.target.alt);

    return;
  };

  const onMouseMove = (e: any): void => {
    if (!infoWindowRef.current || !showInfoWindow) {
      return;
    }

    const currentRef = infoWindowRef.current;

    const x = e.clientX;
    const y = e.clientY;
    currentRef.style.transform = `translate(${x}px, ${y}px)`;

    return;
  };

  const onMouseLeave = (): void => {
    setShowInfoWindow(false);
    setInfoText("");

    return;
  };

  useEffect(() => {
    const skills = document.querySelectorAll(`.${styles["img--skill"]}`);

    if (!skills) {
      return;
    }

    skills.forEach((skill: any): void => {
      skill.addEventListener("mousemove", (e: any): void => {
        const position = skill.getBoundingClientRect();
        const x = (e.clientX - position.left - position.width / 2) * 0.3;
        const y = (e.clientY - position.top - position.height / 2) * 0.3;

        skill.style.transform = `translate(${x}px, ${y}px)`;
        skill.style.transition = `all 0s`;

        return;
      });
      skill.addEventListener("mouseout", () => {
        skill.style.transform = `translate(0px, 0px)`;
        skill.style.transition = `all 0.5s`;

        return;
      });

      return;
    });

    return () => {
      skills.forEach((skill: any) => {
        skill.removeEventListener("mousemove", (e: any): void => {
          const position = skill.getBoundingClientRect();
          const x = (e.clientX - position.left - position.width / 2) * 0.3;
          const y = (e.clientY - position.top - position.height / 2) * 0.3;

          skill.style.transform = `translate(${x}px, ${y}px)`;
          skill.style.transition = `all 0s`;

          return;
        });
        skill.removeEventListener("mouseout", () => {
          skill.style.transform = `translate(0px, 0px)`;
          skill.style.transition = `all 0.5s`;

          return;
        });
      });
    };
  }, []);

  return (
    <li className={styles.container} onMouseMove={onMouseMove}>
      <div
        ref={infoWindowRef}
        className={classNames(
          styles["info-window"],
          showInfoWindow && styles.active
        )}
      >
        <span className={styles["info-text"]}>{infoText}</span>
      </div>
      {skill === "blender" && (
        <img
          className={styles["img--skill"]}
          src={blender}
          alt={"Blender"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
      {skill === "three" && (
        <img
          className={styles["img--skill"]}
          src={three}
          alt={"Three.js"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
      {skill === "react" && (
        <img
          className={styles["img--skill"]}
          src={react}
          alt={"React"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
      {skill === "redux" && (
        <img
          className={styles["img--skill"]}
          src={redux}
          alt={"Redux"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
      {skill === "typescript" && (
        <img
          className={styles["img--skill"]}
          src={typescript}
          alt={"TypeScript"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
      {skill === "firebase" && (
        <img
          className={styles["img--skill"]}
          src={firebase}
          alt={"Firebase"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
      {skill === "sass" && (
        <img
          className={styles["img--skill"]}
          src={sass}
          alt={"Sass"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
      {skill === "javascript" && (
        <img
          className={styles["img--skill"]}
          src={javascript}
          alt={"JavaScript"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
      {skill === "html" && (
        <img
          className={styles["img--skill"]}
          src={html}
          alt={"HTML"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
      {skill === "netlify" && (
        <img
          className={styles["img--skill"]}
          src={netlify}
          alt={"Netlify"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
      {skill === "css" && (
        <img
          className={styles["img--skill"]}
          src={css}
          alt={"CSS"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}{" "}
      {skill === "ai" && (
        <img
          className={styles["img--skill"]}
          src={ai}
          alt={"Illustrator"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      )}
    </li>
  );
};

export default Skill;
