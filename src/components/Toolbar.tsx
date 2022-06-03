import { ReactElement, useCallback, useEffect, useState } from "react";
import styles from "./Toolbar.module.scss";
import upIcon from "../images/icons/circle-chevron-up-solid.svg";
import velogIcon from "../images/icons/velog.svg";
import githupIcon from "../images/icons/github-brands.svg";
import mailIcon from "../images/icons/circle-envelope-regular.svg";
import { ToolbarPropType } from "../types";
import classNames from "classnames";

const Toolbar: React.FC<ToolbarPropType> = ({}): ReactElement => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [clientHeight, setClientHeight] = useState<number>(0);

  const toTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    return;
  };

  const resizeCb = useCallback((): void => {
    setClientHeight(window.innerHeight);

    return;
  }, []);

  const scrollCb = useCallback((): void => {
    setScrollTop(window.scrollY);

    return;
  }, []);

  useEffect(() => {
    scrollCb();
    resizeCb();
    window.addEventListener("scroll", scrollCb);
    window.addEventListener("resize", resizeCb);

    return (): void => {
      window.removeEventListener("scroll", scrollCb);
      window.removeEventListener("resize", resizeCb);

      return;
    };
  }, [resizeCb, scrollCb]);

  return (
    <div className={classNames(styles.container)}>
      <a href="https://velog.io/@drrobot409" target={"_blank"} rel="noreferrer">
        <img
          className={classNames(styles["icon--velog"], styles.icon)}
          src={velogIcon}
          alt="Velog"
        />
      </a>
      <a href="https://github.com/RAREBEEF" target={"_blank"} rel="noreferrer">
        <img
          className={classNames(styles["icon--github"], styles.icon)}
          src={githupIcon}
          alt="Github"
        />
      </a>
      <a href="mailto:drrobot409@gmail.com?body=-&nbsp;Send from rarebeef.github.io">
        <img
          className={classNames(styles["icon--mail"], styles.icon)}
          src={mailIcon}
          alt="Send mail"
        />
      </a>
      <img
        className={classNames(
          styles["icon--to-top"],
          styles.icon,
          scrollTop > clientHeight / 2 && styles.show
        )}
        src={upIcon}
        alt="To top"
        onClick={toTop}
      />
    </div>
  );
};

export default Toolbar;
