import styles from "./Loading.module.scss";
import loadingIcon from "../images/icons/loading.svg";

const Loading = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles["icon--loading"]}
        src={loadingIcon}
        alt="Loading..."
      />
    </div>
  );
};

export default Loading;
