import { ReactElement } from "react";
import styles from "./MetaBeef.module.scss";
import Header from "../components/Header";
import img1 from "../images/screenshots/meta-beef.png";
import img2 from "../images/screenshots/meta-beef-login.png";
import img3 from "../images/screenshots/meta-beef-profile.png";
import img4 from "../images/screenshots/meta-beef-posts.png";
import img5 from "../images/screenshots/meta-beef-mobile.png";
import { MetaBeefPropType } from "../types";
import Skill from "../components/Skill";
import classNames from "classnames";
import Button from "../components/Button";
import logo from "../images/logos/meta-beef-icon.png";
import arrow from "../images/icons/angle-left-solid.svg";
import githubIcon from "../images/icons/github-square-brands.svg";
import velogIcon from "../images/icons/velog-square.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-creative";

const MetaBeef: React.FC<MetaBeefPropType> = ({}): ReactElement => {
  return (
    <section className={styles.container}>
      <Header
        title={["Meta", "Beef"]}
        subTitle={["with", "Firebase"]}
        classes={["MetaBeef"]}
      />
      <div className={styles.content}>
        <div className={classNames(styles.screenshots, styles.box)}>
          <Swiper
            className={styles["swiper__container"]}
            modules={[Navigation, Pagination, Autoplay, EffectCreative]}
            navigation={{ nextEl: ".nav--next", prevEl: ".nav--prev" }}
            slidesPerView={1}
            grabCursor
            effect="creative"
            creativeEffect={{
              prev: {
                shadow: false,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            style={{ overflow: "hidden" }}
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
              <img
                src={img5}
                alt="screenshot1"
                style={{ backgroundColor: "whitesmoke" }}
              />
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
              "간단한 SNS 웹 애플리케이션입니다.\n사진과 짧은 글을 업로드할 수 있습니다. Firebase를 활용한 첫 프로젝트이며 Front-Back 간의 통신을 이해하는데 큰 도움이 된 프로젝트입니다."
            }
          </p>
        </div>
        <div className={classNames(styles.skills, styles.box)}>
          <h3 className={styles["box__title"]}>Skills</h3>
          <ul className={styles["skill-icons"]}>
            <Skill skill="HTML" />
            <Skill skill="JavaScript" />
            <Skill skill="React" />
            <Skill skill="Sass" />
            <Skill skill="Firebase" />
          </ul>
        </div>
        <div className={classNames(styles.links, styles.box)}>
          <h3 className={styles["box__title"]}>Links</h3>
          <div className={styles["links-wrapper"]}>
            <Button
              icon={githubIcon}
              href="https://github.com/RAREBEEF/meta-beef"
              classes={["Home__project-link"]}
            />
            <Button
             icon={velogIcon}
              href="https://velog.io/@drrobot409/React-SNS-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0"
              classes={["Home__project-link"]}
            />
            <Button
              icon={logo}
              href="https://rarebeef.github.io/meta-beef"
              classes={["Home__project-link"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetaBeef;
