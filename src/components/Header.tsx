import classNames from "classnames";
import { ReactElement, useState } from "react";
import { HeaderPropType } from "../types";
import styles from "./Header.module.scss";

const Header: React.FC<HeaderPropType> = ({
  title,
  classes,
  animationStartAt = -1,
  animationDirection = "right",
}): ReactElement => {
  return (
    <h1
      className={classNames(
        styles.title,
        classes?.map((item: string): string => styles[item])
      )}
      style={{
        transform:
          animationStartAt === -1
            ? "none"
            : `translateX(${
                animationDirection === "right"
                  ? -200 + animationStartAt * 2
                  : 200 - animationStartAt * 2
              }px)`,
      }}
    >
      {typeof title === "string"
        ? title
        : title.map((title: string, index: number) => (
            <span key={index} className={styles[`break${index}`]}>
              {title}
              &nbsp;
            </span>
          ))}
    </h1>
  );
};

export default Header;
