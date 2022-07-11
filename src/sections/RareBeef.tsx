import React, { ReactElement, Suspense, useRef, useState } from "react";
import Header from "../components/Header";
import styles from "./RareBeef.module.scss";
import { Canvas } from "@react-three/fiber";
import classNames from "classnames";
// import velogIcon from "../images/icons/velog-square.svg";
// import Skill from "../components/Skill";
import Button from "../components/Button";
import Loading from "../components/Loading";
import Beef from "../three/Beef";

const RareBeef = (): ReactElement => {
  const sectionRef = useRef<any>(null);
  const [text, setText] = useState<number>(0);

  return (
    <section className={styles.container} ref={sectionRef}>
      <Header
        title={["Why", "rare", "beef", "?"]}
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
          RAREBEEF는 제가 오래전부터 사용해 온 닉네임 "소고기는레어"에서
          비롯되었습니다.
        </p>
        <p
          className={classNames(styles["main-text"], text === 2 && styles.show)}
        >
          뭔가 깊은 뜻을 담고 있는 것은 아니지만 많은 정이 들었고 또 심볼로
          사용하기 좋은 닉네임이라고 생각하여
        </p>
        <p
          className={classNames(styles["main-text"], text === 3 && styles.show)}
        >
          닉네임을 넘어 2D 로고와 3D 모델을 제작하는 등 심볼로서의 역할을 부여하고 사용
          중입니다.
        </p>
        {/* <div className={classNames(styles.summary, styles.card)}>
          <h3 className={styles["card__title"]}>Project summary</h3>
          <div className={styles["summary-wrapper"]}>
            <h4 className={styles["summary__sub-title"]}>프로젝트 이름</h4>
            <p
              className={classNames(
                styles["card__content"],
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
                styles["card__content"],
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
                styles["card__content"],
                styles["summary__text"]
              )}
            >
              1명
            </p>
          </div>
        </div>
        <div className={classNames(styles.skills, styles.card)}>
          <h3 className={styles["card__title"]}>Skills</h3>
          <ul
            className={classNames(
              styles["skill-icons"],
              styles["card__content"]
            )}
          >
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
              icon={velogIcon}
              href="https://velog.io/@drrobot409/Blender-3D-%EB%A1%9C%EA%B3%A0-%EC%A0%9C%EC%9E%91"
              classes={["Home__project-link"]}
            />
          </div>
        </div> */}
        <div className={classNames(styles.donwload, styles.card)}>
          <h3 className={styles["card__title"]}>Download wallpaper</h3>
          <div className={styles["card__content"]}>
            <Button
              text="Google drive (7.2MB)"
              href="https://drive.google.com/file/d/1sfBqd8BRLTbYAK3rcXpflO4fBj0hIRj5/view?usp=sharing"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default RareBeef;
