import { ReactElement } from "react";
import styles from "./MetaBeef.module.scss";
import Header from "../components/Header";
import img from "../images/meta-beef.png";
import { MetaBeefPropType } from "../types";
import Skill from "../components/Skill";
import classNames from "classnames";
import Button from "../components/Button";

const MetaBeef: React.FC<MetaBeefPropType> = ({}): ReactElement => {
  return (
    <section className={styles.container}>
      <Header
        title={["Meta", "Beef"]}
        subTitle={["Simple", "SNS"]}
        classes={["MetaBeef"]}
      />
      <div className={styles.content}>
        <img className={styles["img--main"]} src={img} alt="Meta Beef" />
        <div className={classNames(styles.summary, styles.box)}>
          <h3 className={styles["box__title"]}>Project summary</h3>
          <table className={styles["summary__table"]}>
            <tbody className={styles["summary__table__tbody"]}>
              <tr>
                <td>프로젝트 이름</td>
                <td>Meta Beef</td>
              </tr>
              <tr>
                <td>프로젝트 기간</td>
                <td>2022.01.26 ~ 02.24</td>
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
              "사진과 짧은 글을 업로드할 수 있는\n간단한 SNS 웹 애플리케이션입니다.\n처음 Firebase를 사용해 본 프로젝트이며\n해당 프로젝트를 통해 Front-Back 간의 통신을\n어느 정도 이해할 수 있게 되었습니다."
            }
          </p>
        </div>
        <div className={classNames(styles.skills, styles.box)}>
          <h3 className={styles["box__title"]}>Skills</h3>
          <div className={styles["skill-icons"]}>
            <Skill skill="react" />
            <Skill skill="javascript" />
            <Skill skill="sass" />
            <Skill skill="firebase" />
          </div>
        </div>
        <div className={classNames(styles.links, styles.box)}>
          <h3 className={styles["box__title"]}>Links</h3>
          <div className={styles["links-wrapper"]}>
            <Button
              text="Github Repository"
              href="https://github.com/RAREBEEF/meta-beef"
              classes={["Home__project-link"]}
            />
            <Button
              text="Blog post"
              href="https://velog.io/@drrobot409/React-SNS-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0"
              classes={["Home__project-link"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetaBeef;
