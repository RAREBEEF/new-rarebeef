import { ReactElement } from "react";
import styles from "./PlaceReview.module.scss";
import Header from "../components/Header";
import img from "../images/place-review.png";
import { PlaceReviewPropType } from "../types";

const PlaceReview: React.FC<PlaceReviewPropType> = ({}): ReactElement => {
  return (
    <section className={styles.container}>
      {/* <div className={styles["sticky-wrapper"]}> */}
      <Header
        title={["Place", "Review"]}
        subTitle={["with", "Kakao Map"]}
        classes={["PlaceReview"]}
      />
      {/* </div> */}
      <img className={styles["img--main"]} src={img} alt="Place Review" />
      <div className={styles.content}></div>
    </section>
  );
};

export default PlaceReview;
