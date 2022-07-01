import React, { ReactElement, Suspense, useRef, useState } from "react";
import Header from "../components/Header";
import styles from "./RareBeef.module.scss";
import { Canvas } from "@react-three/fiber";
import classNames from "classnames";
import velogIcon from "../images/icons/velog-square.svg";
import Skill from "../components/Skill";
import Button from "../components/Button";
import Loading from "../components/Loading";
import Beef from "../three/Beef";

const RareBeef = (): ReactElement => {
  const sectionRef = useRef<any>(null);
  const [text, setText] = useState<number>(0);

  return (
    <section className={styles.container} ref={sectionRef}>
      <Header
        title={["Why", "Rare", "Beef", "?"]}
        subTitle={["Origin", "of", "rarebeef"]}
        classes={["RareBeef"]}
      />
      <main className={styles.content}>
        <div className={styles["canvas-wrapper"]}>
          <Suspense fallback={<Loading />}>
            <Canvas className={styles.canvas} shadows>
              <Beef sectionRef={sectionRef} setText={setText} />
            </Canvas>
          </Suspense>
        </div>
        <p
          className={classNames(styles["main-text"], text === 1 && styles.show)}
        >
          "RAREBEEF(소고기는레어)" 는 제가 오래전부터 사용해 온 닉네임입니다.
        </p>
        <p
          className={classNames(styles["main-text"], text === 2 && styles.show)}
        >
          사용하기 시작한 시점은 기억나지 않기에 왜 이러한 작명을 하였는가에
          대한 의문은 아마 영영 해소할 수 없을지도 모릅니다.
        </p>
        <p
          className={classNames(styles["main-text"], text === 3 && styles.show)}
        >
          하지만 오랜 기간을 함께했고 그만큼 많은 애착을 갖게 되었기 때문에 저를
          가장 잘 나타낼 수 있는 닉네임이라고 생각합니다.
        </p>
        <p
          className={classNames(styles["main-text"], text === 4 && styles.show)}
        >
          개발 독학을 시작한 후에도 2D 로고와 3D 모델 제작, 개인 프로젝트에서
          심볼의 역할을 수행하며 현재까지 저의 곁을 지키고 있습니다.
        </p>
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
        <div className={classNames(styles.donwload, styles.section)}>
          <h3 className={styles["section__title"]}>Wallpaper</h3>
          <div className={styles["section__content"]}>
            <Button
              text="Download (Google drive)"
              href="https://drive.google.com/file/d/1sfBqd8BRLTbYAK3rcXpflO4fBj0hIRj5/view?usp=sharing"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default RareBeef;
