import { ReactElement, useEffect, useState } from "react";
import styles from "./PlaceReview.module.scss";
import Header from "../components/Header";
import img from "../images/place-review.png";
import ScrollDown from "../components//ScrollDown";
import { PlaceReviewPropType } from "../types";

const PlaceReview: React.FC<PlaceReviewPropType> = ({
  animationStartAt,
}): ReactElement => {
  return (
    <div className={styles.container}>
      <Header
        title={["Place", "Review"]}
        classes={["PlaceReview"]}
        animationStartAt={animationStartAt}
      />
      <div
        className={styles.content}
        style={{
          transform:
            animationStartAt === -1
              ? "none"
              : `translateX(${300 - animationStartAt * 3}px)`,
        }}
      >
        <img className={styles.img} src={img} alt="Place Review" />
      </div>
      <ScrollDown />
    </div>
  );
};

export default PlaceReview;
