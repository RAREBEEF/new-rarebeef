import { ReactElement, useEffect, useState } from "react";
import styles from "./PlaceReview.module.scss";
import Header from "../components/Header";
import img from "../images/place-review.png";
import ScrollDown from "../components/ScrollDown";
import { PlaceReviewPropType } from "../types";

const PlaceReview: React.FC<PlaceReviewPropType> = ({}): ReactElement => {
  return (
    <section className={styles.container}>
      <Header title={["Place", "Review"]} classes={["PlaceReview"]} />
      <div className={styles.content}>
        <img className={styles.img} src={img} alt="Place Review" />
      </div>
      {/* <ScrollDown /> */}
    </section>
  );
};

export default PlaceReview;
