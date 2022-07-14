import classNames from "classnames";
import { useState } from "react";
import Button from "../components/Button";
import GuestBookWrapper from "../components/GuestBookWrapper";
import Header from "../components/Header";
import writeIcon from "../images/icons/paper-plane-thin.svg";
// import writeIcon from "../images/icons/pen-to-square-regular.svg";
import styles from "./Contact.module.scss";
import { ContactPropType } from "../types";
import ContactHelmet from "../helmets/ContactHelmet";

const Contact: React.FC<ContactPropType> = () => {
  const [copyAlert, setCopyAlert] = useState<string>("");

  const onCopyClick = (): void => {
    navigator.clipboard
      .writeText("drrobot409@gmail.com")
      .then(() => {
        setCopyAlert("복사됨");
      })
      .catch((error) => {
        console.error(error);
        setCopyAlert("복사 실패");
      });
  };

  return (
    <div className={styles.container}>
      <ContactHelmet />
      <Header
        title={["Contact"]}
        subTitle={["Welcome feedback"]}
        classes={["Contact"]}
      />
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles["header-mail-wrapper"]}>
            <h4 className={classNames(styles.header, styles["header-mail"])}>
              Mail
            </h4>
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
          <h4 className={styles.header}>Github</h4>
          <div className={styles["btn-group"]}>
            <Button
              href="https://github.com/RAREBEEF"
              text="https://github.com/RAREBEEF"
            />
          </div>
        </section>
        <section className={styles.section}>
          <h4 className={styles.header}>Blog</h4>
          <div className={styles["btn-group"]}>
            <Button
              href="https://velog.io/@drrobot409"
              text="https://velog.io/@drrobot409"
            />
          </div>
        </section>
        <section className={styles.section}>
          <h4 className={styles.header}>Guest book</h4>
          <GuestBookWrapper />
        </section>
      </div>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()}. RAREBEEF All Rights Reserved.
      </footer>
    </div>
  );
};

export default Contact;
