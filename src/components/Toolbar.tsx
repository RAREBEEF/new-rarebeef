import { ReactElement, useCallback } from "react";
import styles from "./Toolbar.module.scss";
import upIcon from "../images/circle-chevron-up-solid.svg";
import velogIcon from "../images/velog.svg";
import githupIcon from "../images/github-brands.svg";
import mailIcon from "../images/circle-envelope-regular.svg";
import { ToolbarPropType } from "../types";
import classNames from "classnames";
const Toolbar: React.FC<ToolbarPropType> = ({
  HomeRef,
  setScrollMod,
  scrollToThreeBeefProgress,
}): ReactElement => {
  const toTop = useCallback(() => {
    HomeRef.current.scrollTo({ top: 0, behavior: "smooth" });
    setScrollMod(true);
  }, [HomeRef, setScrollMod]);
  return (
    <div className={classNames(styles.container)}>
      <a href="https://velog.io/@drrobot409" target={"_blank"} rel="noreferrer">
        <img
          className={classNames(styles["velog-icon"], styles.icon)}
          src={velogIcon}
          alt="Velog"
        />
      </a>
      <a href="https://github.com/RAREBEEF" target={"_blank"} rel="noreferrer">
        <img
          className={classNames(styles["github-icon"], styles.icon)}
          src={githupIcon}
          alt="Github"
        />
      </a>
      <a href="mailto:drrobot409@gmail.com?body=-&nbsp;Send from rarebeef.github.io">
        <img
          className={classNames(styles["mail-icon"], styles.icon)}
          src={mailIcon}
          alt="Send mail"
        />
      </a>
      <img
        className={classNames(
          styles["toTop-icon"],
          styles.icon,
          scrollToThreeBeefProgress > 50 && styles.show
        )}
        src={upIcon}
        alt="To top"
        onClick={toTop}
      />
    </div>
  );
};

export default Toolbar;
