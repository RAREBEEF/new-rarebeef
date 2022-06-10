import { ReactElement } from "react";
import styles from "./BrowserStart.module.scss";
import Header from "../components/Header";
import img1 from "../images/screenshots/browser-start.png";
import img2 from "../images/screenshots/browser-start-init.png";
import img3 from "../images/screenshots/browser-start-setting.png";
import img4 from "../images/screenshots/browser-start-bookmark.png";
import img5 from "../images/screenshots/browser-start-theme.png";
import Skill from "../components/Skill";
import classNames from "classnames";
import Button from "../components/Button";
import logo from "../images/logos/browser-start-icon.png";
import arrow from "../images/icons/angle-left-solid.svg";
import githubIcon from "../images/icons/github-square-brands.svg";
import velogIcon from "../images/icons/velog-square.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-cards";

const BrowserStart = (): ReactElement => {
  return (
    <section className={styles.container}>
      <Header
        title={["Browser", "start", "page"]}
        subTitle={["with", "Redux"]}
        classes={["BrowserStart"]}
      />
      <div className={styles.content}>
        <div className={classNames(styles.screenshots, styles.box)}>
          <Swiper
            className={styles["swiper__container"]}
            modules={[Navigation, Pagination, Autoplay, EffectCards]}
            navigation={{ nextEl: ".nav--next", prevEl: ".nav--prev" }}
            slidesPerView={1}
            grabCursor
            effect="cards"
            cardsEffect={{ slideShadows: false }}
          >
            <div className={styles["swiper__pagination"]}>
              <img
                className={classNames(styles["swiper__arrow"], "nav--prev")}
                src={arrow}
                alt="Previous screenshot"
              />
            </div>
            <SwiperSlide className={styles["swiper__item"]}>
              <img src={img1} alt="screenshot" />
            </SwiperSlide>
            <SwiperSlide className={styles["swiper__item"]}>
              <img src={img2} alt="screenshot" />
            </SwiperSlide>
            <SwiperSlide className={styles["swiper__item"]}>
              <img src={img3} alt="screenshot" />
            </SwiperSlide>
            <SwiperSlide className={styles["swiper__item"]}>
              <img src={img4} alt="screenshot" />
            </SwiperSlide>
            <SwiperSlide className={styles["swiper__item"]}>
              <img src={img5} alt="screenshot" />
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
              "나만의 브라우저 시작 페이지를 만들어 보았습니다.\nRedux를 처음 응용해 본 프로젝트이며 로컬 스토리지에 저장된 사용자 설정을 Redux를 통해 앱 전역으로 뿌려주어서 사용하던 테마와 북마크를 불러올 수 있도록 하였습니다."
            }
          </p>
        </div>
        <div className={classNames(styles.skills, styles.box)}>
          <h3 className={styles["box__title"]}>Skills</h3>
          <ul className={styles["skill-icons"]}>
            <Skill skill="HTML" />
            <Skill skill="TypeScript" />
            <Skill skill="React" />
            <Skill skill="Redux" />
            <Skill skill="Sass" />
          </ul>
        </div>
        <div className={classNames(styles.links, styles.box)}>
          <h3 className={styles["box__title"]}>Links</h3>
          <div className={styles["links-wrapper"]}>
            <Button
              icon={githubIcon}
              href="https://github.com/RAREBEEF/new-tab"
              classes={["Home__project-link"]}
            />
            <Button
              icon={velogIcon}
              href="https://velog.io/@drrobot409/React-TypeScript-Redux-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EC%8B%9C%EC%9E%91-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0"
              classes={["Home__project-link"]}
            />
            <Button
              icon={logo}
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
