import classNames from "classnames";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import GuestBookSection from "../components/GuestBookSection";
import Header from "../components/Header";
import writeIcon from "../images/icons/pen-to-square-regular.svg";
import styles from "./Contact.module.scss";
import { ContactPropType } from "../types";

const Contact: React.FC<ContactPropType> = ({ setTitle }) => {
  const [copyAlert, setCopyAlert] = useState<string>("");

  useEffect(() => {
    setTitle("Contact RAREBEEF");
  }, [setTitle]);

  const onCopyClick = (): void => {
    navigator.clipboard
      .writeText("drrobot409@gmail.com")
      .then(() => {
        setCopyAlert("복사됨");
      })
      .catch((error) => {
        console.log(error);
        setCopyAlert("복사 실패");
      });
  };

  return (
    <div className={styles.container}>
      <Header
        title={["Contact"]}
        subTitle={["Welcome feedback"]}
        classes={["Contact"]}
      />
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles["header-mail-wrapper"]}>
            <h2 className={classNames(styles.header, styles["header-mail"])}>
              Mail
            </h2>
            <span className={styles["alert-copy"]}>{copyAlert}</span>
          </div>
          <div className={styles["btn-group"]}>
            <Button text="drrobot409@gmail.com" onClick={onCopyClick} />
            <Button
              href="mailto:drrobot409@gmail.com?body=-&nbsp;Send from rarebeef's portfolio."
              icon={writeIcon}
              classes={["Contact__send-mail"]}
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
        <section className={styles.section}>
          <h2 className={styles.header}>Guest book</h2>
          <GuestBookSection />
        </section>
      </div>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()}. RAREBEEF All Rights Reserved.
      </footer>
    </div>
  );
};

export default Contact;
