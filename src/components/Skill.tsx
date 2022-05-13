import { SkillPropType } from "../types";
import styles from "./Skill.module.scss";
import { useCallback, useRef, useState } from "react";
import classNames from "classnames";
import blender from "../images/skills/blender-brands.svg";
import three from "../images/skills/three-brands.svg";
import react from "../images/skills/react-brands.svg";
import redux from "../images/skills/redux-brands.svg";
import typescript from "../images/skills/ts-brands.svg";
import javascript from "../images/skills/js-brands.svg";
import firebase from "../images/skills/firebase-brands.svg";
import sass from "../images/skills/sass-brands.svg";

const Skill: React.FC<SkillPropType> = ({ skill }) => {
  const [showInfoWindow, setShowInfoWindow] = useState<boolean>(false);
  const [infoText, setInfoText] = useState<string>("");
  const infoWindowRef = useRef<any>(null);

  const onMouseEnter = useCallback((e: any) => {
    setShowInfoWindow(true);
    setInfoText(e.target.alt);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const currentRef = infoWindowRef.current;
    if (!!currentRef) {
      const x = e.clientX;
      const y = e.clientY;
      currentRef.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, []);

  const onMouseLeave = useCallback((e: any) => {
    setShowInfoWindow(false);
    setInfoText("");
  }, []);

  return (
    <div className={styles.container} onMouseMove={onMouseMove}>
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
      {skill === "blender" && (
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
    </div>
  );
};

export default Skill;
