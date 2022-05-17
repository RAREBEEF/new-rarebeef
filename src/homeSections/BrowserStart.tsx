import { ReactElement } from "react";
import styles from "./BrowserStart.module.scss";
import Header from "../components/Header";
import img from "../images/browser-start.png";
import Skill from "../components/Skill";
import classNames from "classnames";
import Button from "../components/Button";
import icon from "../images/browser-start-icon.png";

const BrowserStart = (): ReactElement => {
  return (
    <section className={styles.container}>
      <Header
        title={["Browser", "start", "page"]}
        subTitle={["with", "Firebase"]}
        classes={["BrowserStart"]}
      />
      <div className={styles.content}>
        <img
          className={styles["img--main"]}
          src={img}
          alt="Browser start page"
        />
        <div className={classNames(styles.summary, styles.box)}>
          <h3 className={styles["box__title"]}>Project summary</h3>
          <table className={styles["summary__table"]}>
            <tbody className={styles["summary__table__tbody"]}>
              <tr>
                <td>프로젝트 이름</td>
                <td>Browser start page</td>
              </tr>
              <tr>
                <td>프로젝트 기간</td>
                <td>2022.03.09 ~ 03.14</td>
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
              "브라우저 시작 페이지입니다.\nRedux를 처음 응용해 본 프로젝트이며\n로컬 스토리지에 저장된 사용자 설정을 Redux를 통해\n앱 전역으로 뿌려주어서 사용하던 테마와 북마크를\n불러올 수 있도록 하였습니다."
            }
          </p>
        </div>
        <div className={classNames(styles.skills, styles.box)}>
          <h3 className={styles["box__title"]}>Skills</h3>
          <div className={styles["skill-icons"]}>
            <Skill skill="html" />
            <Skill skill="typescript" />
            <Skill skill="react" />
            <Skill skill="redux" />
            <Skill skill="sass" />
          </div>
        </div>
        <div className={classNames(styles.links, styles.box)}>
          <h3 className={styles["box__title"]}>Links</h3>
          <div className={styles["links-wrapper"]}>
            <Button
              text="Github Repository"
              href="https://github.com/RAREBEEF/new-tab"
              classes={["Home__project-link"]}
            />
            <Button
              text="Blog post"
              href="https://velog.io/@drrobot409/React-TypeScript-Redux-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EC%8B%9C%EC%9E%91-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0"
              classes={["Home__project-link"]}
            />
            <Button
              icon={icon}
              href="https://rarebeef.github.io/new-tab/"
              classes={["Home__project-link"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowserStart;
