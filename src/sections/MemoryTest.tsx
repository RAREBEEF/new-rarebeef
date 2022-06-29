import React, { ReactElement } from "react";
import Header from "../components/Header";
import styles from "./MemoryTest.module.scss";
import classNames from "classnames";
import Skill from "../components/Skill";
import Button from "../components/Button";
import MemoryTestApp from "../components/MemoryTestApp";
import githubIcon from "../images/icons/github-square-brands.svg";
import velogIcon from "../images/icons/velog-square.svg";

const MemoryTest = (): ReactElement => {
  return (
    <section className={classNames(styles.container, styles.MemoryTest)}>
      <Header
        title={["Memory", "Test"]}
        subTitle={["Mini game"]}
        classes={["MemoryTest"]}
      />
      <main className={styles.content}>
        <MemoryTestApp />
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
              Memory test
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
              2022.06.04 ~ 06.07
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
        <div className={classNames(styles.description, styles.section)}>
          <h3 className={styles["section__title"]}>Description</h3>
          <p
            className={classNames(
              styles["description__text"],
              styles["section__content"]
            )}
          >
            {
              "브라우저에서 플레이 가능한 간단한 미니게임입니다.\n표시되는 블록을 외우고 모두 클릭하면 되는 간단한 규칙을 갖고 있습니다. 총 50 라운드까지 준비되어 있으며 라운드를 거듭할수록 외워야 할 블록의 개수가 늘어나고 특정 라운드에 도달하면 전체 블록의 수가 늘어나는 등 난이도가 증가하도록 만들었습니다."
            }
          </p>
        </div>

        <div className={classNames(styles.skills, styles.section)}>
          <h3 className={styles["section__title"]}>Skills</h3>
          <ul
            className={classNames(
              styles["skill-icons"],
              styles["section__content"]
            )}
          >
            <Skill skill="HTML" />
            <Skill skill="TypeScript" />
            <Skill skill="React" />
            <Skill skill="Sass" />
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
              icon={githubIcon}
              href="https://github.com/RAREBEEF/memory-test"
              classes={["Home__project-link"]}
            />
            <Button
              icon={velogIcon}
              href="https://velog.io/@drrobot409/React-%EA%B8%B0%EC%96%B5%EB%A0%A5-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EB%AF%B8%EB%8B%88%EA%B2%8C%EC%9E%84"
              classes={["Home__project-link"]}
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default MemoryTest;
