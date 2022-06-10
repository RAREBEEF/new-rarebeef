import React, { ReactElement } from "react";
import styles from "./PlaceReview.module.scss";
import Header from "../components/Header";
import img1 from "../images/screenshots/place-review.png";
import img2 from "../images/screenshots/place-review-login.png";
import img3 from "../images/screenshots/place-review-write.png";
import img4 from "../images/screenshots/place-review-profile.png";
import img5 from "../images/screenshots/place-review-responsive.png";
import { PlaceReviewPropType } from "../types";
import Skill from "../components/Skill";
import classNames from "classnames";
import Button from "../components/Button";
import logo from "../images/logos/place-review-icon.png";
import arrow from "../images/icons/angle-left-solid.svg";
import githubIcon from "../images/icons/github-square-brands.svg";
import velogIcon from "../images/icons/velog-square.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";

const PlaceReview: React.FC<PlaceReviewPropType> = ({}): ReactElement => {
  return (
    <section className={styles.container}>
      <Header
        title={["Place", "Review"]}
        subTitle={["with", "Kakao Map"]}
        classes={["PlaceReview"]}
      />
      <div className={styles.content}>
        <div className={classNames(styles.screenshots, styles.box)}>
          <Swiper
            className={styles["swiper__container"]}
            modules={[Navigation, Pagination]}
            effect="creative"
            navigation={{ nextEl: ".nav--next", prevEl: ".nav--prev" }}
            slidesPerView={1}
            spaceBetween={80}
            grabCursor
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
                <td>Place Review</td>
              </tr>
              <tr>
                <td>프로젝트 기간</td>
                <td>2022.03.15 ~ 04.08</td>
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
              "장소 리뷰 웹 애플리케이션입니다.\n지도로 위치를 검색하고 해당 위치에 대한 리뷰를 작성할 수 있습니다. Kakao map과 Firebase, 그리고 Redux 등 여러 기술들을 함께 다뤄보고자 시작하게 된 프로젝트입니다."
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
            <Skill skill="Firebase" />
          </ul>
        </div>
        <div className={classNames(styles.links, styles.box)}>
          <h3 className={styles["box__title"]}>Links</h3>
          <div className={styles["links-wrapper"]}>
            <Button
              icon={githubIcon}
              href="https://github.com/RAREBEEF/place-review"
              classes={["Home__project-link"]}
            />
            <Button
              icon={velogIcon}
              href="https://velog.io/@drrobot409/%EC%9E%A5%EC%86%8C-%EB%A6%AC%EB%B7%B0-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0"
              classes={["Home__project-link"]}
            />
            <Button
              icon={logo}
              href="https://rarebeef.github.io/place-review/"
              classes={["Home__project-link"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaceReview;
