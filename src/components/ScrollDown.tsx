import styles from "./ScrollDown.module.scss";
import icon from "../images/angles-down-solid.svg";
import { ScrollDownPropType } from "../types";
import classNames from "classnames";

const ScrollDown: React.FC<ScrollDownPropType> = ({ scrollMod }) => {
  return (
    <div
      className={classNames(
        styles.container,
        scrollMod !== undefined && !scrollMod && styles.disappear
      )}
    >
      <img className={styles["icon-down"]} src={icon} alt="Scroll down" />
    </div>
  );
};

export default ScrollDown;
