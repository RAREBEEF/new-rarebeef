import React, { useState } from "react";
import styles from "./CreateGuestBook.module.scss";
import * as FB from "../fb";
import Button from "./Button";
import classNames from "classnames";

const CreateGuestBook = () => {
  const [content, setContent] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setContent(e.target.value);
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const onPwChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPw(e.target.value);
  };

  const onUpload = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (content === "" || name === "" || pw === "") {
      return;
    }

    try {
      await FB.addDoc(FB.collection(FB.db, "GuestBook"), {
        name,
        pw,
        content,
        createdAt: new Date().getTime(),
      });

      setContent("");
      setName("");
      setPw("");
    } catch (error) {
      console.error(error);
      window.alert(error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles["form"]} onSubmit={onUpload}>
        <div className={styles["top-wrapper"]}>
          <input
            className={styles["input--name"]}
            type="text"
            placeholder="이름 (1~10 글자)"
            value={name}
            onChange={onNameChange}
            autoComplete="username"
            minLength={1}
            maxLength={10}
          />
          <input
            className={styles["input--pw"]}
            type="password"
            placeholder="비밀번호 (6~30 글자)"
            value={pw}
            onChange={onPwChange}
            autoComplete="current-password"
            minLength={6}
            maxLength={30}
          />
          <div
            className={classNames(
              styles.counter,
              content.length > 50 && styles.over
            )}
          >
            {content.length} / 50
          </div>
        </div>
        <textarea
          className={styles["input--content"]}
          value={content}
          onChange={onTextChange}
          placeholder="내용 (1~50 글자)"
          minLength={1}
          maxLength={50}
        />
        <Button text="등록" classes={["CreateGuestBook"]} />
      </form>
    </div>
  );
};

export default CreateGuestBook;
