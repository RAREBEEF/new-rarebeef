import classNames from "classnames";
import { ButtonPropType } from "../types";
import styles from "./Button.module.scss";
const Button: React.FC<ButtonPropType> = ({ text, onClick, classes }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        styles.button,
        classes?.map((item: string): string => styles[item])
      )}
    >
      {text}
    </button>
  );
};

export default Button;
