import React, { ReactElement, Suspense, useRef, useState } from "react";
import Header from "../components/Header";
import styles from "./RareBeef.module.scss";
import { Canvas } from "@react-three/fiber";
import classNames from "classnames";
import githubIcon from "../images/icons/github-square-brands.svg";
import velogIcon from "../images/icons/velog-square.svg";
import Skill from "../components/Skill";
import Button from "../components/Button";
import Loading from "../components/Loading";
import Beef from "../three/Beef";

const RareBeef = (): ReactElement => {
  const sectionRef = useRef<any>(null);
  const [showText, setShowText] = useState<boolean>(false);
  return (
    <section className={styles.container} ref={sectionRef}>
      <Header
        title={["Why", "Rare", "Beef", "?"]}
        subTitle={["Origin", "of", "rarebeef"]}
        classes={["RareBeef"]}
      />
      <main className={styles.content}>
        {/* <div className={styles["main-content"]}> */}

        <Suspense fallback={<Loading />}>
          <Canvas className={styles.canvas} shadows>
            <Beef sectionRef={sectionRef} setShowText={setShowText} />
          </Canvas>
        </Suspense>
        <p className={classNames(styles["main-text"], showText && styles.show)}>
          "소고기는레어(RAREBEEF)" 는 꽤 오래 전부터 애용하던 닉네임이었습니다.
          사용하기 시작한 시점은 저 자신도 기억하지 못하기 때문에 당시에 왜
          이러한 작명을 하였는가에 대한 의문은 아마 영영 해소할 수 없을지도
          모릅니다. 그만큼 오랜 기간 사용해오며 많은 애착을 갖게 되었기 때문에
          그 의미는 알 수 없어도 저를 가장 잘 나타낼 수 있는 닉네임이라 생각하여
          지금까지 사용해오게 되었습니다. 개발 공부를 시작한 후에도 2D 로고와 3D
          모델 제작, 진행한 프로젝트들에서 심볼의 역할을 수행하며 현재까지 저의
          곁을 지키고 있습니다.
        </p>
        {/* </div> */}
        <div className={classNames(styles.summary, styles.section)}>
          <h3 className={styles["section__title"]}>Project summary</h3>
          <div className={styles["summary-wrapper"]}>
            <h4 className={styles["summary__sub-title"]}>프로젝트 이름</h4>
            <p
              className={classNames(
                styles["section__content"],
                styles["summary__text"]
              )}
            >
              RAREBEEF 3D Model
            </p>
          </div>
          <div className={styles["summary-wrapper"]}>
            <h4 className={styles["summary__sub-title"]}>프로젝트 기간</h4>
            <p
              className={classNames(
                styles["section__content"],
                styles["summary__text"]
              )}
            >
              2022.05.03
            </p>
          </div>
          <div className={styles["summary-wrapper"]}>
            <h4 className={styles["summary__sub-title"]}>개발 인원</h4>
            <p
              className={classNames(
                styles["section__content"],
                styles["summary__text"]
              )}
            >
              1명
            </p>
          </div>
        </div>
        {/* <div className={classNames(styles.description, styles.section)}>
          <h3 className={styles["section__title"]}>Description</h3>
          <p
            className={classNames(
              styles["description__text"],
              styles["section__content"]
            )}
          >
            {
              "ToDo 및 날씨 모바일 어플리케이션입니다.\n각각 별개의 앱이며 React Native와 Expo를 통해 프로젝트를 진행하였습니다. Drag & Drop, Progress bar, geoLocation, weather api 등의 기능을 구현하였습니다. 또한 Three.js를 이용하여 앱의 구동 모습을 3D로 구현해 보았습니다."
            }
          </p>
        </div> */}
        <div className={classNames(styles.skills, styles.section)}>
          <h3 className={styles["section__title"]}>Skills</h3>
          <ul
            className={classNames(
              styles["skill-icons"],
              styles["section__content"]
            )}
          >
            <Skill skill="Blender" />
            <Skill skill="Three.js" />
          </ul>
        </div>
        <div className={classNames(styles.links, styles.section)}>
          <h3 className={styles["section__title"]}>Links</h3>
          <div
            className={classNames(
              styles["links-wrapper"],
              styles["section__content"]
            )}
          >
            <Button
              icon={velogIcon}
              href="https://velog.io/@drrobot409/Blender-3D-%EB%A1%9C%EA%B3%A0-%EC%A0%9C%EC%9E%91"
              classes={["Home__project-link"]}
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default RareBeef;
