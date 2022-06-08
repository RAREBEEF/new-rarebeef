import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles["text--loading"]}>Now loading...</div>
    </div>
  );
};

export default Loading;
