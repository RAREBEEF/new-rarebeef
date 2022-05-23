import React, { useCallback, useEffect, useState } from "react";
import styles from "./CreateAndGetGuestBook.module.scss";
import * as FB from "../fb";
import { GuestBookType } from "../types";
import GuestBook from "./GuestBook";
import Button from "./Button";

const CreateAndGetGuestBook = () => {
  const [content, setContent] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const [guestBook, setGuestBook] = useState<Array<GuestBookType>>([]);

  const onTextChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
    },
    []
  );

  const onNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const onPwChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  }, []);

  const onUpload = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (content === "" || name === "" || pw === "") {
        return;
      }

      console.log(content, name, pw);

      try {
        await FB.addDoc(FB.collection(FB.db, "GuestBook"), {
          name,
          pw,
          content,
          createdAt: new Date().getTime(),
        });
      } catch (error) {
        console.error(error);
      }

      setContent("");
      setName("");
      setPw("");
    },
    [content, name, pw]
  );

  useEffect(() => {
    let unsub: Function;

    const getGuestBook = () => {
      const q = FB.query(
        FB.collection(FB.db, "GuestBook"),
        FB.orderBy("createdAt", "desc")
      );

      unsub = FB.onSnapshot(q, (querySnapshot) => {
        let guestBookArr: any = [];
        querySnapshot.forEach((doc) => {
          guestBookArr.push({ ...doc.data(), id: doc.id });
        });
        setGuestBook(guestBookArr);
      });
    };

    getGuestBook();

    return () => {
      unsub();
    };
  }, []);

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
        </div>
        <div className={styles.counter}>{content.length} / 50</div>
        <div className={styles["bottom-wrapper"]}>
          <textarea
            className={styles["input--content"]}
            value={content}
            onChange={onTextChange}
            placeholder="내용 (1~50 글자)"
            minLength={1}
            maxLength={50}
          />
          <Button text="등록" classes={["CreateAndGetGuestBook"]} />
        </div>
      </form>
      <ul className={styles["list"]}>
        {guestBook.map((data) => (
          <GuestBook data={data} key={data.id} />
        ))}
      </ul>
    </div>
  );
};

export default CreateAndGetGuestBook;
