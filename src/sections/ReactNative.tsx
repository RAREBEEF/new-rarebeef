import React, { ReactElement, Suspense, useRef } from "react";
import Header from "../components/Header";
import styles from "./ReactNative.module.scss";
import { Canvas } from "@react-three/fiber";
import classNames from "classnames";
import githubIcon from "../images/icons/github-square-brands.svg";
import velogIcon from "../images/icons/velog-square.svg";
import Skill from "../components/Skill";
import Button from "../components/Button";
import Loading from "../components/Loading";
import Phones from "../three/Phones";

const ReactNative = (): ReactElement => {
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
          <Canvas className={styles.canvas}>
            <Phones sectionRef={sectionRef} />
          </Canvas>
        </Suspense>
        <div className={classNames(styles.summary, styles.card)}>
          <h3 className={styles["card__title"]}>Project summary</h3>
          <div className={styles["summary-wrapper"]}>
            <h4 className={styles["summary__sub-title"]}>프로젝트명</h4>
            <p
              className={classNames(
                styles["card__content"],
                styles["summary__text"]
              )}
            >
              ToDo & Wheater
            </p>
          </div>
          <div className={styles["summary-wrapper"]}>
            <h4 className={styles["summary__sub-title"]}>개발 기간</h4>
            <p
              className={classNames(
                styles["card__content"],
                styles["summary__text"]
              )}
            >
              2022.05.30 ~ 06.03
            </p>
          </div>
          <div className={styles["summary-wrapper"]}>
            <h4 className={styles["summary__sub-title"]}>개발 인원</h4>
            <p
              className={classNames(
                styles["card__content"],
                styles["summary__text"]
              )}
            >
              1명
            </p>
          </div>
        </div>
        <div className={classNames(styles.description, styles.card)}>
          <h3 className={styles["card__title"]}>Description</h3>
          <p
            className={classNames(
              styles["description__text"],
              styles["card__content"]
            )}
          >
            {
              "ToDo와 날씨 모바일 애플리케이션입니다.\nReact Native와 Expo를 사용해 프로젝트를 진행하였습니다. ToDo 앱에는 Drag & Drop, Progress bar 등의 기능을 구현하였고 날씨 앱에는 geoLocation, weather api 등의 기능을 구현하였습니다. 앱을 배포하지 않았기에 3D 모델과 Three.js로 앱의 구동 모습을 대신 표현해 보았습니다."
            }
          </p>
        </div>
        <div className={classNames(styles.skills, styles.card)}>
          <h3 className={styles["card__title"]}>Skills</h3>
          <ul
            className={classNames(
              styles["skill-icons"],
              styles["card__content"]
            )}
          >
            <Skill skill="JavaScript" />
            <Skill skill="React Native" />
            <Skill skill="Blender" />
            <Skill skill="Three.js" />
          </ul>
        </div>
        <div className={classNames(styles.links, styles.card)}>
          <h3 className={styles["card__title"]}>Links</h3>
          <div
            className={classNames(
              styles["links-wrapper"],
              styles["card__content"]
            )}
          >
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

export default ReactNative;
