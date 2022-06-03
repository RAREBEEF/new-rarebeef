import React, { useEffect, useRef, useState } from "react";
import { TutorialPropType } from "../types";
import Button from "./Button";
import styles from "./Tutorial.module.scss";
import tutorial1 from "../videos/tutorial-1.mp4";
import tutorial2 from "../videos/tutorial-2.mp4";
import tutorial3 from "../videos/tutorial-3.mp4";
import tutorial4 from "../videos/tutorial-4.mp4";

const Tutorial: React.FC<TutorialPropType> = ({ setTutorialActive }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const videoRef = useRef<any>(null);
  const checkRef = useRef<any>(null);

  const tutorials = [
    {
      video: tutorial1,
      text: "아래로 스크롤하여 포트폴리오를 확인해보세요.\n(PC 환경에 최적화 되어있습니다.)",
    },
    { video: tutorial2, text: "메뉴를 통해 다른 페이지로 이동해보세요." },
    {
      video: tutorial3,
      text: "원하는 크기로 메뉴를 조절할 수 있습니다. (PC 버전)",
    },
    {
      video: tutorial4,
      text: "튜토리얼은 메뉴에서 다시 확인하실 수 있습니다.",
    },
  ];

  const onPrevClick = () => {
    setCurrentPage((prev) => prev - 1);
    videoRef.current.load();
  };

  const onNextClick = () => {
    setCurrentPage((prev) => prev + 1);
    videoRef.current.load();
  };

  const onDoneClick = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!!checkRef.current.checked) {
      localStorage.setItem("rarebeef_disableTutorial", "true");
    } else {
      localStorage.setItem("rarebeef_disableTutorial", "false");
    }
    setTutorialActive(false);
  };

  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles["header"]}>
          Tutorial&nbsp;
          <span className={styles.page}>
            ({currentPage} / {tutorials.length})
          </span>
        </h1>

        <section className={styles.content}>
          <video
            ref={videoRef}
            className={styles["tutorial--video"]}
            autoPlay
            loop
            muted
          >
            <source
              src={tutorials[currentPage - 1].video}
              type="video/mp4"
            ></source>
          </video>
          <p className={styles["tutorial--text"]}>
            {tutorials[currentPage - 1].text}
          </p>
        </section>

        <section className={styles["btn-wrapper"]}>
          <div className={styles["pagination"]}>
            {currentPage !== 1 && (
              <Button
                text="< Prev"
                onClick={onPrevClick}
                classes={["Tutorial"]}
              />
            )}
            {currentPage !== tutorials.length && (
              <Button
                text="Next >"
                onClick={onNextClick}
                classes={["Tutorial"]}
              />
            )}
          </div>
          {currentPage === tutorials.length && (
            <form className={styles.done} onSubmit={onDoneClick}>
              <input id="disable-tuto" type="checkbox" ref={checkRef} />
              <label htmlFor="disable-tuto">다시 보지 않기</label>
              <Button text="Done!" classes={["Tutorial"]} />
            </form>
          )}
        </section>
      </div>
    </div>
  );
};

export default Tutorial;
