import { ReactElement } from "react";
import styles from "./PlaceReview.module.scss";
import Header from "../components/Header";
import img from "../images/place-review.png";
import ScrollDown from "../components//ScrollDown";

const PlaceReview = (): ReactElement => {
  return (
    <div className={styles.container}>
      <Header title={["Place", "Review"]} classes={["PlaceReview"]} />
      <div className={styles.content}>
        <img className={styles.img} src={img} alt="Place Review" />
      </div>
      <ScrollDown />
    </div>
  );
};

export default PlaceReview;
