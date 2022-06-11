import React, { ReactElement } from "react";
import styles from "./Section.module.scss";
import Header from "./Header";
import Skill from "./Skill";
import classNames from "classnames";
import Button from "./Button";
import arrow from "../images/icons/angle-left-solid.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";
import { SectionPropType } from "../types";

const Section: React.FC<SectionPropType> = ({ data }): ReactElement => {
  const swiperGeneroator = (): Array<any> => {
    const swiperReturn: Array<any> = [];

    data.imgs.forEach((img, i) => {
      swiperReturn.push(
        <SwiperSlide className={styles["swiper__item"]} key={i}>
          <img src={img} alt="Screenshot" />
        </SwiperSlide>
      );
    });

    return swiperReturn;
  };

  const skillGeneroator = (): Array<any> => {
    const skillReturn: Array<any> = [];

    data.skills.forEach((skill, i) => {
      skillReturn.push(<Skill skill={skill} key={i} />);
    });

    return skillReturn;
  };

  const linkGeneroator = (): Array<any> => {
    const linkReturn: Array<any> = [];

    data.links.forEach((link, i) => {
      linkReturn.push(
        <Button
          key={i}
          icon={link.icon}
          href={link.href}
          classes={["Home__project-link"]}
        />
      );
    });

    return linkReturn;
  };

  return (
    <section
      className={classNames(
        styles.container,
        data.name?.map((item: string): string => styles[item])
      )}
    >
      <Header
        title={data.header.title}
        subTitle={data.header.subTitle}
        classes={data.name}
      />
      <div className={styles.content}>
        <div className={classNames(styles.screenshots, styles.box)}>
          <Swiper
            color="black"
            className={styles["swiper__container"]}
            modules={[Navigation, Pagination, EffectCoverflow]}
            navigation={{ nextEl: ".nav--next", prevEl: ".nav--prev" }}
            slidesPerView={1}
            effect="coverflow"
            coverflowEffect={{
              slideShadows: false,
            }}
            spaceBetween={10}
            grabCursor
          >
            <div className={styles["swiper__pagination"]}>
              <img
                className={classNames(styles["swiper__arrow"], "nav--prev")}
                src={arrow}
                alt="Previous screenshot"
              />
            </div>
            {swiperGeneroator()}
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
                <td>{data.summary.name}</td>
              </tr>
              <tr>
                <td>프로젝트 기간</td>
                <td>{data.summary.date}</td>
              </tr>
              <tr>
                <td>개발 인원</td>
                <td>{data.summary.headCount}명</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={classNames(styles.description, styles.box)}>
          <h3 className={styles["box__title"]}>Description</h3>
          <p className={styles["description__text"]}>{data.description}</p>
        </div>
        <div className={classNames(styles.skills, styles.box)}>
          <h3 className={styles["box__title"]}>Skills</h3>
          <ul className={styles["skill-icons"]}>{skillGeneroator()}</ul>
        </div>
        <div className={classNames(styles.links, styles.box)}>
          <h3 className={styles["box__title"]}>Links</h3>
          <div className={styles["links-wrapper"]}>{linkGeneroator()}</div>
        </div>
      </div>
    </section>
  );
};

export default Section;
