import { useDispatch } from "react-redux";
import styles from "./Start.module.scss";

const Start = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <span className={styles.start}>Click</span>
    </div>
  );
};

export default Start;
