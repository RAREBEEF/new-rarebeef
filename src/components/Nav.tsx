import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavPropType } from "../types";
import styles from "./Nav.module.scss";
import menuIcon from "../images/icons/circle-bars.svg";
import classNames from "classnames";
import dotsIcon from "../images/icons/ellipsis-vertical-solid.svg";

const Nav: React.FC<NavPropType> = ({ setTutorialActive }): ReactElement => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [resizing, setResizing] = useState<boolean>(false);
  const [size, setSize] = useState<number>(50);
  const [clientWidth, setClientWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const update = (): void => {
      setClientWidth(window.innerWidth);

      return;
    };

    window.addEventListener("resize", update);

    return (): void => {
      window.removeEventListener("resize", update);

      return;
    };
  }, []);

  const onMenuClick = useCallback((): void => {
    setShowMenu((prev) => !prev);

    return;
  }, []);

  const onTutoClick = useCallback((): void => {
    setTutorialActive(true);

    return;
  }, [setTutorialActive]);

  const mouseDragCb = useCallback(
    (e: any): void => {
      e.preventDefault();

      setSize((prev) =>
        prev - (e.movementX / clientWidth) * 100 < 0
          ? 0
          : prev - (e.movementX / clientWidth) * 100 > 100
          ? 100
          : prev - (e.movementX / clientWidth) * 100
      );

      return;
    },
    [clientWidth]
  );

  const onMouseUpCb = useCallback((): void => {
    setResizing(false);
    window.removeEventListener("mousemove", mouseDragCb);

    return;
  }, [mouseDragCb]);

  const onResizeClickStart = useCallback(
    (e: React.MouseEvent<HTMLDivElement>): void => {
      e.preventDefault();

      setResizing(true);
      window.addEventListener("mousemove", mouseDragCb);
      window.addEventListener("mouseup", onMouseUpCb, { once: true });

      return;
    },
    [mouseDragCb, onMouseUpCb]
  );

  //
  //
  //
  //
  //

  // let touchStart: number | null = null;

  // const touchMoveCb = useCallback(
  //   (e: any): void => {
  //     if (!touchStart) {
  //       return;
  //     }

  //     const touchMove = touchStart - e.touches[0].clientX;

  //     setSize((prev) =>
  //       prev + (touchMove / clientWidth) * 3 < 0
  //         ? 0
  //         : prev + (touchMove / clientWidth) * 3 > 100
  //         ? 100
  //         : prev + (touchMove / clientWidth) * 3
  //     );

  //     return;
  //   },
  //   [clientWidth, touchStart]
  // );

  // const onTouchEndCb = useCallback((): void => {
  //   setResizing(false);
  //   window.removeEventListener("drag", touchMoveCb);

  //   return;
  // }, [touchMoveCb]);

  // const onResizeTouchStart = useCallback(
  //   (e: React.TouchEvent<HTMLDivElement>): void => {
  //     touchStart = e.touches[0].clientX;
  //     setResizing(true);

  //     window.addEventListener("touchmove", touchMoveCb);
  //     window.addEventListener("touchend", onTouchEndCb, { once: true });

  //     return;
  //   },
  //   [onTouchEndCb, touchMoveCb]
  // );

  //
  //
  //
  //

  return (
    <div
      className={classNames(styles.container, showMenu && styles["show-menu"])}
    >
      <img
        className={styles["icon--menu"]}
        src={menuIcon}
        alt="menu"
        onClick={onMenuClick}
      />
      <div className={styles["menu"]}>
        <div className={styles["menu__left-side"]} onClick={onMenuClick} />
        <div
          className={styles["menu__resizer"]}
          onMouseDown={onResizeClickStart}
          // onTouchStart={onResizeTouchStart}
        >
          <img className={styles["icon--resize"]} src={dotsIcon} alt="resize" />
        </div>
        <ul
          className={styles["menu__right-side"]}
          style={{
            width: showMenu ? `${size}vw` : 0,
            transition: resizing ? "none" : "all 1s",
          }}
        >
          <h3 className={classNames(styles["title__menu"], styles.flip)}>
            Menu
          </h3>
          <NavLink
            to="/"
            className={({ isActive }: any): string =>
              isActive
                ? classNames(styles.active, styles.item, styles.flip)
                : classNames(styles.deactive, styles.item, styles.flip)
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }: any): string =>
              isActive
                ? classNames(styles.active, styles.item, styles.flip)
                : classNames(styles.deactive, styles.item, styles.flip)
            }
          >
            <li>About me</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }: any): string =>
              isActive
                ? classNames(styles.active, styles.item, styles.flip)
                : classNames(styles.deactive, styles.item, styles.flip)
            }
          >
            <li>Contact</li>
          </NavLink>
          <li
            className={classNames(styles.item, styles.flip)}
            onClick={onTutoClick}
          >
            Tutorial
          </li>
          <footer
            className={classNames(styles.footer, styles.item, styles.flip)}
          >
            &copy; {new Date().getFullYear()}. RAREBEEF All Rights Reserved.
          </footer>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
