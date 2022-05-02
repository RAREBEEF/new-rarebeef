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

const App = (): ReactElement => {
  const AppRef = useRef<any>(null);
  const [clientHeight, setClientHeight] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [scrollToSecondProgress, setScrollToSecondProgress] =
    useState<number>(0);

  useEffect(() => {
    const resizeCallback = () => {
      setClientHeight(AppRef.current.clientHeight);
    };

    if (!!AppRef.current) {
      setClientHeight(AppRef.current.clientHeight);
    }

    window.addEventListener("resize", resizeCallback);

    return () => {
      window.removeEventListener("resize", resizeCallback);
    };
  }, []);

  const onScroll = useCallback(
    (e: any) => {
      e.stopPropagation();
      // 전체 스크롤 진행 정도
      setScrollProgress(
        (AppRef.current.scrollTop /
          (AppRef.current.scrollHeight - clientHeight)) *
          100
      );
      // 3d페이지까지 스크롤 진행 정도
      setScrollToSecondProgress(
        (AppRef.current.scrollTop / clientHeight) * 100
      );
    },
    [clientHeight]
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
    >
      <Background />
      {/* Empty space for scroll */}
      <div
        style={{
          height: "100vh",
          scrollSnapAlign: "center",
          zIndex: 999,
          position: "relative",
          pointerEvents: "none",
        }}
      ></div>
      {!(scrollToSecondProgress > 100) && <Beef />}
      <ThreeBeef scrollProgress={scrollToSecondProgress} />
      <PlaceReview />
      <MetaBeef />
    </div>
  );
};

export default App;
