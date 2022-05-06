import { ReactElement, useCallback, useEffect, useState } from "react";
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
  ProfileRef,
}): ReactElement => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [clientHeight, setClientHeight] = useState<number>(0);

  const toTop = useCallback(() => {
    if (!!setScrollMod) {
      setScrollMod(true);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [setScrollMod]);

  const resizeCb = useCallback(() => {
    setClientHeight(window.innerHeight);
  }, []);

  const scrollCb = useCallback(() => {
    setScrollTop(window.scrollY);
  }, []);

  useEffect(() => {
    const currentHome = HomeRef?.current;
    const currentProfile = ProfileRef?.current;

    scrollCb();
    resizeCb();

    if (currentHome) {
      currentHome.addEventListener("scroll", scrollCb);
    } else if (currentProfile) {
      currentProfile.addEventListener("scroll", scrollCb);
    }

    window.addEventListener("resize", resizeCb);

    return () => {
      window.removeEventListener("resize", resizeCb);
      currentHome?.removeEventListener("scroll", scrollCb);
      currentProfile?.removeEventListener("scroll", scrollCb);
    };
  }, [HomeRef, ProfileRef, resizeCb, scrollCb]);

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
