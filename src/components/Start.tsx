import { useDispatch } from "react-redux";
import { setAnimationStart } from "../redux/modules/setAnimation";
import styles from "./Start.module.scss";

const Start = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <span
        className={styles.start}
        onClick={() => {
          dispatch(setAnimationStart());
        }}
      >
        Start
      </span>
    </div>
  );
};

export default Start;
