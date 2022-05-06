import React, { useCallback, useEffect, useRef, useState } from "react";
import ThreeBeef from "../homeSections/ThreeBeef";
import Front from "../homeSections/Front";
import styles from "./Home.module.scss";
import PlaceReview from "../homeSections/PlaceReview";
import MetaBeef from "../homeSections/MetaBeef";
import classNames from "classnames";
import calcPageScroll from "../tools/calcPageScroll";
import Toolbar from "../components/Toolbar";
import Nav from "../components/Nav";

const Home = () => {
  const HomeRef = useRef<any>(null);
  const [clientHeight, setClientHeight] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [scrollToThreeBeefProgress, setScrollToThreeBeefProgress] =
    useState<number>(0);
  const [scrollMod, setScrollMod] = useState<boolean>(true);

  const update = useCallback(() => {
    setClientHeight(HomeRef.current.clientHeight);
    setScrollHeight(HomeRef.current.scrollHeight);
  }, []);

  useEffect(() => {
    if (!!HomeRef.current) {
      setClientHeight(HomeRef.current.clientHeight);
    }

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const onScroll = useCallback(
    (e: any) => {
      // 전체 스크롤 진행 정도
      setScrollProgress(
        (HomeRef.current.scrollTop / (scrollHeight - clientHeight)) * 100
      );

      // 3d페이지까지 스크롤 진행 정도
      setScrollToThreeBeefProgress(
        (HomeRef.current.scrollTop / clientHeight) * 100
      );
    },
    [clientHeight, scrollHeight]
  );

  return (
    <div
      ref={HomeRef}
      className={classNames(styles.container)}
      onScroll={onScroll}
      onLoad={update}
    >
      <Toolbar HomeRef={HomeRef} setScrollMod={setScrollMod} />
      {/* Empty space for scroll */}
      <div className={styles.empty}></div>
      <Nav />
      <Front />
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

export default Home;
