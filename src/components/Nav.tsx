import { ReactElement, useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavPropType } from "../types";
import styles from "./Nav.module.scss";
import menuIcon from "../images/circle-bars.svg";
import classNames from "classnames";

// window 대신 container에 이벤트 등록하기

const Nav: React.FC<NavPropType> = ({}): ReactElement => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [resizing, setResizing] = useState<boolean>(false);
  const [size, setSize] = useState<number>(50);
  const [clientWidth, setClientWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const update = () => {
      setClientWidth(window.innerWidth);
    };

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  const onClick = useCallback(() => {
    setShowMenu((prev) => !prev);
  }, []);

  const dragCb = useCallback(
    (e: any) => {
      e.preventDefault();
      setSize((prev) =>
        prev - (e.movementX / clientWidth) * 50 < 0
          ? 0
          : prev - (e.movementX / clientWidth) * 50 > 100
          ? 100
          : prev - (e.movementX / clientWidth) * 50
      );
    },
    [clientWidth]
  );

  const onMouseUpCb = useCallback(() => {
    setResizing(false);
    window.removeEventListener("mousemove", dragCb);
    // window.removeEventListener("mouseup", onMouseUpCb);
  }, [dragCb]);

  const onResizeStart = useCallback(
    (e: any) => {
      e.preventDefault();
      setResizing(true);
      window.addEventListener("mousemove", dragCb);
      window.addEventListener("mouseup", onMouseUpCb, { once: true });
    },
    [dragCb, onMouseUpCb]
  );

  return (
    <div className={styles.container}>
      <img
        className={classNames(
          styles["menu-icon"],
          showMenu && styles["show-menu"]
        )}
        src={menuIcon}
        alt="menu"
        onClick={onClick}
      />
      <ul className={classNames(styles.menu, showMenu && styles["show-menu"])}>
        <div className={styles["menu__left-side"]} onClick={onClick} />
        <div className={styles["menu__resizer"]} onMouseDown={onResizeStart} />
        <div
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
                ? classNames(styles.active, styles.item)
                : classNames(styles.deactive, styles.item)
            }
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }: any): string =>
              isActive
                ? classNames(styles.active, styles.item)
                : classNames(styles.deactive, styles.item)
            }
          >
            <li>About me</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }: any): string =>
              isActive
                ? classNames(styles.active, styles.item)
                : classNames(styles.deactive, styles.item)
            }
          >
            <li>Contact</li>
          </NavLink>
          <footer className={classNames(styles.footer, styles.item)}>
            &copy; {new Date().getFullYear()}. RAREBEEF All Rights Reserved.
          </footer>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
