import { useDispatch } from "react-redux";
import { setLoadEnd } from "../redux/modules/setStart";
import styles from "./Start.module.scss";

const Start = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <span
        className={styles.start}
        onClick={() => {
          dispatch(setLoadEnd());
        }}
      >
        Start
      </span>
    </div>
  );
};

export default Start;
