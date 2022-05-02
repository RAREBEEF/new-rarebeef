import styles from "./ScrollDown.module.scss";
import icon from "../images/angles-down-solid.svg";
import { ScrollDownPropType } from "../types";
import classNames from "classnames";

const ScrollDown: React.FC<ScrollDownPropType> = ({ draggable }) => {
  return (
    <div
      className={classNames(styles.container, draggable && styles.disappear)}
    >
      <img className={styles.icon} src={icon} alt="Scroll down" />
    </div>
  );
};

export default ScrollDown;
