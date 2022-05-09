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
import { useCallback } from "react";

const Profile = () => {
  const onSkillClick = useCallback((e: any) => {
    e.target.parentNode.classList.toggle(styles.rotate);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About me</h1>
        <section className={styles.section}>
          <h2 className={styles.header}>Name</h2>
          <span className={styles.text}>RAREBEEF</span>
        </section>
        <section className={styles.section}>
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
                    onClick={onSkillClick}
                  />
                  <span
                    className={styles["skill__text"]}
                    onClick={onSkillClick}
                  >
                    HTML5
                  </span>
                </li>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={cssIcon}
                    alt="CSS3"
                    onClick={onSkillClick}
                  />
                  <span
                    className={styles["skill__text"]}
                    onClick={onSkillClick}
                  >
                    CSS3
                  </span>
                </li>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={jsIcon}
                    alt="JavaScript"
                    onClick={onSkillClick}
                  />
                  <span
                    className={styles["skill__text"]}
                    onClick={onSkillClick}
                  >
                    JavaScript
                  </span>
                </li>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={tsIcon}
                    alt="TypeScript"
                    onClick={onSkillClick}
                  />
                  <span
                    className={styles["skill__text"]}
                    onClick={onSkillClick}
                  >
                    TypeScript
                  </span>
                </li>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={reactIcon}
                    alt="React"
                    onClick={onSkillClick}
                  />
                  <span
                    className={styles["skill__text"]}
                    onClick={onSkillClick}
                  >
                    React
                  </span>
                </li>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={sassIcon}
                    alt="Sass"
                    onClick={onSkillClick}
                  />
                  <span
                    className={styles["skill__text"]}
                    onClick={onSkillClick}
                  >
                    Sass
                  </span>
                </li>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={reduxIcon}
                    alt="Redux"
                    onClick={onSkillClick}
                  />
                  <span
                    className={styles["skill__text"]}
                    onClick={onSkillClick}
                  >
                    Redux
                  </span>
                </li>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={threeIcon}
                    alt="Three.js"
                    onClick={onSkillClick}
                  />
                  <span
                    className={styles["skill__text"]}
                    onClick={onSkillClick}
                  >
                    Three.js
                  </span>
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
                    onClick={onSkillClick}
                  />
                  <span
                    className={styles["skill__text"]}
                    onClick={onSkillClick}
                  >
                    Illustrator
                  </span>
                </li>
                <li className={styles.skill}>
                  <img
                    className={styles["skill__icon"]}
                    src={blenderIcon}
                    alt="Blender"
                    onClick={onSkillClick}
                  />
                  <span
                    className={styles["skill__text"]}
                    onClick={onSkillClick}
                  >
                    Blender
                  </span>
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
