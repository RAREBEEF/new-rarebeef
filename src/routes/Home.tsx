import React, { useEffect, useRef } from "react";
import ReactNative from "../sections/ReactNative";
import Front from "../sections/Front";
import styles from "./Home.module.scss";
import classNames from "classnames";
import { HomePropType } from "../types";
import Clock from "../sections/Clock";
import MemoryTest from "../sections/MemoryTest";
import Section from "../components/Section";
import placeReview from "../sections/placeReview";
import metaBeef from "../sections/metaBeef";
import simpleMemo from "../sections/simpleMemo";
import RareBeef from "../sections/RareBeef";
import useTitle from "../hooks/useTitle";

const Home: React.FC<HomePropType> = () => {
  const HomeRef = useRef<any>(null);
  const setTitle = useTitle();

  useEffect(() => {
    setTitle("RAREBEEF's Portfolio");
  }, [setTitle]);

  return (
    <div ref={HomeRef} className={classNames(styles.container)}>
      <Front />
      <div className={styles.contour} />
      <RareBeef />
      <Section data={placeReview} />
      <ReactNative />
      <Section data={metaBeef} />
      <MemoryTest />
      <Section data={simpleMemo} />
      <Clock />
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()}. RAREBEEF All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
