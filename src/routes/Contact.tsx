import classNames from "classnames";
import { useCallback, useState } from "react";
import Button from "../components/Button";
import Nav from "../components/Nav";
import styles from "./Contact.module.scss";
const Contact = () => {
  const [copyAlert, setCopyAlert] = useState<string>("");
  const onCopyClick = useCallback(() => {
    navigator.clipboard
      .writeText("drrobot409@gmail.com")
      .then(() => {
        setCopyAlert("복사됨");
      })
      .catch((error) => {
        console.log(error);
        setCopyAlert("복사 실패");
      });
  }, []);
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.content}>
        <h1 className={styles.title}>Contact</h1>
        <section className={styles.section}>
          <div className={styles["header-mail-wrapper"]}>
            <h2 className={classNames(styles.header, styles["header-mail"])}>
              Mail
            </h2>
            <span className={styles["alert-copy"]}>{copyAlert}</span>
          </div>
          <Button
            text="drrobot409@gmail.com"
            onClick={onCopyClick}
            classes={["Button__copy"]}
          />
          <a
            href="mailto:drrobot409@gmail.com?body=-&nbsp;Send from rarebeef.github.io"
            className={styles.link}
          >
            메일 작성하기
          </a>
        </section>
        <section className={styles.section}>
          <h2 className={styles.header}>Github</h2>
          <a
            href="https://github.com/RAREBEEF"
            target="_blank"
            rel="noreferrer"
            className={styles.link}
          >
            https://github.com/RAREBEEF
          </a>
        </section>
        <section className={styles.section}>
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
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()}. RAREBEEF All Rights Reserved.
      </footer>
    </div>
  );
};

export default Contact;
