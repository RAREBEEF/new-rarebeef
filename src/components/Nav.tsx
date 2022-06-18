import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavPropType } from "../types";
import styles from "./Nav.module.scss";
import menuIcon from "../images/icons/circle-bars.svg";
import closeIcon from "../images/icons/xmark-solid.svg";
import classNames from "classnames";
import dotsIcon from "../images/icons/ellipsis-vertical-solid.svg";

const Nav: React.FC<NavPropType> = (): ReactElement => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [resizing, setResizing] = useState<boolean>(false);
  const [size, setSize] = useState<number>(50);
  const [clientWidth, setClientWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const windowResizeListner = (): void => {
      setClientWidth(window.innerWidth);
    };

    window.addEventListener("resize", windowResizeListner);

    return (): void => {
      window.removeEventListener("resize", windowResizeListner);
    };
  }, []);

  const onMenuClick = (): void => {
    setShowMenu((prev) => !prev);
  };

  const onItemClick = (): void => {
    window.scrollTo({ top: 0 });
  };

  const windowMouseMoveListner = useCallback(
    (e: any): void => {
      e.preventDefault();

      setSize((prev) =>
        prev - (e.movementX / clientWidth) * 100 < 0
          ? 0
          : prev - (e.movementX / clientWidth) * 100 > 100
          ? 100
          : prev - (e.movementX / clientWidth) * 100
      );
    },
    [clientWidth]
  );

  const windowMouseUpListner = useCallback((): void => {
    setResizing(false);
    window.removeEventListener("mousemove", windowMouseMoveListner);
  }, [windowMouseMoveListner]);

  const onResizeClickStart = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();

    setResizing(true);
    window.addEventListener("mousemove", windowMouseMoveListner);
    window.addEventListener("mouseup", windowMouseUpListner, { once: true });
  };

  return (
    <nav
      className={classNames(styles.container, showMenu && styles["show-menu"])}
    >
      <img
        className={styles["icon--menu"]}
        src={menuIcon}
        alt="menu"
        onClick={onMenuClick}
      />
      <img
        className={styles["icon--menu-close"]}
        src={closeIcon}
        alt="close menu"
        onClick={onMenuClick}
      />
      <div className={styles["menu"]}>
        <div className={styles["menu__left-side"]} onClick={onMenuClick} />
        <div
          className={styles["menu__resizer"]}
          onMouseDown={onResizeClickStart}
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
          <NavLink
            to="/"
            className={({ isActive }: any): string =>
              isActive
                ? classNames(styles.active, styles.item, styles.flip)
                : classNames(styles.deactive, styles.item, styles.flip)
            }
            onClick={onItemClick}
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
            onClick={onItemClick}
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
            onClick={onItemClick}
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
