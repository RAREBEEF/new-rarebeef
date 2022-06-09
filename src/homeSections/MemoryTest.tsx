import React, { ReactElement } from "react";
import Header from "../components/Header";
import styles from "./ThreeBeef.module.scss";
import classNames from "classnames";
import Skill from "../components/Skill";
import Button from "../components/Button";
import MemoryTestApp from "../components/MemoryTestApp";

const MemoryTest = (): ReactElement => {
  return (
    <section className={styles.container}>
      <Header
        title={["Memory", "Test"]}
        subTitle={["Mini game"]}
        classes={["MemoryTest"]}
      />
      <div className={styles.content}>
        <MemoryTestApp />
        <div className={classNames(styles.summary, styles.box)}>
          <h3 className={styles["box__title"]}>Project summary</h3>
          <table className={styles["summary__table"]}>
            <tbody className={styles["summary__table__tbody"]}>
              <tr>
                <td>프로젝트 이름</td>
                <td>Memory test</td>
              </tr>
              <tr>
                <td>프로젝트 기간</td>
                <td>2022.06.04 ~ 06.07</td>
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
              "브라우저에서 플레이 가능한 간단한 미니게임입니다.\n총 50라운드까지 준비되어 있으며 라운드를 거듭할수록 난이도가 증가하도록 만들었습니다."
            }
          </p>
        </div>

        <div className={classNames(styles.skills, styles.box)}>
          <h3 className={styles["box__title"]}>Skills</h3>
          <ul className={styles["skill-icons"]}>
            <Skill skill="HTML" />
            <Skill skill="TypeScript" />
            <Skill skill="React" />
            <Skill skill="Sass" />
          </ul>
        </div>
        <div className={classNames(styles.links, styles.box)}>
          <h3 className={styles["box__title"]}>Links</h3>
          <div className={styles["links-wrapper"]}>
            <Button
              text="Github Repository"
              href="https://github.com/RAREBEEF/memory-test"
              classes={["Home__project-link"]}
            />
            <Button
              text="Blog post"
              href="https://velog.io/@drrobot409/React-%EA%B8%B0%EC%96%B5%EB%A0%A5-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EB%AF%B8%EB%8B%88%EA%B2%8C%EC%9E%84"
              classes={["Home__project-link"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoryTest;
