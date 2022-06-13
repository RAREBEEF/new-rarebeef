import { SkillPropType } from "../types";
import styles from "./Skill.module.scss";
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Blender from "../images/skills/blender-brands.svg";
import Three from "../images/skills/three-brands.svg";
import react from "../images/skills/react-brands.svg";
import reactNative from "../images/skills/react-native-brands.svg";
import Redux from "../images/skills/redux-brands.svg";
import TypeScript from "../images/skills/ts-brands.svg";
import JavaScript from "../images/skills/js-brands.svg";
import Firebase from "../images/skills/firebase-brands.svg";
import Sass from "../images/skills/sass-brands.svg";
import HTML from "../images/skills/html5-brands.svg";
import Netlify from "../images/skills/netlify-brands.svg";
import CSS from "../images/skills/css3-alt-brands.svg";
import Illustrator from "../images/skills/ai-brands.svg";

const Skill: React.FC<SkillPropType> = ({ skill }) => {
  const [showInfoWindow, setShowInfoWindow] = useState<boolean>(false);
  const infoWindowRef = useRef<any>(null);

  const srcs = {
    "Three.js": Three,
    React: react,
    "React Native": reactNative,
    Redux,
    Blender,
    TypeScript,
    Firebase,
    JavaScript,
    Sass,
    HTML,
    CSS,
    Netlify,
    Illustrator,
  };

  const onMouseEnter = (e: any): void => {
    if (!e.target.alt) {
      return;
    }

    setShowInfoWindow(true);

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
          skill.style.transition = `all 0.5s`;

          return;
        });
      });
    };
  }, []);

  return (
    <li className={styles.container} onMouseMove={onMouseMove}>
      {showInfoWindow && (
        <div ref={infoWindowRef} className={classNames(styles["info-window"])}>
          <span className={styles["info-text"]}>{skill}</span>
        </div>
      )}
      <img
        className={styles["img--skill"]}
        src={srcs[skill]}
        alt={skill}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </li>
  );
};

export default Skill;
