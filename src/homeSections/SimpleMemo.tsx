import { ReactElement } from "react";
import styles from "./SimpleMemo.module.scss";
import Header from "../components/Header";
import img from "../images/simple-memo.png";
import Skill from "../components/Skill";
import classNames from "classnames";
import Button from "../components/Button";
import icon from "../images/simple-memo-icon.png";
import arrow from "../images/angle-left-solid.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const SimpleMemo = (): ReactElement => {
  return (
    <section className={styles.container}>
      <Header
        title={["Simple", "memo"]}
        subTitle={["with", "Local storage"]}
        classes={["SimpleMemo"]}
      />
      <div className={styles.content}>
        <div className={classNames(styles.screenshots, styles.box)}>
          <Swiper
            className={styles["swiper__container"]}
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{ nextEl: ".nav--next", prevEl: ".nav--prev" }}
            slidesPerView={1}
            spaceBetween={80}
            loop
            autoplay={{ delay: 3000 }}
          >
            <div className={styles["swiper__pagination"]}>
              <img
                className={classNames(styles["swiper__arrow"], "nav--prev")}
                src={arrow}
                alt="Previous screenshot"
              />
            </div>
            <SwiperSlide className={styles["swiper__item"]}>
              <img src={img} alt="screenshot1" />
            </SwiperSlide>
            <SwiperSlide className={styles["swiper__item"]}>
              <img src={img} alt="screenshot1" />
            </SwiperSlide>
            <SwiperSlide className={styles["swiper__item"]}>
              <img src={img} alt="screenshot1" />
            </SwiperSlide>
            <SwiperSlide className={styles["swiper__item"]}>
              <img src={img} alt="screenshot1" />
            </SwiperSlide>
            <div className={styles["swiper__pagination"]}>
              <img
                className={classNames(styles["swiper__arrow"], "nav--next")}
                src={arrow}
                alt="Next screenshot"
              />
            </div>
          </Swiper>
        </div>
        <div className={classNames(styles.summary, styles.box)}>
          <h3 className={styles["box__title"]}>Project summary</h3>
          <table className={styles["summary__table"]}>
            <tbody className={styles["summary__table__tbody"]}>
              <tr>
                <td>프로젝트 이름</td>
                <td>Simple memo</td>
              </tr>
              <tr>
                <td>프로젝트 기간</td>
                <td>2021.11.23 ~ 12.08</td>
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
              "로컬스토리지를 활용한 메모 웹 애플리케이션이며\nReact로 구현한 첫번째 프로젝트입니다."
            }
          </p>
        </div>
        <div className={classNames(styles.skills, styles.box)}>
          <h3 className={styles["box__title"]}>Skills</h3>
          <div className={styles["skill-icons"]}>
            <Skill skill="html" />
            <Skill skill="javascript" />
            <Skill skill="react" />
            <Skill skill="sass" />
            <Skill skill="netlify" />
          </div>
        </div>
        <div className={classNames(styles.links, styles.box)}>
          <h3 className={styles["box__title"]}>Links</h3>
          <div className={styles["links-wrapper"]}>
            <Button
              text="Github Repository"
              href="https://github.com/RAREBEEF/Simple-Memo"
              classes={["Home__project-link"]}
            />
            <Button
              text="Blog post"
              href="https://velog.io/@drrobot409/%EB%A9%94%EB%AA%A8%EC%9E%A5-%EC%9B%B9-%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98"
              classes={["Home__project-link"]}
            />
            <Button
              icon={icon}
              href="https://simplememo.netlify.app/"
              classes={["Home__project-link"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleMemo;
