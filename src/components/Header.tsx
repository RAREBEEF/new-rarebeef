import classNames from "classnames";
import { ReactElement } from "react";
import { HeaderPropType } from "../types";
import styles from "./Header.module.scss";

const Header: React.FC<HeaderPropType> = ({ title, classes }): ReactElement => {
  return (
    <h1
      className={classNames(
        styles.title,
        classes?.map((item: string): string => styles[item])
      )}
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
