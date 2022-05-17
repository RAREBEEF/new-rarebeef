import classNames from "classnames";
import { useCallback, useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import copyIcon from "../images/copy-regular.svg";
import writeIcon from "../images/pen-to-square-regular.svg";
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
      <Header
        title={["Contact"]}
        subTitle={["Always welcome"]}
        classes={["Contact"]}
      />
      <div className={styles.content}>
        {/* <h1 className={styles.title}>Contact</h1> */}
        <section className={styles.section}>
          <div className={styles["header-mail-wrapper"]}>
            <h2 className={classNames(styles.header, styles["header-mail"])}>
              Mail
            </h2>
            <span className={styles["alert-copy"]}>{copyAlert}</span>
          </div>
          <span className={styles.text}>drrobot409@gmail.com</span>
          <div className={styles["btn-group"]}>
            <Button
              icon={copyIcon}
              onClick={onCopyClick}
              classes={["Button__copy"]}
            />
            <Button
              href="mailto:drrobot409@gmail.com?body=-&nbsp;Send from rarebeef.github.io"
              icon={writeIcon}
            />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.header}>Github</h2>
          <div className={styles["btn-group"]}>
            <Button
              href="https://github.com/RAREBEEF"
              text="https://github.com/RAREBEEF"
            />
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.header}>Blog</h2>
          <div className={styles["btn-group"]}>
            <Button
              href="https://velog.io/@drrobot409"
              text="https://velog.io/@drrobot409"
            />
          </div>
        </section>
      </div>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()}. RAREBEEF All Rights Reserved.
      </footer>
    </div>
  );
};

export default Contact;
