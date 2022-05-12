import classNames from "classnames";
import { ReactElement } from "react";
import { HeaderPropType } from "../types";
import styles from "./Header.module.scss";

const Header: React.FC<HeaderPropType> = ({
  title,
  subTitle,
  classes,
}): ReactElement => {
  return (
    <div
      className={classNames(
        styles.header,
        classes?.map((item: string): string => styles[item])
      )}
    >
      <h1 className={styles["title"]}>
        {typeof title === "string"
          ? title
          : title.map((title: string, index: number) => (
              <span
                key={index}
                className={classNames(
                  styles[`title__break${index}`],
                  styles["title__break"]
                )}
              >
                {title}
                &nbsp;
              </span>
            ))}
      </h1>
      {subTitle && (
        <h2 className={styles["sub-title"]}>
          {typeof subTitle === "string"
            ? subTitle
            : subTitle.map((title: string, index: number) => (
                <span
                  key={index}
                  className={classNames(
                    styles[`sub-title__break${index}`],
                    styles["sub-title__break"]
                  )}
                >
                  {title}
                  &nbsp;
                </span>
              ))}
        </h2>
      )}
    </div>
  );
};

export default Header;
