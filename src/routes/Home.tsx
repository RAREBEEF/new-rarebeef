import React, { useEffect, useRef } from "react";
import ThreeBeef from "../sections/ThreeBeef";
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
import browserStart from "../sections/browserStart";
import simpleMemo from "../sections/simpleMemo";

const Home: React.FC<HomePropType> = ({ setTitle }) => {
  const HomeRef = useRef<any>(null);

  useEffect(() => {
    setTitle("RAREBEEF's Portfolio");
  }, [setTitle]);

  return (
    <div ref={HomeRef} className={classNames(styles.container)}>
      <Front />
      <div className={styles.contour} />
      <Section data={placeReview} />
      <ReactNative />
      <Section data={metaBeef} />
      <MemoryTest />
      <Section data={simpleMemo} />
      <ThreeBeef />
      <Section data={browserStart} />
      <Clock />
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()}. RAREBEEF All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
