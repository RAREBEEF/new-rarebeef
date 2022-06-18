import React, { ReactElement, Suspense, useRef } from "react";
import Header from "../components/Header";
import styles from "./ReactNative.module.scss";
import { Canvas } from "@react-three/fiber";
import { ThreeBeefPropType } from "../types";
import classNames from "classnames";
import githubIcon from "../images/icons/github-square-brands.svg";
import velogIcon from "../images/icons/velog-square.svg";
import Skill from "../components/Skill";
import Button from "../components/Button";
import Loading from "../components/Loading";
import Phones from "../three/Phones";

const ThreeBeef: React.FC<ThreeBeefPropType> = (): ReactElement => {
  const sectionRef = useRef<any>(null);

  return (
    <section className={styles.container} ref={sectionRef}>
      <Header
        title={["ToDo", "&", "Weather", "App"]}
        subTitle={["with", "React", "Native"]}
        classes={["ReactNative"]}
      />
      <main className={styles.content}>
        <Suspense fallback={<Loading />}>
          <Canvas className={styles.canvas} shadows>
            <Phones sectionRef={sectionRef} />
          </Canvas>
        </Suspense>
        <div className={classNames(styles.summary, styles.box)}>
          <h3 className={styles["box__title"]}>Project summary</h3>
          <table className={styles["summary__table"]}>
            <tbody className={styles["summary__table__tbody"]}>
              <tr>
                <td>프로젝트 이름</td>
                <td>ToDo & Wheater</td>
              </tr>
              <tr>
                <td>프로젝트 기간</td>
                <td>2022.05.30 ~ 06.03</td>
              </tr>
              <tr>
                <td>개발 인원</td>
                <td>1명</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={classNames(styles.description, styles.box)}>
          <h3 className={styles["box__title"]}>Description</h3>
          <p className={styles["description__text"]}>
            {
              "ToDo 및 날씨 모바일 어플리케이션입니다.\n각각 별개의 앱이며 React Native와 Expo를 통해 프로젝트를 진행하였습니다. Drag & Drop, Progress bar, geoLocation, weather api 등의 기능을 구현하였습니다. 또한 Three.js를 이용하여 앱의 구동 모습을 3D로 구현해 보았습니다."
            }
          </p>
        </div>

        <div className={classNames(styles.skills, styles.box)}>
          <h3 className={styles["box__title"]}>Skills</h3>
          <ul className={styles["skill-icons"]}>
            <Skill skill="JavaScript" />
            <Skill skill="React Native" />
            <Skill skill="Blender" />
            <Skill skill="Three.js" />
          </ul>
        </div>
        <div className={classNames(styles.links, styles.box)}>
          <h3 className={styles["box__title"]}>Link</h3>
          <div className={styles["links-wrapper"]}>
            <Button
              icon={githubIcon}
              href="https://github.com/RAREBEEF/Todo-app"
              classes={["Home__project-link"]}
            />
            <Button
              icon={velogIcon}
              href="https://velog.io/@drrobot409/React-Native-Expo-ToDo%EC%95%B1-%EB%A7%8C%EB%93%A4%EA%B8%B0"
              classes={["Home__project-link"]}
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default ThreeBeef;
