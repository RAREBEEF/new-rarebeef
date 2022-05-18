import React, { useCallback, useRef, useState } from "react";
import { TutorialPropType } from "../types";
import Button from "./Button";
import styles from "./Tutorial.module.scss";
import tutorial1 from "../videos/tutorial-1.mp4";
import tutorial2 from "../videos/tutorial-2.mp4";
import tutorial3 from "../videos/tutorial-3.mp4";

const Tutorial: React.FC<TutorialPropType> = ({ setTutorialActive }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const checkRef = useRef<any>(null);
  const videoRef = useRef<any>(null);

  const onPrevClick = useCallback(() => {
    setCurrentPage((prev) => prev - 1);
    videoRef.current.load();
  }, []);

  const onNextClick = useCallback(() => {
    setCurrentPage((prev) => prev + 1);
    videoRef.current.load();
  }, []);

  const onDoneClick = useCallback(
    (e: React.MouseEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!!checkRef.current.checked) {
        console.log("checked");
        localStorage.setItem("rarebeef_disableTutorial", "true");
      } else if (!checkRef.current.checked) {
        console.log("unchecked");
        localStorage.setItem("rarebeef_disableTutorial", "false");
      }
      setTutorialActive(false);
    },
    [setTutorialActive]
  );

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles["header"]}>
          Tutorial&nbsp;<span className={styles.page}>({currentPage} / 3)</span>
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
              src={
                currentPage === 1
                  ? tutorial1
                  : currentPage === 2
                  ? tutorial2
                  : tutorial3
              }
              type="video/mp4"
            ></source>
          </video>
          <p className={styles["tutorial--text"]}>
            {currentPage === 1 &&
              "아래로 스크롤하여 포트폴리오를 확인해보세요."}
            {currentPage === 2 && "메뉴를 통해 다른 페이지로 이동해보세요."}
            {currentPage === 3 && "원하는 크기로 메뉴를 조절할 수 있습니다."}
          </p>
        </section>

        <section className={styles["btn-wrapper"]}>
          <div className={styles["pagination"]}>
            {currentPage !== 1 && (
              <Button text="< Prev" onClick={onPrevClick} />
            )}
            {currentPage !== 3 && (
              <Button text="Next >" onClick={onNextClick} />
            )}
          </div>
          {currentPage === 3 && (
            <form className={styles.done} onSubmit={onDoneClick}>
              <input id="disable-tuto" type="checkbox" ref={checkRef} />
              <label htmlFor="disable-tuto">다시 보지 않기</label>
              <Button text="Done!" />
            </form>
          )}
        </section>
      </div>
    </div>
  );
};

export default Tutorial;
