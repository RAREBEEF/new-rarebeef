import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ThreeBeef from "../sections/ThreeBeef";
import Beef from "../sections/Beef";
import styles from "./App.module.scss";
import PlaceReview from "../sections/PlaceReview";
import MetaBeef from "../sections/MetaBeef";
import classNames from "classnames";
import calcPageScroll from "../tools/calcPageScroll";
import Background from "./Background";
import Toolbar from "./Toolbar";

const App = (): ReactElement => {
  const AppRef = useRef<any>(null);
  const [clientHeight, setClientHeight] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [scrollToThreeBeefProgress, setScrollToThreeBeefProgress] =
    useState<number>(0);
  const [scrollMod, setScrollMod] = useState<boolean>(true);

  const update = useCallback(() => {
    setClientHeight(AppRef.current.clientHeight);
    setScrollHeight(AppRef.current.scrollHeight);
  }, []);

  useEffect(() => {
    if (!!AppRef.current) {
      setClientHeight(AppRef.current.clientHeight);
    }

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const onScroll = useCallback(
    (e: any) => {
      e.stopPropagation();
      // 전체 스크롤 진행 정도
      setScrollProgress(
        (AppRef.current.scrollTop / (scrollHeight - clientHeight)) * 100
      );

      // 3d페이지까지 스크롤 진행 정도
      setScrollToThreeBeefProgress(
        (AppRef.current.scrollTop / clientHeight) * 100
      );
    },
    [clientHeight, scrollHeight]
  );

  return (
    <div
      ref={AppRef}
      className={classNames(
        styles.container
        // AppRef.current &&
        //   scrollProgress >
        //     calcPageScroll(AppRef.current.scrollHeight, clientHeight, 3) &&
        //   styles.dark
      )}
      onScrollCapture={onScroll}
      onLoad={update}
    >
      <Toolbar
        AppRef={AppRef}
        setScrollMod={setScrollMod}
        scrollToThreeBeefProgress={scrollToThreeBeefProgress}
      />
      <Background />
      {/* Empty space for scroll */}
      <div className={styles.empty}></div>
      {!(scrollToThreeBeefProgress > 100) && <Beef />}
      <ThreeBeef
        scrollToThreeBeefProgress={scrollToThreeBeefProgress}
        scrollMod={scrollMod}
        setScrollMod={setScrollMod}
      />
      <PlaceReview
        animationStartAt={
          (scrollProgress / calcPageScroll(scrollHeight, clientHeight, 3)) * 100
        }
      />
      <MetaBeef
        animationStartAt={
          (scrollProgress / calcPageScroll(scrollHeight, clientHeight, 4)) * 100
        }
      />
    </div>
  );
};

export default App;
