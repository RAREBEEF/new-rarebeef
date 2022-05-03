import Nav from "../components/Nav";
import styles from "./Contact.module.scss";
const Contact = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <section className={styles.content}>
        <h2 className={styles.header}>Mail</h2>
        <a href="mailto:drrobot409@gmail.com" className={styles.link}>
          메일 작성하기
        </a>
        <h2 className={styles.header}>Github</h2>
        <a
          href="https://github.com/RAREBEEF"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          https://github.com/RAREBEEF
        </a>
        <h2 className={styles.header}>Blog</h2>
        <a
          href="https://velog.io/@drrobot409"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          https://velog.io/@drrobot409
        </a>
      </section>
    </div>
  );
};

export default Contact;
